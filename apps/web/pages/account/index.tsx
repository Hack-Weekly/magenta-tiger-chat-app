import Head from 'next/head';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import dynamic from 'next/dynamic';
import { Button, Header } from 'ui';
import PrivateRoute from '../../components/PrivateRoute';

export default function Web() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const DynamicLayout = dynamic(() => import('../../components/Layout'), {
    ssr: false,
  });

  useEffect(() => {
    // redirect to home if already logged in
    if (!user) {
      router.push('/login');
    }
  }, [user]);

  return (
    <PrivateRoute>
      <DynamicLayout>
        <Head>
          <title>Account</title>
        </Head>
        {/* Put here already styled Account page component & remove Header with Button! */}
        <Header title="Account" />
        <Button onClick={logout} text="Log out" size="small" />
      </DynamicLayout>
    </PrivateRoute>
  );
}
