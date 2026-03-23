---
sidebar_label: pipelineModule()
---
# CoachingOverlay.pipelineModule()

`CoachingOverlay.pipelineModule()`

## Description {#description}

Creates a pipeline module that, when installed, adds Coaching Overlay functionality to your absolute scale project.

## Parameters {#parameters}

None

## Returns {#returns}

A pipeline module that adds a Coaching Overlay to your project.

## Non-AFrame Example {#non-aframe-example}

```javascript
// Configured here
CoachingOverlay.configure({
    animationColor: '#E86FFF',
    promptText: 'To generate scale push your phone forward and then pull back',
})
XR8.addCameraPipelineModules([
  XR8.GlTextureRenderer.pipelineModule(),
  XR8.Threejs.pipelineModule(),
  XR8.XrController.pipelineModule(),
  XRExtras.FullWindowCanvas.pipelineModule(),
  XRExtras.Loading.pipelineModule(),
  XRExtras.RuntimeError.pipelineModule(),
  LandingPage.pipelineModule(),
  // Added here
  CoachingOverlay.pipelineModule(),
  ...
])
```
