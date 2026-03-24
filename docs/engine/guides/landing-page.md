---
id: landing-pages
sidebar_position: 1
---

# Landing Pages

Landing Pages are an evolution of our popular "Almost There" pages.

## Why Use Landing Pages? {#why-use-landing-pages}

We have transformed these pages to become powerful branding and marketing opportunities for you and
your clients. All Landing Page templates are optimized for branding and education with various
layouts, an improved QR code design and support for key media.

Landing Pages ensure that your users have a meaningful experience no matter what device they are on.
\- They appear on devices that are not allowed or capable of accessing the Web AR experience
directly. They also continue our mission of making AR accessible by helping users get to the right
destination to engage with AR.

We designed Landing Pages in a manner which makes it extremely easy for developers to customize the
page. We want you to benefit from an optimized Landing Page while still enabling you to spend your
time on building your WebAR experience.

## Landing Pages Intelligently Adapt To Your Configuration {#landing-pages-intelligently-adapt-to-your-configuration}

![loading-examples1](/images/landing-examples1.jpg)

![loading-examples2](/images/landing-examples2.jpg)

## Use Landing Pages in Your Project {#use-landing-pages-in-your-project}

1. Open your Project
2. Add the following tag to `head.html`

`<meta name="8thwall:package" content="@8thwall.landing-page">`

Note: For Self-Hosted projects, you would add the following `<script>` tag to your page instead:

`<script src='https://cdn.8thwall.com/web/landing-page/landing-page.js'></script>`

3. **Remove** `xrextras-almost-there` from your A-Frame project, or
`XRExtras.AlmostThere.pipelineModule()` from your Non-AFrame project. (Landing Pages include
almost-there logic in addition to the updates to the QR code page.)
4. Optionally, customize the parameters of your `landing-page` component as defined below. For
Non-AFrame projects, please refer to the [LandingPage.configure()](/docs/api/engine/landingpage/configure)
documentation.

## A-Frame component parameters (All Optional) {#a-frame-component-parameters}

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
logoSrc | `String` | | Image source for brand logo image.
logoAlt | `String` | `'Logo'` | Alt text for brand logo image.
promptPrefix | `String` | `'Scan or visit'` | Sets the text string for call to action before the URL for the experience is displayed.
url | `String` | 8th.io link if 8th Wall hosted, or current page | Sets the displayed URL and QR code.
promptSuffix | `String` | `'to continue'` | Sets the text string for call to action after the URL for the experience is displayed.
textColor | Hex Color | `'#ffffff'` | Color of all the text on the Landing Page.
font | `String` | `"'Nunito', sans-serif"` | Font of all text on the Landing Page. This parameter accepts valid CSS font-family arguments.
textShadow | `Boolean` | `false` | Sets text-shadow property for all text on the Landing Page.
backgroundSrc | `String` | | Image source for background image.
backgroundBlur | `Number` | `0` | Applies a blur effect to the `backgroundSrc` if one is specified. (Typically values are between 0.0 and 1.0)
backgroundColor | `String` | `'linear-gradient(#464766,#2D2E43)'` | Background color of the Landing Page. This parameter accepts valid CSS background-color arguments. Background color is not displayed if a background-src or sceneEnvMap is set.
mediaSrc | `String` | App’s cover image, if present | Media source (3D model, image, or video) for landing page hero content. Accepted media sources include a-asset-item id, or static URL.
mediaAlt | `String` | `'Preview'` | Alt text for landing page image content.
mediaAutoplay | `Boolean` | `true` | If the `mediaSrc` is a video, specifies if the video should be played on load with sound muted.
mediaAnimation | `String` | First animation clip of model, if present | If the `mediaSrc` is a 3D model, specify whether to play a specific animation clip associated with the model, or "none".
mediaControls | `String` | `'minimal'` | If `mediaSrc` is a video, specify media controls displayed to to user. Choose from "none", "mininal" or "browser" (browser defaults)
sceneEnvMap | `String` | `'field'` | Image source pointing to an equirectangular image. Or one of the following preset environments: "field", "hill", "city", "pastel", or "space".
sceneOrbitIdle | `String` | `'spin'` | If the `mediaSrc` is a 3D model, specify whether the model should "spin", or "none".
sceneOrbitInteraction | `String` | `'drag'` | If the `mediaSrc` is a 3D model, specify whether the user can interact with the orbit controls, choose "drag", or "none".
sceneLightingIntensity | `Number` | `1` | If the `mediaSrc` is a 3D model, specify the strength of the light illuminating the mode.
vrPromptPrefix | `String` | `'or visit'` | Sets the text string for call to action before the URL for the experience is displayed on VR headsets.

## Examples {#examples}

#### 3D Layout with user specified parameters {#3d-layout-with-user-specified-parameters}

![loading-example](/images/landingpage-example.jpg)

#### A-Frame Example with External URL (screenshot above) {#a-frame-example}

```html
<a-scene
  landing-page="
    mediaSrc: https://www.mydomain.com/helmet.glb;
    sceneEnvMap: hill"
  xrextras-loading
  xrextras-gesture-detector
  ...
  xrweb>
```

#### A-Frame Example with Local Asset {#a-frame-local-asset example}
```html
<a-scene
  xrextras-gesture-detector
  landing-page="mediaSrc: #myModel"
  xrextras-loading
  xrextras-runtime-error
  renderer="colorManagement: true"
  xrweb>

  <!-- We can define assets here to be loaded when A-Frame initializes -->
  <a-assets>
    <a-asset-item id="myModel" src="assets/my-model.glb"></a-asset-item>
  </a-assets>
```

#### Non-AFrame Example  (screenshot above) {#non-aframe-example--screenshot-above}

```js
// Configured here
LandingPage.configure({
    mediaSrc: 'https://www.mydomain.com/bat.glb',
    sceneEnvMap: 'hill',
})
XR8.addCameraPipelineModules([
  XR8.GlTextureRenderer.pipelineModule(),
  XR8.Threejs.pipelineModule(),
  XR8.XrController.pipelineModule(),
  XRExtras.FullWindowCanvas.pipelineModule(),
  XRExtras.Loading.pipelineModule(),
  XRExtras.RuntimeError.pipelineModule(),
  // Added here
  LandingPage.pipelineModule(),
  ...
])
```
