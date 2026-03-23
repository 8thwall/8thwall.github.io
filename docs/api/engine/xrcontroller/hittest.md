---
sidebar_label: hitTest()
---
# XR8.XrController.hitTest()

`XrController.hitTest(X, Y, includedTypes = [])`

## Description {#description}

Estimate the 3D position of a point on the camera feed. X and Y are specified as numbers between 0 and 1, where (0, 0) is the upper left corner and (1, 1) is the lower right corner of the camera feed as rendered in the camera that was specified by [`XR8.XrController.updateCameraProjectionMatrix()`](updatecameraprojectionmatrix.md). Multiple 3d position estimates may be returned for a single hit test based on the source of data being used to estimate the position. The data source that was used to estimate the position is indicated by the `hitTest.type`.

## Parameters {#parameters}

Parameter | Type | Description
--------- | ---- | -----------
X | `Number` | Value between 0 and 1 that represents the horizontal position on camera feed from left to right.
Y | `Number` | Value between 0 and 1 that represents the vertical position on camera feed from top to bottom.
includedTypes | `[String]` | List that should contain `'FEATURE_POINT'`.

## Returns {#returns}

An array of estimated 3D positions from the hit test:

`[{ type, position, rotation, distance }]`

Parameter | Type | Description
--------- | ---- | -----------
type | `String` | One of `'FEATURE_POINT'`, `'ESTIMATED_SURFACE'`, `'DETECTED_SURFACE'`, or `'UNSPECIFIED'`
position | `{x, y, z}` | The estimated 3D position of the queried point on the camera feed.
rotation | `{x, y, z, w}` | The estimated 3D rotation of the queried point on the camera feed.
distance | `Number` | The estimated distance from the device of the queried point on the camera feed.

## Example {#example}
```javascript
const hitTestHandler = (e) => {
  const x = e.touches[0].clientX / window.innerWidth
  const y = e.touches[0].clientY / window.innerHeight
  const hitTestResults = XR8.XrController.hitTest(x, y, ['FEATURE_POINT'])
}
```
