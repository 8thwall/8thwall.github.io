---
sidebar_label: configure()
---
# XR8.LayersController.configure()

`XR8.LayersController.configure({ nearClip, farClip, coordinates, layers })`

## Description {#description}

Configures the processing performed by `LayersController`.

## Parameters {#parameters}

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
nearClip [Optional] | `Number` | `0.01` | The distance from the camera of the near clip plane, i.e. the closest distance to the camera at which scene objects are visible.
farClip [Optional] | `Number` | `1000` | The distance from the camera of the far clip plane, i.e.Tte farthest distance to the camera at which scene objects are visible.
coordinates [Optional] | `Coordinates` | | The camera configuration.
layers [Optional] | `Record<String, LayerOptions?>` | `{}` | Semantic layers to detect. The key is the layer name. To remove a layer pass `null` instead of `LayerOptions`. The only supported layer name at this time is `'sky'`.

The `Coordinates` object has the following properties:

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
origin [Optional] | `{position: {x, y, z}, rotation: {w, x, y, z}}` | `{position: {x: 0, y: 2, z: 0}, rotation: {w: 1, x: 0, y: 0, z: 0}}` | The position and rotation of the camera.
scale [Optional] | `Number` | `2` | Scale of the scene.
axes [Optional] | `String` | `'RIGHT_HANDED'` | Can be either `'LEFT_HANDED'` or `'RIGHT_HANDED'`.
mirroredDisplay [Optional] | `Boolean` | `false` | If true, flip left and right in the output.

The `LayerOptions` object has the following properties:

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
invertLayerMask [Optional] | `Boolean` | `false` | If `true`, content you place in your scene will be visible in non-sky areas. If `false`, content you place in your scene will be visible in sky areas. To reset to the default value pass `null`.
edgeSmoothness [Optional] | `Number` | `0` | Amount to smooth the edges of the layer. Valid values are between [0-1]. To reset to the default value pass `null`.

**IMPORTANT:** [`XR8.LayersController`](./layerscontroller.md) cannot be used at the same time as [`XR8.FaceController`](../facecontroller/facecontroller.md).

## Returns {#returns}

None

## Example {#example}

```javascript
XR8.LayersController.configure({layers: {sky: {invertLayerMask: true, edgeSmoothness: 0.8}}})
```
