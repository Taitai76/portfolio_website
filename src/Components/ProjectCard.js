import React from "react";

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  demo,
  repo,
}) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      {tech && (
        <ul className="tech-list">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
      <div className="project-links">
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        )}
      </div>
    </div>
  );
}
