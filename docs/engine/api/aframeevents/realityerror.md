# realityerror

## Description {#description}

This event is emitted when an error has occured when initializing 8th Wall Web. This is the
recommended time at which any error messages should be displayed. The [`XR8.XrDevice()` API](/api/xrdevice)
can help with determining what type of error messaging should be displayed.

## Example {#example}

```javascript
let scene = this.el.sceneEl
  scene.addEventListener('realityerror', (event) => {
    if (XR8.XrDevice.isDeviceBrowserCompatible()) {
      // Browser is compatible. Print the exception for more information.
      console.log(event.detail.error)
      return
    }

    // Browser is not compatible. Check the reasons why it may not be.
    for (let reason of XR8.XrDevice.incompatibleReasons()) {
      // Handle each XR8.XrDevice.IncompatibilityReasons
    }
  })
```
