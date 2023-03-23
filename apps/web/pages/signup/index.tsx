import Head from 'next/head';

import { useAuth } from '../../context/AuthContext';
import Auth from '../../components/Auth';

export default function Web() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Auth variant="signup" />
    </>
  );
}
