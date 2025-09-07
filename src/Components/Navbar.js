import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <a href={process.env.PUBLIC_URL + "/Resume1.pdf"} download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
