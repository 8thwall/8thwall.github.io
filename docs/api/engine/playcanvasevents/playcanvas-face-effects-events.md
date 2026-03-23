---
sidebar_position: 3
---
# PlayCanvas Face Effects Events

Face Effects events can be listened to as `this.app.on(event, handler, this)`.

**xr:faceloading**: Fires when loading begins for additional face AR resources.

`xr:faceloading : {maxDetections, pointsPerDetection, indices, uvs}`

**xr:facescanning**: Fires when all face AR resources have been loaded and scanning has begun.

`xr:facescanning: {maxDetections, pointsPerDetection, indices, uvs}`

**xr:facefound**: Fires when a face is first found.

`xr:facefound : {id, transform, attachmentPoints, vertices, normals, uvsInCameraFrame}`

**xr:faceupdated**: Fires when a face is subsequently found.

`xr:faceupdated : {id, transform, attachmentPoints, vertices, normals, uvsInCameraFrame}`

**xr:facelost**: Fires when a face is no longer being tracked.

`xr:facelost : {id}`

**xr:mouthopened**:  Fires when a tracked face's mouth opens.

`xr:mouthopened : {id}`

**xr:mouthclosed**: Fires when a tracked face's mouth closes.

`xr:mouthclosed : {id}`

**xr:lefteyeopened**: Fires when a tracked face's left eye opens.

`xr:lefteyeopened : {id}`

**xr:lefteyeclosed**: Fires when a tracked face's left eye closes.

`xr:lefteyeclosed : {id}`

**xr:righteyeopened**: Fires when a tracked face's right eye opens

`xr:righteyeopened : {id}`

**xr:righteyeclosed**: Fires when a tracked face's right eye closes.

`xr:righteyeclosed : {id}`

**xr:lefteyebrowraised**: Fires when a tracked face's left eyebrow is raised from its initial position when the face was found.

`xr:lefteyebrowraised : {id}`

**xr:lefteyebrowlowered**: Fires when a tracked face's left eyebrow is lowered to its initial position when the face was found.

`xr:lefteyebrowlowered : {id}`

**xr:righteyebrowraised**: Fires when a tracked face's right eyebrow is raised from its position when the face was found.

`xr:righteyebrowraised : {id}`

**xr:righteyebrowlowered**: Fires when a tracked face's right eyebrow is lowered to its initial position when the face was found.

`xr:righteyebrowlowered : {id}`

**xr:lefteyewinked**: Fires when a tracked face's left eye closes and opens within 750ms while the right eye remains open.

`xr:lefteyewinked : {id}`

**xr:righteyewinked**: Fires when a tracked face's right eye closes and opens within 750ms while the left eye remains open.

`xr:righteyewinked : {id}`

**xr:blinked**: Fires when a tracked face's eyes blink.

`xr:blinked : {id}`

**xr:interpupillarydistance**: Fires when a tracked face's distance in millimeters between the centers of each pupil is first detected.

`xr:interpupillarydistance : {id, interpupillaryDistance}`

## Example {#example}

```javascript
  let mesh = null
  
  // Fires when loading begins for additional face AR resources.
  this.app.on('xr:faceloading', ({maxDetections, pointsPerDetection, indices, uvs}) => {
    const node = new pc.GraphNode();
    const material = this.material.resource;
    mesh = pc.createMesh(
      this.app.graphicsDevice,
      new Array(pointsPerDetection * 3).fill(0.0),  // setting filler vertex positions
      {
        uvs: uvs.map((uv) => [uv.u, uv.v]).flat(),
        indices: indices.map((i) => [i.a, i.b, i.c]).flat()
      }
    );

    const meshInstance = new pc.MeshInstance(node, mesh, material);
    const model = new pc.Model();
    model.graph = node;
    model.meshInstances.push(meshInstance);
    this.entity.model.model = model;
  }, {})
  
  // Fires when a face is subsequently found.
  this.app.on('xr:faceupdated', ({id, transform, attachmentPoints, vertices, normals}) => {
    const {position, rotation, scale, scaledDepth, scaledHeight, scaledWidth} = transform
    
    this.entity.setPosition(position.x, position.y, position.z);
    this.entity.setLocalScale(scale, scale, scale)
    this.entity.setRotation(rotation.x, rotation.y, rotation.z, rotation.w)

    // Set mesh vertices in local space
    mesh.setPositions(vertices.map((vertexPos) => [vertexPos.x, vertexPos.y, vertexPos.z]).flat())
    // Set vertex normals
    mesh.setNormals(normals.map((normal) => [normal.x, normal.y, normal.z]).flat())
    mesh.update()
  }, {})
```
