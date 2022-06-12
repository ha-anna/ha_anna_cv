import React from "react";

export default function Education(props) {
  const educationArray = props.education
  const education = educationArray.map(ed => {
    return (
      <div className="school" key={ed.name}>
        <h3>{ed.name}</h3>
        <div className="edu">
          <span className="edu-info">{ed.area}</span>
          <span className="line">|</span>
          <span className="edu-info date">{ed.start} - {ed.end}</span>
        </div>
      </div>
    )
  })

  return (
    <section aria-labelledby="education">
      <h2 id="education">{props.education[0].id}</h2>
      {education}
    </section>
  )
}