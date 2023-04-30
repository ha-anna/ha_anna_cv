import React from "react";

export default function Projects({ projects }) {
  window.onbeforeprint = function () {
    const links = document.querySelectorAll(".link-project");
    for (let i = 0; i < links.length; i++) {
      let theContent = links[i].getAttribute("href");
      if (!theContent == "") {
        links[i].newContent = " [" + theContent + "] ";
        links[i].innerHTML =
          links[i].innerHTML +
          `<span class="print-link">${links[i].newContent}</span>`;
      }
    }
  };

  const projectsHtml = projects.map((project) => {
    return (
      <div className="project" key={project.title}>
        <h3>
          <a
            href={project.url}
            target="_blank"
            className="link link-project"
            rel="noopener"
          >
            {project.title}
            <svg
              className="link-svg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 3h6v2H5v14h14v-6h2v8H3V3h2zm8 0h8v8h-2V7h-2V5h-4V3zm0 8h-2v2H9v2h2v-2h2v-2zm4-4h-2v2h-2v2h2V9h2V7z"
                fill="currentColor"
              />
            </svg>
          </a>
        </h3>

        <div className="tech-stack">
          {project.techStack.map((tech) => {
            return (
              <span key={tech} className="tech">
                {tech}
              </span>
            );
          })}
        </div>

        <p>{project.description}</p>
      </div>
    );
  });

  return (
    <section aria-labelledby="projects">
      <h2 id="projects">{projects[0].id}</h2>
      {projectsHtml}
    </section>
  );
}
