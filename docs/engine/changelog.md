---
id: changelog
sidebar_position: 99999
---
# Changelog


#### Release 27.4: (2025-July-17 27.4.11.427 / 2025-May-07, v27.4.8.427 / 2025-April-10, v27.4.5.427) {#release-27-2025-May-7-2747}
* New Features:
  * Added Image Target compatibility for 8th Wall Studio projects.

* Fixes and Enhancements:
  * Increased maximum active image targets to 32
  * Disabled the desktop default environment for mobile AR experiences with desktop mode enabled.
  * Fixed an issue where the landing page did not appear for face effects with desktop mode disabled.
  * Updated VPS API. VPS now requires engine version 27.4 or higher.
  * Fixed an issue related to changing XR camera orientation in Studio projects (27.4.11.427).

#### Release 27.3: (2025-March-19, v27.3.1.427) {#release-27-2025-March-19-2731427}

* Fixes and Enhancements:
  * Improved localization performance at VPS locations
  * Fixed crashes on orientation change and camera swapping
  * Corrected flickering face effects

#### Release 27.2: (2024-December-04, v27.2.6.427 / 2024-November-04, v27.2.5.427 / 2024-October-23, v27.2.4.427) {#release-27-2024-october-23-2724427}

* New Features:
  * Added VPS compatibility for 8th Wall Studio projects.

* Fixes and Enhancements:
  * Fixed an issue affecting the reliability of the the simulator in VPS projects. (27.2.5.427)
  * Improved the reliability of the camera pipeline initialization for enhanced AR experiences. (27.2.6.427)

#### Release 27.1: (2024-October-03, v27.1.9.427 / 2024-October-01, v27.1.6.427) {#release-27-1-2024-october-01-v2716427}

* Fixes and Enhancements:
  * Boosted localization and tracking quality at VPS locations, significantly enhancing stability
  and accuracy of VPS AR experiences.
  * Optimized SLAM relocalization & tracking.
  * Fixed an issue where the World Effects camera could teleport at the start of runtime in Studio.
  * Resolved an issue affecting the stability of VPS tracking to improve overall performance. (27.1.9.427)
  * Improved SLAM relocalization snaps AR content back to the proper position more quickly. (27.1.9.427)

#### Release 27: (2024-Sept-12, v27.0.4.427 / 2024-August-01, v27.0.2.427) {#release-27-2024-august-01-v2702427}

* Fixes and Enhancements:
  * Fixed an issue when swapping between World Effects and Face Effects experiences.
  * Improved XR camera synchronization with scenes in Studio.
  * Optimized logging for improved performance and cleaner output.

#### Release 26: (2024-June-18, v26.0.6.150) {#release-26-2024-june-18-v2606150}

* New Features:
  * Added support for Face Effects and World Tracking in 8th Wall Studio.

* Fixes and Enhancements:
  * Fixed an issue with some A-Frame projects that could cause unexpected behavior.

#### Release 25: (2024-May-28, v25.0.1.2384) {#release-25-2024-may-28-v25012384}

* New Features:
  * Updated the XR engine to download as feature-specific components instead of one large package.

#### Release 24.1: (2024-March-28, v24.1.10.2165 / 2024-February-29, v24.1.5.2165 / 2024-February-13, v24.1.2.2165 / 2024-January-25, v24.1.1.2165) {#release-241-2024-march-28-v241102165--2024-february-29-v24152165--2024-february-13-v24122165--2024-january-25-v24112165}

* New Features:
  * Updated 8Frame to support A-Frame 1.5.0.
  * Added Metaversal Deployment support for Magic Leap 2 1.5.0 operating system update.
  * Updated Hand Tracking to support left and right hand UVs, enabling you to easily draw designs on a hand mesh.
  * Added support for Sky Effects to 8th Wall Simulator. (24.1.2.2165)
  * Added four new wrist attachment point to Hand Tracking. (24.1.5.2165)
  * Updated Metaversal Deployment to support virtual reality in the browser on Apple Vision Pro. (24.1.10.2165)

