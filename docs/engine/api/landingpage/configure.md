---
sidebar_label: configure()
---
# LandingPage.configure()

`LandingPage.configure({ logoSrc, logoAlt, promptPrefix, url, promptSuffix, textColor, font, textShadow, backgroundSrc, backgroundBlur, backgroundColor, mediaSrc, mediaAlt, mediaAutoplay, mediaAnimation, mediaControls, sceneEnvMap, sceneOrbitIdle, sceneOrbitInteraction, sceneLightingIntensity, vrPromptPrefix })`

## Description {#description}

Configures behavior and look of the LandingPage module.

## Parameters (All Optional) {#parameters-all-optional}

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

## Returns {#returns}

None

## Example - Code {#example---code}

```javascript
LandingPage.configure({
    mediaSrc: 'https://www.mydomain.com/bat.glb',
    sceneEnvMap: 'hill',
})
```
