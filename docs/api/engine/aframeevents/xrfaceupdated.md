# xrfaceupdated

## Description {#description}

This event is emitted by [`xrface`](/docs/api/engine/aframe/xrface) when face is subsequently found.

`xrfaceupdated.detail : {id, transform, vertices, normals, attachmentPoints}`

Property  | Description
--------- | -----------
id | A numerical id of the located face.
transform: `{position, rotation, scale, scaledWidth, scaledHeight, scaledDepth}` | Transform information of the located face.
vertices: [{x, y, z}] | Position of face points, relative to transform.
normals: [{x, y, z}] | Normal direction of vertices, relative to transform.
attachmentPoints: { name, position: {x,y,z} } | See [`XR8.FaceController.AttachmentPoints`](/docs/api/engine/facecontroller/attachmentpoints) for list of available attachment points. `position` is relative to the transform.
uvsInCameraFrame `[{u, v}]` | The list of uv positions in the camera frame corresponding to the returned vertex points.

`transform` is an object with the following properties:

Property  | Description
--------- | -----------
position {x, y, z} | The 3d position of the located face.
rotation {w, x, y, z} | The 3d local orientation of the located face.
scale | A scale factor that should be applied to objects attached to this face.
scaledWidth | Approximate width of the head in the scene when multiplied by scale.
scaledHeight | Approximate height of the head in the scene when multiplied by scale.
scaledDepth | Approximate depth of the head in the scene when multiplied by scale.

## Example {#example}

```javascript
const faceRigidComponent = {
  init: function () {
    const object3D = this.el.object3D
    object3D.visible = false
    const show = ({detail}) => {
      const {position, rotation, scale} = detail.transform
      object3D.position.copy(position)
      object3D.quaternion.copy(rotation)
      object3D.scale.set(scale, scale, scale)
      object3D.visible = true
    }
    const hide = ({detail}) => { object3D.visible = false }
    this.el.sceneEl.addEventListener('xrfacefound', show)
    this.el.sceneEl.addEventListener('xrfaceupdated', show)
    this.el.sceneEl.addEventListener('xrfacelost', hide)
  }
}
```
