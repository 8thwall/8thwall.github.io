---
sidebar_label: isPaused()
---
# XR8.isPaused()

`XR8.isPaused()`

## Description {#description}

Indicates whether or not the XR session is paused.

## Parameters {#parameters}

None

## Returns {#returns}

True if the XR session is paused, false otherwise.

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
