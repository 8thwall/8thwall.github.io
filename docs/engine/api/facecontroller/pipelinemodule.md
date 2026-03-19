---
sidebar_position: 2
sidebar_label: pipelineModule()
---
# XR8.FaceController.pipelineModule()

`XR8.FaceController.pipelineModule()`

## Description {#description}

Creates a camera pipeline module that, when installed, receives callbacks on when the camera has started, camera proessing events, and other state changes. These are used to calculate the camera's position.

## Parameters {#parameters}

None

## Returns {#returns}

Return value is an object made available to [`onUpdate`](/docs/engine/api/camerapipelinemodule/onupdate) as:

`processCpuResult.facecontroller: { rotation, position, intrinsics, cameraFeedTexture }`

Property  | Type | Description
--------- | ---- | -----------
rotation | `{w, x, y, z}` | The orientation (quaternion) of the camera in the scene.
position | `{x, y, z}` | The position of the camera in the scene.
intrinsics | `[Number]` | A 16 dimensional column-major 4x4 projection matrix that gives the scene camera the same field of view as the rendered camera feed.
cameraFeedTexture | [`WebGLTexture`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLTexture) | The texture containing camera feed data.

## Dispatched Events {#dispatched-events}

**faceloading**: Fires when loading begins for additional face AR resources.

`faceloading.detail : {maxDetections, pointsPerDetection, indices, uvs}`

Property  | Type | Description
--------- | ---- | -----------
maxDetections | `Number` | The maximum number of faces that can be simultaneously processed.
pointsPerDetection | `Number` | Number of vertices that will be extracted per face.
indices | `[{a, b, c}]` | The list of indexes into the vertices array that form the triangles of the requested mesh, as specified with `meshGeometry` in [`XR8.FaceController.configure()`](configure.md).
uvs | `[{u, v}]` | The list of uv positions into a texture map corresponding to the returned vertex points.

**facescanning**: Fires when all face AR resources have been loaded and scanning has begun.

`facescanning.detail : {maxDetections, pointsPerDetection, indices, uvs}`

Property  | Type | Description
--------- | ---- | -----------
maxDetections | `Number` | The maximum number of faces that can be simultaneously processed.
pointsPerDetection | `Number` | Number of vertices that will be extracted per face.
indices | `[{a, b, c}]` | The list of indexes into the vertices array that form the triangles of the requested mesh, as specified with `meshGeometry` in [`XR8.FaceController.configure()`](configure.md).
uvs | `[{u, v}]` | The list of uv positions into a texture map corresponding to the returned vertex points.

**facefound**: Fires when a face first found.

`facefound.detail : {id, transform, vertices, normals, attachmentPoints}`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.
transform | `{position, rotation, scale, scaledWidth, scaledHeight, scaledDepth}` | Transform information of the located face.
vertices | `[{x, y, z}]` | Position of face points, relative to transform.
normals | `[{x, y, z}]` | Normal direction of vertices, relative to transform.
attachmentPoints | `{name, position: {x,y,z}}` | See [`XR8.FaceController.AttachmentPoints`](attachmentpoints.md) for list of available attachment points. `position` is relative to the transform.
uvsInCameraFrame | `[{u, v}]` | The list of uv positions in the camera frame corresponding to the returned vertex points.

`transform` is an object with the following properties:

Property  | Type | Description
--------- | ---- | -----------
position | `{x, y, z}` | The 3d position of the located face.
rotation | `{w, x, y, z}` | The 3d local orientation of the located face.
scale | `Number` | A scale factor that should be applied to objects attached to this face.
scaledWidth | `Number` | Approximate width of the head in the scene when multiplied by scale.
scaledHeight | `Number` | Approximate height of the head in the scene when multiplied by scale.
scaledDepth | `Number` | Approximate depth of the head in the scene when multiplied by scale.

**faceupdated**: Fires when a face is subsequently found.

