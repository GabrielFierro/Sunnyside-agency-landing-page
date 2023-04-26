import React from 'react'

export default function Nav() {
  return (
    <ul className='nav'>
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
  )
}
