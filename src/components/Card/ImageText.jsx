import React from 'react';

export default function ImageText({ text, src, alt, isGreen }) {
  return (
    <div className='containerImage'>
      <img className='image' src={src} alt={alt} />
      <div className='centerContainer'>
        <div className='centerText'>
          {isGreen ? (
            <div className='styleText green'>
              <h1>{text.title}</h1>
              <p>{text.paragraph}</p>
            </div>
          ) : (
            <div className='styleText blue'>
              <h1>{text.title}</h1>
              <p>{text.paragraph}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
