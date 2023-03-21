import Head from 'next/head';

import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { Button, Header } from 'ui';
import Registration from '../../components/Registration';

export default function Web() {
  const { user, logout } = useAuth();

  const RegisterPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `;

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterPageWrapper>
        <p>Register</p>
        {!user && <Registration />}
      </RegisterPageWrapper>
    </>
  );
}
