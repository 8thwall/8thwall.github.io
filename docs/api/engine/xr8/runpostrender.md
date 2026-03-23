---
sidebar_label: runPostRender()
---
# XR8.runPostRender()

`XR8.runPostRender()`

## Description {#description}

Executes all lifecycle updates that should happen after rendering.

**IMPORTANT**: Make sure that [`onStart`](/docs/api/engine/camerapipelinemodule/onstart) has been called before calling `XR8.runPreRender()` / `XR8.runPostRender()`.

## Parameters {#parameters}

None

## Returns {#returns}

None

## Example {#example}

```javascript
// Implement A-Frame components tock() method
function tock() {
  // Check whether XR is initialized
  ...
  // Run XR lifecycle methods
  XR8.runPostRender()
}
```
