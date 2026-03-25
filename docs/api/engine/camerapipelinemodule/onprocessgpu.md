# onProcessGpu()

`onProcessGpu: ({ framework, frameStartResult })`

## Description {#description}

`onProcessGpu()` is called to start GPU processing.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
framework | { dispatchEvent(eventName, detail) } : Emits a named event with the supplied detail.
frameStartResult | { cameraTexture, computeTexture, GLctx, computeCtx, textureWidth, textureHeight, orientation, videoTime, repeatFrame }

The `frameStartResult` parameter has the following properties:

Property | Description
-------- | -----------
cameraTexture | The drawing canvas's [`WebGLTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) containing camera feed data.
computeTexture | The compute canvas's [`WebGLTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) containing camera feed data.
GLctx | The drawing canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
computeCtx | The compute canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
textureWidth | The width (in pixels) of the camera feed texture.
textureHeight | The height (in pixels) of the camera feed texture.
orientation | The rotation of the UI from portrait, in degrees (-90, 0, 90, 180).
videoTime | The timestamp of this video frame.
repeatFrame | True if the camera feed has not updated since the last call.

## Returns {#returns}

Any data that you wish to provide to [`onProcessCpu`](onprocesscpu.md) and [`onUpdate`](onupdate.md) should be
returned.  It will be provided to those methods as `processGpuResult.modulename`

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onProcessGpu: ({frameStartResult}) => {
    const {cameraTexture, GLctx, textureWidth, textureHeight} = frameStartResult

    if(!cameraTexture.name){
      console.error("[index] Camera texture does not have a name")
    }

    const restoreParams = XR8.GlTextureRenderer.getGLctxParameters(GLctx, [GLctx.TEXTURE0])
    // Do relevant GPU processing here
    ...
    XR8.GlTextureRenderer.setGLctxParameters(GLctx, restoreParams)

    // These fields will be provided to onProcessCpu and onUpdate
    return {gpuDataA, gpuDataB}
  },
})
```
