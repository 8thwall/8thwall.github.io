---
sidebar_position: 1
---
# xr:layerfound

## Description {#description}

This event is emitted when a layer is first found.

`xr:layerfound.detail : { name, percentage }`

Property  | Description
--------- | -----------
name: `string` | The name of the layer which has been found.
percentage: `number` | The percentage of pixels that are sky.

## Example {#example}

```javascript
this.app.on('xr:layerfound', (event) => {
  console.log(`Layer ${event.name} found in ${event.percentage} of the screen.`)
}, this)
```
