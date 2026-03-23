---
sidebar_label: updateCameraProjectionMatrix()
---
# XR8.XrController.updateCameraProjectionMatrix()

`XR8.XrController.updateCameraProjectionMatrix({ cam, origin, facing })`

## Description {#description}

Reset the scene's display geometry and the camera's starting position in the scene. The display geometry is needed to properly overlay the position of objects in the virtual scene on top of their corresponding position in the camera image. The starting position specifies where the camera will be placed and facing at the start of a session.

## Parameters {#parameters}

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
cam [Optional] | `{pixelRectWidth, pixelRectHeight, nearClipPlane, farClipPlane}` | `{nearClipPlane: 0.01, farClipPlane: 1000.0}` | The camera configuration.
origin [Optional] | `{x, y, z}` | `{x: 0, y: 2, z: 0}` | The starting position of the camera in the scene.
facing [Optional] | `{w, x, y, z}` | `{w: 1, x: 0, y: 0, z: 0}` | The starting direction (quaternion) of the camera in the scene.

`cam` has the following parameters:

Parameter | Type | Description
--------- | ---- | -----------
pixelRectWidth | `Number` | The width of the canvas that displays the camera feed.
pixelRectHeight | `Number` | The height of the canvas that displays the camera feed.
nearClipPlane | `Number` | The closest distance to the camera at which scene objects are visible.
farClipPlane | `Number` | The farthest distance to the camera at which scene objects are visible.

## Returns {#returns}

None

## Example {#example}

```javascript
XR8.XrController.updateCameraProjectionMatrix({
  origin: { x: 1, y: 4, z: 0 },
  facing: { w: 0.9856, x: 0, y: 0.169, z: 0 }
})
```
