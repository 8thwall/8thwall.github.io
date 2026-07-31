import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HeroCanvas from '@site/src/components/HeroCanvas';
import {REDIRECT_SCRIPT} from './redirects'

export default function Home() {
  return (
    <Layout title="Open Source AR & 3D" description="Build immersive AR and interactive 3D experiences. Free and open source.">
      <Head>
        <title>8th Wall - Open Source AR &amp; 3D</title>
        <meta property="og:title" content="8th Wall - Open Source AR & 3D" />
        <meta name="twitter:title" content="8th Wall - Open Source AR & 3D" />
        <meta name="twitter:description" content="Build immersive AR and interactive 3D experiences. Free and open source." />
        <script type="module">{REDIRECT_SCRIPT}</script>
      </Head>
      <section className="hero" id="hero">
        <HeroCanvas />
        <div className="container hero-content">
          <h1 className="hero-title">
            8th Wall<br />
            is now open source
          </h1>
          <p className="hero-description">
            Everything you need to build 3D experiences and WebAR, now free for everyone.
          </p>
        </div>
      </section>

      <section id="available" className="section product-cards-section">
        <div className="container">
          <h2 className="section-title">Available Today</h2>
          <p className="section-subtitle">More components on the way — follow along on <a href="https://github.com/8thwall/8thwall" target="_blank" rel="noopener" className="subtle-link">GitHub</a> and <a href="https://8th.io/discord" target="_blank" rel="noopener" className="subtle-link">Discord</a>.</p>
          <div className="product-cards-grid">
            <div className="product-card">
              <div className="product-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="product-card-title">XR Engine</h3>
              <p className="product-card-description">Powerful AR features for web and native</p>
              <ul className="product-card-list">
                <li>World Effects*</li>
                <li>Absolute Scale*</li>
                <li>Image Targets</li>
                <li>Face Effects</li>
                <li>Sky Effects</li>
              </ul>
              <p className="product-card-footnote">*Available via XR engine binary only</p>
              <a href="https://8th.io/xrjs" className="btn btn-outline" target="_blank" rel="noopener">View on GitHub</a>
            </div>
            <div className="product-card">
              <div className="product-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="product-card-title">8th Wall Desktop</h3>
              <p className="product-card-description">XR Game Engine</p>
              <ul className="product-card-list">
                <li>Visual editor</li>
                <li>Develop 3D & AR</li>
                <li>Export to web & native*</li>
              </ul>
              <p className="product-card-footnote">* Native export coming soon</p>
              <Link to="/downloads" className="btn btn-outline">Download</Link>
            </div>
            <div className="product-card">
              <div className="product-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className="product-card-title">Utilities</h3>
              <p className="product-card-description">Open source tools to streamline your workflow</p>
              <ul className="product-card-list">
                <li>Image Target Processor</li>
                <li>XR Extras - UI Components & helpers</li>
              </ul>
              <p className="product-card-footnote">More coming soon</p>
              <a href="https://github.com/8thwall/8thwall" className="btn btn-outline" target="_blank" rel="noopener">View on GitHub</a>
            </div>
            <div className="product-card">
              <div className="product-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="product-card-title">Example Projects</h3>
              <p className="product-card-description">Ready-to-use sample projects</p>
              <ul className="product-card-list">
                <li>Starter templates</li>
                <li>Feature demos</li>
                <li>Best practices</li>
              </ul>
              <a href="https://8th.io/examples" className="btn btn-outline" target="_blank" rel="noopener">View on GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section id="getting-started" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Getting Started</h2>
          <p className="section-subtitle">Begin developing in a few simple steps, then deploy your project anywhere.</p>
          <div className="local-dev-grid">
            <div className="local-dev-steps-card">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Download & Install</h3>
                  <p className="step-description">Get the latest release for Mac or Windows from the downloads page, then run the installer and open 8th Wall Desktop.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Start Building</h3>
                  <p className="step-description">Create a new project or open an existing one. See our <a href="https://8th.io/getting-started" target="_blank" rel="noopener">engine integration guide</a></p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Export your project</h3>
                  <p className="step-description">Host your built project anywhere. See our <a href="https://8th.io/publishing" target="_blank" rel="noopener">publishing guide</a> for options.</p>
                </div>
              </div>
              <Link to="/downloads" className="btn btn-outline">Download 8th Wall</Link>
            </div>
            <div className="local-dev-content">
              <p className="local-dev-text">You're in Control</p>
              <p className="local-dev-text">8th Wall is free to use, with no login requirement, and offers complete freedom in how you build! Bring your own source control management, tools, and workflows for maximum flexibility. 8th Wall projects can be deployed and hosted anywhere that matches your needs.</p>
              <p className="local-dev-text">Have an existing project? View our <a href="https://8th.io/migration" target="_blank" rel="noopener">migration guide</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="get-involved" className="section">
        <div className="container">
          <h2 className="section-title">Get Involved</h2>
          <p className="section-subtitle">Join the community and help shape the future of 8th Wall.</p>
          <div className="involve-grid">
            <div className="involve-card">
              <div className="involve-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="involve-title">Community</h3>
              <p className="involve-description">Connect with other developers and get help</p>
              <ul className="involve-list">
                <li><a href="https://8th.io/discord" target="_blank" rel="noopener">Join the Discord</a></li>
                <li><a href="https://github.com/orgs/8thwall/discussions" target="_blank" rel="noopener">GitHub Discussions</a></li>
                <li><a href="/blog">Follow the blog</a></li>
              </ul>
            </div>
            <div className="involve-card">
              <div className="involve-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="involve-title">Contribute</h3>
              <p className="involve-description">Help improve 8th Wall for everyone</p>
              <ul className="involve-list">
                <li><a href="https://github.com/8thwall/8thwall" target="_blank" rel="noopener">⭐ Star on GitHub</a></li>
                <li><a href="https://github.com/8thwall/8thwall/issues" target="_blank" rel="noopener">Report bugs & issues</a></li>
                <li><a href="https://github.com/8thwall/8thwall/pulls" target="_blank" rel="noopener">Submit pull requests</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section section-alt">
        <div className="container">
          <h2 className="section-title">FAQ</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">Can I use the XR Engine with other platforms?</summary>
              <p className="faq-answer">
                Yes! The XR Engine is designed to work with popular 3D frameworks including A-Frame, Three.js, Babylon.js, and PlayCanvas. You can integrate it into your existing workflow and use it alongside other tools and platforms.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Can I use this for commercial projects?</summary>
              <p className="faq-answer">
                Yes. You can use 8th Wall to build commercial AR experiences, branded campaigns, and client projects. The open source components are free to use, and the distributed engine binary permits commercial use as part of a broader application or experience. See the <a href="https://8th.io/license-FAQ" target="_blank" rel="noopener">full FAQ</a> for details on permitted use and licensing.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Can I migrate existing projects?</summary>
              <p className="faq-answer">
                If you exported your project before February 28, 2026, you can migrate it to run locally or self-host it. Project export is no longer available. Check the <a href="https://8th.io/migration" target="_blank" rel="noopener">migration guide</a> for instructions, or see the full <a href="https://8th.io/FAQ" target="_blank" rel="noopener">migration FAQ</a> for more details.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Is there a paid tier?</summary>
              <p className="faq-answer">No. All paid subscriptions ended on February 28, 2026 when the hosted platform was retired. The open source tools and distributed engine binary are free to use.</p>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Do I need an account?</summary>
              <p className="faq-answer">No account is required. Simply download the tools from GitHub and start building. The hosted platform has been retired, so there's no login or account management needed.</p>
            </details>
            <details className="faq-item">
              <summary className="faq-question">Is everything fully open source?</summary>
              <p className="faq-answer">
                The XR Engine is distributed as a binary — free to use, including for commercial projects under a limited use license. See the <a href="https://8th.io/license-FAQ" target="_blank" rel="noopener">full FAQ</a> for details. 8th Wall Desktop is available as an offline download today, with full open source coming soon. Everything else (Image Targets, Face Effects, Sky Effects, utilities, example projects) is fully open source under the MIT License. We have more features and tools coming soon! Follow along on GitHub and Discord.
              </p>
            </details>
            <details className="faq-item">
              <summary className="faq-question">How can I get involved?</summary>
              <p className="faq-answer">
                Join our Discord community, participate in GitHub Discussions, report issues, submit pull requests, or help improve documentation. Check out the <a href="#get-involved">Get Involved</a> section for more details.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="download" className="section section-cta">
        <div className="container">
          <h2 className="section-title">Ready to Build?</h2>
          <p className="section-subtitle">Download 8th Wall and start creating AR experiences today.</p>
          <div className="cta-buttons">
            <Link to="/downloads" className="btn btn-primary btn-lg">Download</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
