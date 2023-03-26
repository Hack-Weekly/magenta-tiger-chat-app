import Head from 'next/head';
import RestrictedRoute from '../../components/RestrictedRoute';
import Auth from '../../components/Auth';

export default function Web() {
  return (
    <RestrictedRoute>
      <Head>
        <title>Log in</title>
      </Head>
      <Auth variant="login" />
    </RestrictedRoute>
  );
}
