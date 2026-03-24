---
id: requirements
sidebar_position: 1
---

# Requirements

## Web Browser
Mobile browsers require the following functionality to support 8th Wall Web experiences:

* WebGL (`canvas.getContext('webgl') || canvas.getContext('webgl2')`)
* getUserMedia (`navigator.mediaDevices.getUserMedia`)
* deviceorientation (`window.DeviceOrientationEvent` - *only needed if SLAM is enabled*)
* Web-Assembly / WASM (`window.WebAssembly`)

**NOTE:** 8th Wall Web experiences must be viewed via **https**. **This is required by browsers for camera access.**

### iOS

* **Safari** (iOS 11+)
* **Apps** that use SFSafariViewController web views (iOS 13+)
    * Apple added `getUserMedia()` support to SFSafariViewController in iOS 13. 8th Wall works within iOS 13 apps that use SFSafariViewController web views.
    * Examples: Twitter, Slack, Discord, Gmail, Hangouts, and more.
* **Apps/Browsers** that use WKWebView web views (iOS 14.3+)

### Android

* **Browsers** known to natively support the features required for WebAR:
    * Chrome
    * Firefox
    * Samsung Internet
    * Microsoft Edge
* **Apps** using Web Views known to support the features required for WebAR:
    * Twitter, WhatsApp, Slack, Gmail, Hangouts, Reddit, LinkedIn, and more.
