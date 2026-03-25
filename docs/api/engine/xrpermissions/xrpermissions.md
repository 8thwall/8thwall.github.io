# XR8.XrPermissions

## Description {#description}

Utilities for specifying permissions required by a pipeline module.

Modules can indicate what browser capabilities they require that may need permissions requests. These can be used by the framework to request appropriate permissions if absent, or to create components that request the appropriate permissions before running XR.

## Properties {#properties}

Property | Type | Description
-------- | ---- | -----------
[permissions()](permissions.md) | Enum | List of permissions that can be specified as required by a pipeline module.

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'request-gyro',
  requiredPermissions: () => ([XR8.XrPermissions.permissions().DEVICE_ORIENTATION]),
})
```
