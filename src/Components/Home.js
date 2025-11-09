import React from 'react'
import Socials from './Socials'
import portrait from "../ProfilePic.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home-container">
      <div className="Socials">
        <Socials />
      </div>
      <div className="introduction">
        <p>Hello, I'm</p>
        <h1>Mohammed Taitai</h1>
        <p>Full stack Developer / Cybersecurity student</p>
        <Link to="/about" className="about-button">
          About Me
        </Link>
      </div>
      <div className="myPic-container">
        <img src={portrait} className="myPic" alt="Mohammed Taitai"></img>
      </div>
    </div>
  );
}

export default Home;
