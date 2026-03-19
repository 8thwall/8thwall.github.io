# xrtrackingstatus

## Description {#description}

This event is emitted by [`xrweb`](/docs/engine/api/aframe/xrweb) when [`XR8.XrController`](/docs/engine/api/xrcontroller) is loaded and any time tracking status or reason changes.

`xrtrackingstatus : { status, reason }`

Property  | Description
--------- | -----------
status | One of `'LIMITED'` or `'NORMAL'`.
reason | One of `'INITIALIZING'` or `'UNDEFINED'`.

## Example {#example}

```javascript
const updateScene = ({detail}) => {
  const {status, reason} = detail
  if (status === 'NORMAL') {
    // Show scene
  }
}
this.el.sceneEl.addEventListener('xrtrackingstatus', updateScene)
```
