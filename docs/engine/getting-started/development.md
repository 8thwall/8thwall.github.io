---
id: development
sidebar_position: 4
---

# Development

## Test on Desktop

1. If node/npm are not installed, install using https://github.com/nvm-sh/nvm or https://nodejs.org/en/download
2. `cd` to the project root and run `npm install`.

![](/images/migration/npm-install.png)

3. Run `npm run serve` to run the development server. Once the local server is running, you will see the URL/IP addresses your project is running at.

![](/images/migration/npm-run.png)

4. Open a new browser window and paste in the loopback URL or IP address to test your project in development mode.

![](/images/migration/dev-preview.png)

## Test on Mobile

To test your project on mobile devices, especially for AR experiences that require camera access, you'll need to serve your development server over HTTPS. We recommend using [ngrok](https://ngrok.com/) to create a secure tunnel to your local server.

After setting up ngrok, add the following configuration to `config/webpack.config.js` under the `devServer` section:

```javascript
devServer: {
  // ... existing config
  allowedHosts: ['.ngrok-free.dev']
}
```
