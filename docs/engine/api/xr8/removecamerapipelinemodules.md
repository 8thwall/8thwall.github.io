---
sidebar_label: removeCameraPipelineModules()
---
# XR8.removeCameraPipelineModules()

`XR8.removeCameraPipelineModules([ moduleNames ])`

## Description {#description}

Remove multiple camera pipeline modules. This is a convenience method that calls
[`XR8.removeCameraPipelineModule()`](removecamerapipelinemodule.md) in order on each element of the input
array.

## Parameters {#parameters}

Parameter | Type | Description
--------- | ---- | -----------
moduleNames | `[String] or [Object]` | An array of objects with a name property, or a name strings of modules.

## Returns {#returns}

None

## Example {#example}

```javascript
XR8.removeCameraPipelineModules(['threejsrenderer', 'reality'])
```
