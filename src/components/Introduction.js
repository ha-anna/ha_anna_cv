import React from "react";


export default function Introduction(props) {
  const { name, position, location, webpage, email, about } = props

  return (
    <section aria-label="Introduction" className="introduction">
      <img src="./images/icon.webp" className="icon" alt="" />
      <div className="intro">
        <h2 className="name">{name}</h2>
        <p className="position">{position}</p>
        <div className="intro-info">
          <span className="info">{location}</span>
          <span className="line" aria-hidden="true">|</span>
          <a href={`https://www.${webpage}`} target="_blank" rel="noreferrer" className="link">{webpage}</a>
          <span className="line" aria-hidden="true">|</span>
          <a href={`mailto:${email}`} className="link" aria-label="e-mail">{email}</a>
          {/* <span className="line" aria-hidden="true">|</span> TODO: add PHONE TO PROPS!!!
          <a href={`tel:${phone}`} className="link">{phone}</a> */}
        </div>
        <p className="about">{about}</p>
      </div>
    </section >
  )
}
