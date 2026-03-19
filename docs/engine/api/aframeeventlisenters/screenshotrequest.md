# screenshotrequest

`scene.emit('screenshotrequest')`

## Description {#description}

Emits a request to the engine to capture a screenshot of the AFrame canvas. The engine will emit a
[`screenshotready`](/api/aframeevents/screenshotready) event with the JPEG compressed image or
[`screenshoterror`](/api/aframeevents/screenshoterror) if an error has occured.

## Parameters {#parameters}

None

## Example {#example}

```javascript
const scene = this.el.sceneEl
const photoButton = document.getElementById('photoButton')

// Emit screenshotrequest when user taps
photoButton.addEventListener('click', () => {
  image.src = ""
  scene.emit('screenshotrequest')
})

scene.addEventListener('screenshotready', event => {
  image.src = 'data:image/jpeg;base64,' + event.detail
})

scene.addEventListener('screenshoterror', event => {
  console.log("error")
})
```
