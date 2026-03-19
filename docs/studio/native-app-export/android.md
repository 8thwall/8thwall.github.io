---
id: android
description: This section explains how to export to Android.
---

# Android

## Exporting to Android

1. **Open your Studio project**. Ensure the project meets the [requirement criteria](/studio/native-app-export/#requirements).

2. Click **Publish**. Under **Export**, select **Android**.

3. **Customize your app build:**
   - **Display Name:** The name shown on the Android home screen
   - **Bundle Identifier:** A unique string, e.g. `com.mycompany.myapp`
   - **(Optional)** Upload an **App Icon** (1024x1024)

4. Once your basic app info is filled in, click **Continue** to finalize the build configuration.

---

## Finalizing Build Settings

Now you'll define how your app is packaged:

- **Version:** Use semantic versioning (e.g. `1.0.0`)
- **Orientation:**
  - **Portrait:** Keeps the app fixed in a vertical position, even when the device is turned.
  - **Landscape Left:** Displays the app horizontally with the device turned so the left side is down.
  - **Landscape Right:** Displays the app horizontally with the device turned so the right side is down.
  - **Auto Rotate:** Allows the app to follow the device's physical rotation, switching between vertical and horizontal views automatically.
  - **Auto Rotate (Landscape Only):** Adjusts the app's position based on device rotation but restricts it to horizontal views only.
- **Status Bar:**
  - **Yes:** Displays the default system status bar over the application.
  - **No:** Hides the default system status bar.
- **Build Type:**
  - **APK (Android Package):** Direct install files for testing or side-loading
  - **AAB (Android App Bundle):** Required for Google Play publishing
- **Build Mode:**
  - **Live Reload:** Pulls updates from Studio as your project is updated
  - **Static Bundle:** Full self-contained build
- **Environment:** Select from `Dev`, `Latest`, `Staging`, or `Production`

When everything is set, click **Build** to generate your app package.

> Once the build is complete, download the `.apk` or `.aab` file using the download links provided in the build summary.

---

## Publishing to the Google Play Store

Once your export is complete, you’re ready to publish your app to the Play Store using the **AAB (Android App Bundle)**:

### Why AAB?

Google has required AAB format for all new apps since August 2021—AAB helps optimize delivery by generating device-specific APKs and reducing app size.

### Upload to Google Play Console

1. Log into [Play Console](https://play.google.com/console) and enroll in Play App Signing if needed
2. Navigate to **“Create app”** → fill in name, language, free/paid status
3. Go to **Test & Release** → **Production** (or internal/beta track). Click **Create new release**, and then upload your .aab file by dragging it onto the **Drop app bundles here to upload** section.
4. Complete store listing, privacy policy, content ratings, and target regions
5. Review and roll out your release

🔗 [Check full upload docs here: Upload your app to the Play Console](https://developer.android.com/studio/publish)

---

## Installing Directly on an Android Device

### Installing on a Physical Android Device

1. Enable **“install unknown apps”** for your browser or file manager
2. Transfer the APK via USB, email, or cloud storage
3. Open the APK from your device and tap **Install**

**For command-line method:**

```bash
adb install path/to/app.apk
```

### Installing on an Android Emulator

1. Set up an emulator in Android Studio’s AVD Manager.
2. Run the emulator.
3. Drag and drop the APK from your computer onto the emulator to install.

In terminal:
```bash
adb install path/to/app.apk
```
