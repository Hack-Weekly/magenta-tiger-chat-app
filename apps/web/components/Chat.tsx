import { useEffect, useState } from "react";
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

export default function Chat() {
  const { user, logout } = useAuth();
  const [partners, setPartners] = useState<ChatPartner[]>([]);
  const [selectedPartner, setSelectedPartner] = useState<string>("");
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
    <section>
      <div>
        <h1>Chat room</h1>
        <div>
          <p>Select a chat partner:</p>
          <ul>
            {partners.map((partner) => (
              <li key={partner.username}>
                <button
                  disabled={partner.active}
                  onClick={() => handleSelectPartner(partner.username)}
                >
                  {partner.username}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {selectedPartner && (
            <div>
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
