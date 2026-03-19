# AFrame Event Listeners

This section describes the events that are listened for by the "xrweb" A-Frame component

You can emit these events in your web application to perform various actions:

Event Listener | Description
-------------- | -----------
[hidecamerafeed](hidecamerafeed.md) | Hides the camera feed. Tracking does not stop.
[recenter](recenter.md) | Recenters the camera feed to its origin. If a new origin is provided as an argument, the camera's origin will be reset to that, then it will recenter.
[screenshotrequest](screenshotrequest.md) | Emits a request to the engine to capture a screenshot of the AFrame canvas. The engine will emit a [`screenshotready`](/api/aframeevents/screenshotready) event with the JPEG compressed image or [`screenshoterror`](/api/aframeevents/screenshoterror) if an error has occured.
[showcamerafeed](showcamerafeed.md) | Shows the camera feed.
[stopxr](stopxr.md) | Stop the current XR session. While stopped, the camera feed is stopped and device motion is not tracked.
