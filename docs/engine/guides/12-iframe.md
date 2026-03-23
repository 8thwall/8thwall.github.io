---
id: ios-8th-wall-web-inside-an-iframe
---
# Working with iframes

## iframe Setup for Android and iOS 15+ {#iframe-setup-for-android-and-ios-15}

To allow Inline AR for Android and iOS 15+, you must include an allow parameter in your iframe with
the following [feature-policy directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives):

```html
<iframe allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"></iframe>
```

NOTE: microphone is optional.

## LEGACY METHOD: Supporting iOS versions prior to iOS 15 {#legacy-method-supporting-ios-versions-prior-to-ios-15}

The following is **ONLY** required for supporting Inline AR in iOS versions prior to iOS 15. Given
the high adoption of iOS 15+, we **NO LONGER** recommend using this approach.

See the latest iOS adoption stats from Apple: <https://developer.apple.com/support/app-store/>

In addition to including the allow parameter with the correct
[feature-policy directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives)
in your iframe as explained above, to support World Tracking projects on iOS versions prior to iOS
15, you must also include additional javascript on both the OUTER and INNER AR pages as explained
below.

In these versions, Safari blocks deviceorientation and devicemotion event access from cross-origin
iframes. To counter this, you must include two scripts in your project to ensure cross-compatibility
with iOS when deploying World Tracking projects. 

This is **not required for Face Effects or Image Target projects** (with `disableWorldTracking` set
to `true`).

When implemented correctly, this process enables the OUTER website to send motion events down to the
INNER AR website, a requirement for World Tracking.

#### For the OUTER website {#for-the-outer-website}

**iframe.js** must be included in the **HEAD** of the **OUTER** page via this script tag:

```html
<script src="//cdn.8thwall.com/web/iframe/iframe.js"></script>
```

When starting AR, register the XRIFrame by iframe ID:

```js
window.XRIFrame.registerXRIFrame(IFRAME_ID)
```

When stoppping AR, deregister the XRIFrame:

```js
window.XRIFrame.deregisterXRIFrame()
```

#### For the INNER website {#for-the-inner-website}

**iframe-inner.js** must be included in the **HEAD** of your **INNER AR** website with this script tag:

```html
<script src="//cdn.8thwall.com/web/iframe/iframe-inner.js"></script>
```

By allowing the inner and outer windows to communicate, deviceorientation/devicemotion data can be shared.

See sample project at <https://www.8thwall.com/8thwall/inline-ar>

#### Examples {#examples}

##### Outer Page {#outer-page}

```jsx
//  Send deviceorientation/devicemotion to the INNER iframe
<script src="//cdn.8thwall.com/web/iframe/iframe.js"></script>

...
const IFRAME_ID = 'my-iframe' // Iframe containing AR content.
const onLoad = () => {
  window.XRIFrame.registerXRIFrame(IFRAME_ID)
}
// Add event listenters and callbacks for the body DOM.
window.addEventListener('load', onLoad, false)

...

<body>
  <iframe
    id="my-iframe"
    style="border: 0; width: 100%; height: 100%"
    allow="camera;microphone;gyroscope;accelerometer;"
    src="https://www.other-domain.com/my-web-ar/">
  </iframe>
</body>
```

##### Inner Page: AFrame projects {#inner-page-aframe-projects}

```html
<head>
  <!-- Recieve deviceorientation/devicemotion from the OUTER window -->
  <script src="//cdn.8thwall.com/web/iframe/iframe-inner.js"></script>
</head>

...

<body>
  <!-- For A-FRAME -->
  <!-- NOTE: The iframe-inner script must load after A-FRAME, and iframe-inner component must appear
  before xrweb. -->
  <a-scene iframe-inner xrweb>
    ...
  </a-scene>
```

##### Inner Page: Non-AFrame projects {#inner-page-non-aframe-projects}

```html
<head>
  <!-- Recieve deviceorientation/devicemotion from the OUTER window -->
  <script src="//cdn.8thwall.com/web/iframe/iframe-inner.js"></script>
</head>

...

<!-- For non-AFrame projects, add iframeInnerPipelineModule to the custom pipeline module section,
typically located in "onxrloaded" like so: -->
XR8.addCameraPipelineModules([
  // Custom pipeline modules
  iframeInnerPipelineModule,
])
```
