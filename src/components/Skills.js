import React from "react";

export default function Skills(props) {
  const skillsArray = props.skills.skills
  const skills = skillsArray.map(skill => <span className="skill" key={skill}> {skill} </span>)

  return (
    <section aria-labelledby="skills" className="skills">
      <h2 id="skills">{props.skills.id}</h2>
      {skills}
    </section>
  )
}