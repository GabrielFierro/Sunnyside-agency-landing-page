import React from 'react';

export default function Nav({ menuOpen }) {
  return (
    <ul className={`${menuOpen ? ' menu-nav show-menu' : 'nav'}`}>
      <li>
        <a href='#'>About</a>
      </li>
      <li>
        <a href='#'>Services</a>
      </li>
      <li>
        <a href='#'>Projects</a>
      </li>
      <li id='contact'>
        <a href='#'>Contact</a>
      </li>
    </ul>
  );
}
