---
sidebar_label: incompatibleReasonDetails()
---
# XR8.XrDevice.incompatibleReasonDetails()

`XR8.XrDevice.incompatibleReasonDetails({ allowedDevices })`

## Description {#description}

Returns extra details about the reasons why the device and browser are incompatible. This information should only be used as a hint to help with further error handling. These should not be assumed to be complete or reliable. This will only contain entries if [`XR8.XrDevice.isDeviceBrowserCompatible()`](isdevicebrowsercompatible.md) returns false.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
allowedDevices [Optional] | Supported device classes, a value in [`XR8.XrConfig.device()`](/api/xrconfig/device).

## Returns {#returns}

An object: `{ inAppBrowser, inAppBrowserType }`

Property | Description
-------- | -----------
inAppBrowser | The name of the in-app browser detected (e.g. `'Twitter'`)
inAppBrowserType | A string that helps describe how to handle the in-app browser.
