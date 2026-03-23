---
id: simulator
sidebar_position: 5
---


# Simulator

## Overview

Launch the simulator to play your scene. You can make edits to the entities in your space and
see those immediately reflected in the simulator. The simulator also lets you test and view project changes across different device viewport sizes and
simulated real-world environments without needing to leave Studio.

![Simulator1](/images/studio/studio-navigate-simulator1.png)

![Simulator2](/images/studio/studio-navigate-simulator2.png)

## AR Simulator

If you're developing AR, you can access a collection of pre-recorded camera sequences.
The AR Simulator has a number of playback controls and convenience features
like:

* Play bar, scrubber and in/out handles: Allow you to set up loop points, giving you granular
  control over the selected sequence.
* Recenter button (lower right): Recenters the camera feed to its origin. NOTE: Recenter is also
  called each time the sequence loops and each time a new sequence is selected.

![ARSimulator](/images/studio/studio-ar-simulator.png)

Use the bottom left Sequence Selection menu to change the AR sequence. You can use the carousel
to switch between options in the sequence category. Pausing the sequence only pauses the video,
allowing you to test changes at the same frame. Drag the playback handles to set in/out loop points.

![SimulatorSequenceSelector](/images/studio/studio-sequence-selector.png)

The camera button the bottom right corner opens Live View, which follows the same logic as your project's camera configuration. Live View allows you to simulate your project using the feed from your desktop instead of a pre-recorded AR sequence. For example, if
your project uses Face Effects and you have the Studio project open on desktop, it will open your
desktop camera.

:::note
Live View in the Simulator may prompt you to enable camera, microphone, or location
permissions depending on what is enabled in your project. Click Allow for permission prompts in order to
see your experience in Live View.
:::

Your project might look different on different devices due to differences in the mobile web
viewport size. Or you may want to see your project in both landscape and portrait mode. At the top
left of the Simulator, you can choose from a set of common device viewport sizes, change the
orientation, or use responsive mode to adjust to a custom size. You can also double click the edges
of the Simulator panel to automatically fit the Simulator to the width of the selected device
viewport. **Note: Dimensions are presented in CSS logical pixels (AKA viewport dimensions), not
physical device pixels. When selecting a device from the selector, only the viewport dimensions
will be updated, not the user agent of the client.**

![SimulatorDeviceSelector](/images/studio/studio-device-selector.png)

You can also simulate specific GPS coordinates if you're developing a location or map-based experience.

![SimulatorLocation](/images/studio/studio-simulator-location.png)
