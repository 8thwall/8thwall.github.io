# onBeforeRun()

`onBeforeRun: ({ config })`

## Description {#description}

`onBeforeRun` is called immediately after [XR8.run()](/docs/api/engine/xr8/run). If any promises are returned, XR will wait on all promises before continuing.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
config | The configuration parameters that were passed to [XR8.run()](/docs/api/engine/xr8/run).
