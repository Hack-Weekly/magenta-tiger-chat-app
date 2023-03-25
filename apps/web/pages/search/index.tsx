import Head from 'next/head';

import dynamic from 'next/dynamic';
import { Header } from 'ui';
import PrivateRoute from '../../components/PrivateRoute';

export default function Web() {
  const DynamicLayout = dynamic(() => import('../../components/Layout'), {
    ssr: false,
  });

  return (
    <PrivateRoute>
      <DynamicLayout>
        <Head>
          <title>Search</title>
        </Head>
        {/* Put here already styled Search page component & remove Header! */}
        <Header title="Search" description="Search by username or email" />
      </DynamicLayout>
    </PrivateRoute>
  );
}
