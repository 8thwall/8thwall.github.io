import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';

export default function SiteNav() {
  const [stuck, setStuck] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const updateStuck = () => setStuck(header.getBoundingClientRect().top <= 0);
    const setHeight = () => {
      if (header) document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
    };
    setHeight();
    window.addEventListener('scroll', updateStuck, { passive: true });
    window.addEventListener('resize', setHeight);
    updateStuck();
    return () => {
      window.removeEventListener('scroll', updateStuck);
      window.removeEventListener('resize', setHeight);
    };
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('nav-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('nav-open');
      document.body.style.overflow = '';
    }
  }, [drawerOpen]);

  const navLinks = (
    <>
      <a href="https://github.com/8thwall" target="_blank" rel="noopener">GitHub</a>
      <a href="https://8thwall.com/docs/" target="_blank" rel="noopener">Docs</a>
      <a href="https://8th.io/examples" target="_blank" rel="noopener">Samples</a>
      <a href="https://www.youtube.com/@8thwall" target="_blank" rel="noopener">Tutorials</a>
      <a href="https://8th.io/blog" target="_blank" rel="noopener">Blog</a>
      <a href="https://8th.io/discord" target="_blank" rel="noopener">Discord</a>
    </>
  );

  return (
    <header className={`header site-header ${stuck ? 'is-stuck' : ''}`}>
      <nav className="nav">
        <div className="nav-start">
          <button
            type="button"
            className="nav-toggle"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
          <Link to="/" className="logo">
            <img src="/logo.png" alt="8th Wall" width={32} height={32} />
          </Link>
        </div>
        <div className="nav-links">{navLinks}</div>
        <div className="nav-actions">
          <Link to="/downloads" className="btn btn-primary">Download</Link>
        </div>
      </nav>
      <div
        className="nav-drawer-overlay"
        id="nav-overlay"
        aria-hidden={!drawerOpen}
        onClick={() => setDrawerOpen(false)}
      />
      <div className="nav-drawer" id="nav-drawer" aria-hidden={!drawerOpen} onClick={() => setDrawerOpen(false)}>
        {navLinks}
      </div>
    </header>
  );
}
