import { Input } from 'ui';
import { useAuth } from '../context/AuthContext';

export default function Chat() {
  const { user, logout } = useAuth();

  return (
    <section>
      <h2>Chat Main Page</h2>
      <Input variant="send" />
      <button>Send message</button>
      <button onClick={logout}>Logout</button>
    </section>
  );
}
