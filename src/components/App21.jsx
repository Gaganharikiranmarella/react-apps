import React, { useState, createContext } from "react";
import Register from "./Register";
import Login from "./Login";
import "./App21.css";

export const UserContext = createContext();

export default function App21() {
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [page, setPage] = useState("login");

  return (
    <UserContext.Provider value={{ users, setUsers, setPage, setLoggedInUser }}>
      <div className="app21-container">
        <h1>App21</h1>
        {loggedInUser ? (
          <h2>Welcome {loggedInUser.name || loggedInUser.username}!</h2>
        ) : page === "register" ? (
          <Register />
        ) : (
          <Login />
        )}
      </div>
    </UserContext.Provider>
  );
}
