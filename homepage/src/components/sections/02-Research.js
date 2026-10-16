import React from 'react';
import GlassCard from '../GlassCard';

const interests = [
  { emoji: '🔗', label: 'Synergizing LLMs and Graphs' },
  { emoji: '📚', label: 'Knowledge-Grounded Reasoning' },
  { emoji: '🧠', label: 'Structured Reasoning in LLMs' },
];

const ResearchSection = () => (
  <section id="research" className="section">
    <div className="section-label">Research Interests</div>
    <div className="research-panel">
      <div className="interest-grid">
        {interests.map((interest) => (
          <GlassCard as="div" className="interest-card" key={interest.label}>
            <span className="interest-emoji" aria-hidden="true">
              {interest.emoji}
            </span>
            <span>{interest.label}</span>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
