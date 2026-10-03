import React from 'react';

const interests = [
  { emoji: '🧠', label: 'Structured Reasoning in LLMs' },
  { emoji: '📚', label: 'Knowledge-Grounded Reasoning' },
  { emoji: '🕸️', label: 'Synergizing LLMs and Graphs' },
];

const ResearchSection = () => (
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
);

export default ResearchSection;
