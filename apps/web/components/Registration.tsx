import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => login(data))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    // Reset form fields
    setUsername("");
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
