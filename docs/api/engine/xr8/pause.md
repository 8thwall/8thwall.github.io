---
sidebar_label: pause()
---
# XR8.pause()

`XR8.pause()`

## Description {#description}

Pause the current XR session.  While paused, device motion is not tracked.

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
