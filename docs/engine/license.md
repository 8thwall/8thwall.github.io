---
id: license
sidebar_position: 999
---

# License

The 8th Wall engine is available in two forms:

### Distributed Engine Binary (with SLAM)

[Installation instructions](https://www.npmjs.com/package/@8thwall/engine-binary)

Released in January 2026, the **Distributed Engine Binary** includes SLAM and is available under a binary-only license for continued commercial and noncommercial use.

Included:
- Core engine runtime
- SLAM (World Effects)
- Image Targets
- Face Effects
- Sky Effects

Not included:
- VPS
- Maps
- Hand Tracking

### Open Source Engine (MIT Licensed)

[Installation instructions](https://www.npmjs.com/package/@8thwall/engine)

The open source version of the engine is licensed under MIT and includes:

- Core engine architecture
- Image Targets
- Face Effects
- Sky Effects

SLAM is **not** included in the open source package directly, but there is an option to incorporate the closed-source SLAM module into the open source engine.

With the framework now open, developers can inspect, extend, and maintain the engine as browser APIs evolve and web standards change.

## License Compliance

The XR Engine Binary is provided as closed source and governed by the XR Engine License Agreement.

The easiest way to be in compliance is to use the published package directly from npm or jsdelivr. This version of the binary already contains the necessary copyright notice and license text.

If your project was exported from 8thwall.com, it may have an older version of the package without the full copyright notice. You can update by downloading the latest `xr-standalone.zip` from https://8th.io/xrjs and replacing your `external/xr` folder with the new contents. If that's not an option, make sure to include a copyright notice elsewhere in your deployed project, e.g. in your `index.html`:

```html
<!--
This product includes the XR Engine software developed by Niantic Spatial, Inc.
Copyright © 2026 Niantic Spatial, Inc. All rights reserved.
License: https://github.com/8thwall/engine/blob/main/LICENSE
-->
```

### Compiled or packaged apps

For web projects, files like `index.html` are accessible to end users via either view source or a public repository, thus the copyright notice is freely viewable.

For compiled or packaged apps — such as a native mobile app or a bundled desktop experience — end users have no way to access project files. In this case, you must surface the copyright notice and a link to the LICENSE (https://github.com/8thwall/engine/blob/main/LICENSE) somewhere visible within the experience itself, such as an about screen, credits screen, or legal notices page.

## FAQ

### Is there a version without these restrictions?

Yes. The MIT-licensed engine has no commercial restrictions. However, it does not include SLAM (world tracking) — it covers Face Effects, Image Targets, and Sky Effects only. If your use case requires world tracking, you need the binary.

### In plain terms, what is this license for?
The license allows you to continue running and distributing your existing 8th Wall projects using the distributed engine binary, while protecting Niantic Spatial’s proprietary technology.

It is designed to preserve existing use cases, not to enable engine modification or competitive development.

### What am I allowed to do with the Distributed 8th Wall Engine Binary?
You may install, execute, and distribute the engine binary in its original form as part of your own application, game, product, or service, provided that your use complies with the license terms.

This includes:
- Running the engine locally or in your own hosting environment
- Packaging the engine with your exported 8th Wall project
- Deploying your application to end users as part of a larger experience

### Can I modify, inspect, or reverse engineer the engine?
No. The engine is provided as closed source. You may not:
- Reverse engineer, decompile, or disassemble the engine
- Modify the engine or create derivative works
- Redistribute altered versions of the engine

These restrictions apply regardless of use case.

### Can I use the engine in a commercial product?
Yes, as long as the value of your product does not derive entirely or substantially from the engine itself.

In practice:
- ✅ Using the engine as one component of a broader application or experience is permitted
- ❌ Selling the engine itself or an engine-based toolkit is not permitted

### Can I use the engine to build client marketing campaigns?
Yes. Developers, brands, and agencies may use the engine to build branded or marketing experiences for clients, provided the engine is one component of a broader creative or marketing deliverable.

Common permitted examples include:
- Branded AR campaigns
- Experiential marketing activations
- Web-based AR experiences delivered as part of a larger campaign

In short: if you’re selling the experience, not the engine, your use is permitted.

### If I use the Distributed Engine Binary, am I required to include attribution or notices?
Yes, but in most cases, the package contains its own notices and no additional action is needed, see [License Compliance](#license-compliance).
