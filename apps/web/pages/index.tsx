import dynamic from "next/dynamic";
import Head from "next/head";
import { useAuth } from "../context/AuthContext";

import { Header } from "ui";
import Chat from "../components/Chat";
import PrivateRoute from "../components/PrivateRoute";

export default function Web() {
  const { user } = useAuth();

  const DynamicLayout = dynamic(() => import("../components/Layout"), {
    ssr: false,
  });

  return (
    <PrivateRoute>
      <DynamicLayout>
        <Head>
          <title>Home</title>
        </Head>
        <Header variant="welcome" userName={user ? user?.username : "Guest"} />
        <Chat />
      </DynamicLayout>
    </PrivateRoute>
  );
}
