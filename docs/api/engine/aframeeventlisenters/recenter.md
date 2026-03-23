# recenter

`scene.emit('recenter', {origin, facing})`

## Description {#description}

Recenters the camera feed to its origin. If a new origin is provided as an argument, the camera's origin will be reset to that, then it will recenter.

If origin and facing are not provided, camera is reset to origin previously specified by a call to `recenter` or the last call to `XR8.XrController.updateCameraProjectionMatrix()` when using `xrweb` or `XR8.FaceController.configure({coordinates: {origin, scale, axes}})` / `XR8.LayersController.configure({coordinates: {origin, scale, axes}})` when using `xrface` or `xrlayers`.

**IMPORTANT:** With A-Frame, `updateCameraProjectionMatrix()` and / or `configure()` is initially called based on initial camera position in the scene.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
origin: {x, y, z} [Optional] | The location of the new origin.
facing: {w, x, y, z} [Optional] | A quaternion representing direction the camera should face at the origin.

## Example - Recenter the scene {#example}

```javascript
let scene = this.el.sceneEl
scene.emit('recenter')
```

## Example - Recenter the scene and update the origin {#example---update-origin}

```javascript
let scene = this.el.sceneEl
scene.emit('recenter', {
  origin: {x: 1, y: 4, z: 0},
  facing: {w: 0.9856, x:0, y:0.169, z:0}
})
```
