Property | Type | Default | Description
| :- | :- | :- | :- |
| attribute | `string` | `''` | Selected attribute to animate (e.g. position, scale, material) |
| target | `eid` | `undefined` | The target object to animate. If not specified, the animation is run on the object that the component is attached to. |
| fromX | `number` | `0` | The starting X position for the animation |
| fromY | `number` | `0` | The starting Y position for the animation |
| fromZ | `number` | `0` | The starting Z position for the animation |
| toX | `number` | `0` | The ending X position for the animation |
| toY | `number` | `0` | The ending Y position for the animation |
| toZ | `number` | `0` | The ending Z position for the animation |
| autoFrom | `boolean` | `false` | If enabled, ignore `from` property and animate from the state of the object at the start of the animation |
| duration | `number` | `1000` | Length of time that the animation runs in milliseconds |
| loop | `boolean` | `true` | If enabled, repeat the animation |
| reverse | `boolean` | `false` | Whether to play in reverse, if loop set |
| easeIn | `boolean` | `false` | If enabled, easing function will be applied over time instead of straight interpolation |
| easeOut | `boolean` | `false` | If enabled, easing function will be applied over time instead of straight interpolation |
| easingFunction | `string` | `''` | Allowed values: `'Quadratic'`, `'Cubic'`, `'Quartic'`, `'Quintic'`, `'Sinusoidal'`, `'Exponential'`, `'Circular'`, `'Elastic'`, `'Back'`, `'Bounce'` |
