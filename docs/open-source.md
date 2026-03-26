---
id: open-source
sidebar_position: 7
---

# Open Source

## Engine Distribution

The 8th Wall engine is available in two forms:

### Distributed Engine Binary (with SLAM)

Released in January 2026, the **Distributed Engine Binary** includes SLAM and is available under a binary-only license for continued commercial and noncommercial use.

Included:
- SLAM
- Core engine runtime

Not included:
- VPS
- Maps
- Hand Tracking

### Open Source Engine Framework (MIT Licensed)

The open source version of the engine framework is licensed under MIT and includes:

- Core engine architecture
- Face Effects
- Image Targets
- Sky Effects

SLAM is **not** included in the open source release and remains available only through the Distributed Engine Binary.

With the framework now open, developers can inspect, extend, and maintain the engine as browser APIs evolve and web standards change.

## License Compliance

The XR Engine Binary is provided as closed source and governed by the XR Engine License Agreement.

To be in compliance, ensure you are using the latest version of the xr bundle that contains the copyright notice at the top of the `external/xr/xr.js` file ("Copyright © 2026 Niantic Spatial, Inc.").

As long as these unmodified files are included in your project as-is and are visible with browser devtools, you are in compliance by including both a copyright notice and the license text.

You can update by downloading the latest `xr-standalone.zip` from https://8th.io/xrjs and replacing your `external/xr` folder with the new contents.

If updating to the latest version of the xr bundle isn’t an option, make sure to include a copyright notice elsewhere in your deployed project, e.g. in your `index.html`:

```html
<!-- This product includes the XR Engine software developed by Niantic Spatial, Inc.
 Copyright © 2026 Niantic Spatial, Inc. All rights reserved.
 License: https://github.com/8thwall/engine/blob/main/LICENSE -->
```

### Compiled or packaged apps

For web projects, files like `index.html` are accessible to end users via view source or a public repository, so any of the options above satisfy the accessibility requirement.

For compiled or packaged apps — such as a native mobile app or a bundled desktop experience — end users have no way to access project files. In this case, you must surface the copyright notice and a link to the LICENSE (https://github.com/8thwall/engine/blob/main/LICENSE) somewhere visible within the experience itself, such as an about screen, credits screen, or legal notices page.

## FAQ

### Do I need to do anything beyond keeping the LICENSE file?

Yes, a copyright notice is required in addition to the LICENSE file. If you update to the latest version of the LICENSE file (Option A), you are in compliance. Otherwise, you need to add the copyright notice text to your project separately (Option B).

### Is there a version without these restrictions?

Yes. The MIT-licensed engine framework at `packages/engine` has no commercial restrictions. However, it does not include SLAM (world tracking) — it covers Face Effects, Image Targets, and Sky Effects only. If your use case requires world tracking, you need the binary.
