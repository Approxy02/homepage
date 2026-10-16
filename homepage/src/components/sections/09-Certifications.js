import React from 'react';
import GlassCard from '../GlassCard';

const certifications = [
  {
    title: "1st Class (Large) Driver's License (1종 대형)",
    date: 'Apr. 2023',
  },
  {
    title: 'Craftsman Fork Lift Truck Operator (지게차운전기능사)',
    date: 'Dec. 2022',
  },
];

const CertificationsSection = () => (
  <section id="certs" className="section">
    <div className="section-label">Licenses &amp; Certifications</div>
    <div className="card-list compact">
      {certifications.map((certification) => (
        <GlassCard className="pub-card compact-card" key={certification.title}>
          <div className="card-body card-row">
            <h3>{certification.title}</h3>
            {certification.date && (
              <p className="muted card-row-meta">{certification.date}</p>
            )}
          </div>
        </GlassCard>
      ))}
    </div>
  </section>
);

export default CertificationsSection;
