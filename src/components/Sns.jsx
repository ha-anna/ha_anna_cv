import React from "react";

export default function Sns({ sns }) {

  const snsHtml = sns.map(social => {
    return (
      <div className="sns" key={social.name}>
        <a href={social.link} target="_blank"><img src={`images/${social.icon}`} alt={social.name} className="sns-icon" /></a>
      </div>
    )
  })

  return (
    <section aria-labelledby="sns" id="sns-section">
      <h2 id="sns">{sns[0].id}</h2>
      <div className="sns">
        {snsHtml}
      </div>
    </section>
  )
}