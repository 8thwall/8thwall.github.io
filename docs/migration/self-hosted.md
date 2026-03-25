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

To update a self-hosted project to use the 8th Wall engine binary:

1. Download [xr-standalone.zip](https://8th.io/xrjs) and unzip it into your project folder
2. Remove the script tag for `apps.8thwall.com/xrweb` and replace it with `<script async src="./path/to/xr.js"></script>`
3. Add `data-preload-chunks` to the script tag or call `await XR8.loadChunk()` in your code before starting the engine. See sections below for more details.

:::note
`data-preload-chunks="face, slam"` is also supported for experiences using both world and face effects.
:::


## World Effects

If you're using world tracking, add `data-preload-chunks="slam"` to the script tag or call `await XR8.loadChunk('slam')` in your code before starting the engine.

## Face Effects

If you're using face tracking, add `data-preload-chunks="face"` to the script tag or call `await XR8.loadChunk('face')` in your code before starting the engine.

## Image Targets

If you're using image targets, add `data-preload-chunks="slam"` to the script tag or call `await XR8.loadChunk('slam')` in your code before starting the engine.

### Configure Image Targets

Configure the image targets at the start of your experience.

To enable image targets, call `XR8.XrController.configure` before any other code:

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

:::info
Autoloaded targets will have a `"loadAutomatically": true` property in the json file.
:::
