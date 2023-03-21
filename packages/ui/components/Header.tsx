import styled from 'styled-components';

import { HeaderProps } from '../../types/src/styled-components/header-props.types';

const StyledHeaderWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.5rem;
  margin: 0;
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

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Header = ({
  variant,
  title,
  description,
  imageUrl,
  userName,
}: HeaderProps) => (
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
  </StyledHeaderWrapper>
);

Header.defaultProps = {
  variant: 'default',
  title: '',
  description: '',
  imageUrl: null,
  userName: '',
};
