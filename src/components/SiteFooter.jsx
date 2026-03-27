import React from 'react';
import Link from '@docusaurus/Link';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="site-footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="/logo.png" alt="8th Wall" width={25} height={25} loading="lazy" />
            </Link>
            <p className="footer-tagline">Build immersive AR and interactive 3D. Free and open.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h2 className="footer-heading">Product</h2>
              <Link to="/#available">Features</Link>
              <Link to="/#getting-started">Getting Started</Link>
              <Link to="/downloads">Download</Link>
              <Link to="/#faq">FAQ</Link>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Resources</h2>
              <a href="https://8th.io/migration" target="_blank" rel="noopener">Documentation</a>
              <a href="https://www.youtube.com/@8thwall" target="_blank" rel="noopener">Video Tutorials</a>
              <a href="https://github.com/8thwall/8thwall" target="_blank" rel="noopener">GitHub</a>
              <a href="https://8th.io/examples" target="_blank" rel="noopener">Example Projects</a>
              <Link to="/blog">Blog</Link>
            </div>
            <div className="footer-column">
              <h2 className="footer-heading">Get Involved</h2>
              <a href="https://8th.io/discord" target="_blank" rel="noopener">Discord</a>
              <a href="https://github.com/orgs/8thwall/discussions" target="_blank" rel="noopener">Discussions</a>
              <a href="https://www.instagram.com/8thwall" target="_blank" rel="noopener">Instagram</a>
              <a href="https://www.linkedin.com/company/8thwall" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2026 Niantic Spatial, Inc. All rights reserved.</p>
          <Link to="/legacy-policies" className="footer-legal-link">Legacy Policies</Link>
        </div>
      </div>
    </footer>
  );
}
