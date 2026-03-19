# onRender()

`onRender: ()`

## Description {#description}

`onRender()` is called after [`onUpdate`](onupdate.md). This is the time for the rendering engine to issue any WebGL drawing commands. If an application is providing its own run loop and is relying on [`XR8.runPreRender()`](/docs/engine/api/xr8/runprerender) and [`XR8.runPostRender()`](/docs/engine/api/xr8/runprerender), this method is not called and all rendering must be coordinated by the external run loop.

## Parameters {#parameters}

None

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onRender: () => {
    // This is already done by XR8.Threejs.pipelineModule() but is provided here as an illustration.
    XR8.Threejs.xrScene().renderer.render()
  },
})
```
