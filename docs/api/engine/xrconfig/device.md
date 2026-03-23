---
sidebar_label: device()
---
# XR8.XrConfig.device()

Enumeration

## Description {#description}

Specify the class of devices that the pipeline should run on. If the current device is not in that class, running will fail prior prior to opening the camera. If allowedDevices is `XR8.XrConfig.device().ANY`, always open the camera.

Note: World Effects (SLAM) can only be used with `XR8.XrConfig.device().MOBILE_AND_HEADSETS` or `XR8.XrConfig.device().MOBILE`.

## Properties {#properties}

Property | Value | Description
-------- | ----- | -----------
MOBILE | `'mobile'` | Restrict camera pipeline on mobile-class devices, for example phones and tablets.
MOBILE_AND_HEADSETS | `'mobile-and-headsets'` | Restrict camera pipeline on mobile and headset class devices.
ANY | `'any'` | Start running camera pipeline without checking device capabilities. This may fail at some point in the pipeline startup if a required sensor is not available at run time (for example, a laptop has no camera).
