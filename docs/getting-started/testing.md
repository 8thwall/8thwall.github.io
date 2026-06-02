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
2. Click "Connect Device" in the lower left corner.

![](/images/getting-started/click-connect-device.png)

3. You will see a command such as `ngrok http <port number>`. Copy that command and execute it in the terminal.

![](/images/getting-started/ngrok-output.png)

1. Take the URL from the output, in the form `https://xxx-xxx-xxx.ngrok-free.dev`, and paste that into the Proxy URL field

![](/images/getting-started/pasted-url.png)

5. Scan the QR code on your test device.
