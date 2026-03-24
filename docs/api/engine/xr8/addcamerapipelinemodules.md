---
sidebar_label: addCameraPipelineModules()
---
# XR8.addCameraPipelineModules()

`XR8.addCameraPipelineModules([ modules ])`

## Description {#description}

Add multiple camera pipeline modules. This is a convenience method that calls [`XR8.addCameraPipelineModule()`](addcamerapipelinemodule.md) in order on each element of the input array.

## Parameters {#parameters}

Parameter | Type | Description
--------- | ---- | -----------
modules | `[Object]` | An array of camera pipeline modules.

## Returns {#returns}

None

## Example {#example}

```javascript
const onxrloaded = () => {
  XR8.addCameraPipelineModules([  // Add camera pipeline modules.
    // Existing pipeline modules.
    XR8.GlTextureRenderer.pipelineModule(),  // Draws the camera feed.
  ])

  // Request camera permissions and run the camera.
  XR8.run({canvas: document.getElementById('camerafeed')})
}

// Wait until the XR javascript has loaded before making XR calls.
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
```
