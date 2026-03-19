# camerastatuschange

## Description {#description}

This event is emitted when the status of the camera changes. See
[`onCameraStatusChange`](/api/camerapipelinemodule/oncamerastatuschange) from
[`XR8.addCameraPipelineModule()`](/api/xr8/addcamerapipelinemodule) for more information on the possible
status.

## Example {#example}

```javascript
var handleCameraStatusChange = function handleCameraStatusChange(event) {
  console.log('status change', event.detail.status);

  switch (event.detail.status) {
    case 'requesting':
      // Do something
      break;

    case 'hasStream':
      // Do something
      break;

    case 'failed':
      event.target.emit('realityerror');
      break;
  }
};
let scene = this.el.sceneEl
scene.addEventListener('camerastatuschange', handleCameraStatusChange)
```
