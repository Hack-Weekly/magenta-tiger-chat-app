import styled from "styled-components";
// TODO(V): Why is absolute import not working
import { ListProps } from "../../types/src/props/list-props.types";

const cutDescription = (text: string) => {
  // Add '...' when we have description longer than 35 char. (Only on type CHAT or EDIT)
  return text.length > 35 ? text.slice(0, 35).trim() + "..." : text;
};

const formatTime = (timestamp: number): string => {
  // Convert timestamp to human date - HH:MM
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

const getFirstLetter = (name: string): string => {
  // When user image is set to NULL we use first letter as placeholder for image (Like in Google)
  let index = 0;
  while (index < name.length) {
    const letter = name.charAt(index);
    if (letter.match(/[a-zA-Z0-9]/)) {
      return letter.toUpperCase();
    }
    index++;
  }
  return "G";
};

const StyledList = styled.li`
  max-width: 960px; // Remove later
  font-family: "Poppins", sans-serif;
  font-style: normal;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
  padding: 0.5rem 0.5rem;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ececec18;
  }
`;

const StyledImageWrapper = styled.div`
  margin-left: 0.2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background-color: #dddddd;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 0.5rem;
`;

const StyledNotification = styled.div`
  position: absolute;
  top: 0;
  left: -0.2rem;
  background-color: #fbe51e;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: none;
`;

const StyledEditWrapper = styled.div`
  align-self: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 0.7rem;
  margin-left: 0.7rem;
  gap: 1rem;
`;

const StyledImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
`;

const StyledTitle = styled.h3`
  margin: 0;
  color: #2c2c2c;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
`;

const StyledPlaceholder = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  color: #2c2c2c;
`;

const StyledDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #999999;
`;

const StyledDate = styled.p`
  margin-left: auto;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #999999;
  margin-right: 0.5rem;
  margin-top: 0;
`;

export const List = ({
  type,
  imageUrl,
  onClick,
  title,
  description,
  timestamp,
  isNotified,
}: ListProps) => (
  <StyledList onClick={onClick}>
    {type === "edit" && (
      <StyledEditWrapper>{/* !DELETE chat btn component*/}</StyledEditWrapper>
    )}
    <StyledImageWrapper>
      {imageUrl ? (
        <StyledImage src={imageUrl} alt="" />
      ) : (
        <StyledPlaceholder>{getFirstLetter(title)}</StyledPlaceholder>
      )}
      {isNotified && <StyledNotification />}
    </StyledImageWrapper>
    <StyledInfoWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>
        {type === "invite"
          ? "You have been invited to this group"
          : description.length !== 0
          ? cutDescription(description)
          : "No messages yet"}
      </StyledDescription>
    </StyledInfoWrapper>
    {type === "invite" && (
      <StyledEditWrapper>
        {/* !ADD  DECLINE chat btn component*/}
      </StyledEditWrapper>
    )}
    <StyledDate>{formatTime(timestamp)}</StyledDate>
  </StyledList>
);

List.defaultProps = {
  type: "chat",
  onClick: undefined,
  imageUrl: null,
  title: null,
  description: null,
  timestamp: null,
  isNotified: false,
};
