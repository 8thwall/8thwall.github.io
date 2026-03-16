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

Static assets (logo, favicon, images) live in `static/`. Custom styles are in `src/css/custom.css`.

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

Two workflows handle CI/CD:

- **`deploy.yml`** — triggers on merge to `main`. Builds the site and deploys via GitHub's native Pages deployment.
- **`test-deploy.yml`** — triggers on pull requests to `main`. Runs a build to catch errors before merge.

**First-time setup:** Go to **Settings → Pages** and set the source to **GitHub Actions**.
