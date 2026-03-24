---
sidebar_position: 1
---
# xr:screenshoterror

## Description {#description}

This event is emitted in response to the [`xr:screenshotrequest`](/docs/api/engine/playcanvaseventlisteners/xrscreenshotrequest) resulting in an error.

## Example {#example}

```javascript
this.app.on('xr:screenshoterror', (detail) => {
  console.log(detail)
  // Handle screenshot error.
}, this)
```
