import React from 'react'
import AgencyLogo from '../assets/images/logo.svg'
// import Nav from ''
import '../App.css'

export default function NavBar() {
  return (
    <div className='header'>
      <img src={AgencyLogo} alt='Logo' />
      {/* <Nav /> */}
    </div>
  )
}
