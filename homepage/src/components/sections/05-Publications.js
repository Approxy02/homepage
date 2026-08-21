import React, { useState } from 'react';

const publicationFilters = [
  'All',
  'Conference',
  'Domestic',
  'Workshop',
  'Journal',
  'Preprint',
];

const publications = [
  {
    index: '[C2]',
    year: '2026',
    category: 'Conference',
    venue: 'EMNLP 2026 Findings',
    title:
      'Internalizing Negation-Gated Logical Rules into LLMs for Document-Level Relation Extraction',
    authors: (
      <>
        Hye-Yoon Baek, <span className="name-highlight">Sangjun Ji</span>, Jimyeung Seo, Hae-Yoon Koo, Xiongnan Jin and Byungkook Oh*
      </>
    ),
    conference: 'Conference on Empirical Methods in Natural Language Processing (EMNLP), 2026',
    track: 'Findings Track (Acceptance Rate: 14.3%)',
  },
  {
    index: '[C1]',
    year: '2026',
    category: 'Conference',
    venue: 'KDD 2026',
    title:
      'Joint Global-Local Representations via Relation-Entity Pair Encoding for Hyper-Relational Knowledge Graphs',
    href: 'https://dl.acm.org/doi/10.1145/3770855.3818000',
    authors: (
      <>
        <span className="name-highlight">Sangjun Ji</span>, Sangjune Kim, Bonyou Koo, Youngho Lee, Xiongnan Jin and Byungkook Oh*
      </>
    ),
    conference: 'ACM SIGKDD Conference on Knowledge Discovery and Data Mining, 2026',
    track: 'Research Track (Acceptance Rate: 18.5%)',
  },
  {
    index: '[D1]',
    year: '2026',
    category: 'Domestic',
    venue: 'KCC 2026',
    title: 'Mention-Context Hypergraph Aggregation for Document-level Relation Extraction',
    authors: (
      <>
        <span className="name-highlight">Sangjun Ji</span>, Hye-Yoon Baek, Donghyun Lee and Byungkook Oh*
      </>
    ),
    conference: 'Korea Computer Congress, 2026',
    track: 'Undergraduate Paper Track',
  },
];

const PublicationsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredPublications =
    activeFilter === 'All'
      ? publications
      : publications.filter((publication) => publication.category === activeFilter);
  const publicationsByYear = filteredPublications.reduce((groups, publication) => {
    const yearGroup = groups.get(publication.year) || [];
    yearGroup.push(publication);
    groups.set(publication.year, yearGroup);
    return groups;
  }, new Map());

  return (
    <section id="publications" className="section">
      <div className="section-heading">
        <h2 className="section-label">Publications</h2>
        <p className="heading-note">
          <strong>*</strong> Corresponding author
        </p>
      </div>

      <div className="publication-filters" aria-label="Publication filters">
        {publicationFilters.map((filter) => (
          <button
            className={`publication-filter${activeFilter === filter ? ' is-active' : ''}`}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="publication-years" aria-live="polite">
        {publicationsByYear.size > 0 ? (
          [...publicationsByYear.entries()].map(([year, yearPublications]) => (
            <section
              className="publication-year-group"
              aria-labelledby={`publication-year-${year}`}
              key={year}
            >
              <div className="publication-year-heading">
                <h3 id={`publication-year-${year}`}>{year}</h3>
                <span aria-hidden="true" />
              </div>

              <div className="publication-list">
                {yearPublications.map((publication) => {
                  const PublicationCard = publication.href ? 'a' : 'article';

                  return (
                    <PublicationCard
                      className={`publication-card${
                        publication.href ? ' publication-card-link' : ''
                      }`}
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
                      <div className="publication-eyebrow">
                        <span className="publication-index">{publication.index}</span>
                        <span className="publication-venue">{publication.venue}</span>
                        {publication.href && (
                          <span className="publication-link-cue" aria-hidden="true">
                            View paper <span>↗</span>
                          </span>
                        )}
                      </div>

                      <h4 className="publication-title">{publication.title}</h4>
                      <p className="publication-authors">{publication.authors}</p>

                      {publication.conference && (
                        <p className="publication-meta">
                          <span>{publication.conference}</span>
                          {publication.track && (
                            <>
                              <span className="meta-separator" aria-hidden="true">
                                ·
                              </span>
                              <span>{publication.track}</span>
                            </>
                          )}
                        </p>
                      )}
                    </PublicationCard>
                  );
                })}
              </div>
            </section>
          ))
        ) : (
          <p className="publication-empty">
            No {activeFilter.toLowerCase()} publications yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
