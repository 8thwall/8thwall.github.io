---
sidebar_label: pipelineModule()
---
# XR8.GlTextureRenderer.pipelineModule()

`XR8.GlTextureRenderer.pipelineModule({ vertexSource, fragmentSource, toTexture, flipY })`

## Description {#description}

Creates a pipeline module that draws the camera feed to the canvas.

## Parameters {#parameters}

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
vertexSource [Optional] | `String` | A no-op vertex shader | The vertex shader source to use for rendering.
fragmentSource [Optional] | `String` | A no-op fragment shader | The fragment shader source to use for rendering.
toTexture [Optional] | [`WebGlTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) | The canvas | A texture to draw to. If no texture is provided, drawing will be to the canvas.
flipY [Optional] | `Boolean` | `false` | If true, flip the rendering upside-down.

## Returns {#returns}

Return value is an object `{viewport, shader}` made available to
[`onProcessCpu`](/docs/api/engine/camerapipelinemodule/onprocesscpu) and
[`onUpdate`](/docs/api/engine/camerapipelinemodule/onupdate) as:

`processGpuResult.gltexturerenderer` with the following properties:

Property | Type | Description
-------- | ---- | -----------
viewport | `{width, height, offsetX, offsetY}` | The region of the canvas or output texture to draw to; this can be constructed manually, or using [`XR8.GlTextureRenderer.fillTextureViewport()`](filltextureviewport.md).
shader | | A handle to the shader being used to draw the texture.

processGpuResult.gltexturerenderer.viewport: `{ width, height, offsetX, offsetY }`

Property | Type | Description
-------- | ---- | -----------
width | `Number` | The width (in pixels) to draw.
height | `Number` | The height (in pixels) to draw.
offsetX | `Number` | The minimum x-coordinate (in pixels) to draw to.
offsetY | `Number` | The minimum y-coordinate (in pixels) to draw to.

## Example {#example}

```javascript
XR8.addCameraPipelineModule(XR8.GlTextureRenderer.pipelineModule())
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onProcessCpu: ({ processGpuResult }) => {
    const {viewport, shader} = processGpuResult.gltexturerenderer
    if (!viewport) {
      return
    }
    const { width, height, offsetX, offsetY } = viewport

    // ...
  },
```
