---
id: image-targets
---

# Image Targets

Bring signage, magazines, boxes, bottles, cups, and cans to life with 8th Wall Image Targets. 8th
Wall Web can detect and track flat, cylindrical and conical shaped image targets, allowing you to
bring static content to life.

Not only can your designated image target trigger a web AR experience, but your content also has the
ability to track directly to it.

Image targets can work in tandem with our World Tracking (SLAM), enabling experiences that combine
image targets and markerless tracking.

You may track up to 5 image targets simultaneously with World Tracking enabled or up to 10 when it
is disabled.

Up to 5 image targets per project can be **"Autoloaded"**. An Autoloaded image target is enabled
immediately as the page loads. This is useful for apps that use 5 or fewer image targets such as
product packaging, a movie poster or business card.

The set of active image targets can be changed at any time by calling
[XR8.XrController.configure()](/docs/engine/api/xrcontroller/configure). This lets you manage hundreds of image
targets per project making possible use cases like geo-fenced image target hunts, AR books, guided
art museum tours and much more. If your project utilizes SLAM most of the time but image targets
some of the time, you can improve performance by only loading image targets when you need them. You
can even read uploaded target names from URL parameters stored in different QR Codes, allowing you
to have different targets initially load in the same web app depending on which QR Codes the user
scans to enter the experience.

## Image Target Types {#image-target-types}

 | |
-|-|-
**Flat**|![FlatTarget](/images/flat.jpg)| Track 2D images like posters, signs, magazines, boxes, etc.
**Cylindrical**|![CylindricalTarget](/images/cylindrical.jpg)| Track images wrapped around cylindrical items like cans and bottles.
**Conical**|![ConicalTarget](/images/conical.jpg)| Track images wrapped around objects with different a top vs bottom circumference like coffee cups, etc.

## Image Target Requirements {#image-target-requirements}

* File Types: **.jpg**, **.jpeg** or **.png**
* Dimensions:
  * Minimum: **480 x 640 pixels**
  * Maximum length or width: **2048 pixels**.
    * Note: If you upload something larger, the image is resized down to a max length/width of 2048
    , maintaining aspect ratio.
* Hosting: All image targets must be uploaded to your 8th Wall project before they can be
  used. You can self-host the rest of your Web AR experience (if on an Enterprise or Legacy Pro
  plan) but the source image target is always hosted by 8th Wall. Please see below for instructions
  on creating/uploading flat or curved image targets.

## Image Target Quantities {#image-target-quantities}

There is no limit to the number of image targets that can be associated with a project, however,
there are limits to the number of image targets that can be **active** in the user's browser at any
given time.

* Active image targets per Project: **32**

## Manage Image Targets {#manage-image-targets}

Click the Image Target icon in the left navigation or the "Manage Image Targets" link on the Project
Dashboard to manage your image targets.

This screen allows you to create, edit, and delete the image targets associated with your project.
Click on an existing image target to edit.  Click the "+" icon for the desired image target type to
create a new one.

## Create Flat Image Target {#create-flat-image-target}

1. Click the "+ Flat" icon to create a new flat image target.

![ImageTargetFlat1](/images/image-target-create-flat.jpg)

2. **Upload Flat Image Target**: Drag your image (.jpg, .jpeg or .png) into the upload panel, or click within the dotted region and use your file browser to select your image.

3. **Set Tracking Region** (and Orientation): Use the slider to set the region of the image that will be used to detect and track your target within the WebAR experience. The rest of the image will be discarded, and the region which you specify will be tracked in your experience.

