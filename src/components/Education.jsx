import React from "react";

export default function Education({ education }) {

  const educationHtml = education.map(ed => {
    return (
      <div className="school" key={ed.name}>
        <h3>{ed.name}</h3>
        <div className="edu">
          <span className="edu-info">{ed.area}</span>
          <span className="line" aria-hidden="true">|</span>
          <span className="edu-info date">{ed.start} - {ed.end}</span>
        </div>
      </div>
    )
  })

  return (
    <section aria-labelledby="education">
      <h2 id="education">{education[0].id}</h2>
      {educationHtml}
    </section>
  )
}