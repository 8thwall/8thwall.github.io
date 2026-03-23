# PlayCanvas Events

This section describes the events fired by 8th Wall in a PlayCanvas environment.

You can listen for these events in your web application.

## Events Emitted {#events-emitted}

Event Emitted | Description
------------- | -----------
[xr:camerastatuschange](xrcamerastatuschange.md) | This event is emitted when the status of the camera changes. See [`onCameraStatusChange`](/docs/api/engine/camerapipelinemodule/oncamerastatuschange) from [`XR8.addCameraPipelineModule()`](/docs/api/engine/xr8/addcamerapipelinemodule) for more information on the possible status.
[xr:realityerror](xrrealityerror.md) | This event is emitted when an error has occured when initializing 8th Wall Web. This is the recommended time at which any error messages should be displayed. The [`XR8.XrDevice()` API](/docs/api/engine/xrdevice) can help with determining what type of error messaging should be displayed.
[xr:realityready](xrrealityready.md) | This event is emitted when 8th Wall Web has initialized and at least one frame has been successfully processed. This is the recommended time at which any loading elements should be hidden.
[xr:screenshoterror](xrscreenshoterror.md) | This event is emitted in response to the [`screenshotrequest`](/docs/api/engine/aframeeventlisenters/screenshotrequest) resulting in an error.
[xr:screenshotready](xrscreenshotready.md) | This event is emitted in response to the [`screenshotrequest`](/docs/api/engine/aframeeventlisenters/screenshotrequest) event being being completed successfully. The JPEG compressed image of the AFrame canvas will be provided.

## XR8.XrController Events Emitted {#xrcontroller-events-emitted}

When `XR8.XrController.pipelineModule()` is added by passing it in `extraModules` to `XR8.PlayCanvas.run()` these events are emitted:

Event Emitted | Description
------------- | -----------
[xr:imageloading](playcanvas-image-target-events.md) | This event is emitted when detection image loading begins.
[xr:imagescanning](playcanvas-image-target-events.md) | This event is emitted when all detection images have been loaded and scanning has begun.
[xr:imagefound](playcanvas-image-target-events.md) | This event is emitted when an image target is first found.
[xr:imageupdated](playcanvas-image-target-events.md) | This event is emitted when an image target changes position, rotation or scale.
[xr:imagelost](playcanvas-image-target-events.md) | This event is emitted when an image target is no longer being tracked.

## XR8.LayersController Events Emitted {#layerscontroller-events-emitted}

When `XR8.LayersController.pipelineModule()` is added by passing it in `extraModules` to `XR8.PlayCanvas.run()` these events are emitted:

Event Emitted | Description
------------- | -----------
[xr:layerloading](xrlayerloading.md) | Fires when loading begins for additional layer segmentation resources.
[xr:layerscanning](xrlayerscanning.md) | Fires when all layer segmentation resources have been loaded and scanning has begun. One event is dispatched per layer being scanned.
[xr:layerfound](xrlayerfound.md) | Fires when a layer is first found.

## XR8.FaceController Events Emitted {#facecontroller-events-emitted}

When `XR8.FaceController.pipelineModule()` is added by passing it in `extraModules` to `XR8.PlayCanvas.run()` these events are emitted:

Event Emitted | Description
------------- | -----------
[xr:faceloading](playcanvas-face-effects-events.md) | Fires when loading begins for additional face AR resources.
[xr:facescanning](playcanvas-face-effects-events.md) | Fires when all face AR resources have been loaded and scanning has begun.
[xr:facefound](playcanvas-face-effects-events.md) | Fires when a face is first found.
[xr:faceupdated](playcanvas-face-effects-events.md) | Fires when a face is subsequently found.
[xr:facelost](playcanvas-face-effects-events.md) | Fires when a face is no longer being tracked.
