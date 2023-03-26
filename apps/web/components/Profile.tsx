import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Button, Header, Input } from 'ui';
import { useState } from 'react';
import StyledContainer from 'ui/components/StyledContainer';

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 85svh;
  overflow-y: auto;

  @media screen and (min-width: 650px) {
    /* for tablets */
    display: grid;
    grid-template-columns: 100%;
    padding: 5rem;
  }

  @media screen and (min-width: 1024px) {
    /* for desktops */
    overflow-y: hidden;
    padding-left: 10rem;
    padding-right: 10rem;
  }
`;

const StyledTitle = styled.h3`
  margin: 0;
  margin-left: 0.5rem;
  margin-top: 1rem;
  font-weight: 500;
  color: grey;
`;

const StyledTopContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  margin-top: 1rem;

  @media screen and (min-width: 650px) {
    /* for tablets */
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    /* for desktops */

    display: flex;
    justify-content: space-between;
  }
`;
const StyledContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  @media screen and (min-width: 650px) {
    /* for tablets */
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }

  @media screen and (min-width: 1024px) {
    /* for desktops */
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
`;
const StyledProfilePhoto = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border: 2px solid black;
  border-radius: 50%;
`;
const StyledContainerRight = styled.div`
  display: flex;
  flex-direction: column;

  h2,
  h3 {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
  }
  h3 {
    font-weight: 200;
    font-size: 1rem;

    color: grey;
  }
`;

const StyledContainerEditData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;
const StyledWrapperLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const StyledWrapperRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const StyledLogoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  * {
    width: 100%;
  }

  @media screen and (min-width: 650px) {
    /* for tablets */
    * {
      width: 10rem;
    }
  }

  @media screen and (min-width: 1024px) {
    /* for desktops */
    align-items: center;
    justify-content: center;
  }
`;

export default function Profile() {
  const DynamicLayout = dynamic(() => import('../components/Layout'), {
    ssr: false,
  });

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'user') {
      setUserName(e.target.value);
    }
    else if (e.target.name === 'password'){
      setPassword(e.target.value);
    }
  };

  return (
    <StyledContainer variant="grid">
      <Header title="My Profile" />
      <StyledMainWrapper>
        <StyledTitle>Profile photo</StyledTitle>
        <StyledTopContainer>
          <StyledContainerLeft>
            <StyledProfilePhoto></StyledProfilePhoto>
            <Button
              onClick={undefined}
              text="Upload new picture"
              size="small"
            />
            <Button
              danger={true}
              onClick={undefined}
              text="Delete picture"
              size="small"
            />
          </StyledContainerLeft>
          <StyledContainerRight>
            <h2>Name surname</h2>
            <h3>some-email@gmail.com</h3>
          </StyledContainerRight>
        </StyledTopContainer>
        <StyledContainerEditData>
          <StyledWrapperLeft>
            <StyledTitle>Edit profile</StyledTitle>
          </StyledWrapperLeft>
          <Input
            variant="user"
            width="100%"
            required={false}
            onChange={(e) => {
              handleChange(e);
            }}
            value={userName}
          />
          <StyledWrapperRight>
            <Button onClick={undefined} text="Save changes" size="small" />
          </StyledWrapperRight>
        </StyledContainerEditData>
        <StyledContainerEditData>
          <StyledWrapperLeft>
            <StyledTitle>Change password</StyledTitle>
          </StyledWrapperLeft>
          <Input
            variant="password"
            width="100%"
            required={false}
            onChange={(e) =>               handleChange(e);
            }
            value={password}
          />
          <StyledWrapperRight>
            <Button onClick={undefined} text="Save changes" size="small" />
          </StyledWrapperRight>
        </StyledContainerEditData>
        <StyledLogoutWrapper>
          <Button onClick={() => null} text="Log out" size="small" />
        </StyledLogoutWrapper>
      </StyledMainWrapper>
    </StyledContainer>
  );
}
