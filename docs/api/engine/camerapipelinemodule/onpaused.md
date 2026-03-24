# onPaused()

`onPaused: ()`

## Description {#description}

`onPaused()` is called when [`XR8.pause()`](/docs/api/engine/xr8/pause) is called.

## Parameters {#parameters}

None

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onPaused: () => {
    console.log('pausing application')
  },
})
```
