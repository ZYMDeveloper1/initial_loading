import React from 'react';
import LoadingScreen from '../components/LoadingScreen';
import './table.css';

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz'
  },
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz'
  },
  {
    id: 3,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz'
  },
  {
    id: 4,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz'
  },
  {
    id: 5,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz'
  },
  {
    id: 6,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz'
  }
];

export default function Home() {
  return (
    <>
      <LoadingScreen />
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
