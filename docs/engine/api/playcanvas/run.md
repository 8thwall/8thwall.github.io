---
sidebar_label: run()
---
# XR8.PlayCanvas.run()

`XR8.PlayCanvas.run( {pcCamera, pcApp}, [extraModules], config )`

## Description {#description}

Adds specified Pipeline Modules and then opens the camera.

## Parameters {#parameters}

Parameter | Type | Description
--------- | ---- | -----------
pcCamera | [`pc.CameraComponent`](https://developer.playcanvas.com/en/api/pc.CameraComponent.html) |The PlayCanvas scene camera to drive with AR.
pcApp | [`pc.Application`](https://developer.playcanvas.com/en/api/pc.Application.html) | The PlayCanvas app, typically `this.app`.
extraModules [Optional] | `[Object]` | An optional array of extra pipeline modules to install.
config | `{canvas, webgl2, ownRunLoop, cameraConfig, glContextConfig, allowedDevices, layers}` |Configuration parameters to pass to [`XR8.run()`](/api/xr8/run) as well as PlayCanvas specific configuration, e.g. `layers`.

`config` is an object with the following properties:

Property | Type | Default | Description
-------- | ---- | ------- | -----------
canvas | [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) |  | The HTML Canvas that the camera feed will be drawn to. Typically this is `document.getElementById('application-canvas')`.
webgl2 [Optional] | `Boolean` | `false` | If true, use WebGL2 if available, otherwise fallback to WebGL1.  If false, always use WebGL1.
ownRunLoop [Optional] | `Boolean` | `false` | If true, XR should use it's own run loop.  If false, you will provide your own run loop and be responsible for calling [`XR8.runPreRender()`](/api/xr8/runprerender) and [`XR8.runPostRender()`](/api/xr8/runpostrender) yourself [Advanced Users only]
cameraConfig: {direction} [Optional] | `Object` | `{direction: XR8.XrConfig.camera().BACK}` | Desired camera to use. Supported values for `direction` are `XR8.XrConfig.camera().BACK` or `XR8.XrConfig.camera().FRONT`
glContextConfig [Optional] | `WebGLContextAttributes` | `null` | The attributes to configure the WebGL canvas context.
allowedDevices [Optional] | [`XR8.XrConfig.device()`](/api/xrconfig/device) | `XR8.XrConfig.device().MOBILE` | Specify the class of devices that the pipeline should run on.  If the current device is not in that class, running will fail prior  prior to opening the camera. If allowedDevices is `XR8.XrConfig.device().ANY`, always open the camera. Note that world tracking can only be used with `XR8.XrConfig.device().MOBILE`.
layers [Optional] | `[]` | `[]` |  Specify the list of layers to draw using `GlTextureRenderer`. The key is the name of the layer in 8th Wall, and the value is a list of PlayCanvas layer names which we should render to a texture and mask using the 8th Wall layer. Example value: `{"sky": ["FirstSkyLayer", "SecondSkyLayer"]}`.

## Returns {#returns}

None

## Example {#example}

```javascript
var layerscontroller = pc.createScript('layerscontroller')

layerscontroller.prototype.initialize = function() {
  // After XR has fully loaded, open the camera feed and start displaying AR.
  const runOnLoad = ({pcCamera, pcApp}, extramodules) => () => {
    // Pass in your canvas name. Typically this is 'application-canvas'.
    const config = {
      canvas: document.getElementById('application-canvas'),
      layers: {"sky": ["Sky"]}
    }
    XR8.PlayCanvas.run({pcCamera, pcApp}, extraModules, config)
  }

  // Find the camera in the PlayCanvas scene, and tie it to the motion of the user's phone in the
  // world.
  const pcCamera = XRExtras.PlayCanvas.findOneCamera(this.entity)

  // While XR is still loading, show some helpful things.
  // Almost There: Detects whether the user's environment can support web ar, and if it doesn't,
  //     shows hints for how to view the experience.
  // Loading: shows prompts for camera permission and hides the scene until it's ready for display.
  // Runtime Error: If something unexpected goes wrong, display an error screen.
  XRExtras.Loading.showLoading({onxrloaded: runOnLoad({pcCamera, pcApp: this.app}, [
    // Optional modules that developers may wish to customize or theme.
    XRExtras.AlmostThere.pipelineModule(),       // Detects unsupported browsers and gives hints.
    XRExtras.Loading.pipelineModule(),           // Manages the loading screen on startup.
    XRExtras.RuntimeError.pipelineModule(),      // Shows an error image on runtime error.
    XR8.LayersController.pipelineModule(),       // Adds support for Sky Effects.
  ])})
}
```
