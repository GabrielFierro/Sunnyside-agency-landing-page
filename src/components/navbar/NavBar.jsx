import React from 'react'
import AgencyLogo from '../../assets/images/logo.svg'
import Nav from './Nav'
import '../../App.css'

export default function NavBar() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='navbar'>
          <img className='logo' src={AgencyLogo} alt='Logo' />
          <Nav />
        </div>
      </div>
      <h1 className='title'>we are creatives</h1>
    </div>
  )
}
