import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Header, StyledChatListItem } from "ui";
import StyledContainer from "ui/components/StyledContainer";
import { useAuth } from "../context/AuthContext";
import { getSocket } from "./socket";

type Message = {
  from: string | undefined;
  to: string;
  text: string;
};

type ChatPartner = {
  username: string;
  active: boolean;
};

type SelectedPartnerProps = {
  selectedPartner: string;
};

const ChatMainWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const ActiveUsersWrapper = styled.div<SelectedPartnerProps>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: auto;
  ${({ selectedPartner }) => css`
    display: ${selectedPartner && "none"};
  `}
  @media (min-width: 800px) {
    min-width: 20rem;
    max-width: 35rem;
    ${({ selectedPartner }) => css`
      display: ${selectedPartner && "initial"};
    `}
    border-right: 1px solid #e0e0e0;
  }
`;

const ChatListWrapper = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ChatWindowWrapper = styled.div<SelectedPartnerProps>`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f3f3f3;
  ${({ selectedPartner }) => css`
    display: ${selectedPartner ? "flex" : "none"};
  `}
  @media (min-width: 800px) {
    min-width: 20rem;
    display: initial;
  }
`;
const ChatWindowPlaceholder = styled.p`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  color: #8b8b8b;
  font-weight: 300;
  font-family: "Open-Sans", sans-serif;
`;

const ChatWindow = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
`;

export default function Chat() {
  const { user, logout } = useAuth();
  const [partners, setPartners] = useState<ChatPartner[]>([
    { username: "Vlad", active: false },
    { username: "Swappnet", active: false },
    { username: "Josh", active: false },
    { username: "Dude", active: false },
    { username: "Kevin", active: false },
  ]);

  const [selectedPartner, setSelectedPartner] = useState<string>("1");
  const [messages, setMessages] = useState<string>("");

  useEffect(() => {
    const socket = getSocket();

    socket.emit("login", user?.username);

    socket.on("partners", (partners: ChatPartner[]) => {
      const allOnlineUsers = partners;

      setPartners(allOnlineUsers);
      console.log(allOnlineUsers);
    });

    socket.on("message", (message: Message) => {
      if (message.from === selectedPartner || message.to === selectedPartner) {
        setMessages((prevMessages) =>
          prevMessages.concat(`${message.from}: ${message.text}\n`)
        );
      }
    });

    return () => {
      socket.emit("logout", user?.username);
      socket.disconnect();
    };
  }, [user?.username, selectedPartner]);

  function handleSelectPartner(partner: string) {
    setSelectedPartner(partner);
    setMessages("");
    getSocket().emit("join", { from: user?.username, to: partner });
  }

  function handleSendMessage() {
    const message: Message = {
      from: user?.username,
      to: selectedPartner,
      text: messages,
    };
    getSocket().emit("message", message);
    setMessages("");
  }

  console.log(partners);

  return (
    <StyledContainer variant="flex-column">
      <ChatMainWrapper>
        <ActiveUsersWrapper selectedPartner={selectedPartner}>
          <Header
            variant="welcome"
            userName={user?.username}
            description="Select a chat partner"
          />
          <ChatListWrapper>
            {partners.map((partner) => (
              <StyledChatListItem
                variant="chat"
                key={partner.username}
                title={partner.username}
                description=""
              />
            ))}
          </ChatListWrapper>
        </ActiveUsersWrapper>
        <ChatWindowWrapper selectedPartner={selectedPartner}>
          {selectedPartner ? (
            <ChatWindow>
              <h2>Chatting with {selectedPartner}</h2>
              <ul>
                <li>
                  <textarea
                    value={messages}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setMessages(e.target.value)
                    }
                  />
                </li>
                <li>
                  <button onClick={handleSendMessage}>Send</button>
                </li>
              </ul>
            </ChatWindow>
          ) : (
            <ChatWindowPlaceholder>
              Pick a chat to start messaging
            </ChatWindowPlaceholder>
          )}
        </ChatWindowWrapper>
      </ChatMainWrapper>
    </StyledContainer>
  );
}
