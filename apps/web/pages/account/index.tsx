import Head from 'next/head';
import dynamic from 'next/dynamic';
import PrivateRoute from '../../components/PrivateRoute';
import Profile from '../../components/Profile';

export default function Web() {
  const DynamicLayout = dynamic(() => import('../../components/Layout'), {
    ssr: false,
  });

  return (
    <PrivateRoute>
      <DynamicLayout>
        <Head>
          <title>My Profile</title>
        </Head>
        <Profile />
      </DynamicLayout>
    </PrivateRoute>
  );
}
