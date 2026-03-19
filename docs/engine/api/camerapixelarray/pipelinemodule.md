---
sidebar_label: pipelineModule()
---
# XR8.CameraPixelArray.pipelineModule()

`XR8.CameraPixelArray.pipelineModule({ luminance, maxDimension, width, height })`

## Description {#description}

A pipeline module that provides the camera texture as an array of RGBA or grayscale pixel values
that can be used for CPU image processing.

## Parameters {#parameters}

Parameter | Default | Description
--------- | ------- | -----------
luminance [Optional] | `false` | If true, output grayscale instead of RGBA
maxDimension: [Optional] |  | The size in pixels of the longest dimension of the output image. The shorter dimension will be scaled relative to the size of the camera input so that the image is resized without cropping or distortion.
width [Optional] | The width of the camera feed texture. | Width of the output image. Ignored if `maxDimension` is specified.
height [Optional] | The height of the camera feed texture. | Height of the output image. Ignored if `maxDimension` is specified.

## Returns {#returns}

Return value is an object made available to [`onProcessCpu`](/docs/engine/api/camerapipelinemodule/onprocesscpu) and
[`onUpdate`](/docs/engine/api/camerapipelinemodule/onupdate) as:

processGpuResult.camerapixelarray: {rows, cols, rowBytes, pixels}

Property  | Description
--------- | -----------
rows | Height in pixels of the output image.
cols | Width in pixels of the output image.
rowBytes | Number of bytes per row of the output image.
pixels | A `UInt8Array` of pixel data.
srcTex | A texture containing the source image for the returned pixels.

## Example {#example}

```javascript
XR8.addCameraPipelineModule(XR8.CameraPixelArray.pipelineModule({ luminance: true }))
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onProcessCpu: ({ processGpuResult }) => {
    const { camerapixelarray } = processGpuResult
    if (!camerapixelarray || !camerapixelarray.pixels) {
      return
    }
    const { rows, cols, rowBytes, pixels } = camerapixelarray

    ...
  },
```
