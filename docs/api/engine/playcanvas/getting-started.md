# Getting Started with PlayCanvas

To get started go to <https://playcanvas.com/user/the8thwall> and fork a sample project:

* Starter Kit Sample Projects
  * [Image Tracking Starter Kit](https://playcanvas.com/project/631721/overview/8th-wall-ar-image-targets): An application to get you started quickly creating image tracking applications in PlayCanvas.
  * [World Tracking Starter Kit](https://playcanvas.com/project/631719/overview/8th-wall-ar-world-tracking): An application to get you started quickly creating world tracking applications in PlayCanvas.
  * [Face Effects Starter Kit](https://playcanvas.com/project/687674/overview/8th-wall-ar-face-effects): An application to get you started quickly creating Face Effects applications in PlayCanvas.
  * [Sky Effects Starter Kit](https://playcanvas.com/project/1055775/overview/8th-wall-sky-effects): An application to get you started quickly creating Sky Effects applications in PlayCanvas.
  * [Ear Tracking Starter Kit](https://playcanvas.com/project/1158433/overview/8th-wall-ears):  An application to get you started quickly creating Ear Tracking applications in PlayCanvas.


* Additional Sample Projects
  * [World Tracking and Face Effects](https://playcanvas.com/project/701392/overview/8th-wall-ar-swap-camera): An example that illustrates how to switch between World Tracking and Face Effects in a single project.
  * [Color Swap](https://playcanvas.com/project/783654/overview/8th-wall-ar-color-swap): An application to get you started quickly creating AR world tracking applications that include simple UI and color change.
  * [Swap Scenes](https://playcanvas.com/project/781435/overview/8th-wall-ar-swap-scenes): An application to get you started quickly creating AR World Tracking applications that switch scenes.
  * [Swap Camera](https://playcanvas.com/project/701392/overview/8th-wall-ar-swap-camera): An application that demonstrates how to switch between front camera Face Effects and back camera World Tracking.

## Add your App Key {#add-your-app-key}

Go to Settings -> External Scripts

The following two scripts should be added:

* `https://cdn.8thwall.com/web/xrextras/xrextras.js`
* `https://apps.8thwall.com/xrweb?appKey=XXXXXX`

Then replace `XXXXXX` with your own unique App Key obtained from the 8th Wall Console.

## Enable "Transparent Canvas" {#enable-transparent-canvas}

1. Go to Settings -> Rendering.
2. Make sure that "Transparent Canvas" is **checked**.

## Disable "Prefer WebGL 2.0" {#disable-prefer-webgl-20}

1. Go to Settings -> Rendering.
2. Make sure that "Prefer WebGL 2.0" is **unchecked**.

## Add xrcontroller.js {#add-xrcontroller}
The 8th Wall sample PlayCanvas projects are populated with an XRController game object. If you are starting with a blank project, download `xrcontroller.js` from <https://www.github.com/8thwall/web/tree/master/gettingstarted/playcanvas/scripts/> and attach to an Entity in your scene.

**NOTE**: Only for SLAM and/or Image Target projects. `xrcontroller.js` and `facecontroller.js` or
`layerscontroller.js` cannot be used simultaneously.

Option | Description
--------- | -----------
disableWorldTracking | If true, turn off SLAM tracking for efficiency.
shadowmaterial | Material which you want to use as a transparent shadow receiver (e.g. for ground shadows). Typically this material will be used on a "ground" plane entity positioned at (0,0,0)

## Add layerscontroller.js {#add-layerscontroller}
The 8th Wall sample PlayCanvas projects are populated with a FaceController game object. If you are starting with a blank project, download `layerscontroller.js` from <https://www.github.com/8thwall/web/tree/master/gettingstarted/playcanvas/scripts/> and attach to an Entity in your scene.

**NOTE**: Only for Sky Effects projects. `layerscontroller.js` and `facecontroller.js` or
`xrcontroller.js` cannot be used simultaneously.

## Add facecontroller.js {#add-facecontroller}
The 8th Wall sample PlayCanvas projects are populated with a FaceController game object. If you are starting with a blank project, download `facecontroller.js` from <https://www.github.com/8thwall/web/tree/master/gettingstarted/playcanvas/scripts/> and attach it to an Entity in your scene.

**NOTE**: Only for Face Effects projects. `facecontroller.js` and `xrcontroller.js` or
`layerscontroller.js` cannot be used simultaneously.

Option | Description
--------- | -----------
headAnchor | The entity to anchor to the root of the head in world space.
