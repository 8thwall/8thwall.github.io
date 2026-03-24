# onUpdate()

`onUpdate: ({ framework, frameStartResult, processGpuResult, processCpuResult })`

## Description {#description}

`onUpdate()` is called to update the scene before render. Called with `{ framework, frameStartResult, processGpuResult, processCpuResult }`. Data returned by modules in [`onProcessGpu`](onprocessgpu.md) and [`onProcessCpu`](onprocesscpu.md) will be present as `processGpu.modulename` and `processCpu.modulename` where the name is given by module.name = "modulename".

## Parameters {#parameters}

Parameter | Description
--------- | -----------
framework | The framework bindings for this module for dispatching events.
frameStartResult | The data that was provided at the beginning of a frame.
processGpuResult | Data returned by all installed modules during [`onProcessGpu`](onprocessgpu.md).
processCpuResult | Data returned by all installed modules during [`onProcessCpu`](onprocesscpu.md).

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onUpdate: ({ frameStartResult, processGpuResult, processCpuResult }) => {
    if (!processCpuResult.reality) {
      return
    }
    const {rotation, position, intrinsics} = processCpuResult.reality
    const {cpuDataA, cpuDataB} = processCpuResult.mycamerapipelinemodule
    // ...
  },
})
```
