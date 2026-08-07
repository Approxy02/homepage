import React from 'react';

const publicUrl = process.env.PUBLIC_URL || '';

const experience = [
  {
    date: 'Jun. 2026 - Present',
    title: 'Research Intern',
    org: (
      <>
        <a href="https://sites.google.com/view/kaistdata">Data Mining Lab</a>, KAIST AI
      </>
    ),
    detail: (
      <>
        Advisor: Prof. <a href="https://kijungs.github.io/">Kijung Shin</a>
      </>
    ),
    logo: `${publicUrl}/images/kaist_ai.svg`,
    logoAlt: 'KAIST AI Logo',
  },
  {
    date: 'Jul. 2024 - Jun. 2026',
    title: 'Research Intern',
    org: (
      <>
        <a href="https://gli.konkuk.ac.kr/">Graph &amp; Language Intelligence Lab</a>,
        Konkuk University
      </>
    ),
    detail: (
      <>
        Advisor: Prof. <a href="https://bkoh509.github.io/">Byungkook Oh</a>
      </>
    ),
    logo: `${publicUrl}/images/GLI_Lab.png`,
    logoAlt: 'GLI Lab Logo',
  },
  {
    date: 'Oct. 2023 - Jul. 2024',
    title: 'Co-Founder',
    org: 'Team Lett',
    inlineDetail: true,
    detail: (
      <>
        Co-founded with <a href="https://gibsonlee01.github.io/">Jiwoo Lee</a> and{' '}
        <a href="https://junghunkim916.github.io/">Junghun Kim</a>
        <br />
        Built apps and web services through tech entrepreneurship, including Pzzk (calendar)
      </>
    ),
    logo: `${publicUrl}/images/Lett.png`,
    logoAlt: 'Lett Team Logo',
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section">
    <div className="section-label">Experience</div>
    <div className="timeline">
      {experience.map((item) => (
        <div className="timeline-item" key={`${item.date}-${item.title}`}>
          <div className="timeline-date">{item.date}</div>
          <div className="timeline-body with-logo">
            <div className="org-logo" aria-hidden="true">
              <img src={item.logo} alt={item.logoAlt} />
            </div>
            <div>
              <h3>{item.title}</h3>
              {item.inlineDetail ? (
                <p>
                  {item.org}, {item.detail}
                </p>
              ) : (
                <>
                  <p>{item.org}</p>
                  <p className="muted">{item.detail}</p>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
