import React from "react";

export default function Sns(props) {
  const snsArray = props.sns
  const sns = snsArray.map(social => {

    return (
      <div className="sns" key={social.name}>
        <a href={social.link} target="_blank" rel="noreferrer"><img src={`./images/${social.icon}`} alt={social.name} className="sns-icon" /></a>
      </div>

    )
  })

  return (
    <section aria-labelledby="sns" id="sns-section">
      <h2 id="sns">{props.sns[0].id}</h2>
      <div className="sns">
        {sns}
      </div>
    </section>
  )
}