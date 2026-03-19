---
id: native-app-export
description: This section explains how to use Native App Export.
sidebar_class_name: "hidden"
---

# Native App Export

:::info[Beta Feature]
Native App Export is currently in Beta and limited to **Android & iOS** builds. Support for desktop and headsets is coming soon.
:::

Native App Export enables you to package your Studio project as a standalone application.

## Requirements {#requirements}

Whether building for iOS or Android, ensure your project has been successfully built for the web at least once before attempting to export.

### iOS

Native export for iOS is available for AR & 3D projects. Your application **will not** support:

- Push notifications
- In-app purchases

### Android

Native export for Android is only available for non-AR, 3D-only projects. Your project **must not** use:

- Camera or AR features
- GPS
- Virtual or physical keyboards
- Push notifications
- In-app purchases
- Video textures
- MediaRecorder API
- CSS
