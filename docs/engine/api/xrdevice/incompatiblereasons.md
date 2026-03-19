---
sidebar_label: incompatibleReasons()
---
# XR8.XrDevice.incompatibleReasons()

`XR8.XrDevice.incompatibleReasons({ allowedDevices })`

## Description {#description}

Returns an array of [`XR8.XrDevice.IncompatibilityReasons`](incompatibilityreasons.md) why the device the device and browser are not supported. This will only contain entries if [`XR8.XrDevice.isDeviceBrowserCompatible()`](isdevicebrowsercompatible.md) returns false.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
allowedDevices [Optional] | Supported device classes, a value in [`XR8.XrConfig.device()`](/docs/engine/api/xrconfig/device).

## Returns {#returns}

Returns an array of [`XR8.XrDevice.IncompatibilityReasons`](incompatibilityreasons.md).

## Example {#example}

```javascript
const reasons = XR8.XrDevice.incompatibleReasons()
for (let reason of reasons) {
  switch (reason) {
    case XR8.XrDevice.IncompabilityReasons.UNSUPPORTED_OS:
      // Handle unsupported os error messaging.
      break;
    case XR8.XrDevice.IncompabilityReasons.UNSUPPORTED_BROWSER:
       // Handle unsupported browser
       break;
   ...
}
```
