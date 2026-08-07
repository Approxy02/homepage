import React from 'react';

const scholarships = [
  {
    index: '[3]',
    title: 'Academic Excellence Scholarship (70%)',
    meta: 'Konkuk University, 2026 Fall',
    amount: '3,516,800 KRW',
  },
  {
    index: '[2]',
    title: 'Academic Excellence Scholarship (100%)',
    meta: 'Konkuk University, 2024 Fall',
    amount: '4,642,000 KRW',
  },
  {
    index: '[1]',
    title: 'Academic Excellence Scholarship (40%)',
    meta: 'Konkuk University, 2024 Spring',
    amount: '1,856,800 KRW',
  },
];

const ScholarshipsSection = () => (
  <section id="scholarships" className="section section-subtle">
    <div className="section-label">Scholarships</div>
    <div className="card-list compact">
      {scholarships.map((scholarship) => (
        <article className="pub-card compact-card" key={scholarship.index}>
          <div className="card-body">
            <div className="indexed-card">
              <span className="inline-index">{scholarship.index}</span>
              <div>
                <h3>{scholarship.title}</h3>
                <p className="muted">
                  {scholarship.meta} · {scholarship.amount}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ScholarshipsSection;