![SetTrackingRegion](https://media.giphy.com/media/RCFntZ0hn5VO3W9Mld/giphy.gif)

4. **Edit Flat Image Target properties**:

* (1) Give your image target a **name** by editing the field at the top left of the window.
* (2) **IMPORTANT!** Test your image target: The best way to determine if your uploaded image will make a good or bad image target (see [Optimizing Image Target Tracking](#optimizing-image-target-tracking)) is to use the Simulator to assess tracking quality.  Scan the QR code with your camera app to open the simulator link, then point your device at the screen or physical object.
* (3) Click **Load automatically** if you want the image target to be enabled automatically as the WebAR project loads. Up to 5 image targets can be loaded automatically without writing a single line of code.  More targets can be loaded programnatically through the Javascript API.
* (4) Optional: If you would like to add metadata to your image, in either Text or JSON format, click the **Metadata** button at the bottom of the window.

![EditFlatImageTarget](/images/edit-flat-image-target.jpg)

5. Changes made on this screen are automatically saved.  Click **Close** to return to your image target library.

## Create Cylindrical Image Target {#create-cylindrical-image-target}

1. Click the "+ Cylindrical" icon to create a new flat image target.

![ImageTargetFlat1](/images/image-target-create-cylindrical.jpg)

2. **Upload Flat Image Target**: Drag your image (.jpg, .jpeg or .png) into the upload panel, or click within the dotted region and use your file browser to select your image.

3. **Set Tracking Region** (and Orientation): Use the slider to set the region of the image that will be used to detect and track your target within the WebAR experience. The rest of the image will be discarded, and the region which you specify will be tracked in your experience.

![](https://media.giphy.com/media/AdgvL3hqQAULWEHWTg/giphy.gif)

4. **Edit Cylindrical Image Target properties**:

* (1) Give your image target a **name** by editing the field at the top left of the window.
* (2) **Drag the sliders** until the shape of your label appears as expected in the simulator, or **input the measurements** directly.
* (3) **IMPORTANT!** Test your image target: The best way to determine if your uploaded image will make a good or bad image target (see [Optimizing Image Target Tracking](#optimizing-image-target-tracking)) is to use the Simulator to assess tracking quality.  Scan the QR code with your camera app to open the simulator link, then point your device at the screen or physical object.
* (4) Click **Load automatically** if you want the image target to be enabled automatically as the WebAR project loads. Up to 5 image targets can be loaded automatically without writing a single line of code.  More targets can be loaded programnatically through the Javascript API.
* (5) Optional: If you would like to add metadata to your image, in either Text or JSON format, click the **Metadata** button at the bottom of the window.

![EditCylindricalImageTarget](/images/edit-cylindrical-image-target.jpg)

5. Changes made on this screen are automatically saved.  Click **Close** to return to your image target library.

## Create Conical Image Target {#create-conical-image-target}

1. Click the "+ Conical" icon to create a new flat image target.

![ImageTargetFlat1](/images/image-target-create-conical.jpg)

2. **Upload Conical Image Target**: Drag your image (.jpg, .jpeg or .png) into the upload panel, or click within the dotted region and use your file browser to select your image.  The uploaded image should be in "unwrapped", aka "rainbow" format, cropped like so:

![conical rainbow image](/images/conical-rainbow-image.jpg)

3. **Set Large Arc Alignment**: Drag the slider until the **red** line overlays the uploaded image's **large arc**.

![set large arc](https://media.giphy.com/media/1zcOKYrjOmhaxUJ7lh/giphy.gif)

4. **Set Small Arc Alignment**: Do the same for the small arc.  Drag the slider until the **blue** line overlays the uploaded image's **small arc**.

5. **Set Tracking Region** (and Orientation): Drag and zoom on the image to set the portion of the image that is detected and tracked. This should be the most feature rich area of your image.

![set tracking](https://media.giphy.com/media/t2rSve9UshxGB07US2/giphy.gif)

6. **Edit Conical Image Target properties**:

* (1) Give your image target a **name** by editing the field at the top left of the window.
* (2) **Drag the sliders** until the shape of your label appears as expected in the simulator, or **input the measurements** directly.
* (3) **IMPORTANT!** Test your image target: The best way to determine if your uploaded image will make a good or bad image target (see [Optimizing Image Target Tracking](#optimizing-image-target-tracking)) is to use the Simulator to assess tracking quality.  Scan the QR code with your camera app to open the simulator link, then point your device at the screen or physical object.
* (4) Click **Load automatically** if you want the image target to be enabled automatically as the WebAR project loads. Up to 5 image targets can be loaded automatically without writing a single line of code.  More targets can be loaded programnatically through the Javascript API.
* (5) Optional: If you would like to add metadata to your image, in either Text or JSON format, click the **Metadata** button at the bottom of the window.

![EditConicalImageTarget](/images/edit-conical-image-target.jpg)

7. Changes made on this screen are automatically saved.  Click **Close** to return to your image target library.

## Edit Image Targets {#edit-image-targets}

Click on any of the image targets under **My Image Targets** to view and/or modify their properties:

1. Image Target Name
2. Sliders / Measurements (Cylindrical/Conical image targets only)
3. Simulator QR Code
4. Delete Image Target
5. Load Automatically
6. Metadata
7. Orientation and Dimensions
8. Autosave status
9. Close

Type | Fields
---- | ------
Flat | ![flat target](/images/edit-flat-image-target-full.jpg)
Cylindrical | ![cylindrical target](/images/edit-cylindrical-image-target-full.jpg)
Conical | ![conical target](/images/edit-conical-image-target-full.jpg)

## Changing Active Image Targets {#changing-active-image-targets}

The set of active image targets can be modified at runtime by calling
[XR8.XrController.configure()](/docs/engine/api/xrcontroller/configure)

Note: The set of currently active image targets will be **replaced** with the new set passwd to
[XR8.XrController.configure()](/docs/engine/api/xrcontroller/configure).

#### Example - Change active image target set {#example---change-active-image-target-set}

```javascript
XR8.XrController.configure({imageTargets: ['image-target1', 'image-target2', 'image-target3']})
```

## Optimizing Image Target Tracking {#optimizing-image-target-tracking}

To ensure the highest quality image target tracking experience, be sure to follow these guidelines when selecting an image target.

***DO*** have:

* a lot of varied detail
* high contrast

***DON'T*** have:

* repetitive patterns
* excessive dead space
* low resolution images

Color: Image target detection cannot distinguish between colors, so don't rely on it as a key differentiator between targets.

For best results, use images on flat, cylindrical or conical surfaces for image target tracking.

Consider the reflectivity of your image target's physical material. Glossy surfaces and screen reflections can lower tracking quality. Use matte materials in diffuse lighting conditions for optimal tracking quality.

Note: Detection happens fastest in the center of the screen.

Good Markers | Bad Markers
---------------------- | ------------------------
![good logo](/images/it-logo-good.jpg) | ![bad logo](/images/it-logo-bad.jpg) |
![movie poster](/images/it-movie-poster.jpg) | ![bad pattern](/images/it-pattern-bad.jpg)

## Image Target Events {#image-target-events}

8th Wall Web emits Events / Observables for various events in the image target lifecycle (e.g. imageloading, imagescaning, imagefound, imageupdated, imagelost) Please see the API reference for instructions on handling these events in your Web Application:

* [AFrame Events](/docs/engine/api/aframeevents)
* [BabylonJS Observables](/docs/engine/api/babylonjs/observables)
* [PlayCanvas Events](/docs/engine/api/playcanvasevents/playcanvas-image-target-events)
* [XrController Dispatched Events](/docs/engine/api/xrcontroller/pipelinemodule/#dispatched-events)

#### Example Projects {#example-projects}

<https://github.com/8thwall/web/tree/master/examples/aframe/artgallery>

<https://github.com/8thwall/web/tree/master/examples/aframe/flyer>

---

The new API allows image targets to be defined directly from code as `XrController.configure({imageTargetData: [{...}]})`.

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
