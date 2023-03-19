import Register from "../components/Registration";
import { AuthProvider } from "../context";
import { useAuth } from "../context/AuthContext";

export default function Web() {
  const { user, logout } = useAuth();

  return (
    <section>
      <AuthProvider>
        <h1>Chat App</h1>
        {user ? (
          <div>
            <h2>Your Profile</h2>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Register />
        )}
      </AuthProvider>
    </section>
  );
}
