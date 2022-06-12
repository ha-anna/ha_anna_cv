import React from "react";

export default function Header(props) {
  const downloadCV = props.cv
  const { langButton, toggleLanguage } = props

  function saveAsPdf(pdf) {
    const iframe = document.createElement('iframe');
    iframe.style.visibility = "none";
    iframe.src = pdf;
    document.body.appendChild(iframe);
    window.focus()
    window.print()
  }

  return (
    <header>
      <h1 className="visually-hidden">Ha Anna's CV</h1>
      <button onClick={saveAsPdf} className="download-button">{downloadCV}</button>
      <button onClick={toggleLanguage} className="lang-button">{langButton}</button>
    </header>
  )
}