/** @format */

import React from 'react';

const Posts = ({ posts, loading }) => {
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <ul className='list-group mb-4'>
          {posts.map((post) => {
            return (
              <li key={post.id} className='list-group-item'>
                {post.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Posts;
