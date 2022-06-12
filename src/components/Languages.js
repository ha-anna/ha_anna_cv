import React from "react";

export default function Languages(props) {
  const languagesArray = props.languages
  const languages = languagesArray.map(lang => {

    return (
      <div className="language" key={lang.lang}>
        <h3 className="lang-name">{lang.lang}</h3>
        <span className="lang-level">{lang.level}</span>
      </div>
    )
  })

  return (
    <section aria-labelledby="languages">
      <h2 id="languages">{props.languages[0].id}</h2>
      <div className="languages">
        {languages}
      </div>
    </section>
  )
}