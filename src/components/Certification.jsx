import React from "react";
import { nanoid } from "nanoid";

export default function Certification({ certificates }) {

  const certificatesHtml = certificates.map(cert => {
    return (
      <div className="certificate" key={nanoid()}>
        <h3>{cert.name}</h3>
        <div className="cert-detail">
          <span className="cert-info">{cert.institution}</span>
          <span className="line" aria-hidden="true">|</span>
          <span className="cert-info date">{cert.date}</span>
          <span className="cert-desc">{cert.description}</span>
        </div>
      </div>
    )
  })

  return (
    <section aria-labelledby="certification">
      <h2 id="certification">{certificates[0].id}</h2>
      {certificatesHtml}
    </section>
  )
}