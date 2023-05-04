import React from 'react';

export default function Gallery({ src, alt }) {
  return (
    <div class='column'>
      <img src={src} alt={alt} />
    </div>
  );
}
