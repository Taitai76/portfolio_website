import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <ul className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <a href="/Personal/portfolio_website/public/RME!.docx" download>
        Resume
      </a>
    </ul>
  );
}

export default Navbar
