import React, { useEffect, useState } from 'react';

import { userAPI } from '../api/userAPI';
import LoadingScreen from '../components/LoadingScreen';
import './table.css';

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userAPI.fetchUsers().then((users) => {
      setUsers(users);
    });
  }, [users]);
  return (
    <>
      {users.length === 0 && <LoadingScreen />}
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
