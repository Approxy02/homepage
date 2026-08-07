import React from 'react';

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
    title:
      'Multi-Agentic Graph RAG for Fair Meet-up Location Recommendation and Schedule Coordination',
    award: 'Excellence Award, Kakao x KIISE AI Agent Competition (KSC 2025)',
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

const ProjectsSection = () => (
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
                {project.award && (
                  <p className="award-highlight">
                    <em>{project.award}</em>
                  </p>
                )}
                <p className="muted">{project.meta}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
