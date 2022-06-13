import React from "react";
import { BrowserView, MobileView } from 'react-device-detect';

export default function Header(props) {
  const downloadCV = props.cv
  const { langButton, toggleLanguage, cvFIle } = props

  function saveAsPdf(pdf) {
    const iframe = document.createElement('iframe');
    iframe.style.visibility = "none";
    iframe.src = pdf;
    document.body.appendChild(iframe);
    window.focus()
    window.print()
  }

  return (
    <header >
      <h1 className="visually-hidden">Ha Anna's CV</h1>
      <BrowserView>
        <button onClick={saveAsPdf} className="download-button">{downloadCV}</button>
      </BrowserView>
      <MobileView>
        <form action={`/${cvFIle}`}>
          <button className="download-button">{downloadCV}</button>
        </form>
      </MobileView>
      <button onClick={toggleLanguage} className="lang-button" aria-label="Change language">{langButton}</button>
    </header>
  )
}