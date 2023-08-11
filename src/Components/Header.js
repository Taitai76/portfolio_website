import React from 'react'
import Navbar from './Navbar'
import logo from '../logo.png'
function Header() {
  return (
    <header className='header'>
        <img src={logo} alt='Logo'></img>
        <Navbar />
    </header>
  )
}

export default Header
