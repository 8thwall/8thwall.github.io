---
id: iOS
description: This section explains how to export to iOS.
---

# iOS

## Exporting to iOS

1. **Open your Studio project**. Ensure the project meets the [requirement criteria](/docs/studio/native-app-export/#requirements).


2. Click **Publish**. Under **Export**, select **iOS**.


3. **Customize your app build:**
   - **Display Name**: The name shown on the iOS home screen
   - **(Optional)** Upload an **App Icon** (1024x1024 or larger)

4. **Complete Apple Configuration:** In this step, you’ll configure the signing credentials required to build and run your iOS app. You must select one or both signing types: Development or Distribution, and upload the corresponding certificate and provisioning profile for each. All of these steps should be completed without leaving the Native App Export flow in Studio.

   - **Bundle Identifier**: A unique string, e.g. `com.mycompany.myapp` this string must match Apple developer account settings in order to upload the app for distribution/testing

   - **Signing Type**:

     i. **Apple Development** – Use this option if you want to build and test your app on registered devices during development.

        1. **Generate a Certificate Signing Request (CSR)**
           a. In Studio, click *Add New Certificate* and then *Create Certificate Signing Request.*

        2. **Create a development certificate**
           a. Log in to your [Apple Developer Account](https://developer.apple.com/account/resources/certificates/add).
           b. Use the certificate signing request to create an Apple Development or iOS Development certificate, then download it.
           c. Reference: [Apple: Create a development certificate](https://developer.apple.com/help/account/certificates/create-a-development-certificate).

        3. **Upload the certificate**
           a. In Studio, upload the development certificate under *Upload Certificate.*

        4. **Create a provisioning profile**
           a. In your Apple Developer Account, create an iOS App Development provisioning profile.
           b. Associate it with the correct development certificate and App Identifier (you may need to create one first).
              i. To create an App ID, go to [Apple: Create an App ID](https://developer.apple.com/account/resources/identifiers/add/bundleId) and choose App IDs. Then select *App*. Then write the Description and Bundle ID for it.
              - Some teams prefer to use a wildcard Bundle ID for use during development, as this lets you share the same App ID and provisioning profile between different apps. To do so, choose **Description = Wildcard Development** and **Bundle ID = Explicit** with a value of `com.mycompany.*`.
           c. Reference: [Apple: Create a development provisioning profile](https://developer.apple.com/help/account/provisioning-profiles/create-a-development-provisioning-profile).

        5. **Upload the development provisioning profile**
           a. In Studio, upload the development provisioning profile under *Upload Provisioning Profile.*

     ii. **Apple Distribution** – Use this option when preparing your app for release via TestFlight, the App Store, or enterprise distribution.

        1. **Generate a Certificate Signing Request (CSR)**
           a. In Studio, click *Add New Certificate* and then *Create Certificate Signing Request.*

        2. **Create a distribution certificate**
           a. Log in to your Apple Developer Account.
           b. Use the certificate signing request to create an Apple Distribution certificate (or iOS Distribution – App Store Connect and Ad Hoc), then download it.
           c. Reference: [Apple: Certificate overview](https://developer.apple.com/help/account/certificates/certificates-overview).

        3. **Upload the certificate**
           a. In Studio, upload the distribution certificate under *Upload Certificate.*

        4. **Create a provisioning profile**
           a. In your Apple Developer Account, create an App Store (for TestFlight/App Store release) or Ad Hoc (for limited device distribution) provisioning profile.
           b. Associate it with the correct distribution certificate and App Identifier (you may need to create one first).
              i. Unlike for development, for distribution you should create an App ID just for this app, not a Wildcard Bundle ID.
           c. Reference: [Apple: Create a distribution provisioning profile](https://developer.apple.com/help/account/provisioning-profiles/create-an-app-store-provisioning-profile).

        5. **Upload the distribution provisioning profile**
           a. In Studio, upload the distribution provisioning profile under *Upload Provisioning Profile.*

   - Once you’ve uploaded the necessary certificates and provisioning profiles for Development and/or Distribution, click **Save** to confirm your Apple signing setup.

5. **Configure Permissions (Optional):**
   Indicate the sensor permissions your app may need to function properly, and optionally set custom text for the permission prompt. This step is required to successfully submit your app to the app store.

   - **Camera**: Select if the application uses any of the device’s camera (like for Face Effects or World Effects)
   - **Location**: Select if the application uses GPS location
   - **Microphone**: Select if the application uses the device’s microphone (like for Media Recorder, or voice interaction)

6. Once your basic app information is filled in, Apple configuration is complete, and permissions are set, click **Continue** to finalize the build configuration.

---

## Finalizing Build Settings

Now you'll define how your app is packaged:

- **Version**: Use semantic versioning (e.g. 1.0.0) ([Semantic Versioning](https://semver.org/))
- **Orientation**:
  - Portrait: Keeps the app fixed in a vertical position, even when the device is turned.
  - Landscape Left: Displays the app horizontally with the device turned so the left side is down.
  - Landscape Right: Displays the app horizontally with the device turned so the right side is down.
  - Auto Rotate: Allows the app to follow the device's physical rotation, switching between vertical and horizontal views automatically.
  - Auto Rotate (Landscape Only): Adjusts the app's position based on device rotation but restricts it to horizontal views only.

- **Status Bar**:
  - Yes: Displays the default system status bar over the application.
  - No: Hides the default system status bar.

- **Build Mode**:
  - Static Bundle: Full self-contained build (note: apps that use AR features still require an internet connection, even if they are a Static Bundle)
  - Live Reload: Pulls updates from Studio as your project is updated

- **Environment**: Select from Dev, Latest, Staging, or Production

- **Signing Type**:
  - Development: Select this option when you are building and testing your app during development. It allows you to run the app on registered devices using your development provisioning profile and certificates.
  - Distribution: Select this option when you are preparing your app for release, whether for TestFlight, the App Store, or enterprise/internal distribution. This uses your distribution provisioning profile and certificates to ensure the app can be installed and trusted on end users’ devices.

7. When everything is set, click **Build** to generate your app package.

8. Once the build is complete, download the `.ipa` file using the download links provided in the build summary.

---

## Publishing to the App Store

Once your export is complete, you’re ready to publish your app to the App Store using the IPA (iOS App Store Package). When you’re ready to share your app with others or release it, you’ll use Apple’s App Store Connect and either TestFlight (for beta testing) or App Store distribution. The high-level process is:

1. **Prepare an App Store Connect record**: Log in to App Store Connect (with your Apple Developer account) and create an App entry if you haven’t already. In the App Store Connect dashboard, go to *My Apps* and click the “+” to add a new app. Choose iOS as the platform, enter your app name, select the correct Bundle ID (as configured in your 8th Wall project), and provide a SKU and primary language, then *Create* the app.

2. **Upload the .ipa using Transporter**: Ensure the .ipa is signed with your Distribution certificate and provisioning profile (App Store distribution). Apple does not accept development-signed builds for TestFlight/App Store distribution. On a Mac, the easiest upload method is Apple’s Transporter app. Install Transporter from the Mac App Store, open it and sign in with your Apple ID (Developer account). Then click the “+” and add your .ipa file (or drag the .ipa into Transporter) and click *Deliver* to upload. Transporter will validate the file and submit it to App Store Connect. (You can also upload builds via Xcode’s Archive Organizer or the `altool` command.)

3. **Enable TestFlight testing (if needed)**: Once the build appears in App Store Connect (under your app’s TestFlight tab), you can distribute it to testers.
   - Internal testing: up to 100 members, assign builds immediately.
   - External testing: up to 10,000 users, requires Beta App Review.

4. **App Store submission**: To release the app to the public App Store, go to the app’s App Store page in App Store Connect. Fill in all required metadata: screenshots, description, category, pricing, privacy policy URL, etc. Attach the uploaded build, then click *Submit for Review*. Apple will then perform a full review of the app.

🔗 [Apple: Upload your app to App Store Connect](https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds/#:~:text=After%20adding%20an%20app%20to,testing%20%2C%20or%20%2075)

---

## Installing Directly on an iOS Device

To install a development-signed `.ipa` (e.g. from 8th Wall) onto an iPhone or iPad for testing, you need to sideload it using Apple’s tools:

1. **Verify provisioning**: Ensure the device’s UDID is included in the app’s provisioning profile. A development or Ad Hoc `.ipa` will only install on devices registered in that profile. If not, you’ll need to add your device to the provisioning profile and then reupload your provisioning profile on the Complete Apple Configuration page under Apple Development and then regenerate the `.ipa` app signed with the profile that contains your device.

2. **Install on device**:
   a. **Using Xcode**: On macOS, connect your iOS device via USB (and tap “Trust” if prompted on the device). Launch Xcode and go to *Window > Devices and Simulators.* Select your iPhone/iPad from the left device list. (Make sure Developer Mode is enabled on the device for iOS 16+; otherwise, iOS will block running the app.) Install the `.ipa` using Xcode: Drag and drop the `.ipa` file onto the “Installed Apps” section of your device’s panel in Xcode’s Devices window. Xcode will copy the app to the device and verify it. After a moment, the app icon should appear on your device.

   b. **Using Apple Configurator 2**: This is a free Mac app from Apple which can be used to install the `.ipa`. Open Configurator, connect your device, then choose *Actions > Add > Apps > Choose from my Mac…* and select the `.ipa` file. This will deploy the app to the device in a similar way.

   c. **Using Music (formerly iTunes)**: Open the Music app, connect your device, select your device in the left sidebar, and then drag and drop the `.ipa` file onto the main window. After a moment, the app should appear on your device. Note that it may not be on your first page — if you don’t see it, scroll through your app homepages.

3. **Trust the developer certificate**: If the app was signed with an enterprise or development certificate, you may need to manually trust it on the device before it will run. On the iPhone/iPad, go to *Settings > General > VPN & Device Management* (or *Profiles & Device Management* on older iOS) and find the profile for the app’s developer. Tap *Trust [Developer]* and confirm to trust the certificate. This step is not needed for App Store/TestFlight apps, but may be required for direct installs.

4. **Launch the app**: Now open the app on your device. The app should launch if the profile and certificate are valid and the device is in Developer Mode (for iOS 16+). If you get an error like “integrity could not be verified,” it usually means the device is not provisioned, the app is not properly signed, or Developer Mode is off. Once properly installed and trusted, the development build will run on your physical device.
