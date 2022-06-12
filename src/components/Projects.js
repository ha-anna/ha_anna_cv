import React from "react";

export default function Projects(props) {
  const projectsArray = props.projects

  const projects = projectsArray.map(project => {
    return (
      <div className="project" key={project.title}>
        <h3><a href={project.url} target="_blank" rel="noreferrer" className="link">{project.title}</a></h3>

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
      <h2 id="projects">{props.projects[0].id}</h2>
      {projects}
    </section>
  )
}