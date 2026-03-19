# AFrame Events

This section describes events emitted by the `xrconfig`, `xrweb`, and `xrface` A-Frame components.

You can listen for these events in your web application to call a function that handles the event.

## Events Emitted by `xrconfig` {#xrconfig}

The following events are emitted by `xrconfig` (which is automatically added if you only use `xrweb`, `xrface`, or `xrlayers`):

Event Emitted | Description
------------- | -----------
[camerastatuschange](camerastatuschange.md) | This event is emitted when the status of the camera changes. See [`onCameraStatusChange`](/api/camerapipelinemodule/oncamerastatuschange) from [`XR8.addCameraPipelineModule()`](/api/xr8/addcamerapipelinemodule) for more information on the possible status.
[realityerror](realityerror.md) | This event is emitted when an error has occured when initializing 8th Wall Web. This is the recommended time at which any error messages should be displayed. The [`XR8.XrDevice()` API](/api/xrdevice) can help with determining what type of error messaging should be displayed.
[realityready](realityready.md) | This event is emitted when 8th Wall Web has initialized and at least one frame has been successfully processed. This is the recommended time at which any loading elements should be hidden.
[screenshoterror](screenshoterror.md) | This event is emitted in response to the [`screenshotrequest`](/api/aframeeventlisenters/screenshotrequest) event resulting in an error.
[screenshotready](screenshotready.md) | This event is emitted in response to the [`screenshotrequest`](/api/aframeeventlisenters/screenshotrequest) event being being completed successfully. The JPEG compressed image of the AFrame canvas will be provided.

## Events Emitted by `xrweb` {#xrweb}

Event Emitted | Description
------------- | -----------
[xrimageloading](xrimageloading.md) | This event is emitted when detection image loading begins.
[xrimagescanning](xrimagescanning.md) | This event is emitted when all detection images have been loaded and scanning has begun.
[xrimagefound](xrimagefound.md) | This event is emitted when an image target is first found.
[xrimageupdated](xrimageupdated.md) | This event is emitted when an image target changes position, rotation or scale.
[xrimagelost](xrimagelost.md) | This event is emitted when an image target is no longer being tracked.
[xrtrackingstatus](xrtrackingstatus.md) | This event is emitted when [`XR8.XrController`](/api/xrcontroller) starts and any time tracking status or reason changes.

## Events Emitted by `xrface` {#xrface}

Event Emitted | Description
------------- | -----------
[xrfaceloading](xrfaceloading.md) | This event is emitted when loading begins for additional face AR resources.
[xrfacescanning](xrfacescanning.md) | This event is emitted when AR resources have been loaded and scanning has begun.
[xrfacefound](xrfacefound.md) | This event is emitted when a face is first found.
[xrfaceupdated](xrfaceupdated.md) | This event is emitted when face is subsequently found.
[xrfacelost](xrfacelost.md) | This event is emitted when a face is no longer being tracked.
[xrmouthopened](xrmouthopened.md) | This event is emitted when a tracked face's mouth opens.
[xrmouthclosed](xrmouthclosed.md) | This event is emitted when a tracked face's mouth closes.
[xrlefteyeopened](xrlefteyeopened.md) | This event is emitted when a tracked face's left eye opens.
[xrlefteyeclosed](xrlefteyeclosed.md) | This event is emitted when a tracked face's left eye closes.
[xrrighteyeopened](xrrighteyeopened.md) | This event is emitted when a tracked face's right eye opens.
[xrrighteyeclosed](xrrighteyeclosed.md) | This event is emitted when a tracked face's right eye closes.
[xrlefteyebrowraised](xrlefteyebrowraised.md) | This event is emitted when a tracked face's left eyebrow is raised from its initial position when the face was found.
[xrlefteyebrowlowered](xrlefteyebrowlowered.md) | This event is emitted when a tracked face's left eyebrow is lowered to its initial position when the face was found.
[xrrighteyebrowraised](xrrighteyebrowraised.md) | This event is emitted when a tracked face's right eyebrow is raised from its initial position when the face was found.
[xrrighteyebrowlowered](xrrighteyebrowlowered.md) | This event is emitted when a tracked face's right eyebrow is lowered to its initial position when the face was found.
[xrlefteyewinked](xrlefteyewinked.md) | This event is emitted when a tracked face's left eye closes and opens within 750ms while the right eye remains open.
[xrrighteyewinked](xrrighteyewinked.md) | This event is emitted when a tracked face's right eye closes and opens within 750ms while the left eye remains open.
[xrblinked](xrblinked.md) | This event is emitted when a tracked face's eyes blink.
[xrinterpupillarydistance](xrinterpupillarydistance.md) | This event is emitted when a tracked face's distance in millimeters between the centers of each pupil is first detected.
