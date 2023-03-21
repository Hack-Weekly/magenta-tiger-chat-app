import Head from 'next/head';

import { useAuth } from '../../context/AuthContext';
import Registration from '../../components/Registration';

export default function Web() {
  const { user, logout } = useAuth();

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      {/* Put here already styled Registration page component! */}
      {!user && <Registration />}
    </>
  );
}
