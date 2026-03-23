---
sidebar_label: configure()
---
# XR8.MediaRecorder.configure()

`XR8.MediaRecorder.configure({ coverImageUrl, enableEndCard, endCardCallToAction, footerImageUrl, foregroundCanvas, maxDurationMs, maxDimension, shortLink, configureAudioOutput, audioContext, requestMic })`

## Description {#description}

Configures various MediaRecorder parameters.

## Parameters {#parameters}

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
coverImageUrl [Optional]| `String` | Cover image configured in project, `null` otherwise | Image source for cover image.
enableEndCard [Optional] | `String` | `false` | If true, enable end card.
endCardCallToAction [Optional] | `String` | `'Try it at: '` | Sets the text string for call to action.
fileNamePrefix [Optional] | `String` | `'my-capture-'` | Sets the text string that prepends the unique timestamp on file name.
footerImageUrl [Optional] | `String` | `null` | Image src for cover image.
foregroundCanvas [Optional] | `String` | `null` | The canvas to use as a foreground in the recorded video.
maxDurationMs [Optional] | `Number` | `15000` | Maximum duration of video, in milliseconds.
maxDimension [Optional] | `Number` | `1280` | Max dimension of the captured recording, in pixels.
shortLink [Optional] | `String` | 8th.io shortlink from project dashboard | Sets the text string for shortlink.
configureAudioOutput [Optional] | `Object` | `null` | User provided function that will receive the `microphoneInput` and `audioProcessor` audio nodes for complete control of the recording's audio. The nodes attached to the audio processor node will be part of the recording's audio. It is required to return the end node of the user's audio graph.
audioContext [Optional] | `String` | `null` | User provided `AudioContext` instance. Engines like three.js and BABYLON.js have their own internal audio instance. In order for the recordings to contains sounds defined in those engines, you'll want to provide their `AudioContext` instance.
requestMic [Optional] | `String` | `'auto'` | Determines when the audio permissions are requested. The options are provided in [`XR8.MediaRecorder.RequestMicOptions`](requestmicoptions.md).

The function passed to `configureAudioOutput` takes an object with the following parameters:

Parameter | Description
--------- | -----------
microphoneInput | A [`GainNode`](https://developer.mozilla.org/en-US/docs/Web/API/GainNode) that contains the user’s mic input. If the user’s permissions are not accepted, then this node won’t output the mic input but will still be present.
audioProcessor | a [`ScriptProcessorNode`](https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode) that passes audio data to the recorder. If you want an audio node to be part of the recording’s audio output, then you must connect it to the audioProcessor.

## Returns {#returns}

None

## Example {#example}

```javascript
XR8.MediaRecorder.configure({
  maxDurationMs: 15000,
  enableEndCard: true,
  endCardCallToAction: 'Try it at:',
  shortLink: '8th.io/my-link',
})
```

## Example - user configured audio output {#example---user-configured-audio-output}

```javascript
const userConfiguredAudioOutput = ({microphoneInput, audioProcessor}) => {
  const myCustomAudioGraph = ...
  myCustomAudioSource.connect(myCustomAudioGraph)
  microphoneInput.connect(myCustomAudioGraph)

  // Connect audio graph end node to hardware.
  myCustomAudioGraph.connect(microphoneInput.context.destination)

  // Audio graph will be automatically connected to processor.
  return myCustomAudioGraph
}
const threejsAudioContext = THREE.AudioContext.getContext()
XR8.MediaRecorder.configure({
  configureAudioOutput: userConfiguredAudioOutput,
  audioContext: threejsAudioContext,
  requestMic: XR8.MediaRecorder.RequestMicOptions.AUTO,
})
```
