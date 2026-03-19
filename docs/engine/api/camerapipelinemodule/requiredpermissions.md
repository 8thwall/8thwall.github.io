# requiredPermissions()

`requiredPermissions: ([permissions])`

## Description {#description}

`requiredPermissions` is used to define the list of permissions required by a pipeline module.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
permissions | An array of [`XR8.XrPermissions.permissions()`](/api/xrpermissions/permissions) required by the pipeline module.

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'request-gyro',
  requiredPermissions: () => ([XR8.XrPermissions.permissions().DEVICE_ORIENTATION]),
})
```
