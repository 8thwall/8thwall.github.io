---
sidebar_label: resume()
---
# XR8.resume()

`XR8.resume()`

## Description {#description}

Resume the current XR session after it has been paused.

## Parameters {#parameters}

None

## Returns {#returns}

None

## Example {#example}

```javascript
// Call XR8.pause() / XR8.resume() when the button is pressed.
document.getElementById('pause').addEventListener(
  'click',
  () => {
    if (!XR8.isPaused()) {
      XR8.pause()
    } else {
      XR8.resume()
    }
  },
  true)
```
