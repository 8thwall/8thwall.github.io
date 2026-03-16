/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '8th Wall',
  markdown: {
    format: 'detect',
  },
  tagline: 'Open Source AR & 3D',
  favicon: 'favicon.svg',
  url: 'https://8thwall.org',
  baseUrl: '/',
  organizationName: '8thwall',
  projectName: '8thwall.github.io',
  trailingSlash: false,
  onBrokenAnchors: 'warn',
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'migration',
      content: '<span class="announcement-text">The hosted 8th Wall platform was retired Feb 28, 2026. Existing published experiences continue to run until Feb 28, 2027.</span><span class="announcement-btns"><a target="_blank" rel="noopener" href="https://8th.io/migration" class="banner-btn">View Migration Guide</a><a target="_blank" rel="noopener" href="https://8th.io/blog" class="banner-btn">View Announcements</a></span>',
      backgroundColor: '#111',
      textColor: '#a1a1a1',
      isCloseable: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: '8th Wall',
        src: 'logo.png',
        srcDark: 'logo.png',
        height: '24px',
        style: { height: '24px', width: 'auto' },
      },
      items: [
        { href: 'https://github.com/8thwall', label: 'GitHub', position: 'left' },
        { href: 'https://8th.io/examples', label: 'Samples', position: 'left' },
        { href: 'https://www.youtube.com/@8thwall', label: 'Tutorials', position: 'left' },
        { href: 'https://8th.io/blog', label: 'Blog', position: 'left' },
        { href: 'https://8th.io/discord', label: 'Discord', position: 'left' },
        { href: 'https://www.8thwall.com/docs', label: 'Docs', position: 'left' },
        {
          type: 'html',
          position: 'right',
          value: '<a href="/downloads" class="btn btn-primary navbar-download-btn">Download</a>',
        },
      ],
    },
    footer: {},
    metadata: [
      { property: 'og:image', content: 'https://8thwall.org/social-cover.png' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:image', content: 'https://8thwall.org/social-cover.png' },
    ],
  },
  clientModules: [require.resolve('./src/clientModules/navbarScroll.js')],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'legacy-policies',
        path: 'legacy-policies',
        routeBasePath: 'legacy-policies',
        sidebarPath: require.resolve('./sidebars-legacy.js'),
      },
    ],
  ],
};

module.exports = config;
