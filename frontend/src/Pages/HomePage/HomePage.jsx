import React from 'react';
import Banner from '../../Components/Banner/Banner';
import PostCollection from '../../Components/PostCollection/PostCollection';
import Post from '../../Components/Post/Post';

const jobs = [
  {
    key: 0,
    title: 'Software Engineer',
    company: 'Conga',
    date: 'Dec 29'
  },
  {
    key: 1,
    title: 'Senior Software Engineer',
    company: 'Conga',
    date: 'Dec 28'
  }
];

export default () => (
  <div>
    <Banner />
    <PostCollection>
      {
        jobs.map(job => (
            <Post {...job} />
        ))
      }
    </PostCollection>
  </div>
);
