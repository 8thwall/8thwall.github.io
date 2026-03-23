# Face Effects

If you want Face Effects tracking, add the `xrface` component to your `a-scene`:

`<a-scene xrconfig xrface>`

## xrface Attributes {#xrface-attributes}

Component | Type | Default | Description
--------- | ---- | ------- | -----------
meshGeometry | `Array` | `['face']` | Comma separated strings that configures which portions of the face mesh will have returned triangle indices. Can be any combination of `'face'`, `'eyes'`, `'iris'` and/or `'mouth'`.
maxDetections [Optional] | `Number` | `1` | The maximum number of faces to detect. The available choices are 1, 2, or 3.
uvType [Optional] | `String` | `[XR8.FaceController.UvType.STANDARD]` | Specifies which uvs are returned in the facescanning and faceloading event. Options are: `[XR8.FaceController.UvType.STANDARD, XR8.FaceController.UvType.PROJECTED]`
enableEars [Optional] | `Boolean` | `false` | If true, runs ear detection simultaneosly with Face Effects and returns ear attachment points.


Notes:

* `xrface` and `xrweb` cannot be used at the same time.
* `xrface` and `xrlayers` cannot be used at the same time.
* Best practice is to always use `xrconfig`; however, if you use `xrface` without `xrconfig` then `xrconfig` will be added automatically. When that happens all attributes which were set on `xrface` will be passed along to `xrconfig`.

## xrfaceComponent()

`XR8.AFrame.xrfaceComponent()`

Creates an A-Frame component which can be registered with `AFRAME.registerComponent()`. This,
however, generally won't need to be called directly. On 8th Wall Web script load, this component
will be registered automatically if it is detected that A-Frame has loaded (i.e if `window.AFRAME`
exists).

```javascript
window.AFRAME.registerComponent('xrface', XR8.AFrame.xrfaceComponent())
```
