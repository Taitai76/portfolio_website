
import React from 'react';
import pic from "../aboutPic.jpeg";
import newPic from "../newPic.png";  

function About() {
  return (
    <div className="about-page">
      <div className="text-and-image">
        <div className="about-text">
          <h1>About Moh</h1>
          <p>
            Based in the vibrant community of Sarasota, Florida, I am a
            dedicated software developer whose journey in the tech industry is
            marked by a blend of academic excellence and self-directed learning.
            My academic foundation was laid at the State College of Florida,
            where I graduated with an A.S. in Computer Programming and Analysis.
            My passion for deeper practical knowledge led me to Flatiron
            School's Software Development Boot Camp, where I refined my skills
            and discovered an enduring love for coding challenges. Beyond the
            classroom, my relentless pursuit of knowledge and self-taught
            proficiency in various programming languages showcase my
            adaptability and ability to thrive in the ever-evolving tech
            landscapes.
            <br></br>
            My particular passion lies in web development, where I enjoy turning
            complex problems into beautiful, functional web applications. This
            enthusiasm is underpinned by my ability to adapt quickly, think
            critically to solve problems, and manage time efficiently, ensuring
            projects move forward smoothly and meet their deadlines.
            <br></br>
            As for my philosophy towards software development, it revolves
            around the belief that technology should make life simpler and more
            efficient, not more complicated. I strive to create software
            solutions that are both innovative and intuitive, ensuring that
            technology serves as a bridge to solving real-world problems rather
            than a barrier.{" "}
          </p>
        </div>
        <img
          src={pic}
          className="about-pic"
          alt="Portrait of Moh smiling, taken outdoors"
        ></img>
      </div>
      <div className="lower-section">
        <img
          src={newPic}
          className="new-about-pic"
          alt="Moh working on a laptop in his office"
        ></img>
        <div className="skills-container">
          <h1>Skills</h1>
          <ul className="skills-list">
            <li>Ruby on Rails</li>
            <li>React.js</li>
            <li>MySQL</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
