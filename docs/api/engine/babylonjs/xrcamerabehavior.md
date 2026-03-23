---
sidebar_label: xrCameraBehavior()
---
# XR8.Babylonjs.xrCameraBehavior()

`XR8.Babylonjs.xrCameraBehavior(config, xrConfig)`

## Description {#description}

Get a behavior that can be attached to a Babylon camera like so: `camera.addBehavior(XR8.Babylonjs.xrCameraBehavior())`

## Parameters {#parameters}

Parameter | Description
--------- | -----------
config [Optional] | Configuration parameters to pass to [`XR8.run()`](/docs/api/engine/xr8/run)
xrConfig [Optional] | Configuration parameters to pass to [`XR8.XrController`](/docs/api/engine/xrcontroller)

`config` [Optional] is an object with the following properties:

Property | Type | Default | Description
-------- | ---- | ------- | -----------
webgl2 [Optional] | `Boolean` | `false` | If true, use WebGL2 if available, otherwise fallback to WebGL1.  If false, always use WebGL1.
ownRunLoop [Optional] | `Boolean` | `false` | If true, XR should use it's own run loop.  If false, you will provide your own run loop and be responsible for calling [`runPreRender`](/docs/api/engine/xr8/runprerender) and [`runPostRender`](/docs/api/engine/xr8/runpostrender) yourself [Advanced Users only]
cameraConfig: {direction} [Optional] | `Object` | `{direction: XR8.XrConfig.camera().BACK}` | Desired camera to use. Supported values for `direction` are `XR8.XrConfig.camera().BACK` or `XR8.XrConfig.camera().FRONT`
glContextConfig [Optional] | `WebGLContextAttributes` | `null` | The attributes to configure the WebGL canvas context.
allowedDevices [Optional] | [`XR8.XrConfig.device()`](/docs/api/engine/xrconfig/device) | `XR8.XrConfig.device().MOBILE` | Specify the class of devices that the pipeline should run on.  If the current device is not in that class, running will fail prior  prior to opening the camera. If allowedDevices is `XR8.XrConfig.device().ANY`, always open the camera. Note that world tracking can only be used with `XR8.XrConfig.device().MOBILE`.

`xrConfig` [Optional] is an object with the following properties:

Parameter | Description
--------- | -----------
enableLighting [Optional] | If true, return an estimate of lighting information.
enableWorldPoints [Optional] | If true, return the map points used for tracking.
disableWorldTracking [Optional] | If true, turn off SLAM tracking for efficiency.
imageTargets [Optional] | List of names of the image target to detect. Can be modified at runtime. Note: All currently active image targets will be replaced with the ones specified in this list.
leftHandedAxes [Optional] | If true, use left-handed coordinates.
imageTargets [Optional] | If true, flip left and right in the output.

## Returns {#returns}

A Babylon JS behavior that connects the XR engine to the Babylon camera and starts the camera feed and tracking.

## Example {#example}

```javascript
let surface, engine, scene, camera

const startScene = () => {
  const canvas = document.getElementById('renderCanvas')

  engine = new BABYLON.Engine(canvas, true, { stencil: true, preserveDrawingBuffer: true })
  engine.enableOfflineSupport = false

  scene = new BABYLON.Scene(engine)
  camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 3, 0), scene)

  initXrScene({ scene, camera }) // Add objects to the scene and set starting camera position.

  // Connect the camera to the XR engine and show camera feed
  camera.addBehavior(XR8.Babylonjs.xrCameraBehavior())

  engine.runRenderLoop(() => {
    scene.render()
  })

  window.addEventListener('resize', () => {
    engine.resize()
  })
}
```
