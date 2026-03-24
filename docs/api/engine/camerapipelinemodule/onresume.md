# onResume()

`onResume: ()`

## Description {#description}

`onResume()` is called when [`XR8.resume()`](/docs/api/engine/xr8/resume) is called.

## Parameters {#parameters}

None

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onResume: () => {
    console.log('resuming application')
  },
})
```
