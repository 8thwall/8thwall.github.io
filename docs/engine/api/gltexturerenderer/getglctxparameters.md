---
sidebar_label: getGLctxParameters()
---
# XR8.GlTextureRenderer.getGLctxParameters()

`XR8.GlTextureRenderer.getGLctxParameters(GLctx, textureUnit)`

## Description {#description}

Gets the current set of WebGL bindings so that they can be restored later.

## Parameters {#parameters}

Parameter | Type | Description
--------- | ---- | -----------
GLctx | `WebGlRenderingContext` or `WebGl2RenderingContext` | The `WebGLRenderingContext` or `WebGL2RenderingContext` to get bindings from.
textureunits | `[]` | The texture units to preserve state for, e.g. `[GLctx.TEXTURE0]`

## Returns {#returns}

A struct to pass to [setGLctxParameters](setglctxparameters.md).

## Example {#example}

```javascript
const restoreParams = XR8.GlTextureRenderer.getGLctxParameters(GLctx, [GLctx.TEXTURE0])
// Alter context parameters as needed
...
XR8.GlTextureRenderer.setGLctxParameters(GLctx, restoreParams)
// Context parameters are restored to their previous state
```
