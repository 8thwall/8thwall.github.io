const REDIRECTS = {
  'tutorials': 'https://youtube.com/@8thwall',
  'twainxreducation/brandigno': 'https://twainxreducation.8thwall.app/brandigno/',
  'contact': '#get-involved',
  'forum': '#get-involved',
}

const REDIRECT_SCRIPT = `
const sitePath = new URLSearchParams(window.location.search).get('site_path');
const redirects = ${JSON.stringify(REDIRECTS)};
if (sitePath && redirects[sitePath]) {
  window.location.replace(redirects[sitePath]);
}
`

export {
  REDIRECT_SCRIPT
}
