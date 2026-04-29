---
id: image-targets
sidebar_position: 6
description: Bring signage, magazines, boxes, bottles, cups, and cans to life with 8th Wall Image Targets.
---

# Image Targets

:::tip
Use the [image target example project](https://github.com/8thwall/aframe-image-targets-example) as a reference to get started and confirm your project structure is set up correctly.
:::

## Introduction

Bring signage, magazines, boxes, bottles, cups, and cans to life with 8th Wall Image Targets. 8th
Wall Web can detect and track flat, cylindrical and conical shaped image targets, allowing you to
bring static content to life.

Not only can your designated image target trigger a web AR experience, but your content also has the
ability to track directly to it.

Image targets can work in tandem with our World Tracking (SLAM), enabling experiences that combine
image targets and markerless tracking.

You may track up to 32 image targets simultaneously. The set of active image targets can be changed at any time by calling
[XR8.XrController.configure()](/docs/api/engine/xrcontroller/configure). This lets you manage hundreds of image
targets per project making possible use cases like geo-fenced image target hunts, AR books, guided
art museum tours and much more. If your project utilizes SLAM most of the time but image targets
some of the time, you can improve performance by only loading image targets when you need them. You
can even read uploaded target names from URL parameters stored in different QR Codes, allowing you
to have different targets initially load in the same web app depending on which QR Codes the user
scans to enter the experience.

## Image Target Types {#image-target-types}

Type | Description
---- | -----------
**Flat** | Track 2D images like posters, signs, magazines, boxes, etc.
**Cylindrical** | Track images wrapped around cylindrical items like cans and bottles.
**Conical** | Track images wrapped around objects with different a top vs bottom circumference like coffee cups, etc.

## Generating Image Target Files {#generating-image-target-files}

To use image targets in your project, you can generate the required assets with a command line interface (CLI). These files contain image target metadata needed by the engine.

:::info
If a graphical interface is preferred, you can also create image targets via the [Desktop App](/downloads). Even if you don't intend to use Studio, you can create an empty project, and after creating the target as desired, copy the generated files into your own project.
:::

1. Open a terminal window and run `npx @8thwall/image-target-cli@latest`
2. Answer the prompts, following the examples below:

```bash
Enter the path to the image file: 

~/Downloads/target1.png
```

```bash
Select the image type:
1) flat (default)
2) cylinder
3) cone

1
```

```bash
Use default crop? [Y/n]:

y
```

```bash
Enter the output folder:

~/Documents/8th Wall/my-project/image-targets
```

```bash
Enter a name for the image target:

target1
```

:::tip
See [documentation on Image Target CLI](https://github.com/8thwall/8thwall/blob/main/apps/image-target-cli/README.md) for more details on cropping and cylindrical/conical image targets.
::: 

On generation, the following will be outputted to the specified folder:

* Metadata within a JSON file
* Original image
* Cropped image
* Thumbnail image (263x350)
* Luminance image (grayscale, 480x640)
* Geometry image (for conical)

## Configuring Image Targets

Create a file named `app.js` in the `src` folder (if you don't have one already). At the top of the file, configure image targets by providing paths to each image target's metadata JSON file.

```javascript
const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/target1.json'),
      require('../image-targets/target2.json')
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
```

## Changing Active Image Targets {#changing-active-image-targets}

The set of active image targets can be modified at runtime by calling
[XR8.XrController.configure()](/docs/api/engine/xrcontroller/configure)

Note: The set of currently active image targets will be **replaced** with the new set passwd to
[XR8.XrController.configure()](/docs/api/engine/xrcontroller/configure).

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

* [AFrame Events](/docs/api/engine/aframeevents)
* [BabylonJS Observables](/docs/api/engine/babylonjs/observables)
* [PlayCanvas Events](/docs/api/engine/playcanvasevents/playcanvas-image-target-events)
* [XrController Dispatched Events](/docs/api/engine/xrcontroller/pipelinemodule/#dispatched-events)

#### Example Projects {#example-projects}

- https://github.com/8thwall/aframe-image-targets-example
- https://github.com/8thwall/studio-image-targets-example
