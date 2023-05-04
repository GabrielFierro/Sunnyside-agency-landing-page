import React from 'react';

export default function Text({ text, isYellow }) {
  return (
    <div className='containerText'>
      <div className='text'>
        <h3>{text.title}</h3>
        <p>{text.paragraph}</p>
        <div>
          {isYellow ? (
            <span className='underline_yellow'>{text.span}</span>
          ) : (
            <span className='underline_red'>{text.span}</span>
          )}
        </div>
      </div>
    </div>
  );
}
