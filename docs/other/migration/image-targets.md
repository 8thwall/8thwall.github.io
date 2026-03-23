---
id: image-targets
sidebar_position: 5
---

# Image Targets

We have developed a new API that allows image targets to be defined directly from code:
```
XrController.configure({imageTargetData: [{...}]})
```

## Flat Image Target

If you are setting up a new flat image target:

1. Start by converting the image to grayscale and cropping/scaling/rotating to 480x640 pixels.
2. Define the image target data:
```
const imageTarget = {
  "imagePath": "./path/to/image.png",
  "metadata": {}, // available for custom use cases
  "name": "my-image-target",
  "type": "PLANAR",
  "properties": {
    "left": 0,
    "top": 0,
    "width": 480,
    "height": 640,
    "originalWidth": 480,
    "originalHeight": 640,
    "isRotated": false, // set this to true if you rotated the image when you cropped it
  }
}
```

## Cylindrical Image Target

For cylindrical targets, there are more parameters to provide (`cylinderSideLength`, `cylinderCircumferenceTop`, `targetCircumferenceTop`, `cylinderCircumferenceBottom`, `arcAngle`, `coniness`)

1.  Define the image target data:
```
const imageTarget = {
  "imagePath": "./path/to/image.png",
  "metadata": {}, // available for custom use cases
  "name": "my-image-target",
  "type": "CYLINDER",
  "properties": {
    "left": 0,
    "top": 18,
    "width": 1476,
    "height": 1968,
    "originalWidth": 1476,
    "originalHeight": 2000,
    "isRotated": false, // set this to true if you rotated the image when you cropped it
    "cylinderSideLength": 135.5,
    "cylinderCircumferenceTop": 257.14, // This should match circumferencce bottom
    "targetCircumferenceTop": 100,
    "cylinderCircumferenceBottom": 257.14,
    "arcAngle": 140.0,
    "coniness": 0, // This should be 0 for all cylinders
    "inputMode": "BASIC",
    "unit": "mm",
  }
}
```

## Conical Image Target

For conical targets, there is the unconification, plus the input format is different from what was uploaded to the web.

1. Start with a rainbow image cropped by the top (dotted green line) and bottom (bold green line) radius

![](/images/migration/conical.png)

2. Stretch the rainbow image to be flat, and crop/scale/rotate the dimensions of the flat, unconified image to be a grayscale 480x640 pixels (this cropped image should be the image provided in the image path)
3. Define the image target data:
```
const imageTarget = {
  "imagePath": "./path/to/image.png", // path to unconified image
  "metadata": {}, // available for custom use cases
  "name": "my-image-target",
  "type": "CONICAL",
  "properties": {
    "left": 177,
    "top": 554,
    "width": 564,
    "height": 752,
    "originalWidth": 842,
    "originalHeight": 2000,
    "isRotated": false, // set this to true if you rotated the image when you cropped it
    "topRadius": 4479,
    "bottomRadius": 3630.644,
    "cylinderSideLength": 21.05,
    "cylinderCircumferenceTop": 100,
    "targetCircumferenceTop": 50,
    "cylinderCircumferenceBottom": 81.06,
    "arcAngle": 180,
    "coniness": 0.303, // log2(topRadius / bottomRadius)
    "inputMode": "BASIC",
    "unit": "mm",
  }
}
```
