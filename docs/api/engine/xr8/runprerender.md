---
sidebar_label: runPreRender()
---
# XR8.runPreRender()

`XR8.runPreRender( timestamp )`

## Description {#description}

Executes all lifecycle updates that should happen before rendering.

**IMPORTANT**: Make sure that [`onStart`](/docs/api/engine/camerapipelinemodule/onstart) has been called before calling `XR8.runPreRender()` / `XR8.runPostRender()`.

## Parameters {#parameters}

Parameter | Type | Description
--------- | ---- | -----------
timestamp | `Number` | The current time, in milliseconds.

## Returns {#returns}

None

## Example {#example}

```javascript
// Implement A-Frame components tick() method
function tick() {
  // Check device compatibility and run any necessary view geometry updates and draw the camera feed.
  ...
  // Run XR lifecycle methods
  XR8.runPreRender(Date.now())
  }
```
