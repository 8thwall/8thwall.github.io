---
id: non-studio-projects
sidebar_position: 100
---

# Non-Studio Projects

The primary way of using the 8th Wall desktop app is with Studio projects, which use 8th Wall's scene graph format (`src/.expanse.json`) and ECS framework.

Projects that aren't considered Studio projects (projects built with A-Frame, Three.js, etc) can still utilize the 8th Wall desktop app for specific features such as asset management, image targets, and the simulator, by opening in a separate Non-Studio mode. Non-Studio mode does not include a 3D scene editor.

## Minimum Requirements

1. The folder contains a `package.json` file.
2. `npm run serve` starts a local build server.
    - For preview to work, the `--port` argument, or the `PORT` environment variable, should be honored, e.g. `PORT=8888 npm run serve` should host the content on http://localhost:8888. 
    - If the command starts with `node `, the command will be invoked through the desktop app's internal node executable. Otherwise, node/npm are required.

## AR Simulator + Device Connect

1. dev8.js is loaded for development builds.

You can add dev8.js to your project's `index.html` `<head>` with:

```html
<script src="https://cdn.jsdelivr.net/npm/@8thwall/ecs@3/dev8/dev8.js"></script>
```

:::warning
Note that this script should not be included in production builds. [This sample configuration](https://github.com/8thwall/studio-world-effects-example/blob/main/config/webpack.config.js#L93-L98) shows one way to achieve this, though it might vary depending on your configuration.
:::


## Image Targets

1. Image Targets are stored in the `image-targets/` folder (not inside `src/`), with no subfolders.

## File Browser (optional)

1. Source code is in the `src` folder.
2. Non-text assets (e.g. images, models) are contained in in `src/assets/`.

## Publishing

1. `npm run build` generates a production build in the `dist` folder.

## Questions?

Please open a discussion or issue [on Github](https://github.com/8thwall/8thwall).

