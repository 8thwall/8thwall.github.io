# xr:screenshotrequest

`this.app.fire('xr:screenshotrequest')`

## Parameters {#parameters}

None

## Description {#description}

Emits a request to the engine to capture a screenshot of the PlayCanvas canvas. The engine will emit
a [`xr:screenshotready`](/docs/engine/api/playcanvasevents/xrscreenshotready) event with the JPEG compressed image or
[`xr:screenshoterror`](/docs/engine/api/playcanvasevents/xrscreenshoterror) if an error has occured.

## Example {#example}

```javascript
this.app.on('xr:screenshotready', (event) => {
  // screenshotPreview is an <img> HTML element
  const image = document.getElementById('screenshotPreview')
  image.src = 'data:image/jpeg;base64,' + event.detail
}, this)

this.app.on('xr:screenshoterror', (detail) => {
  console.log(detail)
  // Handle screenshot error.
}, this)

this.app.fire('xr:screenshotrequest')
```
