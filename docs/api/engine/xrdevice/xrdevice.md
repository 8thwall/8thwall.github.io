# XR8.XrDevice

## Description {#description}

Provides information about device compatibility and characteristics.

## Properties {#properties}

Property | Type | Description
-------- | ---- | -----------
[IncompatibilityReasons](incompatibilityreasons.md) | Enum | The possible reasons for why a device and browser may not be compatible with 8th Wall Web.

## Functions {#functions}

Function | Description
-------- | -----------
[deviceEstimate](deviceestimate.md) | Returns an estimate of the user's device (e.g. make / model) based on user agent string and other factors. This information is only an estimate, and should not be assumed to be complete or reliable.
[incompatibleReasons](incompatiblereasons.md) | Returns an array of [`XR8.XrDevice.IncompatibilityReasons`](incompatibilityreasons.md) why the device the device and browser are not supported. This will only contain entries if [`XR8.XrDevice.isDeviceBrowserCompatible()`](isdevicebrowsercompatible.md) returns false.
[incompatibleReasonDetails](incompatiblereasondetails.md) | Returns extra details about the reasons why the device and browser are incompatible. This information should only be used as a hint to help with further error handling. These should not be assumed to be complete or reliable. This will only contain entries if [`XR8.XrDevice.isDeviceBrowserCompatible()`](isdevicebrowsercompatible.md) returns false.
[isDeviceBrowserCompatible](isdevicebrowsercompatible.md) | Returns an estimate of whether the user's device and browser is compatible with 8th Wall Web. If this returns false, [`XR8.XrDevice.incompatibleReasons()`](incompatiblereasons.md) will return reasons about why the device and browser are not supported.
