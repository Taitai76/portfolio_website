import React from "react";
import pic from "../aboutPic.jpeg";
import newPic from "../newPic.png";

function About() {
  
  const skills = {
    "Frontend": [
      "React", "TypeScript", "JavaScript (ES6+)",
      "HTML5", "CSS3", "Tailwind CSS", "React Router", "Jest / RTL"
    ],
    "Backend": [
      "Node.js", "Express", "Python (Flask)", "Ruby on Rails",
      "REST APIs", "Auth (JWT, sessions)"
    ],
    "Databases": [
      "PostgreSQL", "MySQL", "SQLite", "MongoDB (basic)"
    ],
    "DevOps & Cloud": [
      "Git/GitHub", "GitHub Actions (CI/CD)", "Netlify",
      "Render", "AWS (S3, Elastic Beanstalk)"
    ],
    "Other": [
      "Docker (basic)", "Testing mindset", "Accessibility (a11y)",
      "Agile/Scrum", "Incident response mindset (EMT)"
    ]
  };

  return (
    <section className="about-wrapper">
      {/* Top: intro + portrait */}
      <div className="about-hero">
        <div className="about-card">
          <h1 className="about-title">About Moh</h1>
          <p className="about-lede">
            I’m a full-stack developer based in <strong>Colorado Springs</strong> who enjoys
            turning real-world problems into clean, reliable web apps. I earned an
            <strong> A.S. in Computer Programming & Analysis</strong> at the State College of Florida
            and refined my craft at Flatiron School’s Software Development bootcamp.
          </p>
          <p className="about-body">
            My sweet spot is building <strong>React</strong> frontends backed by
            <strong> Python/Flask</strong>, <strong>Ruby on Rails</strong>, or <strong>Node/Express</strong>, deploying with
            simple, repeatable pipelines (Netlify, Render, GitHub Actions). I value code that’s
            readable, tested, and maintainable and UI that feels obvious without a manual.
          </p>
          <p className="about-body">
            Outside code, working as an EMT taught me calm under pressure, clear communication,
            and disciplined incident response, habits I bring to debugging, on-call, and tight deadlines.
          </p>

          <p className="about-body">
            I’m currently finishing my B.S. in Cybersecurity & Information Assurance at WGU, on track to graduate 
            around June. Most of my time goes into hands-on labs and platform work (TryHackMe/HTB), 
            sharpening skills in network fundamentals, Linux, Python scripting, and web app security with a focus on the OWASP Top 10.  After graduation, my goal is to step into a junior penetration tester role—bringing the same calm, methodical approach I use as an EMT to 
            scoping, testing, and communicating clear remediation steps to stakeholders.
          </p>

          {/* Quick facts */}
          <ul className="about-facts">
            <li><span>Location</span>Colorado Springs, CO</li>
            <li><span>Focus</span>React • APIs • Deployments</li>
            <li><span>Ship It</span>Netlify • GitHub Actions • AWS EB</li>
          </ul>
        </div>

        <img
          src={pic}
          className="about-portrait"
          alt="Portrait of Mohammed Taitai"
          loading="lazy"
        />
      </div>

      {/* Lower: secondary image + skills */}
      <div className="about-lower">
        <img
          src={newPic}
          className="about-secondary"
          alt="Moh working on a laptop"
          loading="lazy"
        />

        <div className="skills-card">
          <h2>Skills</h2>

          {/* Render grouped skills */}
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <ul className="skill-chips">
                {items.map((s) => (
                  <li className="chip" key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
