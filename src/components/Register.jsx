import React, { useState, useContext } from "react";
import { UserContext } from "../App21";
import "./Register.css";

export default function Register() {
  const { users, setUsers, setPage } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    const { username, email, phone, password, confirm } = form;
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])(?!.*\s).{6,}$/;

    if (!username || !email || !password || !confirm)
      return "Please fill all required fields.";
    if (!emailRegex.test(email)) return "Invalid email.";
    if (phone && !phoneRegex.test(phone)) return "Invalid phone number.";
    if (!passwordRegex.test(password)) return "Weak password.";
    if (password !== confirm) return "Passwords don't match.";
    return "";
  };

  const handleSubmit = () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    const updatedUsers = [...users, form];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setPage("login");
  };

  return (
    <div className="register-box">
      <h2>Register</h2>
      <p><input placeholder="Name (optional)" onChange={(e) => setForm({ ...form, name: e.target.value })} /></p>
      <p><input placeholder="Username *" onChange={(e) => setForm({ ...form, username: e.target.value })} /></p>
      <p><input placeholder="Email *" onChange={(e) => setForm({ ...form, email: e.target.value })} /></p>
      <p><input placeholder="Phone (optional)" onChange={(e) => setForm({ ...form, phone: e.target.value })} /></p>
      <p>
        <input
          type={show ? "text" : "password"}
          placeholder="Password *"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </p>
      <p>
        <input
          type={show ? "text" : "password"}
          placeholder="Confirm Password *"
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
        />
      </p>
      <p><input type="checkbox" onChange={() => setShow(!show)} /> Show Password</p>
      {error && <p className="error">{error}</p>}
      <button onClick={handleSubmit}>Register</button>
      <p>Already registered? <span className="link" onClick={() => setPage("login")}>Login here</span></p>
    </div>
  );
}
