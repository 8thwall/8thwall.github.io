---
id: release-notes
sidebar_position: 999
toc_max_heading_level: 2

# NOTE(christoph): We can set this to a previous version if we don't want to show the popup for the next version, for example `latest_popup_id: "2025_09_17"`, or stop showing the popup entirely by setting it to `""`.
latest_popup_id: "latest"

runtime_version_2025_10_24: "2.2.0"
runtime_version_2025_10_16: "2.1.0"
runtime_version_2025_10_10: "2.0.1"
runtime_version_2025_09_25: "2.0.1"
runtime_version_2025_09_17: "2.0.0"
runtime_version_2025_09_09: "2.0.0"
runtime_version_2025_08_29: "1.1.0"
runtime_version_2025_08_19: "1.0.0"
runtime_version_2025_08_06: "1.0.0"
---

# Release Notes

<style> p:has(+ ul) {margin-bottom: 0 !important}</style>

## October 2025 [Update 3] {#version-2025-october-24}
October 24, 2025

### New Features
Runtime 2.2.0 adds physics collider rotational offsets, and other fixes/enhancements. Read the
full release notes [here](/docs/api/studio/changelog/#2.2.0).

## October 2025 [Update 2] {#version-2025-october-16}
October 16, 2025

### New Features
Runtime 2.1.0 introduces an API for skybox and fog, and other fixes/enhancements. Read the
full release notes [here](/docs/api/studio/changelog/#2.1.0).

## October 2025 [Update 1] {#version-2025-october-10}
October 10, 2025

### New Features

Desktop App
- Added support for Windows. Download [here](https://www.8thwall.org/downloads).

Native App Export
- Added iFrame embed options with a copyable code snippet in the Publish flow.

### Fixes and Enhancements

Desktop App
- Fixed issue where the 8th Wall desktop app on Mac would sometimes stall at initial playback
- The desktop app now supports translations based on user language preferences

Native App Export
- Introduced a configuration option to include or remove the status bar in iOS Native App Export builds

General
- Markdown files will open in preview mode by default (Studio Web)

## September 2025 [Update 3] {#version-2025-september-25}
September 25, 2025

### Fixes and Enhancements

Physics
- Fixed issue preventing dynamic objects from reaching complete rest
- Fixed crash after repeated collider scale changes

Particles
- Fixed incorrect emission directions
- Ensured particle effects are framerate independent

Desktop App
- Increased reliability of simulator

UI
- Fixed issue causing incorrect offset placement on UI elements

## September 2025 [Update 2] {#version-2025-september-17}
September 17, 2025

### New Features

Desktop App
- [The 8th Wall Desktop App is here](http://8th.io/desktopappblog). Now in Public Beta for macOS, with Windows coming soon, the Desktop App brings the speed of local development together with the collaboration of the cloud.

![](/images/studio/app/hub.jpg)

## September 2025 [Update 1] {#version-2025-september-9}
September 9, 2025

### New Features

Physics Upgrade
- The all-new Studio Runtime 2.0.0 comes with a [rebuilt physics engine](https://8th.io/v2update) that’s faster, smoother, and ready for whatever you throw at it.
- Some physics behaviors are different as a result for properties like Friction, Restitution, and Damping. View the [upgrade guide](https://8th.io/v2upgradeguide) for a smooth transition to 2.0.
- Kinematic Colliders: Added Kinematic option to Collider types. Allows for objects to have scripted or animated movement, while also allowing physics collision interactions.

Native App Export
- Export your 3D or XR experience as an iOS app and increase your reach by publishing to both the web and iOS app store.

### Fixes and Enhancements

Prefabs
- Fixed issue where colliders on nested prefab objects would not generate properly.

Native App Export
- Updated the Android SDK target for Android Native App Export from API Level 34 to API Level 36 to ensure compliance with Google Play distribution requirements (apps must target API Level 35+).
- Fixed an issue where particle effects and custom fonts did not render correctly in Static Bundle build mode for Android Native App Export.

General
- Updated video autoplay behavior so videos with audio will autoplay as muted. Video audio will automatically unmute once a user interaction has occurred.
- Enabled stricter typescript checking at build time to improve error reporting.
- Now within Studio, you will automatically be notified of newly released updates.

## August 2025 [Update 3] {#version-2025-august-29}
August 29, 2025

### New Features

Runtime Versioning
- Studio projects can run on a specific version, which can be updated in Settings. Pin your project to a fixed runtime for predictability, or opt in to automatic minor updates and bug fixes to always stay current.

### Fixes and Enhancements

Asset Lab
- Previous asset generation steps now populate when sending assets from Library to generate workflows
- Retry multiple multi-view angles at once during image generation step for 3D model and Animated Character workflows

Face
- Fixed face mesh not being rendered as configured with Face AR camera

Physics
- Fixed corrupted shape being applied to auto colliders

## August 2025 [Update 2] {#version-2025-august-19}
August 19, 2025

### New Features

Billing
* Added one-time credit top-ups

General
* Added Camera Preview Widget

### Fixes and Enhancements

Billing
* Added Stripe Billing Portal to manage subscriptions, billing info, and invoices

Image Targets
* Fixed an issue preventing curved image targets from being updated

Asset Lab
* Allow for re-generating a single image during multi-view image generation for 3D model and Animated Character workflows

General
* Fixed an issue preventing some users from signing up with Google

## August 2025 [Update 1] {#version-2025-august-6}
August 6, 2025

### Fixes and Enhancements

General
* Improved the usability and organization of the camera component
* Fixed issue where Fog would not appear when enabled in configurator
* Fixed mouse pointer lock issue affecting the Fly Controls component in Studio

Asset Lab
* Added UI support for background opacity for images generated with Image-GPT-1

UI Elements
* Fixed artifact appearing on UI elements with transparent images on some iOS devices
Particles
* Fixed GLTF particles not displaying
Prefabs
* Fix prefab children collider updates

## July 2025 [Update 4] {#version-2025-july-29}
July 29, 2025

### New Features

Asset Lab
* Added controls to optimize generated 3D models

UI Elements
* Added stacking order configuration to manage overlapping elements

### Fixes and Enhancements

UI Elements
* Improved handling of sort order among sibling elements
* UI element groups are now flattened into a single layer

Transforms
* Added `getWorldQuaternion` and `setWorldQuaternion` to world.transform

Physics
* Enabled high precision mode for dynamic colliders

Materials
* Added texture filtering with mipmap support

Splats
* Added support for spz v3

Asset Lab
* Added option to select assets from Library for use as inputs within image, 3D model, and animated character workflows

## July 2025 [Update 3] {#version-2025-july-22}
July 22, 2025

### New Features

Input Manager
* Added Screen Touch binding to Input Manager.

### Fixes and Enhancements

Asset Lab
* Added support for user-uploaded images for 3D model generation workflow.
* Updated Animated Character workflow to support single-image to 3D generations.
* Added support for user-uploaded 3D models for Animated Character workflow.

XR
* Fixed issue where initial flashing would occur during the camera permissions as scene objects were loaded.

Native App Export
* Updated user agent string for Native Android apps to more accurately reflect the platform and device.
* Fixed an issue with touch events behaving unexpectedly in Native Android applications.

## July 2025 [Update 2] {#version-2025-july-15}
July 15, 2025

### New Features

Spaces
* Added Fog configuration to Space Settings.
### Fixes and Enhancements

UI Elements
* Added ignoreRaycast option.

Asset Lab
* Added ability to preview animation clips in Animated Character workflow.

XR
* Fixed invalid app key error when reloading XR camera.

## July 2025 [Update 1] {#version-2025-july-07}
July 7, 2025

### New Features

Asset Lab
* Added support for Hunyuan3D-2.1 Image-to-3D generation model.
* Added support for Flux Schnell Image generation model.

Native App Export
* Enabled support for various device orientations.
* Added configuration options for device status bar.
* Added support for multi-touch.

### Fixes and Enhancements

General
* Fixed issue where camera set to focus on moving objects was not updating correctly.

Prefabs
* Fix various prefab runtime issues.
* Fixed issue where Prefab children components were not getting deleted correctly.
* Made style updates to better highlight overridden components and changes.
* Fixed issue where Prefab children components were not getting deleted correctly.

UI Elements
* Fixed issue with Images stretching when set to “Contain”.

Asset Lab
* Fix library loading timeouts.

Particles
* Fixed issue where particles would incorrectly fallback to using cube primitives when no primitive was set.

Materials
* Improved performance of GLTF video materials.

Mesh
* Fixed issue where adding a collider to certain GLBs would cause the object to disappear in Studio’s viewport.

Native App Export
* Improved UI scaling consistency on Android apps.
* Fixed intermittent issues when opening or closing Android apps.

Simulator
* Fixed an issue where the simulator would initialize twice on open.

## June 2025 [Update 3] {#version-2025-june-11}
June 11, 2025

### New Features

Asset Lab
* Generate images, 3D models, and animated and rigged characters with our new Asset Lab and easily add these to your scene.

Native App Export
* Export your 3D or XR experience as an Android app and increase your reach but publishing to both the web and app stores.

**Fixes & Enhancements**

General
* Removed Live Sync optional setting for more streamlined playback behavior.
* Updated the Studio’s Playback and Build controls for better ease of use.

## June 2025 [Update 2] {#version-2025-june-09}
June 9, 2025

### New Features

UI Elements
* Hover Events are now supported for UI Elements.

Materials
* Added API for working with Video Textures at runtime.

**Fixes & Enhancements**

UI Elements
* Fixed an issue causing UI elements to persist when using `display: none`.

Animations
* Bug fixed for animations transitions.

## June 2025 [Update 1] {#version-2025-june-02}
June 2, 2025

### New Features

Prefabs
* We've added support for Prefabs in Studio for creating reusable, customizable game templates that streamline and scale your development, and optimize performance.
* See our [Prefabs Guide](/docs/studio/guides/prefabs) to get Started.

General
* Videos are now supported as material texture maps. Note: New VideoMaterial override will override all glTF materials, like HiderMaterial and VideoMaterial.

## May 2025 [Update 2] {#version-2025-may-29}
May 29, 2025

### New Features

UI Elements Events
* We've introduced UI events for working UI Elements like Buttons. (i.e. Pressed, Released, Selected, Disabled)
* UI Events now have dedicated strings.
* See more in the Events section of the API Documentation.

Lights
* We've introduced a new Light type called "Area Light" which emits light from a rectangular primitive.

### Fixes and Enhancements

Audio
* Fixed issue where multiple audio entities would not spawn correctly.

## May 2025 [Update 1] {#version-2025-may-05}
May 5, 2025

### New Features

Scene Reflections
* Added capabilities to set a reflections map on a space. This reflection map affects the lighting setup of your scene and alters what reflective materials show. See the new Reflections setting in the Space Settings Panel.

**Fixes & Enhancements**

General
* Added new "required" directive for setting fields on Custom components to be required. The `@required` directive for Custom Components will throw an error if the condition is not met at Build.

## April 2025 [Update 2] {#version-2025-april-29}
April 29, 2025

### New Features

Materials
* Added a new setting for Texture wrapping in the Materials configurator.

## April 2025 [Update 1] {#version-2025-april-9}
April 9, 2025

### New Features

Image Targets
* **Image Targets are now supported in 8th Wall Studio!** Developers can now anchor AR content to images in the real world, enabling a new range of creative and educational experiences.

### Fixes and Enhancements

Input
* `input.getMousePosition()` now returns `clientX/Y` instead of `screenX/Y` for improved alignment with viewport coordinates.
* Added new `ecs.input.UI_CLICK` event for improved UI interaction tracking.

Transforms
* Added transform utility functions to world.transform.

Raycasting
* Added new raycasting functions: `raycast()` and `raycastFrom()` for more flexible and precise interaction with 3D objects.

UI
* Updates to the Studio UI system interface for a more intuitive development experience.

General
* Fixed bug where `world.spaces` could not be accessed in `add` callbacks.
* Fixed issue with ear attachments not appearing in the viewport when enabled.


## March 2025 [Update 1] {#version-2025-March-5}
March 5, 2025

### Fixes and Enhancements

General
* Added location spawned event

Shadow
* Smart shadow camera frustum

Animations
* Bug fix for position/rotation animations
* Fixed animation stall when swapping models

Assets
* Fixed bug where settings are stale in asset load
* Fixed race condition in UI image asset loading

## February 2025 [Update 1] {#version-2025-february-13}
February 13, 2025

### New Features

Niantic Maps for Web
* Connecting experiences to the real world
Maps are key to building location-based experiences, and now, with Niantic Maps for Web available directly in 8th Wall Studio, adding them to your workflow is seamless. With Niantic Maps in Studio, Studio developers now have access to the same technology Niantic uses to power our most popular real-world games, allowing you to root your AR experiences in real-world locations, assist in discovering location-based experiences, and act as an aggregator of real-world AR experiences. Maps are now fully integrated into Studio’s Scene Hierarchy, allowing you to drop maps into your projects with just a click—no extra API setup needed.

Spaces
* Spaces now gives you the ability to build and manage multiple distinct areas within a single project. You can think of Spaces like scenes or environments  in other gaming engines or design tools. Simply put, Spaces are 3D frames where you can place assets, lighting, cameras, and game interactions. A Space (also called a Scene) contains all of your entities.

## January 2025 [Update 3] {#version-2025-january-31}
January 31, 2025

### Fixes and Enhancements

General
* General bug fixes to improve performance of scene loading, Splat loading, and working in Live Sync Mode

## January 2025 [Update 2] {#version-2025-january-23}
January 23, 2025

### Fixes and Enhancements

UI Elements
* Added 9-slice stretch configuration for Background Size (3D UI Elements only)
* Added Border Radius configuration

General
* Fixed bug where colorspace was not accurately reflected for UI Elements

Physics
* Adds a toggle for the physics system, it will skip the system on every tick, it also works as an optimization when physics are not in use.

## January 2025 [Update 1] {#version-2025-january-15}
January 15, 2025

### Fixes and Enhancements

Light
* Added `spot` light type

Shadow
* Receive Shadow configuration is moved to the Mesh component

Math
* Added `Mat4.decomposeT`
* Added `Mat4.decomposeR`
* Added `Mat4.decomposeS`

## December 2024 [Update 1] {#version-2024-december-09}
December 9, 2024

### Fixes and Enhancements

VPS
* Added the ability to hide the Location asset from displaying in the Viewport

UI
* Fixed custom font display issues

Audio
* Added the ability to get and set audio clip progress

VPS
* Added `location` to VPS event data with the eid of the relevant Location entity

## November 2024 [Update 2] {#version-2024-november-11}
November 11, 2024

### Fixes and Enhancements

General
* Improved behavior for `ecs.Disabled`
* Improved performance with raycasting

VPS
* Fix bug with LocationMeshes getting hidden in Viewport during Live Sync

Lighting
* support "follow camera" for directional light

## November 2024 [Update 1] {#version-2024-november-05}
November 5, 2024

### Fixes and Enhancements

General
* Added ability to disable entities and their components in a scene for better control and optimized runtime performance.
* Added new capability to create a new client project version from a previous commit version. Access this functionality using the Project History view in Studio’s Scene Settings.

Audio
* Added audio loading and playback finished events for easier audio playback management and control: `ecs.events.AUDIO_CAN_PLAY_THROUGH`, `ecs.events.AUDIO_END` events

Assets
* Added function for seeing status of asset loading: `ecs.assets.getStatistics`

UI
* Added function for image stretching as part of a UI element: `Ui.set({backgroundSize: ‘contain/cover/stretch’})`

## October 2024 [Update 3] {#version-2024-october-29}
October 29th, 2024

### New Features

Backend Services
* Backend Functions and Backend Proxies are now supported in 8th Wall Studio!

## October 2024 [Update 2] {#version-2024-october-24}
October 24, 2024

### New Features

VPS
* **VPS is now supported in 8th Wall Studio!** Developers can now create location-based WebAR experiences by connecting AR content to real-world locations.

### Fixes and Enhancements

3D Models
* Added support for playing all animation clips on a gltf model

UI
* Added ability to set opacity of UI elements.

## October 2024 [Update 1] {#version-2024-october-18}
October 18, 2024

### Fixes and Enhancements

Events
* Added `ecs.events.SPLAT_MODEL_LOADED` event.

Physics
* Added [getLinearVelocity()](/docs/api/studio/ecs/physics/#getlinearvelocity) function.

Primitives
* Added polyhedron primitive, replacing tetrahedron.
* Added Torus primitive.

## September 2024 [Update 2] {#version-2024-september-30}
September 30, 2024

### New Features

3D Models
* Support for uploading and converting FBX-format 3D assets.
* Support for previewing and configuring your 3D Models. With our updated Asset Previewer you can check your model in different lighting settings, adjust the pivot point, change mesh compression settings, update scale, inspect included materials, and more.

Materials
* Materials can be edited and saved on the asset preview. Changes will be reflected on the asset and scene.

UI
* Support for custom fonts with TTF file upload capability.
* Fine-tune elements such as color, borders, text, opacity, and more. The UI builder also allows you to combine multiple 2D elements on a single canvas to create compound 2D graphics and interfaces. Edit and modify these elements in real-time within the Studio Viewport, with changes instantly reflected in the Simulator.

### Fixes and Enhancements

Particles
* Updated Particle component with additional configuration options and easier-to-use defaults

Physics
* applyImpulse api, alternative to apply force for game development. Good for actions like jumping, punching, pushing quickly, etc.
* Simple runtime getter function for querying the current gravity setting.

## September 2024 [Update 1] {#version-2024-september-11}
September 11, 2024

### Fixes and Enhancements

State Machine
* Improved capabilities and expanded API for working with State Machines and Events. Check out the [State Machine](/docs/studio/essentials/state-machines/) documentation to learn more.

## August 2024 [Update 5] {#version-2024-august-29}
August 29, 2024

### Fixes and Enhancements

Particles
* Fixed an issue where particle spawning position was not correctly set for child entities.

## August 2024 [Update 4] {#version-2024-august-26}
August 26, 2024

### New Features

Splats
* **Gaussian Splatting support in Studio is here!** Using the Niantic Scaniverse app, you can easily create and export splats as an `.SPZ` file. Once uploaded to 8th Wall Studio, splats can be seamlessly integrated into your projects, serving as the foundation for hyper-realistic 3D experiences.

### Fixes and Enhancements

Animations
* Fixed issue where non-looping animations did not complete at the correct position.

Assets
* Improved support for previewing assets and changing asset settings.

Audio
* Updated audio lifecycle APIs (play, pause, mute, unmute)

Primitives
* Support for Hider materials for primitive objects that let you obscure or hide objects within a scene.
* Support for Unlit materials for primitive objects that ignore lighting conditions.
* Fixed issue with cylinder colliders not matching the primitive shape

## August 2024 [Update 3] {#version-2024-august-15}
August 15, 2024

### Fixes and Enhancements

Events
* Fixed an issue where event listeners were being skipped or removed in certain scenarios.

UI
* Fixed an issue where fonts could not be changed.
* Fixed performance issues with loading and rendering UI elements.

Docs
* Added information on common issues and best practices to follow when scripting [Custom Components](/docs/studio/essentials/best-practices/)

## August 2024 [Update 2] {#version-2024-august-08}
August 8, 2024

### Fixes and Enhancements

Input Manager
* Fixed an issue where mobile browser swipes/dragging behaviors were not controlled.
* Added ability to control and access pointer lock, improving game control inputs.

Physics
* Fixed a timing issue that created incorrect physics behaviors.

Rendering
* Corrected an issue that caused materials to look washed out.

UI
* Added ability to hide UI Elements in the scene, enabling more dynamic UI behaviors.

## August 2024 [Update 1] {#version-2024-august-01}
August 1, 2024

### New Features

Animation
* Added events and configuration controls to support GLTF models with pre-baked animations - see [3D Model guide](/docs/studio/guides/models/)

Hierarchy
* Added ability to multi-select and move objects using Command/Ctrl keys.
* Added ability to range-select objects using Shift key.

Physics
* Added a gravity factor for physics and colliders to support more configurable physics effects - see [Physics guide](/docs/studio/guides/physics/).

Primitives
* Added RingGeometry primitive type - see [Primitives guide](/docs/studio/guides/models#primitives)

Viewport
* Added Right Click context menu for selected objects.
* Added transform snapping when holding the Shift key.

### Fixes and Enhancements

Assets
* Fixed issue where new files could not be added and assets could not be moved.

Camera
* Fixed bug where Near/Far Clip setting was not functional.

Input Manager
* Fixed issue where left / right arrow keys were swapped.

Simulator
* Simulator can now be resized.

UI
* Fixed bug that prevented Font size changes for UI Elements.

Viewport
* 3D Models dragged into the Viewport will now snap to the cursor’s current position.

Misc
* Various UI usability improvements.
* Improvements to copying and pasting objects.

## June 2024 [Update 1] {#version-2024-june-18}
June 18, 2024

### New Features

Initial release of 8th Wall Studio! Hello World!
* Key updates for include initial systems and editor tooling for physics, animations, player inputs, cameras, lighting, particles, audio, 3D models, materials, meshes and much more. See the Studio documentation for more information on these systems.
