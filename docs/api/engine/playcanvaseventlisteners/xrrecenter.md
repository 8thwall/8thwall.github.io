# xr:recenter

`this.app.fire('xr:recenter')`

## Description {#description}

Recenters the camera feed to its origin. If a new origin is provided as an argument, the camera's origin will be reset to that, then it will recenter.

## Parameters {#parameters}

Parameter | Type | Description
--------- | ---- | -----------
origin [Optional] | `{x, y, z}` | The location of the new origin.
facing [Optional] | `{w, x, y, z}` | A quaternion representing direction the camera should face at the origin.

## Example {#example}

```javascript
/*jshint esversion: 6, asi: true, laxbreak: true*/

// taprecenter.js: Defines a playcanvas script that re-centers the AR scene when the screen is
// tapped.

var taprecenter = pc.createScript('taprecenter')

// Fire a 'recenter' event to move the camera back to its starting location in the scene.
taprecenter.prototype.initialize = function() {
  this.app.touch.on(pc.EVENT_TOUCHSTART,
    (event) => { if (event.touches.length !== 1) { return } this.app.fire('xr:recenter')})
}
```
