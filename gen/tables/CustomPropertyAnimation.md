Property | Type | Default | Description
| :- | :- | :- | :- |
| attribute | `string` | `''` | Selected attribute to animate (e.g. position, scale, material) |
| property | `string` | `''` | Individual property to animate (e.g. x, y, or z for a vector attribute) |
| target | `eid` | `undefined` | The target object to animate. If not specified, the animation is run on the object that the component is attached to. |
| from | `number` | `0` | The starting state of the animation |
| to | `number` | `0` | The ending state of the animation |
| autoFrom | `boolean` | `false` | If enabled, ignore `'from'` property and animate from the state of the object at the start of the animation |
| duration | `number` | `1000` | Length of time that the animation runs in milliseconds |
| loop | `boolean` | `true` | If enabled, repeat the animation |
| reverse | `boolean` | `false` | Whether to play in reverse, if loop set |
| easeIn | `boolean` | `false` | If enabled, easing function will be applied over time instead of straight interpolation |
| easeOut | `boolean` | `false` | If enabled, easing function will be applied over time instead of straight interpolation |
| easingFunction | `string` | `''` | Allowed values: `'Quadratic'`, `'Cubic'`, `'Quartic'`, `'Quintic'`, `'Sinusoidal'`, `'Exponential'`, `'Circular'`, `'Elastic'`, `'Back'`, `'Bounce'` |
