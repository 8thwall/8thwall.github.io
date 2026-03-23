---
sidebar_label: configure()
---
# XR8.CanvasScreenshot.configure()

`XR8.CanvasScreenshot.configure({ maxDimension, jpgCompression })`

## Description {#description}

Configures the expected result of canvas screenshots.

## Parameters {#parameters}

Parameter | Default | Description
--------- | ------- | -----------
maxDimension: [Optional] | `1280` | The value of the largest expected dimension.
jpgCompression: [Optional] | `75` | 1-100 value representing the JPEG compression quality. 100 is little to no loss, and 1 is a very low quality image.

## Returns {#returns}

None

## Example {#example}

```javascript
XR8.CanvasScreenshot.configure({ maxDimension: 640, jpgCompression: 50 })
```
