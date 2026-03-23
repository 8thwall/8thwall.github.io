---
sidebar_label: xrScene()
---
# XR8.Threejs.xrScene()

`XR8.Threejs.xrScene()`

## Description {#description}

Get a handle to the xr scene, camera, renderer, (optional) camera feed texture, and (optional) layerScenes.

## Parameters {#parameters}

None

## Returns {#returns}

An object: `{ scene, camera, renderer, cameraTexture, layerScenes }`

Property | Type | Description
--------- | --------- | ----------- |
scene | [`Scene`](https://threejs.org/docs/#api/en/scenes/Scene) | The three.js scene.
camera | [`Camera`](https://threejs.org/docs/#api/en/cameras/Camera) | The three.js main camera.
renderer | [`Renderer`](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) | The three.js renderer.
cameraTexture [Optional] | [`Texture`](https://threejs.org/docs/#api/en/textures/Texture) | A three.js texture with the camera feed cropped to the canvas size. Enabled by calling [`XR8.Threejs.configure({renderCameraTexture: true})`](configure.md).
layerScenes [Optional] | `Record<String, LayerScene>` | A map of layer names to three.js layer scenes. Will contain records which are enabled by calling [`XR8.Threejs.configure({layerScenes: ['sky']})`](configure.md).

The `LayerScene` in the `layerScenes` object has the following properties:

Property | Type | Description
--------- | --------- | ----------- |
scene | [`Scene`](https://threejs.org/docs/#api/en/scenes/Scene) | The three.js scene for this layer. Content added to this sky will only be visible when in an area of the camera feed which this layer has been detected in. For example in Sky Effects a cube will only show up in the sky. Use `XR8.LayersController.configure({layers: {sky: {invertLayerMask: true}}})` to invert this and make the cube only show up when not in the sky.
camera | [`Camera`](https://threejs.org/docs/#api/en/cameras/Camera) | The three.js camera for this layer. Will have its position and rotation synced with the main camera.

## Example {#example}

```javascript
const {scene, camera, renderer, cameraTexture} = XR8.Threejs.xrScene()
```

## Example - Sky Scene {#example---sky-scene}

```javascript
XR8.LayersController.configure({layers: {sky: {}}})
XR8.Threejs.configure({layerScenes: ['sky']})
...
const {layerScenes} = XR8.Threejs.xrScene()
createSkyScene(layerScenes.sky.scene, layerScenes.sky.camera)
```
