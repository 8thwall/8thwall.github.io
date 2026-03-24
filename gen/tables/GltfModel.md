Property | Type | Default | Description
| :- | :- | :- | :- |
| url | `string` | `''` | The source URL |
| animationClip | `string` | `''` | The name of the animationClip attached to the model to play. The Wildcard `*` is also accepted, and will set the model to play through every animation. |
| loop | `boolean` | `false` | Whether the animation clip restarts after it finishes playing or not |
| paused | `boolean` | `false` | Whether the animation clip is paused |
| time | `number` | `0` | Time in seconds of animationClip to jump to |
| timeScale | `number` | `1` | Scaling factor for the time. 0 causes the animation to pause. Negative values cause the animation to play backwards. |
| reverse | `boolean` | `false` | If set, the animation will play in reverse when it finishes playing forward (together counts as one loop iteration) |
| repetitions | `number` | `0` | If set along with ‘loop’, the number of times the loop will be repeated (-1 means loop forever) |
| crossFadeDuration | `number` | `0` | The time in seconds that will be spent blending between animations when a new animation is started (and an existing animation is playing) |
