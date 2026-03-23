---
sidebar_label: requiredPermissions()
---
# XR8.requiredPermissions()

`XR8.requiredPermissions()`

## Description {#description}

Return a list of permissions required by the application.

## Parameters {#parameters}

None

## Returns {#returns}

A list of [`XR8.XrPermissions.permissions()`](../xrpermissions/permissions.md).

## Example {#example}

```javascript
if (XR8.XrPermissions) {
  const permissions = XR8.XrPermissions.permissions()
  const requiredPermissions = XR8.requiredPermissions()
  if (!requiredPermissions.has(permissions.DEVICE_ORIENTATION)) {
    return
  }
}
```
