import React from 'react';

import './style.css';

const SkeletonCard = () => {
  return (
    <article className='skeleton-Wrapper'>
      <div className='skeleton-CardImage' alt='loading' />
      <div className='skeleton-CardBody'></div>
    </article>
  );
};

export { SkeletonCard };
