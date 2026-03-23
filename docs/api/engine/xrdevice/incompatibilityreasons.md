---
sidebar_label: IncompatibilityReasons
---
# XR8.XrDevice.IncompatibilityReasons

Enumeration

## Description {#description}

The possible reasons for why a device and browser may not be compatible with 8th Wall Web.

## Properties {#properties}

Property  | Value | Description
--------  | ----- |-----------
UNSPECIFIED | `0` | The incompatible reason is not specified.
UNSUPPORTED_OS | `1` | The estimated operating system is not supported.
UNSUPPORTED_BROWSER | `2` | The estimated browser is not supported.
MISSING_DEVICE_ORIENTATION | `3` | The browser does not support device orientation events.
MISSING_USER_MEDIA | `4` | The browser does not support user media acccess.
MISSING_WEB_ASSEMBLY | `5` | The browser does not support web assembly.
