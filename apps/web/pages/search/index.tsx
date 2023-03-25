import dynamic from 'next/dynamic';
import PrivateRoute from '../../components/PrivateRoute';
import Head from 'next/head';
import { Header, StyleChatListItem } from 'ui';
import StyledContainer from 'ui/components/StyledContainer';
import { Users } from '../../../../packages/types/src/auth/user.types';

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:8089/users');
    const users: Users[] = await response.json();
    return { props: { users } };
  } catch (error) {
    console.log(error);
    return { props: { users: [] } };
  }
}

export default function Search({ users }: Users) {
  const DynamicLayout = dynamic(() => import('../../components/Layout'), {
    ssr: false,
  });

  return (
    <PrivateRoute>
      <DynamicLayout>
        <StyledContainer variant="user-list">
          {/* Put here already styled Search page component & remove Header! */}
          <Header
            title="Search"
            description="All users that are using the App currently. Search will come soon :)"
          />
          {users?.map((user) => (
            <StyleChatListItem
              variant="user-list"
              title={user.username}
              key={user._id}
            />
          ))}
        </StyledContainer>
      </DynamicLayout>
    </PrivateRoute>
  );
}
