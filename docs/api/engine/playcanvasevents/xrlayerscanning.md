---
sidebar_position: 1
---
# xr:layerscanning

## Description {#description}

This event is emitted when all layer segmentation resources have been loaded and scanning has begun. One event is dispatched per layer being scanned.

`xr:layerscanning.detail : { name }`

Property  | Description
--------- | -----------
name: `string` | The name of the layer which we are scanning.

## Example {#example}

```javascript
this.app.on('xr:layerscanning', (event) => {
  console.log(`Layer ${event.name} has started scanning.`)
}, this)
```
