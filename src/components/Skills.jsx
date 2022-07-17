import React from "react";

export default function Skills({ skills }) {
  const skillsHtml = skills.list.map(skill => <li className="skill" key={skill}>{skill}</li>)

  return (
    <section aria-labelledby="skills" className="skills">
      <h2 id="skills">{skills.id}</h2>
      <ul>
        {skillsHtml}
      </ul>
    </section>
  )
}