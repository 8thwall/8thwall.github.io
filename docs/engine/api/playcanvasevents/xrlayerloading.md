---
sidebar_position: 1
---
# xr:layerloading

## Description {#description}

This event is emitted when loading begins for additional layer segmentation.

`xr:layerloading.detail : { }`

## Example {#example}

```javascript
this.app.on('xr:layerloading', () => {
  console.log(`Layer loading.`)
}, this)
```
