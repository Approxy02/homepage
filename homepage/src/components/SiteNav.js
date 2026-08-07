import React from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Patents', href: '#patents' },
  { label: 'Awards', href: '#awards' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certs', href: '#certs' },
];

const SiteNav = () => (
  <nav className="site-nav">
    <div className="nav-inner">
      <a className="nav-logo" href="#about">
        Sangjun Ji
      </a>
      <div className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default SiteNav;
