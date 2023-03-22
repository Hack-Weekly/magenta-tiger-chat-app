import Head from 'next/head';
import styled from 'styled-components';
import Login from '../../components/Login';

export default function Web() {
  const LoginPageWrapper = styled.div`
    //Will be removed later
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
