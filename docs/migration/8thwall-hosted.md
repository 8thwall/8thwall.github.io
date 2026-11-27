---
id: 8thwall-hosted
sidebar_position: 2
---

# 8th Wall Hosted Projects

:::danger[Important]
As of Feburary 28, 2026, access to 8thwall.com has ended. It is no longer possible to export 8th Wall hosted projects and migrate them to the open source ecosystem. If you have specific account or project inquires please contact support@nianticspatial.com.
:::

This guide walks through the process of migrating 8th Wall-hosted projects to a self-hosted setup. It applies to all projects previously hosted on 8th Wall, including both **Editor** and **Studio** projects.

<iframe width="640" height="385" src="https://www.youtube.com/embed/y9idV8Zz0AI?si=cZoA9XaN4z14uGmP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Project Structure

If you previously exported your 8th Wall project's buildable code, you will have a `.zip` file containing the following contents:

![](/images/migration/studio-buildable-files.png)

### config

Contains the necessary webpack configuration and typescript definitions to support project development.

### external

Contains dependencies used by your project, loaded in `index.html`.

### image-targets

Contains your project's image targets (if any).

### src

Contains all your original project code and assets

:::info
For Studio projects, the scene graph is stored in a file called `.expanse.json` which may not be visible in your file viewer by default.
:::

## Development

If your project was built with Studio, open the project in the [8th Wall Desktop App](/docs/getting-started/installation/). With the 8th Wall Desktop App, you can seamlessly continue development and test across desktop and mobile devices without any additional steps.

If your project was built with a web 3D framework such as A-Frame or three.js, you can continue developing using an IDE of your choice and follow the steps below to test the project in realtime on desktop and mobile devices.

:::warning[Important]
Be sure to make [required project updates](/docs/migration/project-updates.md) and review updated documentation on [publishing your project](/docs/getting-started/publishing).
:::

### Test on Desktop

1. If node/npm are not installed, install using https://github.com/nvm-sh/nvm or https://nodejs.org/en/download
2. `cd` to the project root and run `npm install`.

![](/images/migration/npm-install.png)

3. Run `npm run serve` to run the development server. Once the local server is running, you will see the URL/IP addresses your project is running at.

![](/images/migration/npm-run.png)

4. Open a new browser window and paste in the loopback URL or IP address to test your project in development mode.

![](/images/migration/dev-preview.png)

### Test on Mobile

To test your project on mobile devices, especially for AR experiences that require camera access, you'll need to serve your development server over HTTPS. The development server can do this itself with a self-signed certificate, so you can open the project from a phone on the same Wi-Fi network as your computer.

1. In the `config` folder, open `webpack.config.js` and add `server: 'https'` to the `devServer` object:
```javascript
devServer: {
  server: 'https',
  // ... existing config
}
```
2. Run `npm run serve`. In the output, find the `On Your Network (IPv4)` URL, for example `https://192.168.1.20:8080/`. Make sure your phone is connected to the same network as your computer, then open that URL in your phone's browser.
3. Because the certificate is self-signed, the browser shows a security warning the first time. Accept it to continue to your project:
   - Chrome on Android: tap **Advanced**, then **Proceed to ... (unsafe)**.
   - Safari on iOS: tap **Show Details**, then **visit this website**.

:::tip
If your phone can't reach your computer, for example because of a firewall or a network that isolates devices, you can use a tunnel service such as [ngrok](https://ngrok.com/) instead. ngrok provides the HTTPS URL and forwards it to your local server over plain HTTP, so don't add `server: 'https'`; add ngrok as an allowed host instead:
```javascript
devServer: {
  allowedHosts: ['.ngrok-free.dev'],
  // ... existing config
}
```
Then run `npm run serve`, and in a separate terminal run `ngrok http 8080`. Open the `https://...ngrok-free.dev` URL from the output on your phone.
:::
