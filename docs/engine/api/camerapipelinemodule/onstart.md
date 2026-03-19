# onStart()

`onStart: ({ canvas, GLctx, computeCtx, isWebgl2, orientation, videoWidth, videoHeight, canvasWidth, canvasHeight, config })`

## Description {#description}

`onStart()` is called when XR starts.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
canvas | The canvas that backs GPU processing and user display.
GLctx | The drawing canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
computeCtx | The compute canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
isWebgl2 | True if `GLctx` is a `WebGL2RenderingContext`.
orientation | The rotation of the UI from portrait, in degrees (-90, 0, 90, 180).
videoWidth | The width of the camera feed, in pixels.
videoHeight | The height of the camera feed, in pixels.
canvasWidth | The width of the `GLctx` canvas, in pixels.
canvasHeight | The height of the `GLctx` canvas, in pixels.
config | The configuration parameters that were passed to [`XR8.run()`](/api/xr8/run).

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onStart: ({canvasWidth, canvasHeight}) => {
    // Get the three.js scene. This was created by XR8.Threejs.pipelineModule().onStart(). The
    // reason we can access it here now is because 'mycamerapipelinemodule' was installed after
    // XR8.Threejs.pipelineModule().
    const {scene, camera} = XR8.Threejs.xrScene()

    // Add some objects to the scene and set the starting camera position.
    myInitXrScene({scene, camera})

    // Sync the xr controller's 6DoF position and camera paremeters with our scene.
    XR8.XrController.updateCameraProjectionMatrix({
      origin: camera.position,
      facing: camera.quaternion,
    })
  },
})
```
