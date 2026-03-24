# onVideoSizeChange()

`onVideoSizeChange: ({ GLctx, computeCtx, videoWidth, videoHeight, canvasWidth, canvasHeight, orientation })`

## Description {#description}

`onVideoSizeChange()` is called when the canvas changes size. Called with dimensions of video and canvas as well as device orientation.

## Parameters {#parameters}

Parameters | Description
---------- | -----------
GLctx | The drawing canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
computeCtx | The compute canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
videoWidth | The width of the camera feed, in pixels.
videoHeight | The height of the camera feed, in pixels.
canvasWidth | The width of the `GLctx` canvas, in pixels.
canvasHeight | The height of the `GLctx` canvas, in pixels.
orientation | The rotation of the UI from portrait, in degrees (-90, 0, 90, 180).

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onVideoSizeChange: ({ GLctx, videoWidth, videoHeight, canvasWidth, canvasHeight }) => {
    myHandleResize({ GLctx, videoWidth, videoHeight, canvasWidth, canvasHeight })
  },
})
```