* Fixes and Enhancements:
  * Improved performance of Sky Effects experiences.
  * Improved Hand Tracking's wrist tracking stability. (24.1.5.2165)

* XRExtras Enhancements:
  * Added `uv-orientation` parameter to `xrextras-hand-mesh` to support new hand UV functionality.
  * Fixed an issue with MediaRecorder on iOS 17.4. (24.1.10.2165)

#### Release 24: (2023-November-29, v24.0.10.2165 / 2023-November-16, v24.0.9.2165 / 2023-November-01, v24.0.8.2165) {#release-24-2023-november-29-v240102165--2023-november-16-v24092165--2023-november-01-v24082165}

* New Features:
  * Added three new ear attachment points for Face Effects, allowing you to accurately attach AR content to various points on the ears.
  * Updated Hand Tracking to expose hand UVs, enabling you to easily draw designs on a hand mesh
  * Enhanced Metaversal Deployment to support 8th Wall experiences on the Magic Leap 2.
  * Updated PlayCanvas integration to support three new ear attachment points for Face Effects. (24.0.9.2165)

* Fixes and Enhancements:
  * Cleaned up some PlayCanvas warnings (24.0.10.2165)

* XRExtras Enhancements:
  * Updated AFrame components for easy Face Effects with new ear attachment points

#### Release 23: (2023-August-24, v23.1.1.2275 / 2023-August-09, v23.0.12.2275 /2023-July-28, v23.0.7.2275 / 2023-July-25, v23.0.4.2275) {#release-23-2023-august-24-v23112275--2023-august-09-v230122275-2023-july-28-v23072275--2023-july-25-v23042275}

* New Features:
  * Introducing Hand Tracking - use hands, wrists, and fingers as an interactive canvas for immersive WebAR experiences.
     * Attach 3D objects to an industry leading 36 hand attachment points.
      * Use the 8th Wall engine’s adaptive hand mesh to match the size and volume of any hand.
     * Added Hand Tracking Coaching Overlay module to guide users through a flow to ensure their hands are in view of the camera.
  * Updated PlayCanvas integration to support Hand Tracking. (23.0.12.2275)
  * Added XrDevice.deviceInfo API to query detailed device information. (23.1.1.2275)

* Fixes and Enhancements:
  * Improved SLAM relocalization snaps AR content back to the proper position more quickly and with better precision after an interruption.
  * Refined camera selection on Android devices.
  * Cleaned up warnings related to default xrhand parameters. (23.0.7.2275)
  * Fixed an issue with WebGL context on MacOS devices using Safari. (23.0.12.2275)
  * Improved SLAM tracking on a wide range of devices. (23.1.1.2275)

* XRExtras Enhancements:
  * New A-Frame components for easy Hand Tracking development.
  * Fixed shadow shader in PlayCanvas.

#### Release 22.1: (2023-May-15, v22.1.7.1958 / 2023-May-03, v22.1.2.1958) {#release-221-2023-may-15-v22171958--2023-may-03-v22121958}

* New Features:
  * Added multi-face support for Face Effects, allowing you to augment up to three faces simultaneously in a single experience.
  * Updated Face Effects to support either standard or projected UVs, enabling you to easily draw Face Effect designs on a projected face mesh.

* Fixes and Enhancements:
  * Fixed a device orientation issue on iOS 16.4 devices.
  * Fixed a performance issue that could occur when using one controller on a Meta Quest device.
  * Improved performance of three.js experiences on headsets. (22.1.7.1958)

* XRExtras Enhancements:
  * Added `face-id` parameter to `xrextras-faceanchor` to support new multi-face functionality. (22.1.7.1958)

#### Release 22: (2023-April-20, v22.0.4.1958) {#release-22-2023-april-20-v22041958}

