import styled from 'styled-components';

import { ChatPreviewProps } from '../../types/src/styled-components/chat-preview-props';
import { getFirstLetter } from '../utils/getFirstLetter';

const cutDescription = (text: string) => {
  // Add '...' when we have description longer than 35 char. (Only on type CHAT or EDIT)
  return text?.length > 35 ? text.slice(0, 35).trim() + '...' : text;
};

const formatTime = (timestamp: number): string => {
  // Convert timestamp to human date - HH:MM
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

const StyledChatContainer = styled.button`
  max-width: 94%;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  transition: 0.2s;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    background-color: #fafafa;
  }
  &:active {
    background-color: #f3f3f3;
  }

  @media (min-width: 650px) {
    max-width: 512px;
  }
`;

const StyledUserContainer = styled.button`
  /* Something is wrong with the parent container. TODO for later */
  max-width: 94%;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  font-size: 16px;
  border-radius: 10px;
  background-color: var(--btn-dim);
  border: none;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: var(--btn-primary-text);
  }
  &:active {
    background-color: var(--btn-dim-hover);
  }

  @media (min-width: 650px) {
    max-width: 512px;
  }
`;

const StyledUserRoomContainer = styled.div`
  /* Something is wrong with the parent container. TODO for later */
  max-width: 100%;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  font-size: 16px;
  border-radius: 10px;
  border: none;
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
  background-color: #cecece;
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

export const StyledChatListItem = ({
  variant,
  imageUrl,
  onClick,
  title,
  description,
  timestamp,
  isNotified,
}: ChatPreviewProps) => {
  return (
    <>
      {variant === 'user-list' ? (
        <StyledUserContainer onClick={onClick}>
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
          </StyledInfoWrapper>
        </StyledUserContainer>
      ) : variant === 'chat-room' ? (
        <StyledUserRoomContainer>
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
              {variant === 'chat-room' && `You're chatting with ${title}`}
            </StyledDescription>
          </StyledInfoWrapper>
        </StyledUserRoomContainer>
      ) : (
        <StyledChatContainer onClick={onClick}>
          {variant === 'edit' && (
            <StyledEditWrapper>
              {/* !DELETE chat btn component*/}
            </StyledEditWrapper>
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
              {variant === 'invite'
                ? 'You have been invited to this group'
                : description?.length !== 0
                ? cutDescription(description)
                : 'No messages yet'}
            </StyledDescription>
          </StyledInfoWrapper>
          {variant === 'invite' && (
            <StyledEditWrapper>
              {/* !ADD  DECLINE chat btn component*/}
            </StyledEditWrapper>
          )}
        </StyledChatContainer>
      )}
    </>
  );
};

StyledChatListItem.defaultProps = {
  variant: 'chat',
  onClick: undefined,
  imageUrl: null,
  title: null,
  description: null,
  timestamp: null,
  isNotified: false,
};
