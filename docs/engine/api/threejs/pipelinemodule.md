---
sidebar_label: pipelineModule()
---
# XR8.Threejs.pipelineModule()

`XR8.Threejs.pipelineModule()`

## Description {#description}

A pipeline module that interfaces with the three.js environment and lifecyle. The three.js scene can be queried using [`XR8.Threejs.xrScene()`](xrscene.md) after [`XR8.Threejs.pipelineModule()`](pipelinemodule.md)'s [`onStart`](/docs/engine/api/camerapipelinemodule/onstart) method is called. Setup can be done in another pipeline module's [`onStart`](/docs/engine/api/camerapipelinemodule/onstart) method by referring to [`XR8.Threejs.xrScene()`](xrscene.md) as long as [`XR8.addCameraPipelineModule()`](/docs/engine/api/xr8/addcamerapipelinemodule) is called on the second module *after* calling `XR8.addCameraPipelineModule(XR8.Threejs.pipelineModule())`.

* [`onStart`](/docs/engine/api/camerapipelinemodule/onstart), a three.js renderer and scene are created and configured to draw over a camera feed.
* [`onUpdate`](/docs/engine/api/camerapipelinemodule/onupdate), the three.js camera is driven with the phone's motion.
* [`onRender`](/docs/engine/api/camerapipelinemodule/onrender), the renderer's `render()` method is invoked.

Note that this module does not actually draw the camera feed to the canvas, GlTextureRenderer does
that. To add a camera feed in the background, install the
[`XR8.GlTextureRenderer.pipelineModule()`](/docs/engine/api/gltexturerenderer/pipelinemodule) before installing this
module (so that it is rendered before the scene is drawn).

## Parameters {#parameters}

None

## Returns {#returns}

A three.js pipeline module that can be added via [`XR8.addCameraPipelineModule()`](/docs/engine/api/xr8/addcamerapipelinemodule).

## Example {#example}

```javascript
// Add XrController.pipelineModule(), which enables 6DoF camera motion estimation.
XR8.addCameraPipelineModule(XR8.XrController.pipelineModule())

// Add a GlTextureRenderer which draws the camera feed to the canvas.
XR8.addCameraPipelineModule(XR8.GlTextureRenderer.pipelineModule())

// Add Threejs.pipelineModule() which creates a three.js scene, camera, and renderer, and
// drives the scene camera based on 6DoF camera motion.
XR8.addCameraPipelineModule(XR8.Threejs.pipelineModule())

// Add custom logic to the camera loop. This is done with camera pipeline modules that provide
// logic for key lifecycle moments for processing each camera frame. In this case, we'll be
// adding onStart logic for scene initialization, and onUpdate logic for scene updates.
XR8.addCameraPipelineModule({
  // Camera pipeline modules need a name. It can be whatever you want but must be unique
  // within your app.
  name: 'myawesomeapp',

  // onStart is called once when the camera feed begins. In this case, we need to wait for the
  // XR8.Threejs scene to be ready before we can access it to add content.
  onStart: ({canvasWidth, canvasHeight}) => {
    // Get the three.js scene. This was created by XR8.Threejs.pipelineModule().onStart(). The
    // reason we can access it here now is because 'myawesomeapp' was installed after
    // XR8.Threejs.pipelineModule().
    const {scene, camera} = XR8.Threejs.xrScene()

    // Add some objects to the scene and set the starting camera position.
    initScene({scene, camera})

    // Sync the xr controller's 6DoF position and camera paremeters with our scene.
    XR8.XrController.updateCameraProjectionMatrix({
      origin: camera.position,
      facing: camera.quaternion,
    })
  },

  // onUpdate is called once per camera loop prior to render. Any three.js geometry scene would
  // typically happen here.
  onUpdate: () => {
    // Update the position of objects in the scene, etc.
    updateScene(XR8.Threejs.xrScene())
  },
})
```
