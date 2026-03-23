---
sidebar_label: configure()
---
# XR8.Threejs.configure()

`XR8.Threejs.configure({renderCameraTexture, layerNames})`

## Description {#description}

Configures the three.js renderer.

## Parameters {#parameters}

Property | Type | Default | Description
--------- | --------- | --------- | ----------- |
renderCameraTexture [Optional] | `Boolean` | `true` | If `true`, render the camera feed cropped to the canvas's size to a texture. This will be returned as `cameraTexture` by [`XR8.Threejs.xrScene()`](xrscene.md). If `false` or `null`, do not render the camera feed to a texture.
layerScenes [Optional] | `[String]` | `[]` | An array of layer names. The layers to create new three.js scenes for. Scenes are returned as `layerScenes` by [`XR8.Threejs.xrScene()`](xrscene.md). The only valid value is `'sky'`.

## Returns {#returns}

None

## Example - Render camera feed to a texture {#example---render-camera-feed-to-a-texture}

```javascript
XR8.Threejs.configure({renderCameraTexture: true})
...
const {cameraTexture} = XR8.Threejs.xrScene()
```

## Example - Sky Scene {#example---sky-scene}

```javascript
XR8.Threejs.configure({layerScenes: ['sky']})
...
const {layerScenes} = XR8.Threejs.xrScene()
createSkyScene(layerScenes.sky.scene, layerScenes.sky.camera)
```
