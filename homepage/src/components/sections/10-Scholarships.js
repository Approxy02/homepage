import React from 'react';
import GlassCard from '../GlassCard';

const scholarshipPeriods = ['2024 Spring', '2024 Fall', '2026 Fall'];

const ScholarshipsSection = () => (
  <section id="scholarships" className="section section-subtle">
    <div className="section-label">Scholarships</div>
    <div className="card-list compact">
      <GlassCard className="pub-card compact-card">
        <div className="card-body card-row">
          <h3>Academic Excellence Scholarship</h3>
          <p className="muted card-row-meta">
            Konkuk University
            {scholarshipPeriods.map((period, index) => (
              <React.Fragment key={period}>
                {index === 0 ? ', ' : ' · '}<span className="scholarship-period">{period}</span>
              </React.Fragment>
            ))}
          </p>
        </div>
      </GlassCard>
    </div>
  </section>
);

export default ScholarshipsSection;
