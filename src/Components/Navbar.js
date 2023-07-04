import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <ul className='navbar'>
      <Link exact to="/">
        About
      </Link>
      <Link to="/skills">Skills</Link>
      <Link to="/resume">Resume</Link>
    </ul>
  );
}

export default Navbar
