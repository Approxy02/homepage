import React from 'react';

const certifications = [
  {
    index: '[1]',
    title: 'Craftsman Fork Lift Truck Operator (지게차운전기능사)',
    date: 'Dec. 2022',
  },
];

const CertificationsSection = () => (
  <section id="certs" className="section">
    <div className="section-label">Licenses &amp; Certifications</div>
    <div className="card-list compact">
      {certifications.map((certification) => (
        <article className="pub-card compact-card" key={certification.index}>
          <div className="card-body">
            <div className="indexed-card">
              <span className="inline-index">{certification.index}</span>
              <div>
                <h3>{certification.title}</h3>
                <p className="muted">{certification.date}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default CertificationsSection;
