---
id: iframe
sidebar_position: 7
---

# Working with iframes

## iframe Setup for Android and iOS 15+ {#iframe-setup-for-android-and-ios-15}

To allow Inline AR for Android and iOS 15+, you must include an allow parameter in your iframe with
the following [feature-policy directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives):

```html
<iframe allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"></iframe>
```

:::note
All permissions are required for AR **except for microphone**.
:::