* New Features:
  * Introducing the 8th Wall Engine’s completely refreshed Face Effects:
      * Improved tracking quality and stability for:
        * Eyebrow Region
        * Eye Tracking
        * Mouth Tracking
      * Added Iris tracking capability:
        * Added API to estimate InterPupillary Distance (IPD)
      * Added developer-friendly real-time Face Events including:
        * Eyebrows Raised/Lowered
        * Mouth Open/Closed
        * Eye Open/Closed
      * Enabled new face morphing effects by exposing uv positions of face points in the camera frame.
      * Increased head mesh height to allow effects that extend all the way to the hairline.

* Fixes and Enhancements:
  * Improved the speed of sky detection for Sky Effect’s experiences.


#### Release 21.4: (2023-April-07, v21.4.7.997 / 2023-March-27, v21.4.6.997) {#release-214-2023-april-07-v2147997--2023-march-27-v2146997}

* New Features:
  * Introducing Sky Effects + World Tracking - create immersive experiences that augment the sky and ground together in one project:
    * Added ability to simultaneously track 3D interactive content in the sky and on surfaces via SLAM.
    * Added the ability to move AR content from the sky layer to the ground, and from the ground to the sky.
  * Updated PlayCanvas integration to support Sky Effects as well as Sky + World Tracking.
  * Improved PlayCanvas integration with a new unified run() & stop() API which replaces the runXr() & stopXr() API.
  * Added a new xrconfig API that makes it easier to configure the different XR components that your project uses.

* Fixes and Enhancements:
  * Fixed an issue with sky detection at the edge of the camera frame on some Sky Effects experiences.
  * Fixed an issue with xrlayerscene component when used in self-hosted projects.
  * Fixed an device orientation issue on iOS 16.4 devices (21.4.7.997)

#### Release 21.3:  (2023-March-17, v21.3.8.997) {#release-213--2023-march-17-v2138997}

* New Features:
  * Added edge feathering controls (edgeSmoothness) for Sky Effects, allowing you to fine tune the look and intensity of borders between virtual and real-world content in the sky.
  * Added support for camera-locked Sky Effects in three.js, enabling you to add content to the sky that is always in view of the camera in your three.js projects.
  * Updated 8Frame to support A-Frame 1.4.1.
  * Updated Metaversal Deployment to support Room Setup in the Meta Quest Browser.

* Fixes and Enhancements:
  * Improved performance and visual quality of Sky Effects experiences.
  * Added ability to specify which VPS Project Locations you want to localize against. This can help improve VPS localization times if there are many nearby Locations.
  * Fixed an issue where opening PlayCanvas experiences on desktop could result in crashing.

#### Release 21.2:  (2022-December-16, v21.2.2.997 / 2022-December-13, v21.2.1.997) {#release-212--2022-december-16-v2122997--2022-december-13-v2121997}

* New Features:
  * Introducing Sky Effects - a major update to the 8th Wall Engine enabling sky segmentation:
    * Added ability to place 3D interactive content in the sky.
    * Added the ability to replace sky mask with images or video.
    * Added Sky Coaching Overlay module to guide users through a flow to ensure they are pointing their device at the Sky.

* Fixes and Enhancements:
  * Improved tracking quality at VPS locations.
  * Fixed an AFrame Sky Effects pixelation issue that impacted some phones. (21.2.2.997)

* XRExtras Enhancements:
  * Enhanced MediaRecorder to add another method of drawing 2D elements to the recorded canvas.
  * Fixed shadow rendering in PlayCanvas v1.55+
  * Improved performance of Image Target A-Frame primitives.

#### Release 20.3:  (2022-November-22, v20.3.3.684) {#release-203--2022-november-22-v2033684}

* New Features:
  * Updated Metaversal Deployment to support mixed reality in the Meta Quest Browser.
    * 8th Wall World Effects experiences automatically make use of video passthrough AR on Meta Quest Pro and Meta Quest 2 when accessed in the browser.

