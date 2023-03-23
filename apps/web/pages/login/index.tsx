import Head from 'next/head';
import Auth from '../../components/Auth';

export default function Web() {
  return (
    <>
      <Head>
        <title>Log in</title>
      </Head>
      <Auth variant="login" />
    </>
  );
}
