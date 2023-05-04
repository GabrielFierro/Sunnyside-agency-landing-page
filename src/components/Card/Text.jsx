import React from 'react';

export default function Text({ text }) {
  return (
    <div className='containerText'>
      <div class='text'>
        <h3>{text.title}</h3>
        <p>{text.paragraph}</p>
        <span>{text.span}</span>
      </div>
    </div>
  );
}
