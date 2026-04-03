import React from 'react';
import Layout from '@theme/Layout';

export default function Downloads() {
  return (
    <Layout title="Downloads" description="Download 8th Wall Desktop for Mac and Windows.">
      <section className="hero downloads-hero">
        <div className="container">
          <h1 className="hero-title">Downloads</h1>
          <p className="hero-description">
            Download 8th Wall Desktop for Mac or Windows.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="download-category">
            <div className="download-category-header">
              <div className="download-category-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className="download-category-info">
                <h2 className="download-category-title">8th Wall Desktop</h2>
                <p className="download-category-description">XR Game Engine for development. Build 3D & AR experiences and deploy to web.</p>
              </div>
            </div>
            <div className="download-columns">
              <div className="download-column">
                <h3 className="download-column-title">Mac</h3>
                <div className="download-column-buttons">
                  <a href="https://8th.io/mac-arm64-latest" className="download-option" download>
                    <div className="download-option-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                    </div>
                    <div className="download-option-info">
                      <span className="download-option-title">Download for Apple Silicon</span>
                    </div>
                    <svg className="download-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                  <a href="https://8th.io/mac-intel-latest" className="download-option" download>
                    <div className="download-option-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                    </div>
                    <div className="download-option-info">
                      <span className="download-option-title">Download for Intel</span>
                    </div>
                    <svg className="download-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="download-column">
                <h3 className="download-column-title">Windows</h3>
                <div className="download-column-buttons">
                  <a href="https://8th.io/win-x64-latest" className="download-option" download>
                    <div className="download-option-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 12V6.75l9-5.25 9 5.25V12l-9 5.25L3 12zm9 3.75l7-4.083V7.5L12 11.583 5 7.5v4.167l7 4.083zM12 3L5.5 6.75 12 10.5l6.5-3.75L12 3z" />
                        <path d="M3 12v5.25l9 5.25 9-5.25V12l-9 5.25L3 12z" />
                      </svg>
                    </div>
                    <div className="download-option-info">
                      <span className="download-option-title">Download for x64</span>
                    </div>
                    <svg className="download-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <p className="download-note">Past releases can be accessed on <a href="http://github.com/8thwall/desktop/releases">Github Releases</a></p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
