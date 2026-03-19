---
sidebar_position: 1
---
# xr:screenshotready

## Description {#description}

This event is emitted in response to the [`xr:screenshotrequest`](/docs/engine/api/playcanvaseventlisteners/xrscreenshotrequest) event being being completed successfully. The JPEG compressed image of the PlayCanvas canvas will be provided.

## Example {#example}

```javascript
this.app.on('xr:screenshotready', (event) => {
  // screenshotPreview is an <img> HTML element
  const image = document.getElementById('screenshotPreview')
  image.src = 'data:image/jpeg;base64,' + event.detail
}, this)
```
