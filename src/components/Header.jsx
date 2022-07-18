import React from "react";

export default function Header({ toggleLanguage, cvFile, cv }) {

  return (
    <header >
      <h1 className="visually-hidden">Ha Anna's CV</h1>
      <a className="download-button" href={`/${cvFile}`} target="_blank" rel="noopener">{cv}</a>
      <div className="tooltip-wrap">
        <button onClick={toggleLanguage} className="lang-button" aria-label="Change language">🌍 Lang</button>
        <div className="tooltip-content">
          <span>🔁 English, Korean, Polish</span>
        </div>
      </div>

    </header>
  )
}