# xrfaceloading

## Description {#description}

This event is emitted by [`xrface`](/api/aframe/#face-effects) when when loading begins for additional face AR resources.

`xrfaceloading.detail : {maxDetections, pointsPerDetection, indices, uvs}`

Property  | Description
--------- | -----------
maxDetections | The maximum number of faces that can be simultaneously processed.
pointsPerDetection | Number of vertices that will be extracted per face.
indices: [{a, b, c}] | Indexes into the vertices array that form the triangles of the requested mesh, as specified with meshGeometry on configure.
uvs: [{u, v}] | uv positions into a texture map corresponding to the returned vertex points.

## Example {#example}

```javascript
const initMesh = ({detail}) => {
  const {pointsPerDetection, uvs, indices} = detail
  this.el.object3D.add(generateMeshGeometry({pointsPerDetection, uvs, indices}))
}
this.el.sceneEl.addEventListener('xrfaceloading', initMesh)
```
