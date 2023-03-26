import Head from 'next/head';
import RestrictedRoute from '../../components/RestrictedRoute';
import Auth from '../../components/Auth';

export default function Web() {
  return (
    <RestrictedRoute>
      <Head>
        <title>Sign up</title>
      </Head>
      <Auth variant="signup" />
    </RestrictedRoute>
  );
}
