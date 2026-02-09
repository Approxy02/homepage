import React from 'react';

const MainPage = () => {
  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <main className="page">
      <section className="intro">
        <div className="intro-text">
          <h1 className="name">Sangjun Ji</h1>
          <p className="role">Bachelor Student</p>
          <p>
            Hello! I am currently an undergraduate student in the{' '}
            <a href="https://cse.konkuk.ac.kr/cse/index.do">
              Department of Computer Science and Engineering
            </a>{' '}
            at Konkuk University. 
            <br />
            I am also working as an undergraduate research intern at{' '}
            <a href="https://gli.konkuk.ac.kr/">Graph &amp; Language Intelligence Lab</a>, advised by Prof.{` `}
            <a href="https://bkoh509.github.io/">Byungkook Oh</a>.
          </p>
          <p className="links">
            <a href="mailto:wltkdwns0220@naver.com">Email</a>
            <span className="link-sep">/</span>
            <a
              href={`${publicUrl}/assets/[지상준]_CV_(v260114).pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
            <span className="link-sep">/</span>
            <a href="https://github.com/Approxy02">GitHub</a>
            <span className="link-sep">/</span>
            <a href="https://uncovered-tarp-237.notion.site/sangjunji">Portfolio</a>
          </p>
        </div>
        <div className="intro-photo">
          <img src={`${publicUrl}/images/Sangjun_Ji.jpg`} alt="Sangjun Ji" />
        </div>
      </section>

      <section className="section">
        <h2>Research Interests</h2>
        <ul className="list">
          <li>Graph ML/DL</li>
          <li>(Hyper)Graph Representation Learning</li>
          <li>Synergizing LLMs and Graphs</li>
        </ul>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="item">
          <div className="item-media" aria-hidden="true">
            <img src={`${publicUrl}/images/Konkuk_University.png`} alt="Konkuk University Logo" />
          </div>
          <div className="item-body">
            <strong>
              B.S. in Computer Science and Engineering
            </strong>
            <br />
            Konkuk University, Seoul, South Korea
            <br />
            Mar. 2020 ~ Present (Expected graduation: Feb. 2027)
            <br />
            GPA: 4.28 / 4.5, Major GPA: 4.36 / 4.5
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <div className="item">
          <div className="item-media" aria-hidden="true">
            <img src={`${publicUrl}/images/GLI_Lab.png`} alt="GLI Lab Logo" />
          </div>
          <div className="item-body">
            <strong>Undergraduate Research Intern</strong>
            <br />
            <a href="https://gli.konkuk.ac.kr/">Graph &amp; Language Intelligence Lab</a>, Konkuk University
            <br />
            Jul. 2024 ~ Present
            <br />
            <br />
            Advisor: Prof. Byungkook Oh
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Publications</h2>
        <div className="pub">
          <span className="pub-title">
            Disentangled Global-Local Representations via Relation-Entity Pair Encoding for Hyper-Relational KGs
          </span>
          <br />
            <span className="name-highlight">Sangjun Ji</span>, Sangjune Kim, Bonyou Koo, Youngho Lee, Xiongnan Jin, and Byungkook Oh*
          <br />
          <em>Under Review</em>
        </div>
      </section>

      <section className="section">
        <h2>Patents</h2>
        <div className="pub">
          <span className="pub-title">
            하이퍼관계형 지식 그래프 상의 하이퍼관계형 사실에 대한 링크 예측 방법 및 장치 
          </span>
          <br />
          (Method and Apparatus for Link Prediction of Hyper-Relational Facts on Hyper-Relational Knowledge Graphs)
          <br />
          <span className="name-highlight">Sangjun Ji</span>, Byungkook Oh
          <br />
          KR Patent, 출원번호 10-2025-0198284, 출원일 2025년 12월 12일
        </div>
      </section>

      <section className="section">
        <h2>Awards</h2>
        <div className="pub">
          <span className="pub-title">
            카카오x한국정보과학회 AI 에이전트 경진대회
          </span>
          <br />
          Award of Excellence (우수상), 2025
        </div>
      </section>
    </main>
  );
};

export default MainPage;
