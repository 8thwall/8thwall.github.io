---
sidebar_label: permissions()
---
# XR8.XrPermissions.permissions()

Enumeration

## Description {#description}

Permissions that can be required by a pipeline module.

## Properties {#properties}

Property | Value | Description
-------- | ----- | -----------
CAMERA | `'camera'` | Require camera.
DEVICE_MOTION | `'devicemotion'` | Require accelerometer.
DEVICE_ORIENTATION | `'deviceorientation'` | Require gyro.
DEVICE_GPS | `'geolocation'` | Require GPS location.
MICROPHONE | `'microphone'` | Require microphone.

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'request-gyro',
  requiredPermissions: () => ([XR8.XrPermissions.permissions().DEVICE_ORIENTATION]),
})
```
