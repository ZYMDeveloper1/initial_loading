import React, { useEffect, useState } from 'react';

import { postAPI } from '../api/postAPI';
import LoadingScreen from '../components/LoadingScreen';
import './table.css';

export default function About() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postAPI.fetchPosts().then((posts) => {
      setPosts(posts);
    });
  }, [posts]);
  return (
    <>
      {posts.length === 0 && <LoadingScreen />}
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
