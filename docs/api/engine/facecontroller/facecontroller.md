# XR8.FaceController

## Description {#description}

`FaceController` provides face detection and meshing, and interfaces for configuring tracking.

## Functions {#functions}

Function | Description
-------- | -----------
[configure](configure.md) | Configures what processing is performed by FaceController.
[pipelineModule](pipelinemodule.md) | Creates a camera pipeline module that, when installed, receives callbacks on when the camera has started, camera proessing events, and other state changes. These are used to calculate the camera's position.
[AttachmentPoints](attachmentpoints.md) | Points on the face you can anchor content to.
[MeshGeometry](meshgeometry.md) | Options for defining which portions of the face have mesh triangles returned.
