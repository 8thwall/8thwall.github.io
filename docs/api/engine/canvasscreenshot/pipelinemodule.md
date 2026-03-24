---
sidebar_label: pipelineModule()
---
# XR8.CanvasScreenshot.pipelineModule()

`XR8.CanvasScreenshot.pipelineModule()`

## Description {#description}

Creates a camera pipeline module that, when installed, receives callbacks on when the camera has started and when the canvas size has changed.

## Parameters {#parameters}

None

## Returns {#returns}

A CanvasScreenshot pipeline module that can be added via [XR8.addCameraPipelineModule()](/docs/api/engine/xr8/addcamerapipelinemodule).

## Example {#example}

```javascript
XR8.addCameraPipelineModule(XR8.CanvasScreenshot.pipelineModule())
```
