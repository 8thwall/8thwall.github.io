# PlayCanvas Event Listeners

This section describes the events that are listened for by 8th Wall Web in a PlayCanvas environment.

You can fire these events in your web application to perform various actions:

Event Listener | Description
-------------- | -----------
[xr:hidecamerafeed](xrhidecamerafeed.md) | Hides the camera feed. Tracking does not stop.
[xr:recenter](xrrecenter.md) | Recenters the camera feed to its origin. If a new origin is provided as an argument, the camera's origin will be reset to that, then it will recenter.
[xr:screenshotrequest](xrscreenshotrequest.md) | Emits a request to the engine to capture a screenshot of the PlayCanvas canvas. The engine will emit a [`xr:screenshotready`](/docs/engine/api/playcanvasevents/xrscreenshotready) event with the JPEG compressed image or [`xr:screenshoterror`](/docs/engine/api/playcanvasevents/xrscreenshoterror) if an error has occured.
[xr:showcamerafeed](xrshowcamerafeed.md) | Shows the camera feed.
[xr:stopxr](xrstopxr.md) | Stop the current XR session. While stopped, the camera feed is stopped and device motion is not tracked.
