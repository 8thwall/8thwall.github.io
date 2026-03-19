---
sidebar_label: configure()
---
# CoachingOverlay.configure()

`CoachingOverlay.configure({ animationColor, promptColor, promptText, disablePrompt })`

## Description {#description}

Configures behavior and look of the Coaching Overlay.

## Parameters (All Optional) {#parameters-all-optional}

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
animationColor | `String` | `'white'` | Color of the Coaching Overlay animation. This parameter accepts valid CSS color arguments.
promptColor | `String` | `'white'` | Color of all the Coaching Overlay text. This parameter accepts valid CSS color arguments.
promptText | `String` | `'Move device forward and back'` | Sets the text string for the animation explainer text that informs users of the motion they need to make to generate scale.
disablePrompt | `Boolean` | `false` | Set to true to hide default Coaching Overlay in order to use Coaching Overlay events for a custom overlay.

## Returns {#returns}

None

## Example - Code {#example---code}

```javascript
CoachingOverlay.configure({
    animationColor: '#E86FFF',
    promptText: 'To generate scale push your phone forward and then pull back',
})
```
