---
sidebar_position: 1
sidebar_label: configure()
---
# XR8.FaceController.configure()

`XR8.FaceController.configure({ nearClip, farClip, meshGeometry, coordinates })`

## Description {#description}

Configures what processing is performed by FaceController.

## Parameters {#parameters}

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
nearClip [Optional] | `Number` | `0.01` | The distance from the camera of the near clip plane, i.e. the closest distance to the camera at which scene objects are visible.
farClip [Optional] | `Number` | `1000` | The distance from the camera of the far clip plane, i.e. the farthest distance to the camera at which scene objects are visible.
meshGeometry [Optional] | `Array<String>` | `[XR8.FaceController.MeshGeometry.FACE]` | Controls which parts of the head geometry are visible. Options: `[XR8.FaceController.MeshGeometry.FACE, XR8.FaceController.MeshGeometry.EYES, XR8.FaceController.MeshGeometry.IRIS, XR8.FaceController.MeshGeometry.MOUTH]`
maxDetections [Optional] | `Number` | `1` | The maximum number of faces to detect. The available choices are 1, 2, or 3.
enableEars [Optional] | `Boolean` | `false` | If true, runs ear detection simultaneosly with Face Effects and returns ear attachment points.
uvType [Optional] | `String` | `[XR8.FaceController.UvType.STANDARD]` | Specifies which uvs are returned in the facescanning and faceloading event. Options are: `[XR8.FaceController.UvType.STANDARD, XR8.FaceController.UvType.PROJECTED]`
coordinates [Optional] | `Coordinates` | | The camera configuration.

The `Coordinates` object has the following properties:

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
origin [Optional] | `{position: {x, y, z}, rotation: {w, x, y, z}}` | `{position: {x: 0, y: 0, z: 0}, rotation: {w: 1, x: 0, y: 0, z: 0}}` | The position and rotation of the camera.
scale [Optional] | `Number` | `1` | Scale of the scene.
axes [Optional] | `String` | `'RIGHT_HANDED'` | Can be either `'LEFT_HANDED'` or `'RIGHT_HANDED'`.
mirroredDisplay [Optional] | `Boolean` | `False` | If true, flip left and right in the output.

**IMPORTANT:** [`XR8.FaceController`](./facecontroller.md) cannot be used at the same time as [`XR8.XrController`](../xrcontroller/xrcontroller.md).

## Returns {#returns}

None

## Example {#example}

```javascript
  XR8.FaceController.configure({
    meshGeometry: [XR8.FaceController.MeshGeometry.FACE],
    coordinates: {
      mirroredDisplay: true,
      axes: 'LEFT_HANDED',
    },
  })
```
