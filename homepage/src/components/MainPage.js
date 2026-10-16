import React from 'react';
import SiteNav from './SiteNav';
import {
  AboutSection,
  AwardsSection,
  CertificationsSection,
  EducationSection,
  ExperienceSection,
  PatentsSection,
  ProjectsSection,
  PublicationsSection,
  ResearchSection,
  ScholarshipsSection,
} from './sections';

const SectionDivider = () => <div className="divider" />;

const MainPage = () => (
  <>
    <div className="ambient-background" aria-hidden="true">
      <span className="ambient-gradient ambient-gradient-base" />
      <span className="ambient-gradient ambient-gradient-secondary" />
      <span className="ambient-gradient ambient-gradient-tertiary" />
    </div>

    <SiteNav />

    <main className="page">
      <AboutSection />
      <SectionDivider />
      <ResearchSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <PublicationsSection />
      <SectionDivider />
      <PatentsSection />
      <SectionDivider />
      <AwardsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <CertificationsSection />
      <SectionDivider />
      <ScholarshipsSection />
    </main>

    <footer className="site-footer">© 2026 Sangjun Ji</footer>
  </>
);

export default MainPage;
