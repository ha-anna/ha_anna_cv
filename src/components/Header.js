import React from "react";

export default function Header(props) {
  const downloadCV = props.cv
  const { langButton, toggleLanguage, cvFile } = props

  return (
    <header >
      <h1 className="visually-hidden">Ha Anna's CV</h1>
      <form action={`/${cvFile}`}>
        <button className="download-button">{downloadCV}</button>
      </form>
      <button onClick={toggleLanguage} className="lang-button" aria-label="Change language">{langButton}</button>
    </header>
  )
}