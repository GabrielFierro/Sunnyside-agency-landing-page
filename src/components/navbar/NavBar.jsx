import React, { useState } from 'react';
import AgencyLogo from '../../assets/images/logo.svg';
import Nav from './Nav';
import Header from '../Header/Header';
import '../../App.css';

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='navbar'>
          <img className='logo' src={AgencyLogo} alt='Logo' />
          <Nav />
          <div className='hamburger' onClick={toggleHamburger}>
            <svg width='24' height='18' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z'
                fill='#FFF'
                fill-rule='evenodd'
              />
            </svg>
          </div>
        </div>
      </div>
      <Header title='we are creative' />
    </div>
  );
}
