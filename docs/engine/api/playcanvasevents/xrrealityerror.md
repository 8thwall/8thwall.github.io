---
sidebar_position: 1
---
# xr:realityerror

## Description {#description}

This event is emitted when an error has occured when initializing 8th Wall Web. This is the
recommended time at which any error messages should be displayed. The [`XR8.XrDevice()` API](/docs/engine/api/xrdevice)
can help with determining what type of error messaging should be displayed.

## Example {#example}

```javascript
this.app.on('xr:realityerror', ({error, isDeviceBrowserSupported, compatibility}) => {
  if (detail.isDeviceBrowserSupported) {
    // Browser is compatible. Print the exception for more information.
    console.log(error)
    return
  }

  // Browser is not compatible. Check the reasons why it may not be in `compatibility`
  console.log(compatibility)
}, this)
```
