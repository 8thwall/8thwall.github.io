# Sky Effects

If you want Sky Effects:

1. Add the `xrlayers` component to your `a-scene`
2. Add the `xrlayerscene` component to an `a-entity` and add content you want to be in the sky under that `a-entity`.

```html
<a-scene xrconfig xrlayers>
  <a-entity xrlayerscene="name: sky; edgeSmoothness:0.6; invertLayerMask: true;">
    <!-- Add your Sky Effects content here. -->
  </a-entity>
</a-scene>
```

## xrlayers Attributes {#xrlayers-attributes}

None

Notes:

* `xrlayers` and `xrface` cannot be used at the same time.
* `xrlayers` and `xrweb` can be used at the same time. You must use `xrconfig` when doing so.
  * Best practice is to always use `xrconfig`; however, if you use `xrlayers` without `xrface` or `xrweb` or `xrconfig`, then `xrconfig` will be added automatically. When that happens all attributes which were set on `xrweb` will be passed along to `xrconfig`.

## xrlayerscene Attributes {#xrlayerscene-attributes}

Component | Type | Default | Description
--------- | ---- | ------- | -----------
name | `String` | `''` | The layer name. Should correspond to a layer from [`XR8.LayersController`](../layerscontroller/layerscontroller.md). Only supported layer at this time is `sky`.
invertLayerMask | `Boolean` | `false` | If true, content you place in your scene will occlude non-sky areas. If false, content you place in your scene will occlude sky areas.
edgeSmoothness | `Number` | `0` | Amount to smooth the edges of the layer. Valid values between 0-1.

## xrlayersceneComponent()

`XR8.AFrame.xrlayersceneComponent()`

Creates an A-Frame component which can be registered with `AFRAME.registerComponent()`. This,
however, generally won't need to be called directly. On 8th Wall Web script load, this component
will be registered automatically if it is detected that A-Frame has loaded (i.e if `window.AFRAME`
exists).

```javascript
window.AFRAME.registerComponent('xrlayersceneComponent', XR8.AFrame.xrlayersceneComponent())
```

## xrlayersComponent()

`XR8.AFrame.xrlayersComponent()`

Creates an A-Frame component which can be registered with `AFRAME.registerComponent()`. This,
however, generally won't need to be called directly. On 8th Wall Web script load, this component
will be registered automatically if it is detected that A-Frame has loaded (i.e if `window.AFRAME`
exists).

```javascript
window.AFRAME.registerComponent('xrlayers', XR8.AFrame.xrlayersComponent())
```
