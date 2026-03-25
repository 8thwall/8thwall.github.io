# onDeviceOrientationChange()

`onDeviceOrientationChange: ({ GLctx, computeCtx, videoWidth, videoHeight, orientation })`

## Description {#description}

`onDeviceOrientationChange()` is called when the device changes landscape/portrait orientation.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
GLctx | The drawing canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
computeCtx | The compute canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
videoWidth | The width of the camera feed, in pixels.
videoHeight | The height of the camera feed, in pixels.
orientation | The rotation of the UI from portrait, in degrees (-90, 0, 90, 180).

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onDeviceOrientationChange: ({ GLctx, videoWidth, videoHeight, orientation }) => {
    // handleResize({ GLctx, videoWidth, videoHeight, orientation })
  },
})
```
