---
sidebar_label: pipelineModule()
---
# LandingPage.pipelineModule()

`LandingPage.pipelineModule()`

## Description {#description}

Creates a pipeline module that, when installed, adds landing page functionality to your project.

## Parameters {#parameters}

None

## Returns {#returns}

A pipeline module that adds landing page functionality to your project.

## Non-AFrame Example {#non-aframe-example}

```javascript
// Configured here
LandingPage.configure({ 
    mediaSrc: 'https://domain.com/bat.glb',
    sceneEnvMap: 'hill',
})
XR8.addCameraPipelineModules([
  XR8.GlTextureRenderer.pipelineModule(),
  XR8.Threejs.pipelineModule(),
  XR8.XrController.pipelineModule(),
  XRExtras.FullWindowCanvas.pipelineModule(),
  XRExtras.Loading.pipelineModule(),
  XRExtras.RuntimeError.pipelineModule(),
  // Added here
  LandingPage.pipelineModule(), 
  ...
])
```
