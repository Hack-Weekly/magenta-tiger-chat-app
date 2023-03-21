import dynamic from "next/dynamic";
import Chat from "../components/Chat";
import Register from "../components/Registration";
import { useAuth } from "../context/AuthContext";

export default function Web() {
  const { user } = useAuth();

  const DynamicLayout = dynamic(() => import("../components/Layout"), {
    ssr: false,
  });

  return (
    <DynamicLayout>
      <section>
        <h1>Chat App</h1>
        {user ? <Chat /> : <Register />}
      </section>
    </DynamicLayout>
  );
}