* Fixes and Enhancements:
  * Optimized localization at VPS locations
  * Improved tracking quality at VPS locations by using the selected mesh of each Project Location.
  * Improved experience for some Android devices with multiple cameras.

#### Release 20:  (2022-October-05, v20.1.20.684 / 2022-September-21, v20.1.19.684 / 2022-September-21, v20.1.17.684) {#release-20--2022-october-05-v20120684--2022-september-21-v20119684--2022-september-21-v20117684}

* New Features:
  * Introducing Lightship VPS for Web - create location-based WebAR experiences by connecting AR content to real-world locations.
    * Added new Geospatial Browser to the 8th Wall Developer Portal.
      * Find, create and manage VPS-activated Locations.
      * Generate and download 3D meshes for use as occluders, physics objects, or as a reference for creating location-aware animations.
    * Added `enableVps` parameter to XR8.XrController.configure() and xrweb.
    * Added events when a Location is ready for scanning, found, or lost.
    * Added ability to find and access Location raw mesh geometry.
    * Added `XR8.Vps.makeWayspotWatcher`, and `XR8.Vps.projectWayspots` APIs for querying nearby VPS activated Locations and Project Locations.
    * Added Lightship VPS Coaching Overlay module to guide users through a flow to localize at real-world locations.
    * Added XR8.Platform API for unlocking new 8th Wall platform features like Lightship VPS and Niantic Lightship Maps.
  * Niantic Lightship Map module
    * Add the lightship-maps module to your project on 8thwall.com to make it easy to create a variety of location-based experiences.

* Fixes and Enhancements:
  * Improved error handling for VPS network requests (20.1.19.684)
  * Fixed issues with some VPS network requests (20.1.20.684)

#### Release 19.1:  (2022-August-26, v19.1.6.390 / 2022-August-10, v19.1.2.390) {#release-191--2022-august-26-v1916390--2022-august-10-v1912390}

* Fixes and Enhancements:
  * Fixed issues with 8th Wall experiences within WeChat on iOS.
  * Improved initial SLAM tracking for some Android devices (19.1.6.390)

#### Release 19:  (2022-May-5, v19.0.16.390 / 2022-April-13, v19.0.14.390 / 2022-March-24, v19.0.8.390) {#release-19--2022-may-5-v19016390--2022-april-13-v19014390--2022-march-24-v1908390}

* New Features:
  * Introducing Absolute Scale — a major update to 8th Wall SLAM to enable real-world scale in World Effects:
    * Added ability to enable Absolute Scale in World Effects projects.
    * Added scale parameter to XR8.XrController.configure().
    * Added Coaching Overlay module to guide users through a flow to generate appropriate data for scale estimation.
  * Updated 8Frame to support A-Frame 1.3.0. (19.0.16.390)

* Fixes and Enhancements:
  * Improved performance on various devices.
  * Improved experience for some Android devices with multiple cameras.
  * Improved performance of Absolute Scale on some iOS devices. (19.0.14.390)
  * Fixed Huawei browser user messaging on Huawei devices. (19.0.14.390)

#### Release 18.2:  (2022-March-09, v18.2.4.554 / 2022-January-14, v18.2.3.554 / 2022-January-13, v18.2.2.554) {#release-182--2022-march-09-v1824554--2022-january-14-v1823554--2022-january-13-v1822554}

* Fixes and Enhancements:
  * Fixed an issue where devices running iOS 13 could reload after starting an XR8 session.
  * Fixed an issue where the WebGL context could be lost after many XR8 sessions.
  * Improved experience for some Android devices with multiple cameras.
  * Fixed issue where additive blending could interefere with the camera feed.
  * Fixed an issue with transparent materials. (18.2.3.554)
  * Fixed a three.js rendering issue on devices running iOS 15.4 (18.2.4.554)

#### Release 18.1:  (2021-December-02, v18.1.3.554) {#release-181--2021-december-02-v1813554}

