import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App14.css";


export default function App14() {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await axios(url);
    setUsers(res.data);
    setFilteredUsers(res.data); // initially show all
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilteredUsers(result);
  }, [searchName, users]);

return (
  <div className="App14-Container">
    <h1>App14</h1>
    <h2>useEffect hook to fetch API</h2>
    <p>
      <input
        type="text"
        placeholder="Search name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
    </p>
    <ol>
      {filteredUsers.map((value) => (
        <li key={value.id}>
          <strong>{value.name}</strong> <br />
          {value.email} <br />
          {value.phone}
        </li>
      ))}
    </ol>
  </div>
);

}
