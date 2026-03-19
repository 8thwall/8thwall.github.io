---
id: navigate-interface
sidebar_position: 4
---

# Navigating the Interface

Studio features a rich editor interface made up of a number of different tools and views, each of
which are essential when developing your project.

The sections below showcase the main Studio editor interface elements, with the fundamental features
highlighted.

![StudioInterface1](/images/studio/studio-navigate-interface.png)

![StudioInterface2](/images/studio/studio-navigate-editor.png)

## Hierarchy {#hierarchy}

View the entities and objects included in the space, and change their nesting. You can reparent or
unparent the object by clicking and dragging it to another position in the hierarchy. Right click to
duplicate or delete objects. Add new objects to your space. Search and filter for different objects.

![StudioHierarchy](/images/studio/studio-navigate-hierarchy.png)

## Assets {#assets}

Files & Assets can be managed from the lower left panel.

![StudioAssets](/images/studio/studio-navigate-assets.png)

### Files {#files}

Upload your own 3D models, 2D images, audio
files, custom scripts and more. Create folders and drag files to reorganize their placement. You can
also drag and drop an asset into the Viewport or the Hierarchy to add the entity into your scene. To
learn more about using and optimizing 3D Models in GLB/GLTF format please see [Your 3D Models on the
Web](/docs/engine/guides/your-3d-models-on-the-web/).

### Prefabs {#prefabs}

Create reusable, customizable game templates that streamline and scale your development.
[Learn more about Prefabs](/studio/guides/prefabs/).

### Targets {#targets}

Upload and manage project Image Targets.
[Learn more about Image Targets](/studio/guides/xr/image-targets/).

## Viewport {#viewport}

Add, position, update, and work with objects and lighting in the space. Use the lower perspective
gizmo to change the view of the scene, change lighting and shadow visibility, and switch from
orthographic to perspective view. Use the top toolbar to change the position, rotation, or scale of
a selected object, or to undo and redo edits.

![StudioViewport](/images/studio/studio-navigate-viewport.png)

### Shortcuts {#shortcuts}

| Function                 | Keyboard Shortcut                                       |
|--------------------------|---------------------------------------------------------|
| Camera Orbit             | ⌥ Left Click+Drag                                       |
| Camera Pan               | ⌥ Right Click+Drag, Right Click+Drag, Middle Click+Drag |
| Camera Zoom              | Scroll Wheel                                            |
| Focus on Selected Object | F                                                       |
| Translate                | W                                                       |
| Rotate                   | E                                                       |
| Scale                    | R                                                       |
| Hide/Show UI Layer       | ⌘\                                                      |
| Delete Object            | Delete                                                  |
| Duplicate                | ⌘D                                                      |
| Copy Object              | ⌘C                                                      |
| Paste Object             | ⌘V                                                      |
| Undo                     | ⌘Z                                                      |
| Redo                     | ⌘⇧Z, ⌘Y                                                 |

## Simulator {#simulator}

Launch the simulator to play your scene. You can make edits to the entities in your space and
see those immediately reflected in the simulator. The simulator also lets you test and view project changes across different device viewport sizes and
simulated real-world environments without needing to leave Studio.

![Simulator1](/images/studio/studio-navigate-simulator1.png)

![Simulator2](/images/studio/studio-navigate-simulator2.png)

If you're developing AR, you can access a collection of pre-recorded camera sequences.
The AR Simulator has a number of playback controls and convenience features
like:

* Play bar, scrubber and in/out handles: Allow you to set up loop points, giving you granular
  control over the selected sequence.
* Recenter button (lower right): Recenters the camera feed to its origin. NOTE: Recenter is also
  called each time the sequence loops and each time a new sequence is selected.

## Publish Button {#publish-button}

The final step is to publish your project. To learn more about publishing a project for public viewing please see the
[Publish your project](/studio/getting-started/publish) section.

## Settings & Inspector {#settings-inspector}

