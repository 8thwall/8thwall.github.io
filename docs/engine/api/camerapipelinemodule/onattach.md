# onAttach()

`onAttach: ({framework, canvas, GLctx, computeCtx, isWebgl2, orientation, videoWidth, videoHeight, canvasWidth, canvasHeight, status, stream, video, version, imageTargets, config})`

## Description {#description}

`onAttach()` is called before the first time a module receives frame updates. It is called on modules that were added either before or after the pipeline is running. It includes all the most recent data available from:

* [`onStart()`](./onstart.md)
* [`onDeviceOrientationChange()`](./ondeviceorientationchange.md)
* [`onCanvasSizeChange()`](./oncanvassizechange.md)
* [`onVideoSizeChange()`](./onvideosizechange.md)
* [`onCameraStatusChange()`](./oncamerastatuschange.md)
* [`onAppResourcesLoaded()`](./onappresourcesloaded.md)

## Parameters {#parameters}

Parameter | Description
--------- | -----------
framework | The framework bindings for this module for dispatching events.
canvas | The canvas that backs GPU processing and user display.
GLctx | The drawing canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
computeCtx | The compute canvas's `WebGLRenderingContext` or `WebGL2RenderingContext`.
isWebgl2 | True if `GLctx` is a `WebGL2RenderingContext`.
orientation | The rotation of the UI from portrait, in degrees (-90, 0, 90, 180).
videoWidth | The width of the camera feed, in pixels.
videoHeight | The height of the camera feed, in pixels.
canvasWidth | The width of the `GLctx` canvas, in pixels.
canvasHeight | The height of the `GLctx` canvas, in pixels.
status | One of [ `'requesting'`, `'hasStream'`, `'hasVideo'`, `'failed'` ]
stream | The [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) associated with the camera feed.
video | The video dom element displaying the stream.
version [Optional] | The engine version, e.g. 14.0.8.949, if app resources are loaded.
imageTargets [Optional] | An array of image targets with the fields `{imagePath, metadata, name}`
config | The configuration parameters that were passed to [`XR8.run()`](/api/xr8/run).
