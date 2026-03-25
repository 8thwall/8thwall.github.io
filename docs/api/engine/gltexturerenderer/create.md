---
sidebar_label: create()
---
# XR8.GlTextureRenderer.create()

`XR8.GlTextureRenderer.create({ GLctx, vertexSource, fragmentSource, toTexture, flipY, mirroredDisplay })`

## Description {#description}

Creates an object for rendering from a texture to a canvas or another texture.

## Parameters {#parameters}

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
GLctx | `WebGlRenderingContext` or `WebGl2RenderingContext` | | The `WebGlRenderingContext` (or `WebGl2RenderingContext`) to use for rendering. If no `toTexture` is specified, content will be drawn to this context's canvas.
vertexSource [Optional] | `String` | A no-op vertex shader | The vertex shader source to use for rendering.
fragmentSource [Optional] | `String` | A no-op fragment shader | The fragment shader source to use for rendering.
toTexture [Optional] | [`WebGlTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) | `GLctx`'s canvas | A texture to draw to. If no texture is provided, drawing will be to the canvas.
flipY [Optional] | `Boolean` | `false` | If true, flip the rendering upside-down.
mirroredDisplay [Optional] | `Boolean` | `false` | If true, flip the rendering left-right.

## Returns {#returns}

Returns an object: `{render, destroy, shader}`

Property | Description
--------- | -----------
render({ renderTexture, viewport }) | A function that renders the renderTexture to the specified viewport. Depending on if `toTexture` is supplied, the viewport is either on the canvas that created `GLctx`, or it's relative to the render texture provided.
destroy | Clean up resources associated with this `GlTextureRenderer`.
shader | Gets a handle to the shader being used to draw the texture.

The `render` function has the following parameters:

Parameter | Description
--------- | -----------
renderTexture | A [`WebGlTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) (source) to draw.
viewport | The region of the canvas or output texture to draw to; this can be constructed manually, or using [`XR8.GlTextureRenderer.fillTextureViewport()`](filltextureviewport.md).

The viewport is specified by `{ width, height, offsetX, offsetY }` :

Property | Type | Description
-------- | ---- | -----------
width | `Number` | The width (in pixels) to draw.
height | `Number` | The height (in pixels) to draw.
offsetX [Optional] | `Number` | The minimum x-coordinate (in pixels) to draw to.
offsetY [Optional] | `Number` | The minimum y-coordinate (in pixels) to draw to.
