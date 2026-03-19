# screenshoterror

## Description {#description}

This event is emitted in response to the [`screenshotrequest`](/api/aframeeventlisenters/screenshotrequest) resulting in an error.

## Example {#example}

```javascript
let scene = this.el.sceneEl
scene.addEventListener('screenshoterror', (event) => {
  console.log(event.detail)
  // Handle screenshot error.
})
```
