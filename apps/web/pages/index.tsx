import dynamic from 'next/dynamic';
import Chat from '../components/Chat';
import Register from '../components/Registration';
import { useAuth } from '../context/AuthContext';
import { Header } from 'ui';
import Head from 'next/head';

export default function Web() {
  const { user } = useAuth();

  const DynamicLayout = dynamic(() => import('../components/Layout'), {
    ssr: false,
  });

  return (
    <DynamicLayout>
      <Head>
        <title>Home</title>
      </Head>
      <Header variant="welcome" userName={user ? user?.username : 'Guest'} />
    </DynamicLayout>
  );
}
