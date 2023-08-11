import React from 'react'
import Socials from './Socials'
import portrait from "../ProfilePic.jpeg";
function Home() {
  return (
    <div className="Home-container">
      <div className="introduction">
        <p>Hello, I'm</p>
        <h1>Mohammed Taitai</h1>
        <p>Full stack Developer</p>
        <button class="Button">About Me</button>
      </div>
      <div className="myPic-container">
        <img src={portrait} class="myPic" alt="Mohammed Taitai"></img>
      </div>
      <div className="Socials">
        <Socials />
      </div>
    </div>
  );
}

export default Home;
