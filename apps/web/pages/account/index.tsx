import Head from "next/head";

import dynamic from "next/dynamic";

import styled from "styled-components";
import { Button, Header } from "ui";
import { useAuth } from "../../context/AuthContext";

export default function Web() {
  const DynamicLayout = dynamic(() => import("../../components/Layout"), {
    ssr: false,
  });

  const { user, logout } = useAuth();

  const AccountPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `;

  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <DynamicLayout>
        <AccountPageWrapper>
          <Header title="Account" />
          <Button onClick={logout} text="Log out" size="small" />
        </AccountPageWrapper>
      </DynamicLayout>
    </>
  );
}
