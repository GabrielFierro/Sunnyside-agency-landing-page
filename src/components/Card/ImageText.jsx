import React from 'react';

export default function ImageText({ text, src, alt }) {
  return (
    <div className='containerImage'>
      <img className='image' src={src} alt={alt} />
      <div className='centerContainer'>
        <div className='centerText'>
          <h3>{text.title}</h3>
          <p>{text.paragraph}</p>
          <span>{text.span}</span>
        </div>
      </div>
    </div>
  );
}
