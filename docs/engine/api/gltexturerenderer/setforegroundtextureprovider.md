---
sidebar_label: setForegroundTextureProvider()
---
# XR8.GlTextureRenderer.setForegroundTextureProvider()

`XR8.GlTextureRenderer.setForegroundTextureProvider(({ frameStartResult, processGpuResult, processCpuResult }) => {} )`

## Description {#description}

Sets a provider that passes a list of foreground textures to draw. This should be a function that take the same inputs as [`cameraPipelineModule.onUpdate`](/docs/engine/api/camerapipelinemodule/onupdate).

## Parameters {#parameters}

`setForegroundTextureProvider()` takes a **function** with the following parameters:

Parameter | Type | Description
--------- | ---- | -----------
frameStartResult | `Object` | The data that was provided at the beginning of a frame.
processGpuResult | `Object` | Data returned by all installed modules during [`onProcessGpu`](/docs/engine/api/camerapipelinemodule/onprocessgpu).
processCpuResult | `Object` | Data returned by all installed modules during [`onProcessCpu`](/docs/engine/api/camerapipelinemodule/onprocesscpu).

The function should return an array of objects which each contain the following properties:

Property | Type | Default | Description
-------- | ---- | ------- | -----------
foregroundTexture | [`WebGLTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) | | The foreground texture to draw.
foregroundMaskTexture | [`WebGLTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) | | An alpha mask to use on the foregroundTexture. The `r` channel of the `foregroundMaskTexture` is used in the alpha blending.
foregroundTextureFlipY [Optional] | `false` | `Boolean` | Whether to flip the `foregroundTexture`.
foregroundMaskTextureFlipY [Optional] | `false` | `Boolean` | Whether to flip the `foregroundMaskTexture`.

The foreground textures will be drawn on top of the texture provided by calling [`XR8.GlTextureRenderer.setTextureProvider()`](filltextureviewport.md). The foreground textures will be drawn in in the order of the returned array.

## Returns {#returns}

None

## Example {#example}

```javascript
XR8.GlTextureRenderer.setForegroundTextureProvider(
  ({processGpuResult}) => {
    // Do some processing...
    return [{
      foregroundTexture,
      foregroundMaskTexture,
      foregroundTextureFlipY,
      foregroundMaskTextureFlipY
    }]
  })
```
