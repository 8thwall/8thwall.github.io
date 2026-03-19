---
sidebar_label: setTextureProvider()
---
# XR8.GlTextureRenderer.setTextureProvider()

`XR8.GlTextureRenderer.setTextureProvider(({ frameStartResult, processGpuResult, processCpuResult }) => {} )`

## Description {#description}

Sets a provider that passes the texture to draw. This should be a function that take the same inputs as [`cameraPipelineModule.onUpdate`](/api/camerapipelinemodule/onupdate).

## Parameters {#parameters}

`setTextureProvider()` takes a **function** with the following parameters:

Parameter | Type | Description
--------- | ---- | -----------
frameStartResult | `Object` | The data that was provided at the beginning of a frame.
processGpuResult | `Object` | Data returned by all installed modules during [`onProcessGpu`](/api/camerapipelinemodule/onprocessgpu).
processCpuResult | `Object` | Data returned by all installed modules during [`onProcessCpu`](/api/camerapipelinemodule/onprocesscpu).

The function should return a [`WebGLTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) to draw.

## Returns {#returns}

None

## Example {#example}

```javascript
XR8.GlTextureRenderer.setTextureProvider(
  ({processGpuResult}) => {
    return processGpuResult.camerapixelarray ? processGpuResult.camerapixelarray.srcTex : null
  })
```
