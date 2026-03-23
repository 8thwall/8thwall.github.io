---
sidebar_label: pipelineModule()
---
# XR8.LayersController.pipelineModule()

`XR8.LayersController.pipelineModule()`

## Description {#description}

Creates a camera pipeline module that, when installed, provides semantic layer detection.

## Parameters {#parameters}

None

## Returns {#returns}

Return value is an object made available to [`onUpdate`](/docs/api/engine/camerapipelinemodule/onupdate) as:

`processCpuResult.layerscontroller: { rotation, position, intrinsics, cameraFeedTexture, layers }`

Property  | Type | Description
--------- | ---- | -----------
rotation | `{w, x, y, z}` | The orientation (quaternion) of the camera in the scene.
position | `{x, y, z}` | The position of the camera in the scene.
intrinsics | `[Number]` | A 16 dimensional column-major 4x4 projection matrix that gives the scene camera the same field of view as the rendered camera feed.
cameraFeedTexture | [`WebGLTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) | The texture containing camera feed data.
layers | `Record<String, LayerOutput>` | Key is the layer name, LayerOutput contains the results of semantic layer detection for that layer.

`LayerOutput` is an object with the following properties:

Property  | Type | Description
--------- | ---- | -----------
texture | [`WebGLTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) | The texture containing layer data. The r, g, b channels indicate our confidence of whether the layer is present at this pixel. 0.0 indicates the layer is not present and 1.0 indicates it is present. Note that this value will be flipped if `invertLayerMask` has been set to true.
textureWidth | `Number` | Width of the returned texture in pixels.
textureHeight | `Number` | Height of the returned texture in pixels.
percentage | `Number` | Percentage of pixels that are classified as associated with the layer. Value in the range of [0, 1]

## Dispatched Events {#dispatched-events}

**layerloading**: Fires when loading begins for additional layer segmentation resources.

`layerloading.detail : {}`

**layerscanning**: Fires when all layer segmentation resources have been loaded and scanning has begun. One event is dispatched per layer being scanned.

`layerscanning.detail : {name}`

Property  | Type | Description
--------- | ---- | -----------
name | `String` | Name of the layer which we are scanning.

**layerfound**: Fires the first time a layer has been found.

`layerfound.detail : {name, percentage}`

Property  | Type | Description
--------- | ---- | -----------
name | `String` | Name of the layer that has been found.
percentage | `Number` | Percentage of pixels that are associated with the layer.

## Example - adding pipeline module {#example---adding-pipeline-module}

```javascript
XR8.addCameraPipelineModule(XR8.LayersController.pipelineModule())
```
