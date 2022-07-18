import React from "react";

export default function Header({ toggleLanguage, cvFile, cv }) {

  return (
    <header >
      <h1 className="visually-hidden">Ha Anna's CV</h1>
      <a className="download-button" href={`/${cvFile}`} target="_blank" rel="noopener">{cv}
        <svg className="download-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M13 17V3h-2v10H9v-2H7v2h2v2h2v2h2zm8 2v-4h-2v4H5v-4H3v6h18v-2zm-8-6v2h2v-2h2v-2h-2v2h-2z" fill="currentColor" /> </svg>
      </a>
      <div className="tooltip-wrap">
        <button onClick={toggleLanguage} className="lang-button" aria-label="Change language">
          Lang
          <svg className="lang-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M3 3h2v18H3V3zm16 0H5v2h14v14H5v2h16V3h-2zm-8 6h2V7h-2v2zm2 8h-2v-6h2v6z" fill="currentColor" /> </svg>
        </button>
        <div className="tooltip-content">
          <span className="tooltip-text">
            <svg className="repeat-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M11 1H9v2h2v2H5v2H3v10h2v2h2v-2H5V7h6v2H9v2h2V9h2V7h2V5h-2V3h-2V1zm8 4h-2v2h2v10h-6v-2h2v-2h-2v2h-2v2H9v2h2v2h2v2h2v-2h-2v-2h6v-2h2V7h-2V5z" fill="currentColor" /> </svg>
            English, Korean, Polish</span>
        </div>
      </div>

    </header>
  )
}