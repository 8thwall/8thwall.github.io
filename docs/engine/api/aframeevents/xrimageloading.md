# xrimageloading

## Description {#description}

This event is emitted by [`xrweb`](/docs/engine/api/aframe/xrweb) when detection image loading begins.

`imageloading.detail : { imageTargets: {name, type, metadata} }`

Property  | Description
--------- | -----------
name | The image's name.
type | One of `'FLAT'`, `'CYLINDRICAL'`, `'CONICAL'`.
metadata | User metadata.

## Example {#example}

```javascript
const componentMap = {}

const addComponents = ({detail}) => {
  detail.imageTargets.forEach(({name, type, metadata}) => {
    // ...
  })
}

this.el.sceneEl.addEventListener('xrimageloading', addComponents)
```
