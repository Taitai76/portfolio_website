import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <ul className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <a href="/Personal/portfolio_website/public/Resume1.pdf" download>
        Resume
      </a>
    </ul>
  );
}

export default Navbar
