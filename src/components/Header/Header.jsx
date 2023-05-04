import React from 'react';
import ArrowDown from '../../assets/images/icon-arrow-down.svg';
import '../../App.css';

export default function Header({ title }) {
  return (
    <div>
      <h1 className='title'>{title}</h1>
      <div className='container_arrow'>
        <img src={ArrowDown} alt='arrow down' />
      </div>
    </div>
  );
}
