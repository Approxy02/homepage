import React from 'react';
import BrandIcon from '../BrandIcon';

const publicUrl = process.env.PUBLIC_URL || '';

const links = [
  { icon: 'email', label: 'Email', href: 'mailto:sangjunji02@gmail.com' },
  { icon: 'cv', label: 'CV', href: `${publicUrl}/assets/CV_(v260816).pdf` },
  { icon: 'github', label: 'GitHub', href: 'https://github.com/Approxy02' },
  {
    icon: 'scholar',
    label: 'Google Scholar',
    href: 'https://scholar.google.co.kr/citations?user=K6HnM2IAAAAJ&hl=ko',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sangjun-ji-6616933b9/',
  },
];

const AboutSection = () => (
  <section id="about" className="hero">
    <div className="avatar-wrap">
      <img src={`${publicUrl}/assets/[지상준]_profile.jpg`} alt="Sangjun Ji" />
    </div>

    <div className="hero-text">
      <p className="hero-eyebrow">
        <span className="status-dot" aria-hidden="true" />
        Undergraduate Student · Konkuk University
      </p>
      <h1>Sangjun Ji</h1>
      <p className="hero-role">Graph Intelligence &amp; LLM Reasoning</p>
      <p className="hero-bio">
        Hello! I am currently an undergraduate student in the{' '}
        <a href="https://cse.konkuk.ac.kr/cse/index.do">
          Department of Computer Science and Engineering
        </a>{' '}
        at <a href="https://www.konkuk.ac.kr/">Konkuk University</a>.
        <br />
        I am also working as a Research Intern at{' '}
        <a href="https://sites.google.com/view/kaistdata">Data Mining Lab</a>,{' '}
        <a href="https://gsai.kaist.ac.kr/">KAIST AI</a>, advised by Prof.{' '}
        <a href="https://kijungs.github.io/">Kijung Shin</a>.
        <br />
        Prior to that, I worked as an Research Intern at{' '}
        <a href="https://gli.konkuk.ac.kr/">Graph &amp; Language Intelligence Lab</a>,{' '}
        Konkuk University, advised by Prof.{' '}
        <a href="https://bkoh509.github.io/">Byungkook Oh</a>.
      </p>

      <div className="btn-row">
        {links.map((link) => (
          <a
            className="btn btn-secondary"
            href={link.href || undefined}
            key={link.label}
            role={link.href ? undefined : 'link'}
            aria-disabled={link.href ? undefined : 'true'}
            target={link.href && !link.href.startsWith('mailto:') ? '_blank' : undefined}
            rel={
              link.href && !link.href.startsWith('mailto:')
                ? 'noopener noreferrer'
                : undefined
            }
          >
            <BrandIcon name={link.icon} />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
