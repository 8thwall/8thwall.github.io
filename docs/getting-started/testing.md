---
id: testing
sidebar_position: 6
---

# Testing

## Test on Desktop

1. Open the Simulator/Preview
2. Click the browser pop-out button

![DesktopPopout](/images/getting-started/desktop-pop-out.png)

## Test on Mobile

To test your project on mobile devices, especially for AR experiences that require camera access, you'll need to serve your development server over HTTPS. We recommend using [ngrok](https://ngrok.com/) to create a secure tunnel to your local server.

If you don't already have Node.js and npm installed, [get it here](https://nodejs.org/en). Go to [ngrok.com](https://ngrok.com/) and create an account. Once signed in, follow the steps on the dashboard to install ngrok.

1. Update (or verify) your project configuration. In the `config` folder, open `webpack.config.js` and look for the `devServer` object. Add (or verify) ngrok as an `allowedHost`:
```javascript
devServer: {
  // ... existing config
  allowedHosts: ['.ngrok-free.dev']
}
```
2. `cd` to the project root and run `npm install`. Run `npm run serve` to run the local development server.
3. Open a seperate terminal window and run the following command (in most cases, `[port]` will be `8080`)
```bash
ngrok http [port]
```

In the output you should see an ngrok URL that uses HTTPS and forwards to your local development server. You can paste this into your browser window and test your project on a mobile device.

![](/images/getting-started/ngrok-terminal.png)
