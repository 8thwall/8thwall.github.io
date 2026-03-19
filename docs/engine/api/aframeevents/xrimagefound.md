# xrimagefound

## Description {#description}

This event is emitted by [`xrweb`](/api/aframe/#world-tracking-image-targets) when an image target is first found.

`imagefound.detail : { name, type, position, rotation, scale, scaledWidth, scaledHeight, height, radiusTop, radiusBottom, arcStartRadians, arcLengthRadians }`

Property  | Description
--------- | -----------
name | The image's name.
type | One of `'FLAT'`, `'CYLINDRICAL'`, `'CONICAL'`.`
position: `{x, y, z}` | The 3d position of the located image.
rotation: `{w, x, y, z}` | The 3d local orientation of the located image.
scale | A scale factor that should be applied to object attached to this image.

If type = `FLAT`:

Property  | Description
--------- | -----------
scaledWidth | The width of the image in the scene, when multiplied by scale.
scaledHeight | The height of the image in the scene, when multiplied by scale.

If type= `CYLINDRICAL` or `CONICAL`:

Property  | Description
--------- | -----------
height | Height of the curved target.
radiusTop | Radius of the curved target at the top.
radiusBottom | Radius of the curved target at the bottom.
arcStartRadians | Starting angle in radians.
arcLengthRadians | Central angle in radians.

## Example {#example}

```javascript
AFRAME.registerComponent('my-named-image-target', {
  schema: {
    name: { type: 'string' }
  },
  init: function () {
    const object3D = this.el.object3D
    const name = this.data.name
    object3D.visible = false

    const showImage = ({detail}) => {
      if (name != detail.name) {
        return
      }
      object3D.position.copy(detail.position)
      object3D.quaternion.copy(detail.rotation)
      object3D.scale.set(detail.scale, detail.scale, detail.scale)
      object3D.visible = true
    }

    const hideImage = ({detail}) => {
      if (name != detail.name) {
        return
      }
      object3D.visible = false
    }

    this.el.sceneEl.addEventListener('xrimagefound', showImage)
    this.el.sceneEl.addEventListener('xrimageupdated', showImage)
    this.el.sceneEl.addEventListener('xrimagelost', hideImage)
  }
})
```
