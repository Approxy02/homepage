import React from 'react';

const MainPage = () => {
  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <main className="page">
      <section className="intro">
        <div className="intro-text">
          <h1 className="name">Sangjun Ji</h1>
          <p className="role">Undergrad student</p>
          <p>
            Hello! I am currently an undergraduate student in the{' '}
            <a href="https://cse.konkuk.ac.kr/cse/index.do">
              Department of Computer Science and Engineering
            </a>{' '}
            at Konkuk University. 
            <br />
            I am also working as an undergraduate research intern at{' '}
            <a href="https://gli.konkuk.ac.kr/">Graph &amp; Language Intelligence Lab</a>, advised by Prof. Byungkook Oh.
          </p>
          <p className="links">
            <a href="mailto:wltkdwns0220@naver.com">Email</a>
            <span className="link-sep">/</span>
            <a
              href={`${publicUrl}/assets/[지상준]_CV.pdf`}
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

      <section className="section section-indented">
        <h2>🔬 Research Interests</h2>
        <ul className="list">
          <li>Structured Reasoning in LLMs</li>
          <li>Knowledge-Grounded Reasoning</li>
          <li>Synergizing LLMs and Graphs</li>
        </ul>
      </section>

      <section className="section section-indented">
        <h2>🎓 Education</h2>
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
            Mar. 2020 ~ Present
            <br />
            <em>(Expected graduation: Feb. 2027)</em>
            <br />
            GPA: 4.28 / 4.5, Major GPA: 4.36 / 4.5
          </div>
        </div>
      </section>

      <section className="section section-indented">
        <h2>💼 Experience</h2>
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
            Advisor: Prof.{` `}
            <a href="https://bkoh509.github.io/">Byungkook Oh</a>
          </div>
        </div>
      </section>

      <section className="section section-indented">
        <h2 className="section-heading-with-note">
          📄 Publications
          <span className="heading-note">
            <em><strong>*</strong>: Corresponding Author</em>
          </span>
        </h2>
        <div className="pub pub-numbered">
          <span className="pub-index">[1]</span>
          <div className="pub-content">
            <span className="pub-title pub-single-line">
              Joint Global-Local Representations via Relation-Entity Pair Encoding for Hyper-Relational Knowledge Graphs
            </span>
            <br />
            <span className="name-highlight">Sangjun Ji</span>, Sangjune Kim, Bonyou Koo, Youngho Lee, Xiongnan Jin and Byungkook Oh*
            <br />
            <span className="conference-line">ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD), 2026</span>
            <br />
            <em>Research Track (Acceptance Rate: 18.5%)</em>
          </div>
        </div>
        <div className="pub pub-numbered">
          <span className="pub-index">[2]</span>
          <div className="pub-content">
            <span className="pub-title pub-single-line">
              Mention-Context Hypergraph Aggregation for Document-level Relation Extraction
            </span>
            {/* <br /> */}
            {/* <em>(문서 수준 관계 추출을 위한 멘션-문맥 하이퍼그래프 기반 집계 기법)</em> */}
            <br />
            <span className="name-highlight">Sangjun Ji</span>, Hye-Yoon Baek, Donghyun Lee and Byungkook Oh*
            <br />
            <span className="conference-line">Korea Computer Congress (KCC), 2026</span>
            <br />
            <em>Undergraduate Paper Track</em>
          </div>
        </div><div className="pub pub-numbered">
          <span className="pub-index">[3]</span>
          <div className="pub-content">
            <span className="pub-title pub-single-line">
              Internalizing Negation-Gated Logical Rules into LLMs for Document-Level Relation Extraction
            </span>
            <br />
            Hye-Yoon Baek, <span className="name-highlight">Sangjun Ji</span>, Jimyeung Seo, Hae-Yoon Koo, Xiongnan Jin and Byungkook Oh*
            <br />
            <em className="under-review">(Under Review)</em>
          </div>
        </div>
      </section>

      <section className="section section-indented">
        <h2>💡 Patents</h2>
        <div className="pub pub-numbered">
          <span className="pub-index">[1]</span>
          <div className="pub-content">
            <span className="pub-title pub-single-line">
              하이퍼관계형 지식 그래프 상의 하이퍼관계형 사실에 대한 링크 예측 방법 및 장치 
            </span>
            <br />
            <span className="pub-single-line">
              (Method and Apparatus for Link Prediction of Hyper-Relational Facts on Hyper-Relational Knowledge Graphs)
            </span>
            <br />
            <span className="name-highlight">Sangjun Ji</span>, Byungkook Oh
            <br />
            KR Patent, 출원번호 10-2025-0198284, 출원일 2025년 12월 12일
          </div>
        </div>
      </section>

      <section className="section section-indented">
        <h2>🏆 Awards</h2>
        <div className="pub pub-numbered">
          <span className="pub-index">[1]</span>
          <div className="pub-content">
            <span className="pub-title pub-single-line">
              Kakao × KIISE AI Agent Competition (KSC 2025)
            </span>
            <br />
            <em className="pub-single-line">
              [P3] Multi-Agentic Graph RAG for Fair Meet-up Location Recommendation and Schedule Coordination
            </em>
            <br />
            <details className="proof-toggle">
              <summary>
                Excellence Award (우수상, 3rd tier)
              </summary>
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
      </section>

      <section className="section section-indented">
        <h2>🛠️ Projects</h2>
        <div className="pub pub-numbered">
          <span className="pub-index">[5]</span>
          <div className="pub-content">
            <span className="pub-title pub-single-line">
              Graph-based Rule-aware Compliance Framework 
            </span>
            <br />
            <em>Konkuk University., Mar. 2026 - Present</em>
          </div>
        </div><div className="pub pub-numbered">
          <span className="pub-index">[4]</span>
          <div className="pub-content">
            <span className="pub-title pub-single-line">
              KU래쪄용: AI-Powered Conflict Mediation Chat App 
            </span>
            <br />
            <em>Konkuk University., Mar. 2026 - Present</em>
          </div>
        </div><div className="pub pub-numbered">
          <span className="pub-index">[3]</span>
          <div className="pub-content">
            <span className="pub-title pub-single-line">
              Multi-Agentic Graph RAG for Fair Meet-up Location Recommendation and Schedule Coordination
            </span>
            <br />
            <em>GLI Lab., Oct. 2025 - Dec. 2025</em>
          </div>
        </div>
        <div className="pub pub-numbered">
          <span className="pub-index">[2]</span>
          <div className="pub-content">
            <span className="pub-title pub-single-line">
              GraphRAG with User-Item Interactions for Recommendation
            </span>
            <br />
            <em>Konkuk University., July. 2024 - Aug. 2024</em>
          </div>
        </div>
        <div className="pub pub-numbered">
          <span className="pub-index">[1]</span>
          <div className="pub-content">
            <span className="pub-title pub-single-line">
              Pzzk: A Clean, Serverless iOS Calendar          
            </span>
            <br />
            <em>Team Lett., Jan. 2024 - Feb. 2024</em>
          </div>
        </div>
      </section>

      <section className="section section-indented">
        <h2>📜 Licenses & Certifications</h2>
        <div className="pub pub-numbered">
          <span className="pub-index">[1]</span>
          <div className="pub-content">
            <span className="pub-title">
              Craftsman Fork Lift Truck Operator (지게차운전기능사)
            </span>
            <br />
            Dec. 2022
          </div>
        </div>
      </section>

    </main>
  );
};

export default MainPage;
