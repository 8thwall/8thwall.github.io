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

After setting up ngrok, add the following configuration to `config/webpack.config.js` under the `devServer` section:

```javascript
devServer: {
  // ... existing config
  allowedHosts: ['.ngrok-free.dev']
}
```
