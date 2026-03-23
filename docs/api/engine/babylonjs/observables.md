# BabylonJS Observables

## Image Target Observables {#image-target-observables}

**onXrImageLoadingObservable**: Fires when detection image loading begins.

`onXrImageLoadingObservable : { imageTargets: {name, type, metadata} }`

**onXrImageScanningObservable**: Fires when all detection images have been loaded and scanning has begun.

`onXrImageScanningObservable : { imageTargets: {name, type, metadata, geometry} }`

**onXrImageFoundObservable**: Fires when an image target is first found.

`onXrImageFoundObservable : { name, type, position, rotation, scale, scaledWidth, scaledHeight, height, radiusTop, radiusBottom, arcStartRadians, arcLengthRadians }`

**onXrImageUpdatedObservable**: Fires when an image target changes position, rotation or scale.

`onXrImageUpdatedObservable : { name, type, position, rotation, scale, scaledWidth, scaledHeight, height, radiusTop, radiusBottom, arcStartRadians, arcLengthRadians }`

**onXrImageLostObservable**: Fires when an image target is no longer being tracked.

`onXrImageLostObservable : { name, type, position, rotation, scale, scaledWidth, scaledHeight, height, radiusTop, radiusBottom, arcStartRadians, arcLengthRadians }`

## Face Effects Observables {#face-effects-observables}

**onFaceLoadingObservable**: Fires when loading begins for additional face AR resources.

`onFaceLoadingObservable : {maxDetections, pointsPerDetection, indices, uvs}`

**onFaceScanningObservable**: Fires when all face AR resources have been loaded and scanning has begun.

`onFaceScanningObservable: {maxDetections, pointsPerDetection, indices, uvs}`

**onFaceFoundObservable**: Fires when a face is first found.

`onFaceFoundObservable : {id, transform, attachmentPoints, vertices, normals, uvsInCameraFrame}`

**onFaceUpdatedObservable**: Fires when a face is subsequently found.

`onFaceUpdatedObservable : {id, transform, attachmentPoints, vertices, normals, uvsInCameraFrame}`

**onFaceLostObservable**: Fires when a face is no longer being tracked.

`onFaceLostObservable : {id}`

**onMouthOpenedObservable**:  Fires when a tracked face's mouth opens.

`onMouthOpenedObservable : {id}`

**onMouthClosedObservable**: Fires when a tracked face's mouth closes.

`onMouthClosedObservable : {id}`

**onLeftEyeOpenedObservable**: Fires when a tracked face's left eye opens.

`onLeftEyeOpenedObservable : {id}`

**onLeftEyeClosedObservable**: Fires when a tracked face's left eye closes.

`onLeftEyeClosedObservable : {id}`

**onRightEyeOpenedObservable**: Fires when a tracked face's right eye opens

`onRightEyeOpenedObservable : {id}`

**onRightEyeClosedObservable**: Fires when a tracked face's right eye closes.

`onRightEyeClosedObservable : {id}`

**onLeftEyebrowRaisedObservable**: Fires when a tracked face's left eyebrow is raised from its initial position when the face was found.

`onLeftEyebrowRaisedObservable : {id}`

**onLeftEyebrowLoweredObservable**: Fires when a tracked face's left eyebrow is lowered to its initial position when the face was found.

`onLeftEyebrowLoweredObservable : {id}`

**onRightEyebrowRaisedObservable**: Fires when a tracked face's right eyebrow is raised from its position when the face was found.

`onRightEyebrowRaisedObservable : {id}`

**onRightEyebrowLoweredObservable**: Fires when a tracked face's right eyebrow is lowered to its initial position when the face was found.

`onRightEyebrowLoweredObservable : {id}`

**onLeftEyeWinkedObservable**: Fires when a tracked face's left eye closes and opens within 750ms while the right eye remains open.

`onLeftEyeWinkedObservable : {id}`

**onRightEyeWinkedObservable**: Fires when a tracked face's right eye closes and opens within 750ms while the left eye remains open.

`onRightEyeWinkedObservable : {id}`

**onBlinkedObservable**: Fires when a tracked face's eyes blink.

`onBlinkedObservable : {id}`

**onInterPupillaryDistanceObservable**: Fires when a tracked face's distance in millimeters between the centers of each pupil is first detected.

`onInterPupillaryDistanceObservable : {id, interpupillaryDistance}`


#### Image Target Example {#image-target-example}

```javascript
scene.onXrImageUpdatedObservable.add(e => {
  target.position.copyFrom(e.position)
  target.rotationQuaternion.copyFrom(e.rotation)
  target.scaling.set(e.scale, e.scale, e.scale)
})
```

#### Face Effects Example {#face-effects-example}

```javascript
// this is called when the face is first found.  It provides the static information about the
// face such as the UVs and indices
scene.onFaceLoadingObservable.add((event) => {
  const {indices, maxDetections, pointsPerDetection, uvs} = event

  // Babylon expects all vertex data to be a flat list of numbers
  facePoints = Array(pointsPerDetection)
  for (let i = 0; i < pointsPerDetection; i++) {
    const facePoint = BABYLON.MeshBuilder.CreateBox("box", {size: 0.02}, scene)
    facePoint.material = material
    facePoint.parent = faceMesh
    facePoints[i] = facePoint
  }
})

// this is called each time the face is updated which is on a per-frame basis
scene.onFaceUpdatedObservable.add((event) => {
  const {vertices, normals, transform} = event;
  const {scale, position, rotation} = transform
  
  vertices.map((v, i) => {
    facePoints[i].position.x = v.x
    facePoints[i].position.y = v.y
    facePoints[i].position.z = v.z
  })

  faceMesh.scalingDeterminant = scale
  faceMesh.position = position
  faceMesh.rotationQuaternion = rotation
})
```
