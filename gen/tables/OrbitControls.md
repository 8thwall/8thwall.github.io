Property | Type | Default | Description
| :- | :- | :- | :- |
| speed | `number` | `5` | How fast the camera moves |
| maxAngularSpeed | `number` | `10` | Max rotation speed of the camera |
| maxZoomSpeed | `number` | `10` | Max zoom speed for the camera |
| distanceMin | `number` | `5` | Minimum distance between the focused entity and the camera |
| distanceMax | `number` | `20` | Maximum distance between the focused entity and the camera |
| pitchAngleMin | `number` | `-90` | Minimum pitch angle |
| pitchAngleMax | `number` | `90` | Maximum pitch angle |
| constrainYaw | `boolean` | `false` | Whether to constrain yaw |
| yawAngleMin | `number` | `0` | Minimum yaw angle |
| yawAngleMax | `number` | `0` | Maximum yaw angle |
| inertiaFactor | `number` | `0.3` | Inertia factor for camera movement |
| invertedX | `boolean` | `false` | Whether controls for moving on x-axis are inverted |
| invertedY | `boolean` | `false` | Whether controls for moving on y-axis are inverted |
| invertedZoom | `boolean` | `false` | Whether controls for zooming in and out are inverted |
| controllerSupport | `boolean` | `false` | Whether to support controllers via the input-manager |
| verticalSensitivity | `number` | `1` | Input sensitivity vertically |
| horizontalSensitivity | `number` | `1` | Input sensitivity horizontally |
| focusEntity | `eid` | `undefined` | Focus subject for the orbit camera |
