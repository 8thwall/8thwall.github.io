---
sidebar_label: faceCameraBehavior()
---
# XR8.Babylonjs.faceCameraBehavior()

`XR8.Babylonjs.faceCameraBehavior(config, faceConfig)`

## Description {#description}

Get a behavior that can be attached to a Babylon camera like so: `camera.addBehavior(XR8.Babylonjs.faceCameraBehavior())`

## Parameters {#parameters}

Parameter | Description
--------- | -----------
config [Optional] | Configuration parameters to pass to [`XR8.run()`](/api/xr8/run)
faceConfig [Optional] | Face configuration parameters to pass to [`XR8.FaceController`](/api/facecontroller)

`config` [Optional] is an object with the following properties:

Property | Type | Default | Description
-------- | ---- | ------- | -----------
webgl2 [Optional] | `Boolean` | `false` | If true, use WebGL2 if available, otherwise fallback to WebGL1.  If false, always use WebGL1.
ownRunLoop [Optional] | `Boolean` | `true` | If true, XR should use it's own run loop.  If false, you will provide your own run loop and be responsible for calling [`runPreRender`](/api/xr8/runprerender) and [`runPostRender`](/api/xr8/runpostrender) yourself [Advanced Users only]
cameraConfig: {direction} [Optional] | `Object` | `{direction: XR8.XrConfig.camera().BACK}` | Desired camera to use. Supported values for `direction` are `XR8.XrConfig.camera().BACK` or `XR8.XrConfig.camera().FRONT`
glContextConfig [Optional] | `WebGLContextAttributes` | `null` | The attributes to configure the WebGL canvas context.
allowedDevices [Optional] | [`XR8.XrConfig.device()`](/api/xrconfig/device) | `XR8.XrConfig.device().MOBILE` | Specify the class of devices that the pipeline should run on.  If the current device is not in that class, running will fail prior  prior to opening the camera. If allowedDevices is `XR8.XrConfig.device().ANY`, always open the camera. Note that world tracking can only be used with `XR8.XrConfig.device().MOBILE`.

`faceConfig` [Optional] is an object with the following properties:

Parameter | Description
--------- | -----------
nearClip [Optional] | The distance from the camera of the near clip plane. By default it will use the Babylon camera.minZ
farClip [Optional] | The distance from the camera of the far clip plane. By default it will use the Babylon camera.maxZ
meshGeometry [Optional] | List that contains which parts of the head geometry are visible.  Options are: `[XR8.FaceController.MeshGeometry.FACE, XR8.FaceController.MeshGeometry.EYES, XR8.FaceController.MeshGeometry.MOUTH, XR8.FaceController.MeshGeometry.IRIS]`. The default is `[XR8.FaceController.MeshGeometry.FACE]`
maxDetections [Optional] | The maximum number of faces to detect. The available choices are 1, 2, or 3. The default is 1.
uvType [Optional] | Specifies which uvs are returned in the facescanning and faceloading event. Options are: `[XR8.FaceController.UvType.STANDARD, XR8.FaceController.UvType.PROJECTED]`. The default is `[XR8.FaceController.UvType.STANDARD]`.
leftHandedAxes [Optional] | If true, use left-handed coordinates.
imageTargets [Optional] | If true, flip left and right in the output.

## Returns {#returns}

A Babylon JS behavior that connects the Face Effects engine to the Babylon camera and starts the camera feed and tracking.

## Example {#example}

```javascript
const startScene = (canvas) => {
  const engine = new BABYLON.Engine(canvas, true /* antialias */)
  const scene = new BABYLON.Scene(engine)
  scene.useRightHandedSystem = false

  const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, 0), scene)
  camera.rotation = new BABYLON.Vector3(0, scene.useRightHandedSystem ? Math.PI : 0, 0)
  camera.minZ = 0.0001
  camera.maxZ = 10000

  // Add a light to the scene
  const directionalLight =
  new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(-5, -10, 7), scene)
  directionalLight.intensity = 0.5

  // Mesh logic
  const faceMesh = new BABYLON.Mesh("face", scene);
  const material = new BABYLON.StandardMaterial("boxMaterial", scene)
  material.diffuseColor = new BABYLON.Color3(173 / 255.0, 80 / 255.0, 255 / 255.0)
  faceMesh.material = material

  let facePoints = []

  const runConfig = {
    cameraConfig: {XR8.XrConfig.camera().FRONT},
    allowedDevices: XR8.XrConfig.device().ANY,
    verbose: true,
  }

  camera.addBehavior(XR8.Babylonjs.faceCameraBehavior(runConfig)) // Connect camera to XR and show camera feed.

  engine.runRenderLoop(() => {
    scene.render()
  })
}
```
