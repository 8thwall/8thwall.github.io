# XR8.CanvasScreenshot

## Description {#description}

Provides a camera pipeline module that can generate screenshots of the current scene.

## Functions {#functions}

Function | Description
-------- | -----------
[configure](configure.md) | Configures the expected result of canvas screenshots.
[pipelineModule](pipelinemodule.md) | Creates a camera pipeline module that, when installed, receives callbacks on when the camera has started and when the canvas size has changed.
[setForegroundCanvas](setforegroundcanvas.md) | Sets a foreground canvas to be displayed on top of the camera canvas. This must be the same dimensions as the camera canvas.
[takeScreenshot](takescreenshot.md) | Returns a Promise that when resolved, provides a buffer containing the JPEG compressed image. When rejected, an error message is provided.
