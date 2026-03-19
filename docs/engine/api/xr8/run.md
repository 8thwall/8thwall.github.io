---
sidebar_label: run()
---
# XR8.run()

`XR8.run(canvas, webgl2, ownRunLoop, cameraConfig, glContextConfig, allowedDevices, sessionConfiguration)`

## Description {#description}

Open the camera and start running the camera run loop.

## Parameters {#parameters}

Property | Type | Default | Description
-------- | ---- | ------- | -----------
canvas | `HTMLCanvasElement` |  | The HTML Canvas that the camera feed will be drawn to.
webgl2 [Optional] | `Boolean` | `true` | If true, use WebGL2 if available, otherwise fallback to WebGL1.  If false, always use WebGL1.
ownRunLoop [Optional] | `Boolean` | `true` | If true, XR should use it's own run loop.  If false, you will provide your own run loop and be responsible for calling [runPreRender](runprerender.md) and [runPostRender](runpostrender.md) yourself [Advanced Users only]
cameraConfig: {direction} [Optional] | `Object` | `{direction: XR8.XrConfig.camera().BACK}` | Desired camera to use. Supported values for `direction` are `XR8.XrConfig.camera().BACK` or `XR8.XrConfig.camera().FRONT`
glContextConfig [Optional] | `WebGLContextAttributes` | `null` | The attributes to configure the WebGL canvas context.
allowedDevices [Optional] | [`XR8.XrConfig.device()`](/api/xrconfig/device) | `XR8.XrConfig.device().MOBILE_AND_HEADSETS` | Specify the class of devices that the pipeline should run on.  If the current device is not in that class, running will fail prior  prior to opening the camera. If allowedDevices is `XR8.XrConfig.device().ANY`, always open the camera. Note that world tracking can only be used with `XR8.XrConfig.device().MOBILE_AND_HEADSETS` or `XR8.XrConfig.device().MOBILE`.
sessionConfiguration: `{disableXrTablet, xrTabletStartsMinimized, defaultEnvironment}` [Optional] | `Object` | `{}` | Configure options related to varying types of sessions.

`sessionConfiguration` is an object with the following [Optional] properties:

Property  | Type | Default | Description
--------- | ---- | ------- | -----------
disableXrTablet [Optional] | `Boolean` | `false` | Disable the tablet visible in immersive sessions.
xrTabletStartsMinimized [Optional] | `Boolean` | `false` | The tablet will start minimized.
defaultEnvironment `{disabled, floorScale, floorTexture, floorColor, fogIntensity, skyTopColor, skyBottomColor, skyGradientStrength}` [Optional] | `Object` | {} | Configure options related to the default environment of your immersive session.

`defaultEnvironment` is an object with the following [Optional] properties:

Property  | Type | Default | Description
--------- | ---- | ------- | -----------
disabled [Optional] | `Boolean` | `false` | Disable the default "void space" background.
floorScale [Optional] | `Number` | `1` | Shrink or grow the floor texture.
floorTexture [Optional] | Asset | | Specify an alternative texture asset or URL for the tiled floor.
floorColor [Optional] | Hex Color | `#1A1C2A` | Set the floor color.
fogIntensity [Optional] | `Number` | `1` | Increase or decrease fog density.
skyTopColor [Optional] | Hex Color | `#BDC0D6` | Set the color of the sky directly above the user.
skyBottomColor [Optional] | Hex Color | `#1A1C2A` | Set the color of the sky at the horizon.
skyGradientStrength [Optional] | `Number` | `1` | Control how sharply the sky gradient transitions.

Notes:

* `cameraConfig`: World tracking (SLAM) is only supported on the `back` camera.  If you are using the `front` camera, you must disable world tracking by calling `XR8.XrController.configure({disableWorldTracking: true})` first.

## Returns {#returns}

None

## Example {#example}

```javascript
// Open the camera and start running the camera run loop
// In index.html: <canvas id="camerafeed"></canvas>
XR8.run({canvas: document.getElementById('camerafeed')})
```

## Example - Using Front camera (image tracking only) {#example---using-front-camera-image-tracking-only}

```javascript
// Disable world tracking (SLAM). This is required to use the front camera.
XR8.XrController.configure({disableWorldTracking: true})
// Open the camera and start running the camera run loop
// In index.html: <canvas id="camerafeed"></canvas>
XR8.run({canvas: document.getElementById('camerafeed'), cameraConfig: {direction: XR8.XrConfig.camera().FRONT}})
```

## Example - Set glContextConfig {#example---set-glcontextconfig}

```javascript
// Open the camera and start running the camera run loop with an opaque canvas.
// In index.html: <canvas id="camerafeed"></canvas>
XR8.run({canvas: document.getElementById('camerafeed'), glContextConfig: {alpha: false, preserveDrawingBuffer: false}})
```
