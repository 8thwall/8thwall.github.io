# xrfacelost

## Description {#description}

This event is emitted by [`xrface`](/docs/engine/api/aframe/xrface) when a face is no longer being tracked.

`xrfacelost.detail : {id}`

Property  | Description
--------- | -----------
id | A numerical id of the face that was lost.

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
