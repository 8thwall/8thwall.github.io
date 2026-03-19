---
sidebar_position: 1
---
# xr:camerastatuschange

## Description {#description}

This event is fired when the status of the camera changes. See
[`onCameraStatusChange`](/docs/engine/api/camerapipelinemodule/oncamerastatuschange) from
[`XR8.addCameraPipelineModule()`](/docs/engine/api/camerapipelinemodule) for more information on the possible status.

## Example {#example}

```javascript
const handleCameraStatusChange = function handleCameraStatusChange(detail) {
  console.log('status change', detail.status);

  switch (detail.status) {
    case 'requesting':
      // Do something
      break;

    case 'hasStream':
      // Do something
      break;

    case 'failed':
      this.app.fire('xr:realityerror');
      break;
  }
}
this.app.on('xr:camerastatuschange', handleCameraStatusChange, this)
```
