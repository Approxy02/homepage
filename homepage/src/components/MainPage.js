import React from 'react';

const BrandIcon = ({ name }) => {
  if (name === 'email') {
    return (
      <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 5h17A2.5 2.5 0 0 1 23 7.5v9A2.5 2.5 0 0 1 20.5 19h-17A2.5 2.5 0 0 1 1 16.5v-9A2.5 2.5 0 0 1 3.5 5Zm0 2a.5.5 0 0 0-.5.5v.41l9 5.4 9-5.4V7.5a.5.5 0 0 0-.5-.5h-17Zm17 10a.5.5 0 0 0 .5-.5v-6.25l-8.49 5.09a1 1 0 0 1-1.02 0L3 10.25v6.25a.5.5 0 0 0 .5.5h17Z" />
      </svg>
    );
  }

  if (name === 'cv') {
    return (
      <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 2h8.6L20 7.4V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7.5 2H6v16h12V8.5h-4.5V4Zm1.5 1.41V7h1.59L15 5.41ZM8 11h8v2H8v-2Zm0 4h8v2H8v-2ZM8 7h4v2H8V7Z" />
      </svg>
    );
  }

  if (name === 'github') {
    return (
      <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.38 2.89-.39.98.01 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  }

  if (name === 'linkedin') {
    return (
      <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }

  if (name === 'scholar') {
    return (
      <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 1.6 8.55 12 14.1l8-4.27V16h2V8.55L12 3Zm0 13.35L5.2 12.7v3.3c0 1.6 3.04 3.25 6.8 3.25s6.8-1.65 6.8-3.25v-3.3L12 16.35Z" />
      </svg>
    );
  }

  return null;
};

const MainPage = () => {
  const publicUrl = process.env.PUBLIC_URL || '';

  const links = [
    { icon: 'email', label: 'Email', href: 'mailto:sangjunji02@gmail.com' },
    { icon: 'cv', label: 'CV', href: `${publicUrl}/assets/CV_(v260616).pdf` },
    { icon: 'github', label: 'GitHub', href: 'https://github.com/Approxy02' },
    { icon: 'scholar', label: 'Google Scholar', href: '' },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sangjun-ji-6616933b9/',
    },
  ];

  const interests = [
    { emoji: '🧠', label: 'Structured Reasoning in LLMs' },
    { emoji: '📚', label: 'Knowledge-Grounded Reasoning' },
    { emoji: '🕸️', label: 'Synergizing LLMs and Graphs' },
  ];

  const experience = [
    {
      date: 'Jun. 2026 - Present',
      title: 'KAIRI Internship',
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
      title: 'Undergraduate Research Intern',
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
          Co-founded with <a href="https://gibsonlee01.github.io/">Jiwoo Lee</a> and <a href="https://junghunkim916.github.io/">Junghun Kim</a>
          <br />
          Built apps and web services through tech entrepreneurship, including Pzzk (calendar).
        </>
      ),
      logo: `${publicUrl}/images/Lett.png`,
      logoAlt: 'Lett Team Logo',
    },
  ];

  const publications = [
    //   {
    //   index: '[4]',
    //   venue: '',
    //   title:
    //     '',
    //   authors: (
    //     <>
    //       <span className="name-highlight">Sangjun Ji</span>,
    //     </>
    //   ),
    //   conference:
    //     '',
    //   track: '',
    // },
    {
      index: '[3]',
      venue: 'Under Review',
      title:
        'Internalizing Negation-Gated Logical Rules into LLMs for Document-Level Relation Extraction',
      authors: (
        <>
          Hye-Yoon Baek, <span className="name-highlight">Sangjun Ji</span>, Jimyeung Seo,
          Hae-Yoon Koo, Xiongnan Jin and Byungkook Oh*
        </>
      ),
      // conference: 'Under Review',
    },
    {
      index: '[2]',
      venue: 'KDD 2026',
      title:
        'Joint Global-Local Representations via Relation-Entity Pair Encoding for Hyper-Relational Knowledge Graphs',
      authors: (
        <>
          <span className="name-highlight">Sangjun Ji</span>, Sangjune Kim, Bonyou Koo,
          Youngho Lee, Xiongnan Jin and Byungkook Oh*
        </>
      ),
      conference:
        'ACM SIGKDD International Conference on Knowledge Discovery and Data Mining 2026',
      track: 'Research Track (Acceptance Rate: 18.5%)',
    },
    {
      index: '[1]',
      venue: 'KCC 2026',
      title: 'Mention-Context Hypergraph Aggregation for Document-level Relation Extraction',
      authors: (
        <>
          <span className="name-highlight">Sangjun Ji</span>, Hye-Yoon Baek, Donghyun Lee and
          Byungkook Oh*
        </>
      ),
      conference: 'Korea Computer Congress 2026',
      track: 'Undergraduate Paper Track',
    },
  ];

  const patents = [
    {
      index: '[1]',
      title: '하이퍼관계형 지식 그래프 상의 하이퍼관계형 사실에 대한 링크 예측 방법 및 장치',
      subtitle:
        'Method and Apparatus for Link Prediction of Hyper-Relational Facts on Hyper-Relational Knowledge Graphs',
      meta: (
        <>
          <span className="name-highlight">Sangjun Ji</span>, Byungkook Oh
          <br />
          KR Patent, 출원번호 10-2025-0198284, 출원일 2025년 12월 12일
        </>
      ),
    },
  ];

  const projects = [
    {
      index: '[5]',
      title: 'KU래쪄용: AI-Powered Conflict Mediation Chat App',
      meta: 'Konkuk University, Mar. 2026 - Present',
    },
    {
      index: '[4]',
      title: 'Graph-based Rule-aware Compliance Framework',
      meta: 'Konkuk University, Mar. 2026 - Jun. 2026',
    },
    {
      index: '[3]',
      title: 'Multi-Agentic Graph RAG for Fair Meet-up Location Recommendation and Schedule Coordination',
      meta: 'GLI Lab, Oct. 2025 - Dec. 2025',
    },
    {
      index: '[2]',
      title: 'GraphRAG with User-Item Interactions for Recommendation',
      meta: 'Konkuk University, July. 2024 - Aug. 2024',
    },
    {
      index: '[1]',
      title: 'Pzzk: A Clean, Serverless iOS Calendar',
      meta: 'Team Lett, Jan. 2024 - Feb. 2024',
    },
  ];

  return (
    <>
      <nav className="site-nav">
        <div className="nav-inner">
          <a className="nav-logo" href="#about">
            Sangjun Ji
          </a>
          <div className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#publications">Publications</a>
            <a href="#patents">Patents</a>
            <a href="#awards">Awards</a>
            <a href="#projects">Projects</a>
            <a href="#certs">Certs</a>
          </div>
        </div>
      </nav>

      <main className="page">
        <section id="about" className="hero">
          <div className="avatar-wrap">
            <img src={`${publicUrl}/assets/[지상준]_profile.jpg`} alt="Sangjun Ji" />
          </div>

          <div className="hero-text">
            <p className="hero-eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Undergraduate Student · Konkuk University
            </p>
            <h1>Sangjun Ji</h1>
            <p className="hero-role">Graph Intelligence &amp; LLM Reasoning</p>
            <p className="hero-bio">
              Hello! I am currently an undergraduate student in the{' '}
              <a href="https://cse.konkuk.ac.kr/cse/index.do">
                Department of Computer Science and Engineering
              </a>{' '}
              at {' '}
              <a href="https://www.konkuk.ac.kr/">Konkuk University</a>.
              <br />
              I am also working as a KAIRI intern at{' '}
              <a href="https://sites.google.com/view/kaistdata">Data Mining Lab</a>, {' '}
              <a href="https://gsai.kaist.ac.kr/">KAIST AI</a>, 
              advised by Prof. <a href="https://kijungs.github.io/">Kijung Shin</a>.
              <br />
              Prior to that, I worked as an undergraduate research intern at{' '}
              <a href="https://gli.konkuk.ac.kr/">Graph &amp; Language Intelligence Lab</a>,{' '}
              Konkuk University, advised by Prof.{' '}
              <a href="https://bkoh509.github.io/">Byungkook Oh</a>.
            </p>

            <div className="btn-row">
              {links.map((link) => (
                <a
                  className="btn btn-secondary"
                  href={link.href || undefined}
                  key={link.label}
                  role={link.href ? undefined : 'link'}
                  aria-disabled={link.href ? undefined : 'true'}
                  target={link.href && !link.href.startsWith('mailto:') ? '_blank' : undefined}
                  rel={
                    link.href && !link.href.startsWith('mailto:')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {link.icon ? (
                    <BrandIcon name={link.icon} />
                  ) : (
                    <span aria-hidden="true">{link.emoji}</span>
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="research" className="section">
          <div className="section-label">Research Interests</div>
          <div className="research-panel">
            <div className="interest-grid">
              {interests.map((interest) => (
                <div className="interest-card" key={interest.label}>
                  <span className="interest-emoji" aria-hidden="true">
                    {interest.emoji}
                  </span>
                  <span>{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

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
                  <p className="muted">GPA: 4.28 / 4.5, Major GPA: 4.36 / 4.5</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="experience" className="section">
          <div className="section-label">Experience</div>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={item.title}>
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

        <div className="divider" />

        <section id="publications" className="section">
          <div className="section-heading">
            <div className="section-label">Publications</div>
            <p className="heading-note">
              <strong>*</strong>: Corresponding Author
            </p>
          </div>
          <div className="card-list">
            {publications.map((publication) => (
              <article className="pub-card" key={publication.index}>
                <div className="card-body">
                  <div className="indexed-card">
                    <span className="inline-index">{publication.index}</span>
                    <div>
                      <div className="card-kicker">{publication.venue}</div>
                      <h3>{publication.title}</h3>
                      <p>{publication.authors}</p>
                      {publication.conference && (
                        <p className="muted publication-meta">
                          <em>{publication.conference}</em>
                          {publication.track && (
                            <>
                              <span className="meta-separator">—</span>
                              <em>{publication.track}</em>
                            </>
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="divider" />

        <section id="patents" className="section">
          <div className="section-label">Patents</div>
          <div className="card-list">
            {patents.map((patent) => (
              <article className="pub-card" key={patent.index}>
                <div className="card-body">
                  <div className="indexed-card">
                    <span className="inline-index">{patent.index}</span>
                    <div>
                      <h3>{patent.title}</h3>
                      <p className="muted">{patent.subtitle}</p>
                      <p>{patent.meta}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="divider" />

        <section id="awards" className="section">
          <div className="section-label">Awards</div>
          <article className="pub-card">
            <div className="card-body">
              <div className="indexed-card">
                <span className="inline-index">[1]</span>
                <div>
                  <h3>Kakao x KIISE AI Agent Competition (KSC 2025)</h3>
                  <p className="muted">
                    [P3] Multi-Agentic Graph RAG for Fair Meet-up Location Recommendation and
                    Schedule Coordination
                  </p>
                  <details className="proof-toggle">
                    <summary>Excellence Award (우수상, 3rd tier)</summary>
                    <div className="proof-content">
                      <img
                        src={`${publicUrl}/assets/[지상준]_KSC2025_1.jpg`}
                        alt="KSC 2025 award proof 1"
                      />
                      <img
                        src={`${publicUrl}/assets/[지상준]_KSC2025_2.png`}
                        alt="KSC 2025 award proof 2"
                      />
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </article>
        </section>

        <div className="divider" />

        <section id="projects" className="section">
          <div className="section-label">Projects</div>
          <div className="card-list compact">
            {projects.map((project) => (
              <article className="pub-card compact-card" key={project.index}>
                <div className="card-body">
                  <div className="indexed-card">
                    <span className="inline-index">{project.index}</span>
                    <div>
                      <h3>{project.title}</h3>
                      <p className="muted">{project.meta}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="divider" />

        <section id="certs" className="section">
          <div className="section-label">Licenses &amp; Certifications</div>
          <article className="pub-card compact-card">
            <div className="card-body">
              <div className="indexed-card">
                <span className="inline-index">[1]</span>
                <div>
                  <h3>Craftsman Fork Lift Truck Operator (지게차운전기능사)</h3>
                  <p className="muted">Dec. 2022</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">© 2026 Sangjun Ji</footer>
    </>
  );
};

export default MainPage;
