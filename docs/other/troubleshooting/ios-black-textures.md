---
id: ios-black-textures
sidebar_position: 1
---

# Black textures on iOS devices

#### Issue {#issue}

When using high resolution and/or a large number of textures on certain versions of iOS, Safari can run out of GPU memory. The textures may render black or cause the page to crash.

#### Workarounds {#workarounds}

1. **Reduce the size/resolution of the textures used in your scene** (see
[texture optimization](/docs/engine/guides/your-3d-models-on-the-web/#texture-optimization))

2. **Disable image bitmaps on iOS devices**:

There are existing bugs in iOS 14 and iOS 15 related to image bitmaps that can cause texture issues.
Disable image bitmaps to help prevent black textures and crashes. See example below:

#### Example: Disable iOS Bitmaps (add to the top of app.js): {#example-disable-ios-bitmaps-add-to-the-top-of-appjs}

```javascript
// Bitmaps can cause texture issues on iOS. This workaround can help prevent black textures and crashes.
const IS_IOS =
  /^(iPad|iPhone|iPod)/.test(window.navigator.platform) ||
  (/^Mac/.test(window.navigator.platform) && window.navigator.maxTouchPoints > 1)
if (IS_IOS) {
  window.createImageBitmap = undefined
}
```
