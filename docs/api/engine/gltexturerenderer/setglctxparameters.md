---
sidebar_label: setGLctxParameters()
---
# XR8.GlTextureRenderer.setGLctxParameters()

`XR8.GlTextureRenderer.setGLctxParameters(GLctx, restoreParams)`

## Description {#description}

Restores the WebGL bindings that were saved with [`XR8.GlTextureRenderer.getGLctxParameters()`](getglctxparameters.md).

## Parameters {#parameters}

Parameter | Type | Description
--------- | ---- | -----------
GLctx | `WebGlRenderingContext` or `WebGl2RenderingContext` |  The `WebGLRenderingContext` or `WebGL2RenderingContext` to restore bindings on.
restoreParams | The output of [`XR8.GlTextureRenderer.getGLctxParameters()`](getglctxparameters.md).

## Returns {#returns}

None

## Example {#example}

```javascript
const restoreParams = XR8.GlTextureRenderer.getGLctxParameters(GLctx, [GLctx.TEXTURE0])
// Alter context parameters as needed
...
XR8.GlTextureRenderer.setGLctxParameters(GLctx, restoreParams)
// Context parameters are restored to their previous state
```
