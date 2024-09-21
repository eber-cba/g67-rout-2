import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserProvider";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ username, password });
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Contraseña</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
}
