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

1. Go to [ngrok.com](https://ngrok.com/) and create an account. Once signed in, follow the steps on the dashboard to install ngrok.
2. Update (or verify) your project configuration. In the `config` folder, open `webpack.config.js` and look for the `devServer` object. Add (or verify) ngrok as an `allowedHost`:
```javascript
devServer: {
  // ... existing config
  allowedHosts: ['.ngrok-free.dev']
}
```
3. Relaunch the desktop app or exit/reopen the project to refresh the build after updating the webpack configuration
4. Open the Simulator/Preview and click the browser pop-out button

![DesktopPopout](/images/getting-started/desktop-pop-out.png)

5. From the new browser window, copy the port number appended to the end of the localhost URL

![SimulatorPort](/images/getting-started/simulator-port.png)

4. Open a terminal window and run the following command, replacing [port] with the port obtained from the simulator browser pop-out
```bash
ngrok http [port]
```

In the output you should see an ngrok URL that uses HTTPS and forwards to your local development server. You can paste this into your browser window and test your project on a mobile device.

![](/images/getting-started/ngrok-terminal.png)
