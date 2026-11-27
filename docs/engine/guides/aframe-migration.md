---
id: aframe-migration
sidebar_position: 8
description: Update an 8th Wall A-Frame project from 8-Frame to the official A-Frame release.
---

# Migrate from 8-Frame to A-Frame

8th Wall A-Frame projects used to require 8-Frame, a modified version of A-Frame. 8th Wall now works
with the official A-Frame releases, so you can use new A-Frame versions as soon as they are released
and use the tools of the A-Frame ecosystem.

The behaviors 8-Frame added are now handled by XRExtras, so most projects only need to replace the
A-Frame script.

## Requirements

- A-Frame 1.8.0 or later.
- XRExtras 2.0.0 or later.
- 8th Wall Engine (`@8thwall/engine-binary`) 2.0.0 or later.
- XRExtras loaded after A-Frame and before your `<a-scene>` is added to the page, for example with
  regular `<script>` tags in the `<head>`. The scene can be in your HTML or added with JavaScript
  later, for example after `xrloaded`.

## Update your project

### 1. Replace 8-Frame with A-Frame

In your `src/index.html`, replace the 8-Frame script with the official A-Frame release.

Before:

```html
<script src="./external/scripts/8frame-1.5.0.min.js"></script>
```

After:

```html
<script src="https://aframe.io/releases/1.8.0/aframe.min.js"></script>
```

Then delete the 8-Frame file from your project, for example
`external/scripts/8frame-1.5.0.min.js`.

### 2. Update XRExtras and the 8th Wall Engine

Load XRExtras 2 and the 8th Wall Engine 2, with XRExtras after A-Frame and before the 8th Wall
Engine:

```html
<script src="https://aframe.io/releases/1.8.0/aframe.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@8thwall/xrextras@2/dist/xrextras.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@8thwall/landing-page@1/dist/landing-page.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@8thwall/engine-binary@2/dist/xr.js" crossorigin="anonymous" async data-preload-chunks="slam"></script>
```

### 3. Update your light intensities

A-Frame 1.6.0 and later use the physically correct lighting of three.js. With the same `intensity`
values, your scene looks darker than with 8-Frame. Multiply the `intensity` of your `ambient`,
`directional`, `hemisphere`, `point` and `spot` lights by π (3.14). Lights without an `intensity`
don't need a change: A-Frame's default changed from 1 to 3.14.

Before:

```html
<a-entity light="type: directional; intensity: 0.8"></a-entity>
<a-light type="ambient" intensity="0.5"></a-light>
```

After:

```html
<a-entity light="type: directional; intensity: 2.51"></a-entity>
<a-light type="ambient" intensity="1.57"></a-light>
```

If your project sets the intensity of three.js lights in JavaScript, multiply those values by
`Math.PI` too.

### 4. Test your project

Run your project and check the browser console for errors. See [Test on Mobile](/docs/engine/overview#test-on-mobile)
to try it on a phone.

## What XRExtras does for you

When XRExtras is loaded, it applies the following to your 8th Wall scene (an `<a-scene>` with an
`xrweb`, `xrface`, `xrlayers` or `xrconfig` attribute). 8-Frame used to do the same by modifying
A-Frame.

| Behavior | Why |
|---|---|
| Waits for the 8th Wall Engine to load before starting the scene | The engine is loaded with `async` and registers its A-Frame components (`xrweb`, `xrface`, ...) when it is ready. XRExtras adds an `<xrextras-wait-for-xr8>` element to your scene, which holds the scene start until then. |
| Disables A-Frame's loading screen (`loading-screen`) | XRExtras shows its own loading screen (`xrextras-loading`). |
| Disables the enter VR/AR buttons (`xr-mode-ui`) | The 8th Wall Engine starts the AR session itself, and shows its own enter button on headsets when needed. |
| Disables A-Frame's motion permission dialog (`device-orientation-permission-ui`) | The 8th Wall Engine asks for the motion and camera permissions itself. |
| Uses 8-Frame's defaults for the `shadow` shader: `opacity: 0.4` and `alphaToCoverage: false` | Your AR ground shadows look the same as with 8-Frame. See [AR shadows](#ar-shadows). |

Don't add `loading-screen`, `xr-mode-ui` or `device-orientation-permission-ui` to your scene: they
are not compatible with the 8th Wall Engine. On headsets, the 8th Wall Engine starts the WebXR
session itself and shows its own "Enter AR" or "Enter VR" button when needed.

## Differences you may notice

### AR shadows

8-Frame added a `shadow` shader to show shadows on a transparent ground. A-Frame now has its own
`shadow` shader, so `material="shader: shadow"` keeps working.

:::note
XRExtras changes two defaults of A-Frame's `shadow` shader to match 8-Frame, so they differ from
stock A-Frame:
- `opacity` is `0.4` (A-Frame: `0.5`).
- `alphaToCoverage` is `false` (A-Frame: `true`). With alpha to coverage and antialiasing, which is
  on by default on desktop, the shadow looks dithered instead of smooth.

Values you set on the material, for example `material="shader: shadow; opacity: 0.6"`, are kept.
:::

8-Frame's shadow shader also had a `color` property, which A-Frame's doesn't have: the shadow is
always black, which was the default color.

### Adding the page to the iOS home screen

8-Frame removed the meta tags A-Frame adds on iOS for web apps added to the home screen. With A-Frame,
a page added to the home screen opens as a standalone app and uses the A-Frame logo as icon. To use
your own icon, add it to the `<head>`:

```html
<link rel="apple-touch-icon" href="./assets/icon.png">
```

To keep 8-Frame's behavior and open the page in Safari instead, add:

```html
<meta name="apple-mobile-web-app-capable" content="no">
```

## Upgrading from an older A-Frame version

8-Frame 1.5.0 is based on A-Frame 1.5.0. Moving to A-Frame 1.8.0 also brings the changes of A-Frame
1.6.0, 1.7.0 and 1.8.0, and newer three.js versions. If your project has custom components or uses
three.js directly, check the [A-Frame changelog](https://github.com/aframevr/aframe/blob/master/CHANGES.md)
for breaking changes.
