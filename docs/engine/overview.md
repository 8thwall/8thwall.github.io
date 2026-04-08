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

To test your project on mobile devices, especially for AR experiences that require camera access, you'll need to serve your development server over HTTPS. We recommend using [ngrok](https://ngrok.com/) to create a secure tunnel to your local server.

1. Go to [ngrok.com](https://ngrok.com/) and create an account. Once signed in, follow the steps on the dashboard to install ngrok.
2. Update (or verify) your project configuration. In the `config` folder, open `webpack.config.js` and look for the `devServer` object. Add (or verify) ngrok as an `allowedHost`:
```javascript
devServer: {
  // ... existing config
  allowedHosts: ['.ngrok-free.dev']
}
```
3. `cd` to the project root and run `npm install`. Run `npm run serve` to run the local development server.
4. Open a seperate terminal window and run the following command (in most cases, `[port]` will be `8080`)
```bash
ngrok http [port]
```

In the output you should see an ngrok URL that uses HTTPS and forwards to your local development server. You can paste this into your browser window and test your project on a mobile device.

![](/images/getting-started/ngrok-terminal.png)
