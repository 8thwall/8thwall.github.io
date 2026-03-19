---
id: publishing
description: This section explains how to export an HTML5 bundle.
sidebar_position: 6
---

# Publishing

## Creating a production build {#creating-production-build}

1. Open your Studio project.
2. Click **Publish**, select **HTML5**.
3. Click **Build** to generate your HTML5 bundle.
4. Once the build is complete, download the `.zip` file.

---

## Testing a production build

1. Unzip the file downloaded from Studio.
2. If you do not already have `npm` installed, follow the instructions on this [page](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to set it up.
3. Run `npm install --global http-server` to install the [http-server](https://www.npmjs.com/package/http-server) npm package as a global CLI tool.
4. Run `http-server <path_to_unzipped_folder>`
    1. Example: `http-server /Users/John/Downloads/my-project`
5. There should be some logs that list a series of local URLs like:
```sh
Available on:
  http://127.0.0.1:8080
  http://192.168.20.43:8080
  http://172.29.29.159:8080
```
6. Open one of the URLs in your web browser.

---

## Self-Hosting your project

The HTML5 bundle can be self hosted or deployed in many different ways. For more comprehensive information on self hosting, check out this [guide](https://github.com/mikeroyal/Self-Hosting-Guide).

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

---

## Publishing your 8th Wall project to gaming platforms

Since 8th Wall HTML5 bundles are fully contained builds, they can be self hosted or published to many gaming platforms.

### Itch.io

1. Download the `.zip` bundle.
2. Log in to [Itch.io](https://itch.io) and [create a new project](https://itch.io/game/new).
3. Fill in the project details:
    - Under **Kind of project**, select **HTML**.
    - Under **Uploads**, select **Upload files**. Upload the `.zip` file that you downloaded in Step 1. Check the **This file will be played in the browser** checkbox.
    - Under **Embed options**, choose the appropriate sizing for your project.
4. Finish configuring your game and publish it.

### Viverse

1. Sign in to [Viverse](https://viverse.com) and [go to Viverse Studio](https://studio.viverse.com).
2. Under **Upload Your Own Build**, click **Upload**.
3. Click **Create New World**.
4. Enter the **Name** and **Description** for your project, then click **Create**.
5. Click **Content Versions**.
6. Under **New Version**, click **Select File**. Upload the `.zip` file that you downloaded in Step 1, then click **Upload**.
7. Under **iframe Support for Preview**, click **Apply iframe Settings** and enable all permissions that your project requires.
    - Note that Viverse will put your project downloaded from 8th Wall in it's own iFrame, and the Viverse iFrame will need to grant a permission which your project requires.
8. Finish configuring your game and publish it.

### Game Jolt

1. Sign in to [Game Jolt](https://gamejolt.com) and [go to Game Jolt Store](https://gamejolt.com/games).
2. Click **Add Your Game**.
3. Enter the project details and click **Save & Next**.
4. On your game dashboard, under **Packages**, click **Add Package**.
5. Under **Edit package**, click **New Release**.
6. Click **Upload Browser Build**. Upload the `.zip` file that you downloaded in Step 1.
7. Configure your game dimensions, or select **Fit to screen?** if you want the game to fit the screen.
8. Finish configuring your game and publish it.

### GamePix

:::info[Important]
GamePix does not allow games with external links. Make sure your project does NOT make network calls outside of the bundle.
:::

1. Download the **Full HTML** embed code.\
2. Sign up for a [GamePix Developer Account](https://partners.gamepix.com/join-us?t=developer) and go to the [GamePix Dashboard](https://my.gamepix.com/dashboard).
3. Click **Create New Game**.
4. Enter the game details and click **Create**.
5. Under **Info**, select **HTML5-JS** under **Game Engine**.
6. Under **Build**, click **Browse File**. Upload the `.zip` file you downloaded earlier.
7. Finish configuring your game and publish it.

### Newgrounds

1. Download the **Full HTML** embed code. Make a `.zip` file of this `index.html` file.
2. Sign up for a [Newgrounds account](https://www.newgrounds.com).
3. Click the arrow in the top right corner and select **Game (swf, HTML5)**
4. Under **Submission File(s)**, click **Upload File**. Upload the `.zip` file you downloaded earlier.
5. Configure your game dimensions and check **Touchscreen friendly**
6. Finish configuring your game and publish it.

### Y8

1. Download the **Full HTML** embed code. Make a `.zip` file of this `index.html` file.
2. Log into [Y8](https://www.y8.com/upload).
3. Make sure you have verified your email, then [create a free Y8 Storage Account](https://account.y8.com/storage_account).
4. Under **Game**, choose **Zip** and then **HTML5**.
5. Click **Choose File**. Upload the `.zip` file you downloaded earlier. If you have not created a Storage Account it will fail. If that happens, click **Create Storage Account** to create one, then refresh the **Upload Your Content to Y8** page and try again.
6. Finish configuring your game and publish it.

### Poki

1. Go to the [Poki Developer Portal](https://developers.poki.com/share).
2. Fill in your project details, using the link to your hosted project under **Link to your game**.
3. Click **Share your game**.

### Kongregate

1. Email the Kongregate team at [bd@kongregate.com](mailto:bd@kongregate.com). Include the link to your hosted project in your email.

### Armor Games

1. Email the Armor Games team at [mygame@armorgames.com](mailto:mygame@armorgames.com). Include the link to your hosted project in your email.

### Addicting Games

1. Download the **Full HTML** embed code.
2. Email the Addicting Games team at [games@addictinggames.com](mailto:games@addictinggames.com). Include the `.zip` file in your email, as well as all of the other information they request in the [Addicting Games Developer Center](https://www.addictinggames.com/about/upload#Send).

### Lagged

1. Email the Lagged team at [contact@lagged.com](mailto:contact@lagged.com). Include the link to your hosted project in your email.
2. Once you are approved, you can [sign up for a Lagged account](https://lagged.dev/signup) using the **Invite Code** they provide you and upload your game.

### Discord

#### Sample Project

As a starting point to use the Discord Embedded SDK with your project, you can try out our sample project.

1. Navigate to https://www.8thwall.com/8thwall/discord-activity-example and clone the project to your workspace.
2. Follow the steps in [Exporting an HTML5 Bundle](#exporting-an-html5-bundle)
3. Download the `.zip` to a location of your choosing.

#### Discord Developer Set Up

In order to run a web client in Discord, you'll need to set up an account and create an app in the developer hub.

1. Create a Discord Account and navigate to https://discord.com/developers/applications

2. Create a new application by clicking the Button in the top right corner
    1. Enter a name for the application and accept the terms of service

![New Activity](/images/studio/native-app-export/discord/new-activity.png)

3. Go to the **OAuth2** page, under the **Settings** section:
    1. Add `http://127.0.0.1` as a redirect URI for testing.
    2. Save the `Client ID` somewhere secure.
    3. Click "Reset Secret" to retrieve the `Client Secret` and store it somewhere safe.
    4. Press "Save" to keep your settings.

![Redirect](/images/studio/native-app-export/discord/redirect.png)

4. Navigate to the **URL Mappings** page, under the **Activities** section:
    1. Add a temporary target to the root mapping like `127.0.0.1:8888`. This will be replaced later with your public URL, but it's required to enable Activities in the next step.

5. Go to the **Settings** page, under the **Activities** section:
    1. Toggle **Enable Activities** and accept the app launcher agreement.

![Enable Activity](/images/studio/native-app-export/discord/enable-activity.png)

6. Then, go to the **Installation** tab, under the **Settings** section:
    1. Copy the link from the **Install Link** panel and open it in your browser.
    2. Install the application to make it accessible in any server or DM.

#### Launching an Application

1. Set up the example server code at https://github.com/8thwall/discord-activity-example
    1. `git clone https://github.com/8thwall/discord-activity-example`
    2. Run `npm install`
    3. Unzip the `.zip` downloaded earlier containing the frontend of the project.
    4. Create a `.env` file in the root of the repo, and fill it out with the details from the Discord Developer Portal:
    ```
    DISCORD_CLIENT_ID=XXXXXXXXXX
    DISCORD_CLIENT_SECRET=XXXXXXXXXX
    DISCORD_CLIENT_HOST_PATH=/path/to/unzipped/folder
    ```
    5. Enter `npm start` to start the server.

2. Use `cloudflared` to create a tunnel, so the project will be publicly accessible over the internet.
    1. `brew install cloudflared` to download the `cloudflared` CLI tool
    2. Run `cloudflared tunnel --url http://localhost:8888`.
    3. Make note of the URL that was generated.

    Example:
    ```
    2025-10-11T03:05:16Z INF +--------------------------------------------------------------------------------------------+
    2025-10-11T03:05:16Z INF |  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
    2025-10-11T03:05:16Z INF |  https://sporting-follow-audit-href.trycloudflare.com                                      |
    2025-10-11T03:05:16Z INF +--------------------------------------------------------------------------------------------+
    ```
    4. Open the `cloudflared` URL in your browser to make sure the project loads.

3. Update your Discord application settings:
    1. Open the Discord Developer Portal and navigate to your application
    2. Go to **URL Mappings** under the **Activities** section
    3. Replace the temporary target with your `cloudflared` URL for the **Root Mapping**

![Cloudflare URL](/images/studio/native-app-export/discord/cloudflare-url.png)

4. Test your Discord Activity:
    1. Open Discord and navigate to any DM or server
    2. Click the activities icon (game controller) in the voice channel controls
    3. Find and click your application in the **Apps & Commands** panel

![Example Final View](/images/studio/native-app-export/discord/example-final-view.jpeg)
