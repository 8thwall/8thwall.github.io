---
sidebar_label: recordVideo()
---
# XR8.MediaRecorder.recordVideo()

`XR8.MediaRecorder.recordVideo({ onError, onProcessFrame, onStart, onStop, onVideoReady })`

## Description {#description}

Start recording.

This function takes an object that implements one of more of the following media recorder licecycle callback methods:

## Parameters {#parameters}

Parameter | Description
--------- | -----------
onError | Callback when there is an error.
onProcessFrame | Callback for adding an overlay to the video.
onStart | Callback when recording has started.
onStop | Callback when recording has stopped.
onPreviewReady | Callback when a previewable, but not sharing-optimized, video is ready (Android/Desktop only).
onFinalizeProgress | Callback when the media recorder is making progress in the final export (Android/Desktop only).
onVideoReady | Callback when recording has completed and video is ready.

**Note:** When the browser has native MediaRecorder support for webm and not mp4 (currently Android/Desktop), the webm is usable as a preview video, but is converted to mp4 to generate the final video. `onPreviewReady` is called when the conversion starts, to allow the user to see the video immediately, and when the mp4 file is ready, `onVideoReady` will be called. During conversion, `onFinalizeProgress` is called periodically to allow a progress bar to be displayed.

## Returns {#returns}

None

## Example {#example}

```javascript
XR8.MediaRecorder.recordVideo({
  onVideoReady: (result) => window.dispatchEvent(new CustomEvent('recordercomplete', {detail: result})),
  onStop: () => showLoading(),
  onError: () => clearState(),
  onProcessFrame: ({elapsedTimeMs, maxRecordingMs, ctx}) => {
    // overlay some red text over the video
    ctx.fillStyle = 'red'
    ctx.font = '50px "Nunito"'
    ctx.fillText(`${elapsedTimeMs}/${maxRecordingMs}`, 50, 50)
    const timeLeft =  ( 1 - elapsedTimeMs / maxRecordingMs)
    // update the progress bar to show how much time is left
    progressBar.style.strokeDashoffset = `${100 * timeLeft }`
  },
  onFinalizeProgress: ({progress, total}) => {
    console.log('Export is ' + Math.round(progress / total) + '% complete')
  },
})
```
