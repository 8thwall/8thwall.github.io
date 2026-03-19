---
sidebar_label: takeScreenshot()
---
# XR8.CanvasScreenshot.takeScreenshot()

`XR8.CanvasScreenshot.takeScreenshot({ onProcessFrame })`

## Description {#description}

Returns a Promise that when resolved, provides a buffer containing the JPEG compressed image. When rejected, an error message is provided.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
onProcessFrame [Optional] | Callback where you can implement additional drawing to the screenshot 2d canvas.

## Returns {#returns}

A Promise.

## Example {#example}

```javascript
XR8.addCameraPipelineModule(XR8.canvasScreenshot().cameraPipelineModule())
XR8.canvasScreenshot().takeScreenshot().then(
  data => {
    // myImage is an <img> HTML element
    const image = document.getElementById('myImage')
    image.src = 'data:image/jpeg;base64,' + data
  },
  error => {
    console.log(error)
    // Handle screenshot error.
  })
})
```
