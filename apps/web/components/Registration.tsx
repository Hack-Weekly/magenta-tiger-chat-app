import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const router = useRouter();
  const apiUrl = process.env.API_URL;

  function handleSubmit(e: any) {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password: password,
    };

    fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => login(data.user))
      .catch((err) => console.log(err));

    // Reset form fields
    setUsername("");
    setEmail("");
    setPassword("");
    router.push("/");
  }

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
