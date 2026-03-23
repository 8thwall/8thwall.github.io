# Camera Configuration

To configure the camera feed, add the `xrconfig` component to your `a-scene`:

`<a-scene xrconfig>`

## xrconfig Attributes (all optional) {#xrconfig-attributes}

Component | Type | Default | Description
--------- | ---- | ------- | -----------
cameraDirection | `String` | `'back'` | Desired camera to use. Choose from: `back` or `front`. Use `cameraDirection: front;` with `mirroredDisplay: true;` for selfie mode. Note that world tracking is only supported with `cameraDirection: back;`.`
allowedDevices | `String` | `'mobile-and-headsets'` | Supported device classes. Choose from: `'mobile-and-headsets'` , `'mobile'` or `'any'`. Use `'any'` to enable laptop or desktop-type devices with built-in or attached webcams. Note that world tracking is only supported on `'mobile-and-headsets'` or `mobile`.
mirroredDisplay | `Boolean` | `false` | If true, flip left and right in the output geometry and reverse the direction of the camera feed. Use `'mirroredDisplay: true;'` with `'cameraDirection: front;'` for selfie mode. Should not be enabled if World Tracking (SLAM) is enabled.
disableXrTablet | `Boolean` | `false` | Disable the tablet visible in immersive sessions.
xrTabletStartsMinimized | `Boolean` | `false` | The tablet will start minimized.
disableDefaultEnvironment | `Boolean` | `false` | Disable the default "void space" background.
disableDesktopCameraControls | `Boolean` | `false` | Disable WASD and mouse look for camera.
disableDesktopTouchEmulation | `Boolean` | `false` | Disable desktop fake touches.
disableXrTouchEmulation | `Boolean` | `false` | Don’t emit touch events based on controller raycasts with the scene.
disableCameraReparenting | `Boolean` | `false` | Disable camera -> controller object move
defaultEnvironmentFloorScale | `Number` | `1` | Shrink or grow the floor texture.
defaultEnvironmentFloorTexture | Asset | | Specify an alternative texture asset or URL for the tiled floor.
defaultEnvironmentFloorColor | Hex Color | `#1A1C2A` | Set the floor color.
defaultEnvironmentFogIntensity | `Number` | `1` | Increase or decrease fog density.
defaultEnvironmentSkyTopColor | Hex Color | `#BDC0D6` | Set the color of the sky directly above the user.
defaultEnvironmentSkyBottomColor | Hex Color | `#1A1C2A` | Set the color of the sky at the horizon.
defaultEnvironmentSkyGradientStrength | `Number` | `1` | Control how sharply the sky gradient transitions.

Notes:

* `cameraDirection`: When using `xrweb` to provide world tracking (SLAM), only the `back` camera is
supported. If you are using the `front` camera, you must disable world tracking by setting
`disableWorldTracking: true` on `xrweb`.

## xrconfigComponent()

`XR8.AFrame.xrconfigComponent()`

Creates an A-Frame component which can be registered with `AFRAME.registerComponent()`. This,
however, generally won't need to be called directly. On 8th Wall Web script load, this component
will be registered automatically if it is detected that A-Frame has loaded (i.e if `window.AFRAME`
exists).

```javascript
window.AFRAME.registerComponent('xrconfig', XR8.AFrame.xrconfigComponent())
```
