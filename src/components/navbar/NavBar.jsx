import React, { useState, useRef, useEffect } from 'react';
import AgencyLogo from '../../assets/images/logo.svg';
import Nav from './Nav';
import Header from '../Header/Header';
import Hamburger from '../Navbar/Hamburger';
import '../../App.css';

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (hamburgerOpen && ref.current && !ref.current.contains(event.target)) {
        setHamburgerOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [hamburgerOpen]);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='navbar' ref={ref}>
          <img className='logo' src={AgencyLogo} alt='Logo' />
          <div className='hamburger toggle' onClick={toggleHamburger}>
            <Hamburger />
          </div>
          <Nav menuOpen={hamburgerOpen} />
        </div>
      </div>
      <Header title='we are creative' />
    </div>
  );
}
