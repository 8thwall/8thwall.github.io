---
sidebar_label: RequestMicOptions
---
# XR8.MediaRecorder.RequestMicOptions

Enumeration

## Description {#description}

Determines when the audio permissions are requested.

## Properties {#properties}

Property | Value | Description
-------- | ----- | -----------
AUTO | `'auto'` | Automatically request microphone permissions in [`onAttach()`](/docs/api/engine/camerapipelinemodule/onattach).
MANUAL | `'manual'` | Microphone permissions are NOT requested in [`onAttach()`](/docs/api/engine/camerapipelinemodule/onattach). Any other audio added to the app is still recorded if added to the AudioContext and connected to the audioProcessor provided to the user's [`configureAudioOutput`](/docs/api/engine/mediarecorder/configure/#parameters) function passed to [`XR8.MediaRecorder.configure()`](configure.md). You can request microphone permissions manually by calling [`XR8.MediaRecorder.requestMicrophone()`](requestmicrophone.md).
