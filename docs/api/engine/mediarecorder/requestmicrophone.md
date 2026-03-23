---
sidebar_label: requestMicrophone()
---
# XR8.MediaRecorder.requestMicrophone()

`XR8.MediaRecorder.requestMicrophone()`

## Description {#description}

Enables recording of audio (if not enabled automatically), requesting permissions if needed.

Returns a promise that lets the client know when the stream is ready.  If you begin recording
before the audio stream is ready, then you may miss the user's microphone output at the
beginning of the recording.

## Parameters {#parameters}

None

## Returns {#returns}

A Promise.

## Example {#example}

```javascript
XR8.MediaRecorder.requestMicrophone()
.then(() => {
  console.log('Microphone requested!')
})
.catch((err) => {
  console.log('Hit an error: ', err)
})
```
