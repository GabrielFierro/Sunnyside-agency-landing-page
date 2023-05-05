import React from 'react';

export default function Gallery({ src, alt }) {
  return (
    <div className='column'>
      <img src={src} alt={alt} />
    </div>
  );
}
