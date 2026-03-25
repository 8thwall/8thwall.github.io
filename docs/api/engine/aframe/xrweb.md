# World Tracking & Image Targets

If you want World Tracking or Image Targets, add the `xrweb` component to your `a-scene`:

`<a-scene xrconfig xrweb>`

## xrweb Attributes (all optional) {#xrweb-attributes}

Component | Type | Default | Description
--------- | ---- | ------- | -----------
scale | `String` | `'responsive'` | Either `'responsive'` or `'absolute'`. `'responsive'` will return values so that the camera on frame 1 is at the origin defined via [`XR8.XrController.updateCameraProjectionMatrix()`](../xrcontroller/updatecameraprojectionmatrix). `'absolute'` will return the camera, image targets, etc in meters. The default is `'responsive'`. When using `'absolute'` the x-position, z-position, and rotation of the starting pose will respect the parameters set in [`XR8.XrController.updateCameraProjectionMatrix()`](../xrcontroller/updatecameraprojectionmatrix) once scale has been estimated. The y-position will depend on the camera's physical height from the ground plane.
disableWorldTracking | `Boolean` | `false` | If true, turn off SLAM tracking for efficiency.

Notes:

* `xrweb` and `xrface` cannot be used at the same time.
* `xrweb` and `xrlayers` can be used at the same time. You must use `xrconfig` when doing so.
  * Best practice is to always use `xrconfig`; however, if you use `xrweb` without `xrface` or
  `xrlayers` or `xrconfig`, then `xrconfig` will be added automatically. When that happens all
  attributes which were set on `xrweb` will be passed along to `xrconfig`.
* `cameraDirection`: World tracking (SLAM) is only supported on the `back` camera. If you are using
  the `front` camera, you must disable world tracking by setting `disableWorldTracking: true`.
* World tracking (SLAM) is only supported on mobile devices.

## xrwebComponent()

`XR8.AFrame.xrwebComponent()`

Creates an A-Frame component which can be registered with `AFRAME.registerComponent()`. This,
however, generally won't need to be called directly. On 8th Wall Web script load, this component
will be registered automatically if it is detected that A-Frame has loaded (i.e if `window.AFRAME`
exists).

```javascript
window.AFRAME.registerComponent('xrweb', XR8.AFrame.xrwebComponent())
```
