---
sidebar_label: setForegroundCanvas()
---
# XR8.CanvasScreenshot.setForegroundCanvas()

`XR8.CanvasScreenshot.setForegroundCanvas(canvas)`

## Description {#description}

Sets a foreground canvas to be displayed on top of the camera canvas. This must be the same dimensions as the camera canvas.

Only required if you use separate canvases for camera feed vs virtual objects.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
canvas | The canvas to use as a foreground in the screenshot

## Returns {#returns}

None

## Example {#example}

```javascript
const myOtherCanvas = document.getElementById('canvas2')
XR8.CanvasScreenshot.setForegroundCanvas(myOtherCanvas)
```
