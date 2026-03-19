---
sidebar_label: fillTextureViewport()
---
# XR8.GlTextureRenderer.fillTextureViewport()

`XR8.GlTextureRenderer.fillTextureViewport(srcWidth, srcHeight, destWidth, destHeight)`

## Description {#description}

Convenience method for getting a Viewport struct that fills a texture or canvas from a source
without distortion. This is passed to the render method of the object created by
[`XR8.GlTextureRenderer.create()`](create.md)

## Parameters {#parameters}

Parameter | Type | Description
--------- | ---- | -----------
srcWidth | `Number` | The width of the texture you are rendering.
srcHeight | `Number` | The height of the texture you are rendering.
destWidth | `Number` | The width of the render target.
destHeight | `Number` | The height of the render target.

## Returns {#returns}

An object: `{ width, height, offsetX, offsetY }`

Property | Type | Description
-------- | ---- | -----------
width | `Number` | The width (in pixels) to draw.
height | `Number` | The height (in pixels) to draw.
offsetX | `Number` | The minimum x-coordinate (in pixels) to draw to.
offsetY | `Number` | The minimum y-coordinate (in pixels) to draw to.
