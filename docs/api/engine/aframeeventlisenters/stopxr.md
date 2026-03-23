# stopxr

`scene.emit('stopxr')`

## Description {#description}

Stop the current XR session. While stopped, the camera feed is stopped and device motion is not tracked.

## Parameters {#parameters}

None

## Example {#example}

```javascript
let scene = this.el.sceneEl
scene.emit('stopxr')
```
