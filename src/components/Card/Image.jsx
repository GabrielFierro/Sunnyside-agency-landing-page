import React from 'react';

export default function Image({ src, alt }) {
  return <img className='image' src={src} alt={alt} />;
}
