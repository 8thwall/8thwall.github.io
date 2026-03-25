Property | Type | Default | Description
| :- | :- | :- | :- |
| volume | `number` | `1` | How loud the video will be played. A value between 0 and 1. |
| loop | `boolean` | `false` | Whether the video restarts after it finishes |
| paused | `boolean` | `false` | Whether the video is currently paused |
| speed | `number` | `1` | The playback speed of the video. Also affects the pitch of the audio. |
| positional | `boolean` | `false` | Whether the video's audio is played positionally |
| refDistance | `number` | `1` | **Only applied if positional is true.** The distance at which the audio begins to diminish in volume. Must be a non-negative value. |
| distanceModel | `string` | `'inverse'` | **Only applied if positional is true.** The algorithm used to reduce volume as the distance increases between this video source and the listener. Allowed values: `'linear'`, `'inverse'`, `'exponential'` |
| rolloffFactor | `number` | `1` | **Only applied if positional is true.** How quickly volume is reduced as distance increases. The acceptable range varies depending on the distanceModel: linear: 0–1, inverse: 0–∞, exponential: 0–∞ |
| maxDistance | `number` | `10000` | **Only applied if positional is true** and distanceModel is `'linear'`. Beyond this distance, the volume will not reduce further. Must be a positive value. |
