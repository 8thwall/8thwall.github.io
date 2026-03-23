---
id: introduction
sidebar_position: 1
---

# Introduction

:::tip
If this is your first time working with 8th Wall, we strongly recommend starting with or referencing an [example project](https://github.com/8thwall/8thwall/tree/main/examples).
:::

## Integrating 8th Wall with A-Frame {#aframe}

8th Wall can be integrated with your A-Frame project in a few easy steps:

1. Include a slightly modified version of A-Frame (referred to as "8-Frame") which fixes some polish concerns:
```
<script src="//cdn.8thwall.com/web/aframe/8frame-1.4.1.min.js"></script>
```
2. Download the [8th Wall Engine Binary](https://8th.io/xrjs) and unzip it into your project folder
3. Add the 8th Wall Engine as a script tag to the `<head>` of your `index.html`
```
<script async src="./path/to/xr.js"></script>
```
4. Add the [`xrconfig`](/docs/api/engine/aframe/xrconfig/) component to your `<a-scene>`
5. Depending on the type of experience you want to develop, add one of the following components to your `<a-scene>`:
* **World Tracking & Image Targets**: [`xrweb`](/docs/api/engine/aframe/xrweb/)
* **Face Effects**: [`xrface`](/docs/api/engine/aframe/xrface/)
* **Sky Effects**: [`xrlayers`](/docs/api/engine/aframe/xrlayers/)

:::note
See documentation on [A-Frame Components](/docs/api/engine/aframe/), [A-Frame Events](/docs/api/engine/aframeevents/) and [A-Frame Event Listeners](/docs/api/engine/aframeeventlisenters/) provided by the 8th Wall Engine.
:::

## Integrating 8th Wall with three.js {#threejs}

```
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