* Fixes and Enhancements:
  * Fixed a loading issue on some iOS devices when accessing Inline AR projects.
  * Fixed an issue with denying browser prompts on some iOS devices.
  * Fixed an issue rotating device orientation between landscape and portrait within SFSafariViewController.
  * Improved compatibility with some Android devices that have atypical camera feed aspect ratios.

#### Release 18:  (2021-November-08, v18.0.6.554) {#release-18--2021-november-08-v1806554}

* New Features:
  * Introducing the completely rebuilt 8th Wall Engine featuring Metaversal Deployment:
    * Added pipeline module API for session managers.
    * Added Web3D session manager.
    * Added headset session managers for three.js and A-Frame.
    * Updated allowedDevices to include mobile-and-headset.
    * Added additional session configuration parameters in XR8.run().

* Fixes and Enhancements:
  * Improved frame capture with a variety of Pixel devices.
  * Updated iOS WKWebView flow to support experiences accessed via LinkedIn.

* XRextras:
  * Added xrextras-opaque-background A-Frame component and XRExtras.Lifecycle.attachListener.

#### Release 17.2:  (2021-October-26, v17.2.4.476) {#release-172--2021-october-26-v1724476}

* Fixes and Enhancements:
  * Enhanced SLAM map building quality.
  * Optimized tracking quality of SLAM experiences.
  * Improved PlayCanvas integration to support drawing on the same canvas that the camera feed is rendered on.

#### Release 17.1:  (2021-September-21, v17.1.3.476) {#release-171--2021-september-21-v1713476}

* New Features:
  * Added new APIs
    * API to query the engine initialization state.
    * three.js camera feed is available as a THREE.Texture.
    * Lifecycle method for pipeline module removal.

* Fixes and Enhancements:
  * Enhanced SLAM map building quality.
  * Improved tracking quality on a wide range of devices.
  * Improved frame rate of World Effects, Face Effects, and Image Target experiences on Chromium-based and Firefox browsers.
  * Improved MediaRecorder video quality on Android devices.

* XRExtras Enhancements:
  * Enhanced MediaRecorder share flow when Web Share API Level 2 is enabled.
  * Improved startup time of Loading module.
  * Improved lifecycle handling for Runtime Error, Almost There and Loading modules.
  * Updated the Almost There module to improve the success of QR Code scans.
  * Improved Full Window Canvas logic on iPad split screen views.

#### Release 17:  (2021-July-20, v17.0.5.476) {#release-17--2021-july-20-v1705476}

* Fixes and Enhancements:
  * Enhanced above-horizon tracking boosts map quality improving the performance of WebAR experiences that ask users to point their phones up to fully explore AR content.
  * Optimized SLAM relocalization snaps AR content back to the proper position in world space after an interruption.
  * Improved tracking quality of SLAM experiences when users make extreme yaw movements.

* XRExtras Enhancements:
  * Updated MediaRecorder to return to the media preview when users press the “view” button on the iOS dialog box after choosing to download media.

#### Release 16.1:  (2021-June-02, v16.1.4.1227) {#release-161--2021-june-02-v16141227}

* Fixes and Enhancements:
  * Improved recovery of world tracking after an interruption.
  * Improved lifecycle management of event listeners in A-Frame projects.
  * Fixed an issue with WebGL 1 errors on some Android devices.
  * Fixed an issue where MediaRecorder would occasionally not render a recording preview.
  * Fixed an issue where swapping the camera multiple times could result in crashing.
  * Improved compatibility using canvases with pre-defined WebGL 2 contexts.

#### Release 16:  (2021-May-21, v16.0.8.1227 / 2021-April-27, v16.0.6.1227 / 2021-April-22, v16.0.5.1227) {#release-16--2021-may-21-v16081227--2021-april-27-v16061227--2021-april-22-v16051227}

* New Features:
  * Introducing the all-new 8th Wall MediaRecorder:
    * Uses W3C web standards compliant recording when available.
    * Optimizes performance to improve frame rate during recording.
    * Enhancements to image quality and frame rate of recording.

