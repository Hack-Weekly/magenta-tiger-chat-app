import Head from 'next/head';

import dynamic from 'next/dynamic';

import styled from 'styled-components';
import { Button, Header } from 'ui';
import { useAuth } from '../../context/AuthContext';

export default function Web() {
  const DynamicLayout = dynamic(() => import('../../components/Layout'), {
    ssr: false,
  });

  const { user, logout } = useAuth();

  return (
    <DynamicLayout>
      <Head>
        <title>Account</title>
      </Head>
      {/* Put here already styled Account page component & remove Header with Button! */}
      <Header title="Account" />
      <Button onClick={logout} text="Log out" size="small" />
    </DynamicLayout>
  );
}
