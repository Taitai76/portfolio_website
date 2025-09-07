import React from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Portfolio() {
  return (
    <section className="portfolio-grid">
      {projects.map((p) => (
        <ProjectCard key={p.id} {...p} />
      ))}
    </section>
  );
}
