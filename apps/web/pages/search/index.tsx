import Head from 'next/head';

import dynamic from 'next/dynamic';
import { Header } from 'ui';

export default function Web() {
  const DynamicLayout = dynamic(() => import('../../components/Layout'), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <DynamicLayout>
        <Header title="Search" description="Search by username or email" />
      </DynamicLayout>
    </>
  );
}
