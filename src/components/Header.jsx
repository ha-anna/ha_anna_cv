import React from "react";

export default function Header({ langButton, toggleLanguage, cvFile, cv }) {

  return (
    <header >
      <h1 className="visually-hidden">Ha Anna's CV</h1>
      <form action={`/${cvFile}`}>
        <button className="download-button">{cv}</button>
      </form>
      <button onClick={toggleLanguage} className="lang-button" aria-label="Change language">{langButton}</button>
    </header>
  )
}