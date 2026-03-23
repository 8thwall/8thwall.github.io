# onProcessCpu()

`onProcessCpu: ({ framework, frameStartResult, processGpuResult })`

## Description {#description}

`onProcessCpu()` is called to read results of GPU processing and return usable data. Called with
`{ frameStartResult, processGpuResult }`. Data returned by modules in
[`onProcessGpu`](onprocessgpu.md) will be present as `processGpu.modulename` where the name is given
by module.name = "modulename".

Parameter | Description
--------- | -----------
framework | The framework bindings for this module for dispatching events.
frameStartResult | The data that was provided at the beginning of a frame.
processGpuResult | Data returned by all installed modules during onProcessGpu.

## Returns {#returns}

Any data that you wish to provide to [`onUpdate`](onupdate.md) should be returned. It will be
provided to that method as `processCpuResult.modulename`

## Example {#example}

```javascript
XR8.addCameraPipelineModule({
  name: 'mycamerapipelinemodule',
  onProcessCpu: ({ frameStartResult, processGpuResult }) => {
    const GLctx = frameStartResult.GLctx
    const { cameraTexture } = frameStartResult
    const { camerapixelarray, mycamerapipelinemodule } = processGpuResult

    // Do something interesting with mycamerapipelinemodule.gpuDataA and mycamerapipelinemodule.gpuDataB
    ...

    // These fields will be provided to onUpdate
    return {cpuDataA, cpuDataB}
  },
})
```
