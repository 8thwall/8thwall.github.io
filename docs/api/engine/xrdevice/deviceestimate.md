---
sidebar_label: deviceEstimate()
---
# XR8.XrDevice.deviceEstimate()

`XR8.XrDevice.deviceEstimate()`

## Description {#description}

Returns an estimate of the user's device (e.g. make / model) based on user agent string and other factors. This information is only an estimate, and should not be assumed to be complete or reliable.

## Parameters {#parameters}

None

## Returns {#returns}

An object: `{ locale, os, osVersion, manufacturer, model }`

Property | Description
--------- | -----------
locale | The user's locale.
os | The device's operating system.
osVersion | The device's operating system version.
manufacturer | The device's manufacturer.
model | The device's model.