* Fixes and Enhancements:
  * Improved tracking quality and frame rate of SLAM experiences.
  * Improved tracking quality and frame rate of Image Target experiences.
  * Improved experience for some Android devices with multiple cameras.
  * Fixed raycasting issues with PlayCanvas.
  * Fixed SLAM tracking issue (v16.0.8.1227)

* XRExtras Enhancements:
  * Updated MediaRecorder to provide a progress bar while transcoding recordings on relevant devices.

#### Release 15.3:  (2021-March-2, v15.3.3.487) {#release-153--2021-march-2-v1533487}

* New Features:
  * Updated 8Frame to support A-Frame 1.2.0.

* Fixes and Enhancements:
  * Fixed an issue with resuming the camera feed in Safari after navigating back to an 8th Wall app.
  * Fixed an issue with resuming the camera feed after re-opening a WKWebView
  * Improved compatibility with different rendering engine versions.
  * Optimized iOS WKWebView flows for some native apps.

#### Release 15.2:  (2020-December-14, v15.2.4.487) {#release-152--2020-december-14-v1524487}

* New Features:
  * Added support for WKWebView on devices running iOS 14.3 or later.
  * Made a compute context accessible to Pipeline Modules to accelerate offscreen GPU computer vision.
  * Updated 8Frame to support A-Frame 1.1.0.

* Fixes and Enhancements:
  * Improved compatibility with rendering engines.
  * Added the ability to load and unload image targets while tracking other image targets.
  * Fixed an issue with MediaRecorder related to audio context switching.
  * Improved experience for some Android devices with multiple cameras.
  * Fixed an issue where WebGL errors would sometimes be hidden.
  * Fixed an issue with simultaneously tracking flat and curved image targets.
  * Fixed an issue with switching between WebGL and WebGL2 pipelines.

* XRExtras Enhancements:
  * Improved flows for iOS WKWebView on devices running iOS 14.3 or later.
  * Fixed an issue with Stats module pipeline detach.

#### Release 15.1:  (2020-October-27, v15.1.4.487) {#release-151--2020-october-27-v1514487}

* New Features:
  * Added support for Curved Image Targets to be used simultaneously with SLAM.
  * Added support for A-Frame 1.1.0-beta, THREE 120, and MRCS HoloVideoObject 1.2.5.

* Fixes and Enhancements:
  * Improved quality of tracking Flat Image Targets simultaneously with SLAM.
  * Improved framerate for devices with iOS 14 or greater.
  * Improved experience for some Android devices with multiple cameras. (v15.0.9.487)
  * Optimized performance of some GPU processing.
  * Enhanced PlayCanvas integration with support for switching between XR and FaceController cameras.
  * Fixed an issue with MediaRecorder microphone access where onPause events were not closing the microphone input.
  * Fixed an issue with MediaRecorder occasionally producing files incompatible with some video players.
  * Fixed a raycasting issue with AFrame 1.0.x. (v15.0.9.487)

* XRExtras Enhancements:
  * XRExtras.PauseOnHidden() module pauses the camera feed when your browser tab is hidden.

#### Release 15:  (2020-October-09, v15.0.9.487 / 2020-September-22, v15.0.8.487) {#release-15--2020-october-09-v1509487--2020-september-22-v1508487}

* New Features:
  * 8th Wall Curved Image Targets:
    * Added support for cylindrical image targets such as those wrapped around bottles, cans and more.
    * Added support for conical image targets such as those wrapped around coffee cups, party hats, lampshades and more.

* Fixes and Enhancements:
  * Improved tracking quality for SLAM and Image Targets.
  * Fixed an issue with MRCS Holograms and device routing on iOS 14.
  * Fixed an issue with Face Effects and Image Targets where updates to mirroredDisplay were not reflected during runtime.
  * Improved experience for some Android devices with multiple cameras. (v15.0.9.487)
  * Fixed a raycasting issue with AFrame 1.0.x (v15.0.9.487)

