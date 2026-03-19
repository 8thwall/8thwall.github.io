---
id: publishing
sidebar_position: 5
---

# Publishing

Publishing an 8th Wall project simply means hosting the built `dist/` folder somewhere. Because the output is a static website, you can use nearly any static hosting provider.

:::info
WebAR requires a secure context (**HTTPS**) for camera access. Pick a host that provides HTTPS by default (most do).
:::

## Generate a production build

From the project root, run:

`npm run build`

![](/images/migration/npm-build.png)

Once the project has been built, a folder named `dist` will be added to the project root. This folder contains everything you need to host the project.

![](/images/migration/dist-folder.png)

## Host your project

Below are common hosting options grouped by workflow:

- **Drag & drop (recommended for beginners)**: upload your `dist/` folder (or a zip) in a web UI.
- **Git-based CI/CD**: connect a Git repo for automatic deploys when you push changes.

### Drag & drop hosting

:::tip
These hosting solutions are recommended for beginners or if you just want "upload and go". For ongoing updates, you will need to rebuild locally and upload/deploy again.
:::

#### Netlify Drop

Netlify Drop lets you drag and drop your dist folder and get a live URL immediately, great for quick demos and sharing.

1. Build your project: `npm run build`
2. Open [Netlify Drop](https://app.netlify.com/drop)
3. Drag your `dist/` folder into the page
4. You’ll get a live URL right away

#### Cloudflare Pages

Cloudflare Pages supports a Direct Upload flow that includes drag & drop of a folder or zip.

1. Build your project: `npm run build`
2. Create a Pages project using **Direct Upload**
3. Drag & drop the `dist/` folder (or upload a zip)
4. Your site deploys and you get a URL

#### AWS Amplify

Amplify Hosting supports manual deployments where you can drag & drop a zipped build output.

1. Build your project: `npm run build`
2. Zip the `dist/` folder
3. In Amplify Hosting, choose **Deploy without a Git provider**
4. Drag & drop the zip and deploy

#### Neocities

Neocities is a straightforward platform that works well for simple static sites (especially personal/demo projects).

**Steps**
1. Build your project: `npm run build`
2. Upload the contents of `dist/` via the Neocities editor/uploader
3. Use the provided site URL


### Git-based hosting

:::tip
If you plan to keep iterating, git-based hosting gives you automatic deployments when you push to your repo. These solutions are better for teams & ongoing updates.
:::

#### GitHub Pages

GitHub Pages publishes static files from a repository and is a common "set it and forget it" option.

#### Vercel / Netlify (CI/CD)

If your project lives in GitHub/GitLab, these platforms can auto-build and auto-deploy on every push.
