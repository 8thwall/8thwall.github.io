# onCameraStatusChange()

`onCameraStatusChange: ({ status, stream, video, config })`

## Description {#description}

`onCameraStatusChange()` is called when a change occurs during the camera permissions request.

Called with the status, and, if applicable, a reference to the newly available data. The typical status flow will be:

`requesting` -> `hasStream` -> `hasVideo`.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
status | One of [ `'requesting'`, `'hasStream'`, `'hasVideo'`, `'failed'` ]
stream: [Optional] | The [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) associated with the camera feed, if status is `'hasStream'`.
video: [Optional] | The video DOM element displaying the stream, if status is hasVideo.
config | The configuration parameters that were passed to [`XR8.run()`](/api/xr8/run), if status is `'requesting'`.

The `status` parameter has the following states:

State | Description
----- | -----------
requesting | In `'requesting'`, the browser is opening the camera, and if applicable, checking the user permissons. In this state, it is appropriate to display a prompt to the user to accept camera permissions.
hasStream | Once the user permissions are granted and the camera is successfully opened, the status switches to `'hasStream'` and any user prompts regarding permissions can be dismissed.
hasVideo | Once camera frame data starts to be available for processing, the status switches to `'hasVideo'`, and the camera feed can begin displaying.
failed | If the camera feed fails to open, the status is `'failed'`. In this case it's possible that the user has denied permissions, and so helping them to re-enable permissions is advisable.

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'camerastartupmodule',
  onCameraStatusChange: ({status}) {
    if (status == 'requesting') {
      myApplication.showCameraPermissionsPrompt()
    } else if (status == 'hasStream') {
      myApplication.dismissCameraPermissionsPrompt()
    } else if (status == 'hasVideo') {
      myApplication.startMainApplictation()
    } else if (status == 'failed') {
      myApplication.promptUserToChangeBrowserSettings()
    }
  },
})
```
