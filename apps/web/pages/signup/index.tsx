import Head from 'next/head';

import Auth from '../../components/Auth';

export default function Web() {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <Auth variant="signup" />
    </>
  );
}
