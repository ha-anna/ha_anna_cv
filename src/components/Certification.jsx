import React from "react";
import { nanoid } from "nanoid";

export default function Certification({ certificates }) {

  const certificatesHtml = certificates.map(cert => {
    return (
      <div className="certificate" key={nanoid()}>
        <h3><a href={cert.url}
            target="_blank"
            className="link link-cert"
            rel="noopener">{cert.name}             
            <svg
              className="link-svg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 3h6v2H5v14h14v-6h2v8H3V3h2zm8 0h8v8h-2V7h-2V5h-4V3zm0 8h-2v2H9v2h2v-2h2v-2zm4-4h-2v2h-2v2h2V9h2V7z"
                fill="currentColor"
              />
            </svg></a></h3>
        <div className="cert-detail">
          <span className="cert-info">{cert.institution}</span>
          <span className="line" aria-hidden="true">|</span>
          <span className="cert-info date">{cert.date}</span>
          {/* <span className="cert-desc">{cert.description}</span> */}
        </div>
      </div>
    )
  })

  return (
    <section aria-labelledby="certification" className="certificates">
      <h2 id="certification">{certificates[0].id}</h2>
      {certificatesHtml}
    </section>
  )
}