View and configure object-specific components, as well as adjust overall settings for the editor.

### Space Settings {#space-settings}

When **no entity is selected** you will see general settings for your project.

![StudioGeneralSettings](/images/studio/studio-navigate-general-settings.png)

#### Default Settings {#default-settings}

Style your Space with settings like Skybox and Fog. Skyboxes are a wrapper around your entire scene that shows what the world
looks like beyond your geometry. If your project is configured to use AR on an AR-compatible device,
(see [XR](/studio/guides/xr/world/)) the Skybox will not be rendered.

#### Project Settings {#project-settings}

If you have multiple Spaces, select which one is the entry space.

Use the Input Manager to set up experiences that work across different devices inputs like
keyboards, gamepad controls, trackpads, and touch screen actions. Create your event action and set
up a mapping (or binding) to different inputs. [Learn more the Input system](/studio/guides/input)

#### Project Version {#project-version}

Studio projects can run on a specific runtime version, which can be selected here. Pin your project to a fixed runtime for predictability, or opt in to automatic minor updates and bug fixes to always stay current.

#### Source Control {#source-control}

Manage different versions of your project and change history. Creating a new client creates a new
version of your project which can be helpful for testing changes without affecting your main
version. You can also access a history of the project’s previous Landed changes by selecting the
Project History function.

#### Code Editor {#code-editor}

Choose from different usability settings like light/dark modes, keybindings, and code save settings.

### Inspector {#inspector}

Inspect and configure an entity and its components. Learn more about entities and components in [Overview](/studio/essentials/overview/).

By default every entity displays a Transform component in the Inspector. Different types of entities
may display different components, for example a Primitive will display a Mesh component with
configurable options like geometry shape settings, materials, textures, etc.

#### Components {#components}

You can add a component using the "+ New Component" button. There are several types of built-in
components in Studio, including Physics, Lighting, Audio, Animations, and more. Custom components
can also be added - [Learn more about Custom Components](/studio/essentials/custom-components/). Once set up, your custom component
will
appear in the Custom category. Click the three dots to remove a component.

![StudioNewComponent](/images/studio/studio-navigate-components.png)

## Devices & Console {#devices--console}

### Connect Device {#connect-device}

:::tip
Testing your project on multiple devices ensures that users will see a consistent experience across
a variety of screen sizes and platforms.
:::

Instantly preview projects on mobile, desktop, or headset device or in another browser window as you
develop via link/QR code.

![SimulatorPreview](/images/studio/studio-navigate-preview-links.png)

* At the bottom of the Studio interfact, click the Connect Device button.
* Scan the QR code with your mobile device to open a web browser and test your project.
 Or click on the QR code to open a new tab on your desktop browser.
* When the page loads, if your project uses WebAR, you'll be prompted for access to motion and
  orientation sensors (on some devices) and the camera (all devices). Click Allow for all permission
  prompts. You will be taken to the private development URL for the project.
* Note: The "Preview" QR code is a temporary, one-time use QR code
  only meant for use by the developer while actively developing in Studio. This QR code takes
  you to a private, development URL, and isn't accessible by others. To share your work with others,
  please see the section below on Publishing your project.
* Click the headset icon to generate a link for a headset device.

### Console {#console}

Debug your project build actions and runtime. Debug Mode is an advanced Studio feature that provides
logging, performance information, and enhanced visualizations directly on your device.

![StudioConsole](/images/studio/studio-navigate-console.png)

## Code Editor {#code-editor-1}

The 8th Wall Code Editor equips developers with a set of coding tools to create, collaborate and
publish web-based XR content. Our powerful IDE includes the code editor, integrated source control,
commit history, live preview, wireless remote debugging and push-button hosting on a global CDN.
Other Code Editor features include:

* Intellisense
* Command Palette
* Code Peek
* Light/Dark Themes

![StudioEditor](/images/studio/studio-navigate-editor.png)