* XRExtras Enhancements:
  * New AFrame components for easy Curved Image Target development:
    * 3D container prefab component that forms a portal-like container that 3D content can be placed inside.
    * Video playback prefab component for easily enabling video on curved image targets.
  * Improved detection of Web Share API Level 2 support.

#### Release 14.2:  (2020-July-30, v14.2.4.949) {#release-142--2020-july-30-v1424949}

* New Features:
  * Updated MediaRecorder.configure() to provide more control over audio output and mixing:
    * Pass in your own audioContext.
    * Request mic permissions during setup or runtime.
    * Optionally disable microphone recording.
    * Add your own audio nodes to the audio graph.
    * Incorporate scene audio into recording playback.

* Fixes and Enhancements:
  * Fixed an issue where clip planes were not set from PlayCanvas in some cases.
  * Added support for switching between world tracking, image target tracking, and face effects at runtime.
  * Fixed an issue where vertex buffers could be rebound after vertex arrays were deleted.
  * Improved experience for some Android devices with multiple cameras.

#### Release 14.1:  (2020-July-06, v14.1.4.949) {#release-141--2020-july-06-v1414949}

* New Features:
  * Introducing 8th Wall Video Recording:
    * Add in-browser video recording to any 8th Wall project with the new XR8.MediaRecorder API.
    * Add dynamic overlays and end cards with custom images and call to action.
    * Configure maximum video duration and resolution.
  * Added microphone as a configurable module permission.

* Fixes and Enhancements:
  * Enhanced CanvasScreenshot functionality with improved overlay support.
  * Fixed an issue with Face Effects that could cause visual glitches on device orientation change.
  * Improved Face Effects right-handed coordinate compatibility with Bablyon.js.
  * Improved graphics pipeline compatibility with Babylon.js.

* XRExtras Enhancements:
  * Record button prefab component for capturing video and photos:
    * Select between standard, fixed, and photo capture modes.
  * Preview prefab component for easily previewing, downloading, and sharing captures
  * Use XRExtras to easily customize the Video Recording user experience in your project:
    * Configure maximum video length and resolution.
    * Add optional watermark to each frame of the video.
    * Add optional end card to add branding and a call to action at the end of the video.

#### Release 14:  (2020-May-26) {#release-14--2020-may-26}

* New Features:
  * Introducing 8th Wall Face Effects: Attach 3D objects to face attachment points and paint your face with custom materials, shaders or videos.
  * Selfie Mode: Use the front camera with a mirrored display to get the perfect selfie shot.
  * Desktop Browsers: Enable your image target and face effect experiences to run in desktop browsers utilizing the webcam.

* Fixes and Enhancements:
  * Enhanced capture field of view on Pixel 4/4XL phones.
  * Enhanced camera profiles for certain phone models.
  * Fixed an issue with changing device orientation during startup.
  * Fixed an issue with swapping the camera direction on the same a-scene.
  * Fixed an issue with AFrame look-controls not being removed on scene restart.
  * Improved experience for some Android phones with multiple cameras.
  * Other fixes and enhancements.

* XRExtras Enhancements:
  * Enhanced almost there flows for experiences that can be viewed on desktop.
  * PauseOnBlur module stops the camera when your tab is not active.
  * New AFrame components for easy face effects and desktop experience development.
  * New ThreeExtras for rendering PBR materials, basic materials, and videos to faces.

#### Release 13.2:  (2020-Feb-13) {#release-132--2020-feb-13}

* New Features:
  * Release camera stream on XR8.pause() and reopen on XR8.resume().
  * Added API to access shader program and modify uniforms used by GlTextureRenderer.
  * Added API to configure WebGL context on run.

* Fixes and Enhancements:
  * Fix black video issue on iOS when a user long-presses on an image.
  * Improved iOS screenshot capture speed and reliability.
  * Fixed alpha channel rendering when taking a screenshot.
  * Improved experience for some Android phones with multiple cameras.
  * Improved detection of social network web views.

