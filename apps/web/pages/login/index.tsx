import Head from 'next/head';

import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { Button, Header } from 'ui';
import Login from '../../components/Login';

export default function Web() {
  const { user, logout } = useAuth();

  const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `;

  return (
    <>
      <Head>
        <title>Log in</title>
      </Head>
      <LoginPageWrapper>
        {/* Put here already styled Login page component!*/}
        <Login />
      </LoginPageWrapper>
    </>
  );
}
