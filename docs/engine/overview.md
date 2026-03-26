---
id: overview
sidebar_position: 1
---

# Overview

:::tip
If this is your first time working with 8th Wall, we strongly recommend starting with or referencing an [example project](https://github.com/8thwall/8thwall/tree/main/examples).
:::

## Integration

### Loading the Engine

1. Download the [8th Wall Engine Binary](https://8th.io/xrjs) and unzip it into your project folder
2. Add the 8th Wall Engine as a script tag to the `<head>` of your `index.html`. Add the `data-preload-chunks` attribute to the script tag, and depending on the type of experience you want to develop, set the `data-preload-chunks` to the appropriate value:
* **World Tracking & Image Targets**: `data-preload-chunks="slam"`
* **Face Effects**: `data-preload-chunks="face"`
* **Sky Effects**: no `data-preload-chunks` required
```html
<script async src="./path/to/xr.js" data-preload-chunks="slam"></script>
```

:::note
`data-preload-chunks="face, slam"` is also supported for experiences using both world and face effects.
:::

Alternatively, you can call `await XR8.loadChunk()` **before starting the engine** instead of adding the `data-preload-chunks` attribute to the script tag. For example:
```javascript
await XR8.loadChunk('slam')
```

### Integrating 8th Wall with A-Frame {#aframe}

8th Wall can be integrated with your A-Frame project in a few easy steps:

1. Include a slightly modified version of A-Frame (referred to as "8-Frame") which fixes some polish concerns in your project. You can find 8-Frame in the `external` folder of A-Frame example projects, such as https://github.com/8thwall/aframe-world-effects-example/tree/main/external/scripts
2. Add the `xrconfig` component to your `<a-scene>`. See [documentation on xrconfig](/docs/api/engine/aframe/xrconfig/) for more details.
3. Depending on the type of experience you want to develop, add one of the following components to your `<a-scene>`:
* **World Tracking & Image Targets**: `xrweb`. See [documentation on xrweb](/docs/api/engine/aframe/xrweb/) for more details.
* **Face Effects**: `xrface`. See [documentation on xrface](/docs/api/engine/aframe/xrface/) for more details.
* **Sky Effects**: `xrlayers`. See [documentation on xrlayers](/docs/api/engine/aframe/xrlayers/) for more details.

```html
<a-scene xrconfig xrweb>
```

:::note
See documentation on [A-Frame Components](/docs/api/engine/aframe/), [A-Frame Events](/docs/api/engine/aframeevents/) and [A-Frame Event Listeners](/docs/api/engine/aframeeventlisenters/) provided by the 8th Wall Engine.
:::

### Integrating 8th Wall with three.js {#threejs}

To integrate the 8th Wall engine into a three.js project, use the [Camera Pipeline Module API](/docs/api/engine/camerapipelinemodule) to add functionality like drawing the camera feed, creating a three.js scene and enabling world tracking. You should also add a custom camera pipeline module which you use to set up the three.js camera and scene content.

```javascript
// app.js
const onxrloaded = () => {
  XR8.addCameraPipelineModules([  // Add camera pipeline modules.
    // Existing pipeline modules.
    XR8.GlTextureRenderer.pipelineModule(),      // Draws the camera feed.
    XR8.Threejs.pipelineModule(),                // Creates a ThreeJS AR Scene.
    XR8.XrController.pipelineModule(),           // Enables SLAM tracking.
    window.LandingPage.pipelineModule(),         // Detects unsupported browsers and gives hints.
    XRExtras.FullWindowCanvas.pipelineModule(),  // Modifies the canvas to fill the window.
    XRExtras.Loading.pipelineModule(),           // Manages the loading screen on startup.
    XRExtras.RuntimeError.pipelineModule(),      // Shows an error image on runtime error.
    // Custom pipeline modules.
    initScenePipelineModule(),  // Sets up the threejs camera and scene content.
  ])

  // Add a canvas to the document for our xr scene.
  document.body.insertAdjacentHTML('beforeend', camerafeedHtml)
  const canvas = document.getElementById('camerafeed')

  // Open the camera and start running the camera run loop.
  XR8.run({canvas, allowedDevices: XR8.XrConfig.device().ANY})
}

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
```

:::note
See documentation on the [Camera Pipeline Module API](/docs/api/engine/camerapipelinemodule/) and core Camera Pipeline Modules provided by the 8th Wall Engine, including [GlTextureRenderer](/docs/api/engine/gltexturerenderer/), [Threejs](/docs/api/engine/threejs/), and [XrController](/docs/api/engine/xrcontroller/).
:::

## Testing

### Test on Desktop

1. If node/npm are not installed, install using https://github.com/nvm-sh/nvm or https://nodejs.org/en/download
2. `cd` to the project root and run `npm install`.

![](/images/migration/npm-install.png)

3. Run `npm run serve` to run the development server. Once the local server is running, you will see the URL/IP addresses your project is running at.

![](/images/migration/npm-run.png)

4. Open a new browser window and paste in the loopback URL or IP address to test your project in development mode.

![](/images/migration/dev-preview.png)

### Test on Mobile

To test your project on mobile devices, especially for AR experiences that require camera access, you'll need to serve your development server over HTTPS.

1. If you do not already have `npm` installed, follow the instructions on this [page](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to set it up.
2. Run `npm install --global http-server` to install the [http-server](https://www.npmjs.com/package/http-server) npm package as a global CLI tool.
3. Install [openssl](https://github.com/openssl/openssl) and generate key.pem and cert.pem files using this command:
```
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

You will be prompted with a few questions after entering the command. Use `127.0.0.1` as value for Common name if you want to be able to install the certificate in your OS's root certificate store or browser so that it is trusted.

This generates a cert-key pair and it will be valid for 3650 days (about 10 years).

Then you can run `http-server` with `-S` for enabling SSL and `-C` for your certificate file:
```
npx http-server [project-path] -S -C cert.pem
```

Example:
```
npx http-server gettingstarted/aframe/ -S -C cert.pem
```

There should be some logs that list a series of local URLs like:
```sh
Available on:
  http://127.0.0.1:8080
  http://192.168.20.43:8080
  http://172.29.29.159:8080
```

:::note
The first IP address listed is `127.0.0.1:8080` (which is the loopback device aka "localhost") and your mobile phone won't be able to connect to that IP address directly. Please use one of the other IP addresses.
:::

Window users need to run the http-server command using a standard Command Prompt window (cmd.exe). The script may generate errors if run from PowerShell.

Learn more in the [http-server documentation](https://github.com/http-party/http-server#tlsssl).
