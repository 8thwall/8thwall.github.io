# screenshotready

## Description {#description}

This event is emitted in response to the [`screenshotrequest`](/docs/engine/api/aframeeventlisenters/screenshotrequest) event being being completed successfully. The JPEG compressed image of the AFrame canvas will be provided.

## Example {#example}

```javascript
let scene = this.el.sceneEl
scene.addEventListener('screenshotready', (event) => {
  // screenshotPreview is an <img> HTML element
  const image = document.getElementById('screenshotPreview')
  image.src = 'data:image/jpeg;base64,' + event.detail
})
```
