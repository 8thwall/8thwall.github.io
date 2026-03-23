---
sidebar_position: 2
---
# PlayCanvas Image Target Events

Image target events can be listened to as `this.app.on(event, handler, this)`.

**xr:imageloading**: Fires when detection image loading begins.

`xr:imageloading : { imageTargets: {name, type, metadata} }`

**xr:imagescanning**: Fires when all detection images have been loaded and scanning has begun.

`xr:imagescanning : { imageTargets: {name, type, metadata, geometry} }`

**xr:imagefound**: Fires when an image target is first found.

`xr:imagefound : { name, type, position, rotation, scale, scaledWidth, scaledHeight, height, radiusTop, radiusBottom, arcStartRadians, arcLengthRadians }`

**xr:imageupdated**: Fires when an image target changes position, rotation or scale.

`xr:imageupdated : { name, type, position, rotation, scale, scaledWidth, scaledHeight, height, radiusTop, radiusBottom, arcStartRadians, arcLengthRadians }`

**xr:imagelost**: Fires when an image target is no longer being tracked.

`xr:imagelost : { name, type, position, rotation, scale, scaledWidth, scaledHeight, height, radiusTop, radiusBottom, arcStartRadians, arcLengthRadians }`

## Example {#example}

```javascript
const showImage = (detail) => {
  if (name != detail.name) { return }
  const {rotation, position, scale} = detail
  entity.setRotation(rotation.x, rotation.y, rotation.z, rotation.w)
  entity.setPosition(position.x, position.y, position.z)
  entity.setLocalScale(scale, scale, scale)
  entity.enabled = true
}

const hideImage = (detail) => {
  if (name != detail.name) { return }
  entity.enabled = false
}

this.app.on('xr:imagefound', showImage, {})
this.app.on('xr:imageupdated', showImage, {})
this.app.on('xr:imagelost', hideImage, {})
```
