---
sidebar_label: configure()
---
# XR8.XrController.configure()

`XrController.configure({ disableWorldTracking, enableLighting, enableWorldPoints, imageTargets: [], leftHandedAxes, mirroredDisplay, scale })`

## Description {#description}

Configures the processing performed by `XrController` (some settings may have performance implications).

## Parameters {#parameters}

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
disableWorldTracking [Optional] | `Boolean` | `false` | If true, turn off SLAM tracking for efficiency. This needs to be done **BEFORE** [`XR8.run()`](/docs/api/engine/xr8/run) is called.
enableLighting [Optional] | `Boolean` | `false` | If true, `lighting` will be provided by [`XR8.XrController.pipelineModule()`](pipelinemodule.md) as `processCpuResult.reality.lighting`
enableWorldPoints [Optional] | `Boolean` | `false` | If true, `worldPoints` will be provided by [`XR8.XrController.pipelineModule()`](pipelinemodule.md) as `processCpuResult.reality.worldPoints`.
imageTargets [Optional] | `Array` |  | List of names of the image target to detect. Can be modified at runtime. Note: All currently active image targets will be replaced with the ones specified in this list.
leftHandedAxes [Optional] | `Boolean` | `false` | If true, use left-handed coordinates.
mirroredDisplay [Optional] | `Boolean` | `false` | If true, flip left and right in the output.
scale [Optional] | `String` | `responsive` | Either `responsive` or `absolute`. `responsive` will return values so that the camera on frame 1 is at the origin defined via [`XR8.XrController.updateCameraProjectionMatrix()`](updatecameraprojectionmatrix.md). `absolute` will return the camera, image targets, etc in meters. When using `absolute` the x-position, z-position, and rotation of the starting pose will respect the parameters set in [`XR8.XrController.updateCameraProjectionMatrix()`](updatecameraprojectionmatrix.md) once scale has been estimated. The y-position will depend on the camera's physical height from the ground plane.

**IMPORTANT:** `disableWorldTracking: true` needs to be set **BEFORE** both [`XR8.XrController.pipelineModule()`](pipelinemodule.md) and [`XR8.run()`](/docs/api/engine/xr8/run) are called and cannot be modifed while the engine is running.

## Returns {#returns}

None

## Example {#example}

```javascript
XR8.XrController.configure({enableLighting: true, disableWorldTracking: false, scale: 'absolute'})
```

## Example - Disable world tracking {#example---disable-world-tracking}

```javascript
// Disable world tracking (SLAM)
XR8.XrController.configure({disableWorldTracking: true})
// Open the camera and start running the camera run loop
XR8.run({canvas: document.getElementById('camerafeed')})
```

## Example - Change active image target set {#example---change-active-image-target-set}

```javascript
XR8.XrController.configure({imageTargets: ['image-target1', 'image-target2', 'image-target3']})
```
