import React from 'react';

import LoadingScreen from '../components/LoadingScreen';
import './table.css';

const posts = [
  {
    id: 1,
    title: 'are blinded by the option to catch up or repel provident task',
    email:
      'because he accepts, accepts, accepts, accepts, accepts unimpeded consequences, and when he accuses them of annoyance, so as to ensure that the affairs of the whole of us are the property of the architect.'
  },
  {
    id: 2,
    title: 'who is esse',
    email:
      'It is the time of life to follow the things that are to be condemned, the pain of the blessed, those pains; nor escape from the flattery of pleasure;'
  },
  {
    id: 3,
    title: 'drive back those troubles as if it were an exercise',
    email:
      'and just, but by what right, blinded by the pleasure of all choosing, or for the pleasure of the pains or the accusers, who can bear the annoyance?'
  },
  {
    id: 4,
    title: 'him and he is blinded',
    email:
      'it is important to obtain any and often rejecting pleasure, but they foresee the fault of things to be assumed.'
  }
];

export default function About() {
  return (
    <>
      <LoadingScreen />
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
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
