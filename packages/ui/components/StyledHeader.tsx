import styled from 'styled-components';
import { getFirstLetter } from 'ui/utils/getFirstLetter';

import Link from 'next/link';

import { StyledHeaderProps } from '../../types/props/header-props.types';

const StyledHeaderWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const StyledTitle = styled.h2`
  color: #2c2c2c;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 36px;
  margin: 0;
`;

const StyledDescription = styled.p`
  color: #999999;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 20px;
  margin: 0;
`;

const StyledImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
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
  background-color: #dddddd;
  cursor: pointer;
  text-decoration: none;
`;

const StyledPlaceholder = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  color: #2c2c2c;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StyledHeader = ({
  variant,
  title,
  description,
  imageUrl,
  userName,
}: StyledHeaderProps) => (
  <StyledHeaderWrapper>
    <StyledInfoWrapper>
      <StyledTitle>
        {variant === 'default' || variant === 'account'
          ? title
          : `Welcome, ${userName}! 👋`}
      </StyledTitle>
      {description?.length !== 0 && (
        <StyledDescription>{description}</StyledDescription>
      )}
    </StyledInfoWrapper>
    {variant !== 'account' && (
      <Link href={`/account`}>
        <StyledImageWrapper title="My account">
          {imageUrl ? (
            <StyledImage src={imageUrl} alt="" />
          ) : (
            <StyledPlaceholder>{getFirstLetter(userName)}</StyledPlaceholder>
          )}
        </StyledImageWrapper>
      </Link>
    )}
  </StyledHeaderWrapper>
);

StyledHeader.defaultProps = {
  variant: 'default',
  title: '',
  description: '',
  imageUrl: null,
  userName: '',
};
