import dynamic from "next/dynamic";
import Head from "next/head";
import { Header } from "ui";
import { User, Users } from "../../../../packages/types/src/auth/user.types";

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:8089/users");
    const users: User[] = await response.json();

    return { props: { users } };
  } catch (error) {
    console.log(error);
  }
}

export default function Search({ users }: Users) {
  const DynamicLayout = dynamic(() => import("../../components/Layout"), {
    ssr: false,
  });

  console.log(users);

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <DynamicLayout>
        {/* Put here already styled Search page component & remove Header! */}
        <Header title="Search" description="Search by username or email" />

        {users?.map((user) => (
          <p key={user._id}>{user.username}</p>
        ))}
      </DynamicLayout>
    </>
  );
}