`faceupdated.detail : {id, transform, vertices, normals, attachmentPoints}`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.
transform | `{position, rotation, scale, scaledWidth, scaledHeight, scaledDepth}` | Transform information of the located face.
vertices | `[{x, y, z}]` | Position of face points, relative to transform.
normals | `[{x, y, z}]` | Normal direction of vertices, relative to transform.
attachmentPoints | `{name, position: {x,y,z}}` | See [`XR8.FaceController.AttachmentPoints`](attachmentpoints.md) for list of available attachment points. `position` is relative to the transform.
uvsInCameraFrame | `[{u, v}]` | The list of uv positions in the camera frame corresponding to the returned vertex points.

`transform` is an object with the following properties:

Property  | Type | Description
--------- | ---- | -----------
position | `{x, y, z}` | The 3d position of the located face.
rotation | `{w, x, y, z}` | The 3d local orientation of the located face.
scale | `Number` | A scale factor that should be applied to objects attached to this face.
scaledWidth | `Number` | Approximate width of the head in the scene when multiplied by scale.
scaledHeight | `Number` | Approximate height of the head in the scene when multiplied by scale.
scaledDepth | `Number` | Approximate depth of the head in the scene when multiplied by scale.

**facelost**: Fires when a face is no longer being tracked.

`facelost.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**mouthopened**: Fires when a tracked face's mouth opens.

`mouthopened.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**mouthclosed**: Fires when a tracked face's mouth closes.

`mouthclosed.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**lefteyeopened**: Fires when a tracked face's left eye opens.

`lefteyeopened.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**lefteyeclosed**: Fires when a tracked face's left eye closes.

`lefteyeclosed.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**righteyeopened**: Fires when a tracked face's right eye opens.

`righteyeopened.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**righteyeclosed**: Fires when a tracked face's right eye closes.

`righteyeclosed.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**lefteyebrowraised**: Fires when a tracked face's left eyebrow is raised from its initial position when the face was found.

`lefteyebrowraised.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**lefteyebrowlowered**: Fires when a tracked face's left eyebrow is lowered to its initial position when the face was found.

`lefteyebrowlowered.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**righteyebrowraised**: Fires when a tracked face's right eyebrow is raised from its position when the face was found.

`righteyebrowraised.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**righteyebrowlowered**: Fires when a tracked face's right eyebrow is lowered to its initial position when the face was found.

`righteyebrowlowered.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**lefteyewinked**: Fires when a tracked face's left eye closes and opens within 750ms while the right eye remains open.

`lefteyewinked.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**righteyewinked**: Fires when a tracked face's right eye closes and opens within 750ms while the left eye remains open.

`righteyewinked.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**blinked**: Fires when a tracked face's eyes blink.

`blinked.detail : { id }`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.

**interpupillarydistance**: Fires when a tracked face's distance in millimeters between the centers of each pupil is first detected.

`interpupillarydistance.detail : {id, interpupillaryDistance}`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face.
interpupillaryDistance | `Number` | Approximate distance in millimeters between the centers of each pupil.

When `enableEars:true` ear detection runs simultaneously with Face Effects and dispatches the following events:

**earfound**: Fires when an ear is first found.

`earfound.detail : {id, ear}`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face which the ear is attached to.
ear | `String` | Can be either `left` or `right`.

**earpointfound**: Fires when an ear attachmentPoint is first found.

`earpointfound.detail : {id, point}`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face which the ear attachmentPoints is attached to.
point | `String` | Can be either `leftHelix`, `leftCanal`, `leftLobe`, `rightHelix`, `rightCanal`, or `rightLobe`.

**earlost**: Fires when an ear is no longer being tracked.

`earlost.detail : {id, ear}`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face which the ear is attached to.
ear | `String` | Can be either `left` or `right`.

**earpointlost**: Fires when an ear attachmentPoint is no longer being tracked.

`earpointlost.detail : {id, point}`

Property  | Type | Description
--------- | ---- | -----------
id | `Number` | A numerical id of the located face which the ear attachmentPoints is attached to.
point | `String` | Can be either `leftHelix`, `leftCanal`, `leftLobe`, `rightHelix`, `rightCanal`, or `rightLobe`.

## Example - adding pipeline module {#example---adding-pipeline-module}

```javascript
XR8.addCameraPipelineModule(XR8.FaceController.pipelineModule())
```
