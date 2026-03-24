# XR8.XrController

## Description {#description}

`XrController` provides 6DoF camera tracking and interfaces for configuring tracking.

## Functions {#functions}

Function | Description
-------- | -----------
[configure](configure.md) | Configures what processing is performed by `XrController` (may have performance implications).
[hitTest](hittest.md) | Estimate the 3D position of a point on the camera feed.
[pipelineModule](pipelinemodule.md) | Creates a camera pipeline module that, when installed, receives callbacks on when the camera has started, camera proessing events, and other state changes. These are used to calculate the camera's position.
[recenter](recenter.md) | Repositions the camera to the origin / facing direction specified by updateCameraProjectionMatrix and restart tracking.
[updateCameraProjectionMatrix](updatecameraprojectionmatrix.md) | Reset the scene's display geometry and the camera's starting position in the scene. The display geometry is needed to properly overlay the position of objects in the virtual scene on top of their corresponding position in the camera image. The starting position specifies where the camera will be placed and facing at the start of a session.
