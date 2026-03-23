---
sidebar_label: isDeviceBrowserCompatible()
---
# XR8.XrDevice.isDeviceBrowserCompatible()

`XR8.XrDevice.isDeviceBrowserCompatible({ allowedDevices })`

## Description {#description}

Returns an estimate of whether the user's device and browser is compatible with 8th Wall Web. If this returns false, [`XR8.XrDevice.incompatibleReasons()`](incompatiblereasons.md) will return reasons about why the device and browser are not supported.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
allowedDevices [Optional] | Supported device classes, a value in [`XR8.XrConfig.device()`](/docs/api/engine/xrconfig/device).

## Returns {#returns}

True or false.

## Example {#example}

```javascript
XR8.XrDevice.isDeviceBrowserCompatible({allowedDevices: XR8.XrConfig.device().MOBILE})
```
