# onDetach()

`onDetach: ({framework})`

## Description {#description}

`onDetach` is called after the last time a module receives frame updates. This is either after the engine is stopped or the module is manually removed from the pipeline, whichever comes first.

## Parameters {#parameters}

Parameter | Description
--------- | -----------
framework | The framework bindings for this module for dispatching events.
