import React from 'react'
import Navbar from './Navbar'
import logo from '../logo.png'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo"></img>
      </Link>
      <Navbar />
    </header>
  );
}

export default Header
