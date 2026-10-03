import React from 'react';

const publicUrl = process.env.PUBLIC_URL || '';

const EducationSection = () => (
  <section id="education" className="section">
    <div className="section-label">Education</div>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-date">Mar. 2020 - Present</div>
        <div className="timeline-body with-logo">
          <div className="org-logo" aria-hidden="true">
            <img
              src={`${publicUrl}/images/Konkuk_University.png`}
              alt="Konkuk University Logo"
            />
          </div>
          <div>
            <h3>B.S. in Computer Science and Engineering</h3>
            <p>Konkuk University, Seoul, Republic of Korea</p>
            <p className="muted">(Expected graduation: Feb. 2027)</p>
            <p className="muted">GPA: 4.36 / 4.5, Major GPA: 4.47 / 4.5</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
