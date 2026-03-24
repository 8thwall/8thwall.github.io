# onCanvasSizeChange()

`onCanvasSizeChange: ({ GLctx, computeCtx, videoWidth, videoHeight, canvasWidth, canvasHeight })`

## Description {#description}

`onCanvasSizeChange()` is called when the canvas changes size. Called with dimensions of video and canvas.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
GLctx | The drawing canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
computeCtx | The compute canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
videoWidth | The width of the camera feed, in pixels.
videoHeight | The height of the camera feed, in pixels.
canvasWidth | The width of the `GLctx` canvas, in pixels.
canvasHeight | The height of the `GLctx` canvas, in pixels.

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onCanvasSizeChange: ({ GLctx, videoWidth, videoHeight, canvasWidth, canvasHeight }) => {
    myHandleResize({ GLctx, videoWidth, videoHeight, canvasWidth, canvasHeight })
  },
})
```
