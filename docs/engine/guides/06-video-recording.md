---
id: video-recording
---
# Customize Video Recording

8th Wall's  [XRExtras](https://github.com/8thwall/web/tree/master/xrextras) library provides modules
that handle the most common WebAR application needs, including the load screen, social link-out
flows and error handling.

The XRExtras [MediaRecorder](https://github.com/8thwall/web/tree/master/xrextras/src/mediarecorder)
module makes it easy to customize the Video Recording user experience in your project.

This section describes how to customize recorded videos with things like capture button behavior
(tap vs hold), add video watermarks, max video length, end card behavior and looks, etc.

## A-Frame primitives {#a-frame-primitives}

`xrextras-capture-button` : Adds a capture button to the scene.

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
capture-mode | `String` | `'standard'` | Sets the capture mode behavior. **standard**: tap to take photo, tap + hold to record video. **fixed**: tap to toggle video recording. **photo**: tap to take photo. One of `[standard, fixed, photo]`

`xrextras-capture-config` : Configures the captured media.

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
max-duration-ms | int | `15000` | Total video duration (in miliseconds) that the capture button allows. If the end card is disabled, this corresponds to max user record time. 15000 by default.
max-dimension | int | `1280` | Maximum dimension (width or height) of captured video.  For photo configuration, please see [`XR8.CanvasScreenshot.configure()`](/docs/api/engine/canvasscreenshot/configure)
enable-end-card | `Boolean` | `true` | Whether the end card is included in the recorded media.
cover-image-url | `String` | | Image source for end card cover image. Uses project's cover image by default.
end-card-call-to-action | `String` | `'Try it at: '` | Sets the text string for call to action on end card.
short-link | `String` | | Sets the text string for end card shortlink. Uses project shortlink by default.
footer-image-url | `String` | Powered by 8th Wall image | Image source for end card footer image.
watermark-image-url | `String` | `null` | Image source for watermark.
watermark-max-width | int | 20 | Max width (%) of watermark image.
watermark-max-height | int | 20 | Max height (%) of watermark image.
watermark-location | `String` | `'bottomRight'` | Location of watermark image. One of `topLeft, topMiddle, topRight, bottomLeft, bottomMiddle, bottomRight`
file-name-prefix | `String` | `'my-capture-'` | Sets the text string that prepends the unique timestamp on file name.
request-mic | `String` | `'auto'` | Determines if you want to set up the microphone during initialization (`'auto'`) or during runtime (`'manual'`)
include-scene-audio | `Boolean` | `true` | If true, the A-Frame sounds in the scene will be part of the recorded output.

`xrextras-capture-preview` : Adds a media preview prefab to the scene which allows for playback, downloading, and sharing.

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
action-button-share-text | `String` | `'Share'` | Sets the text string in action button when Web Share API 2 **is** available (Android, iOS 15 or higher). `'Share'` by default.
action-button-view-text | `String` | `'View'` | Sets the text string in action button when Web Share API 2 is **not** available in iOS (iOS 14 or below). `'View'` by default.

## XRExtras.MediaRecorder Events {#xrextrasmediarecorder-events}

XRExtras.MediaRecorder emits the following events.

#### Events Emitted {#events-emitted}

Event Emitted | Description | Event Detail
------------- | ----------- | ------------
mediarecorder-photocomplete | Emitted after a photo is taken. | {blob}
mediarecorder-recordcomplete | Emitted after a video recording is complete. | {videoBlob}
mediarecorder-previewready | Emitted after a previewable video recording is complete. [(Android/Desktop only)](/docs/api/engine/mediarecorder/recordvideo/#parameters) | {videoBlob}
mediarecorder-finalizeprogress | Emitted when the media recorder is making progress in the final export. [(Android/Desktop only)](/docs/api/engine/mediarecorder/recordvideo/#parameters) | {progress, total}
mediarecorder-previewopened | Emitted after recording preview is opened. | null
mediarecorder-previewclosed | Emitted after recording preview is closed. | null

#### Example: A-Frame Primitives {#primitives-example}

```jsx
<xrextras-capture-button capture-mode="standard"></xrextras-capture-button>

<xrextras-capture-config
  max-duration-ms="15000"
  max-dimension="1280"
  enable-end-card="true"
  cover-image-url=""
  end-card-call-to-action="Try it at:"
  short-link=""
  footer-image-url="//cdn.8thwall.com/web/img/almostthere/v2/poweredby-horiz-white-2.svg"
  watermark-image-url="//cdn.8thwall.com/web/img/mediarecorder/8logo.png"
  watermark-max-width="100"
  watermark-max-height="10"
  watermark-location="bottomRight"
  file-name-prefix="my-capture-"
></xrextras-capture-config>

<xrextras-capture-preview
  action-button-share-text="Share"
  action-button-view-text="View"
  finalize-text="Exporting..."
></xrextras-capture-preview>
```

#### Example: A-Frame Events {#example-a-frame-events}

```javascript
window.addEventListener('mediarecorder-previewready', (e) => {
  console.log(e.detail.videoBlob)
})
```

#### Example: Change Share Button CSS {#change-share-button-example}

```css
#actionButton {
  /* change color of action button */
  background-color: #007aff !important;
}
```
