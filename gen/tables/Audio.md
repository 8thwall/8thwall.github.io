Property | Type | Default | Description
| :- | :- | :- | :- |
| url | `string` | `''` | Source URL for the audio |
| volume | `number` | `1` | How loud the audio will be played. A value between 0 and 1. |
| loop | `boolean` | `false` | Whether the audio restarts after it finishes |
| paused | `boolean` | `false` | Whether the audio is currently paused |
| pitch | `number` | `1` | The factor used to change the audio's pitch. 1 is the default pitch. |
| positional | `boolean` | `false` | Whether the audio is placed in 3D space |
| refDistance | `number` | `1` | **Only applied if positional is true.** The value indicating at what distance the volume from this source will start reducing as the listener moves away. Must be a non-negative value. |
| distanceModel | `string` | `'inverse'` | **Only applied if positional is true.** The algorithm used to reduce volume as the distance increases between this audio source and the listener. Allowed values: `'linear'`, `'inverse'`, `'exponential'`. |
| rolloffFactor | `number` | `1` | **Only applied if positional is true.** How quickly volume is reduced as distance increases between this audio source and the listener. The acceptable range of values changes depending on the distanceModel, shown by the following: linear: 0 to 1, inverse: 0 to Infinity, exponential: 0 to Infinity |
| maxDistance | `number` | `10000` | **Only applied if positional is true** and distanceModel is `'linear'`. The max distance between this audio source and the listener. Volume is not reduced after this point. Must be a positive value. |
