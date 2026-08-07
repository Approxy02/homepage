import React from 'react';

const publications = [
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
  },
  {
    index: '[2]',
    venue: 'KDD 2026',
    title:
      'Joint Global-Local Representations via Relation-Entity Pair Encoding for Hyper-Relational Knowledge Graphs',
    href: 'https://dl.acm.org/doi/10.1145/3770855.3818000',
    authors: (
      <>
        <span className="name-highlight">Sangjun Ji</span>, Sangjune Kim, Bonyou Koo,
        Youngho Lee, Xiongnan Jin and Byungkook Oh*
      </>
    ),
    conference: 'ACM SIGKDD Conference on Knowledge Discovery and Data Mining, 2026',
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
    conference: 'Korea Computer Congress, 2026',
    track: 'Undergraduate Paper Track',
  },
];

const PublicationsSection = () => (
  <section id="publications" className="section">
    <div className="section-heading">
      <div className="section-label">Publications</div>
      <p className="heading-note">
        <strong>*</strong>: Corresponding Author
      </p>
    </div>
    <div className="card-list">
      {publications.map((publication) => {
        const PublicationCard = publication.href ? 'a' : 'article';

        return (
          <PublicationCard
            className={`pub-card${publication.href ? ' pub-card-link' : ''}`}
            key={publication.index}
            {...(publication.href
              ? {
                  href: publication.href,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': `${publication.title} — View paper`,
                }
              : {})}
          >
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
            {publication.href && (
              <span className="paper-link-cue" aria-hidden="true">
                View paper <span>↗</span>
              </span>
            )}
          </PublicationCard>
        );
      })}
    </div>
  </section>
);

export default PublicationsSection;
