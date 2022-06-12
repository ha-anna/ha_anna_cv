import React from "react";

export default function Experience(props) {
  const experienceArray = props.experience

  const experience = experienceArray.map(exp => {
    return (
      <div className="experience" key={exp.name}>
        <h3>{exp.name}</h3>
        <span className="exp-info"> {exp.position} | {exp.start} - {exp.end}</span>

        <ul className="exp-details">
          {exp.responsibilities.map(res => {

            return <li key={res} className="detail">{res} </li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <section aria-labelledby="experience">
      <h2 id="experience">{props.experience[0].id}</h2>
      {experience}
    </section>
  )
}