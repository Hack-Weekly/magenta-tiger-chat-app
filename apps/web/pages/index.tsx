import dynamic from 'next/dynamic';
import { useAuth } from '../context/AuthContext';
import { Button, Header } from 'ui';
import Head from 'next/head';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

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
      {/* Put here already styled Home page component & remove Header! */}
      <Header variant="welcome" userName={user ? user?.username : 'Guest'} />
    </DynamicLayout>
  );
}
