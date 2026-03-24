# XR8.GlTextureRenderer

## Description {#description}

Provides a camera pipeline module that draws the camera feed to a canvas as well as extra utilities for GL drawing operations.

## Functions {#functions}

Function | Description
-------- | -----------
[configure](configure.md) | Configures the pipeline module that draws the camera feed to the canvas.
[create](create.md) | Creates an object for rendering from a texture to a canvas or another texture.
[fillTextureViewport](filltextureviewport.md) | Convenience method for getting a Viewport struct that fills a texture or canvas from a source without distortion. This is passed to the render method of the object created by [`XR8.GlTextureRenderer.create()`](create.md)
[getGLctxParameters](getglctxparameters.md) | Gets the current set of WebGL bindings so that they can be restored later.
[pipelineModule](pipelinemodule.md) | Creates a pipeline module that draws the camera feed to the canvas.
[setGLctxParameters](setglctxparameters.md) | Restores the WebGL bindings that were saved with [`XR8.GlTextureRenderer.getGLctxParameters()`](getglctxparameters.md).
[setTextureProvider](settextureprovider.md) | Sets a provider that passes the texture to draw.
[setForegroundTextureProvider](setforegroundtextureprovider.md) | Sets a provider that passes a list of foreground textures and alpha masks to draw.