* XRExtras Enhancements:
  * Improved QR codes with better compatibility with native cameras.
  * Improved link out flows for social networks.
  * Improved CSS customization.

#### Release 13.1 {#release-131}

* New Features:
  * Improved framerate on high resolution Android phones.
  * Camera pipeline can be stopped and restarted.
  * Camera pipeline modules can be removed at runtime or when stopped.
  * New lifecycle callbacks for attaching and detaching.

* Fixes and Enhancements:
  * Improved experience for some Android phones with multiple cameras.
  * Fixed iOS phone calibration on iOS 12.2 and above.

#### Release 13 {#release-13}

* New Features:
  * Adds support for cloud-based creation, collaboration, publishing, and hosting of WebAR content.

#### Release 12.1 {#release-121}

* Fixes and Enhancements:
  * Increased camera resolution on newer iOS devices.
  * Increased AFrame fps on high-res Android devices.
  * Fixed three.js r103+ raycasting issues.
  * Added support for iPadOS.
  * Fixed memory issue when loading many image targets repeatedly.
  * Minor performance enhances and bug fixes.

#### Release 12 {#release-12}

* New Features:
  * Increased image target upload limit to 1000 image targets per app.
  * New API for selecting active image targets at runtime.
  * Apps can now scan for up to 10 image targets simultaneously.
  * Front facing camera is supported in camera framework and image targets.
  * Engine support for PlayCanvas.

* Fixes:
  * Improved experience for some Android phones with multiple cameras.

* XRExtras:
  * Improved visual quality on Android Phones.
  * Support for iOS 13 device orientation permissions.
  * Better error handling for missing web assembly on some older versions of iOS.
  * Support for PlayCanvas.

#### Release 11.2 {#release-112}

* New Features:
  * iOS 13 motion support.

#### Release 11.1 {#release-111}

* Fixes and Enhancements:
  * Reduced memory usage.
  * Improved tracking performance.
  * Enhanced detection of browser capabilities.

#### Release 11 {#release-11}

* New Features:
  * Added support for Image Targets.
  * Added support for BabylonJS.
  * Reduced JS binary size to 1MB.
  * Added support running 8th Wall Web inside a cross-origin iframe.
  * Minor API additions.

#### Release 10.1 {#release-101}

* New Features:
  * Added support for A-Frame 0.9.0.

* Fixes:
  * Fixed error when providing includedTypes to XrController.hitTest().
  * Reduced memory usage when tracking over extended distances.

#### Release 10 {#release-10}

Release 10 adds a revamped web developer console with streamlined developer-mode, access to allowed origins and QR codes. It adds 8th Wall Web support for XRExtras, an open-source package for error handling, loading visualizations, "almost there" flows, and more.

* New Features:
  * Revamped web developer console.
  * XR Extras provides a convenient solution for:
    * Load screens and requesting camera permissions.
    * Redirecting users from unsupported devices or browsers ("almost there").
    * Runtime error handling.
    * Drawing a full screen camera feed in low-level frameworks like three.js.
  * Added public lighting, hit test interfaces to XrController.
  * Other minor API additions.

* Fixes:
  * Improved app startup speed.
  * Fixed a framework issue where errors were not propagated on startup.
  * Fixed an issue that could occur with WebGL during initialization.
  * Use window.screen interface for device orientation if available.
  * Fixed a three.js issue that could occur when the canvas is resized.

#### Release 9.3 {#release-93}

* New Features:
  * Minor API additions: XR.addCameraPipelineModules() and XR.FullWindowCanvas.pipelineModule()

#### Release 9.2 {#release-92}

* New Features:
  * Public documentation released: https://docs.8thwall.com/web

#### Release 9.1 {#release-91}

* New Features:
  * Added support for Amazon Sumerian in 8th Wall Web
  * Improved tracking stability and eliminated jitter

#### Release 9 {#release-9}

* Initial release of 8th Wall Web!
