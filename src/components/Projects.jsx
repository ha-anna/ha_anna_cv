import React from "react";

export default function Projects({ projects }) {

  const projectsHtml = projects.map(project => {
    return (
      <div className="project" key={project.title}>
        <h3><a href={project.url} target="_blank" className="link">{project.title}</a></h3>

        <div className="tech-stack">
          {project.techStack.map(tech => {

            return <span key={tech} className="tech">{tech}</span>
          })}
        </div>

        <p>{project.description}</p>
      </div>
    )
  })

  return (
    <section aria-labelledby="projects">
      <h2 id="projects">{projects[0].id}</h2>
      {projectsHtml}
    </section>
  )
}