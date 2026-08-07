import React from 'react';

const publicUrl = process.env.PUBLIC_URL || '';

const awards = [
  {
    index: '[1]',
    title: 'Kakao x KIISE AI Agent Competition (KSC 2025)',
    detail:
      '[P3] Multi-Agentic Graph RAG for Fair Meet-up Location Recommendation and Schedule Coordination',
    proofTitle: 'Excellence Award (우수상, 3rd tier)',
    proofImages: [
      {
        src: `${publicUrl}/assets/[지상준]_KSC2025_1.jpg`,
        alt: 'KSC 2025 award proof 1',
      },
      {
        src: `${publicUrl}/assets/[지상준]_KSC2025_2.png`,
        alt: 'KSC 2025 award proof 2',
      },
    ],
  },
];

const AwardsSection = () => (
  <section id="awards" className="section">
    <div className="section-label">Awards</div>
    <div className="card-list">
      {awards.map((award) => (
        <article className="pub-card" key={award.index}>
          <div className="card-body">
            <div className="indexed-card">
              <span className="inline-index">{award.index}</span>
              <div>
                <h3>{award.title}</h3>
                <p className="muted">{award.detail}</p>
                {award.proofImages && (
                  <details className="proof-toggle">
                    <summary>{award.proofTitle}</summary>
                    <div className="proof-content">
                      {award.proofImages.map((image) => (
                        <img src={image.src} alt={image.alt} key={image.src} />
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default AwardsSection;
