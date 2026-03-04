// Path-based redirect configuration for GitHub Pages
(function() {
  const redirectMap = {
    '/old-path': '/new-path',
    '/docs': '/documentation',
    '/blog/2023': '/blog/2024',
    '/api': 'https://api.example.com',
    // Add more redirect rules here
  };

  const currentPath = window.location.pathname;
  
  // Check for exact matches
  if (redirectMap[currentPath]) {
    window.location.replace(redirectMap[currentPath]);
    return;
  }

  // Check for pattern matches (e.g., wildcard redirects)
  for (const [pattern, target] of Object.entries(redirectMap)) {
    if (pattern.includes('*')) {
      const regex = new RegExp('^' + pattern.replace('*', '(.*)') + '$');
      const match = currentPath.match(regex);
      if (match) {
        const redirectUrl = target.replace('*', match[1]);
        window.location.replace(redirectUrl);
        return;
      }
    }
  }
})();