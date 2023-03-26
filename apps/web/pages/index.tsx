import PrivateRoute from '../components/PrivateRoute';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Chat from '../components/Chat';

export default function Web() {
  const DynamicLayout = dynamic(() => import('../components/Layout'), {
    ssr: false,
  });

  return (
    <PrivateRoute>
      <DynamicLayout>
        <Head>
          <title>Home</title>
        </Head>
        <Chat />
      </DynamicLayout>
    </PrivateRoute>
  );
}
