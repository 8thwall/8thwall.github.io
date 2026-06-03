---
id: self-hosted
sidebar_position: 3
---

# Self Hosted Projects

Existing self-hosted projects will work without any change until Feb 28, 2027. This guide walks through the process of migrating from the 8th Wall-hosted engine to the 8th Wall engine binary, which will mean you project can live on beyond Feb 2027.

:::info
The 8th Wall engine binary does **not support** cloud-dependent features or those we don’t have license to distribute such as:
* VPS / Maps
* Hand Tracking
* Modules / Backends
:::

To update a self-hosted project to use the 8th Wall engine binary, remove the script tag for `apps.8thwall.com/xrweb` and replace it with:

```html
<script src="https://cdn.jsdelivr.net/npm/@8thwall/engine-binary@1/dist/xr.js" async crossorigin="anonymous" data-preload-chunks="slam"></script>
```

Alternative installation options can be found in the [Engine Overview](/docs/engine/overview).

## World Effects

If you're using world tracking, add `data-preload-chunks="slam"` to the script tag or call `await XR8.loadChunk('slam')` in your code before starting the engine.

## Face Effects

If you're using face tracking, add `data-preload-chunks="face"` to the script tag or call `await XR8.loadChunk('face')` in your code before starting the engine.

:::note
`data-preload-chunks="face, slam"` is also supported for experiences using both world and face effects.
:::

## Image Targets

If you're using image targets, add `data-preload-chunks="slam"` to the script tag or call `await XR8.loadChunk('slam')` in your code before starting the engine.

### Configure Image Targets

Targets no longer load automatically on startup. Previously auto-loaded targets will have a `"loadAutomatically": true` property in the json file, which may help you locate them, but it doesn't have a functional effect.


To enable image targets, call `XR8.XrController.configure` at the start of your experience:

```
const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/target1.json'),
      require('../image-targets/target2.json'),
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
```

## Other cdn.8thwall.com Scripts

While no changes to cdn.8thwall.com are expected until Feb 2027, you may want to switch to the following actively developed packages:

- XRExtras: https://www.npmjs.com/package/@8thwall/xrextras
- Landing Page: https://www.npmjs.com/package/@8thwall/landing-page
