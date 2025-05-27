import React, { useState, useContext } from "react";
import { UserContext } from "./App21";
import "./Login.css";

export default function Login() {
  const { users, setPage, setLoggedInUser } = useContext(UserContext);
  const [form, setForm] = useState({ username: "", password: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    const found = users.find(
      (u) => u.username === form.username && u.password === form.password
    );
    if (!found) {
      setError("Invalid username/password");
    } else {
      setLoggedInUser(found);
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <p><input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} /></p>
      <p>
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </p>
      <p><input type="checkbox" onChange={() => setShow(!show)} /> Show Password</p>
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin}>Login</button>
      <p>New member? <span className="link" onClick={() => setPage("register")}>Register here</span></p>
    </div>
  );
}
