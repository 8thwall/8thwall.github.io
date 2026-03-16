# 8thwall.github.io

Landing page for 8th Wall Open Source. Built with [Docusaurus](https://docusaurus.io/) for one styling system, one nav, one build pipeline (homepage, download page, docs, and blog).

## Local Development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output is in `build/`. To preview: `npm run serve`.

## Structure

- **Home** (`/`) – Custom React homepage with interactive hero, product cards, getting started, FAQ, CTA
- **Downloads** (`/downloads`) – Custom React downloads page
- **Docs** (`/docs`) – Docusaurus docs (placeholder in `docs/` for future content)
- **Blog** (`/blog`) – Docusaurus blog (folder ready for future posts)

Static assets (logo, favicon, images) live in `static/`. Custom styles are in `src/css/custom.css`. The original static `index.html` and `downloads.html` remain in the repo for reference; the live site is served from the Docusaurus build.

## Mobile Testing

To test on a physical device on the same Wi-Fi network:

```bash
npm run start:network
```

This starts Docusaurus bound to `0.0.0.0` (all interfaces) on port 3000. Find your machine's local IP:

```bash
# macOS
ipconfig getifaddr en0
```

Then open `http://<your-local-ip>:3000` on your phone. Make sure both devices are on the same network.

## Deployment

Merging to `main` triggers `.github/workflows/deploy.yml`, which builds the site and pushes the output to the `gh-pages` branch. GitHub Pages serves from `gh-pages`, so the static `index.html` and `downloads.html` in the repo root are never served on the live site.

**First-time setup:** After the first merge, go to **Settings → Pages** in the GitHub repo and set the source to the `gh-pages` branch.
