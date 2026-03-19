Property | Type | Default | Description
| :- | :- | :- | :- |
| type | `string` | `'perspective'` | Type of projection used for rendering. Allowed values: `'perspective'`, `'orthogonal'`. Only relevant when `xrCameraType` is set to `'3dOnly'`. |
| nearClip | `number` | `0.1` | The distance from the camera of the near clip plane, i.e. the closest distance to the camera at which scene objects are visible. |
| farClip | `number` | `2000` | The distance from the camera of the far clip plane, i.e. the farthest distance to the camera at which scene objects are visible. |
| zoom | `number` | `1` | Zoom factor of the camera. Only relevant when `xrCameraType` is set to `'3dOnly'`. |
| fov | `number` | `80` | Field of view, in degrees. Only relevant when `xrCameraType` is set to `'3dOnly'` and `type` is set to `'perspective'`. |
| left | `number` | `-1` | Camera frustum left plane. Only relevant when `xrCameraType` is set to `'3dOnly'` and `type` is set to `'orthogonal'`. |
| right | `number` | `1` | Camera frustum right plane. Only relevant when `xrCameraType` is set to `'3dOnly'` and `type` is set to `'orthogonal'`. |
| top | `number` | `1` | Camera frustum top plane. Only relevant when `xrCameraType` is set to `'3dOnly'` and `type` is set to `'orthogonal'`. |
| bottom | `number` | `-1` | Camera frustum bottom plane. Only relevant when `xrCameraType` is set to `'3dOnly'` and `type` is set to `'orthogonal'`. |
| direction | `string` | `'front'` | Whether to use either `'front'` or `'back'` camera for AR. Only relevant for `'world'` or `'face'` camera. Must set to `'back'` to enable SLAM tracking. |
| xrCameraType | `string` | `'3dOnly'` | Type of camera to use. Allowed values: `'world'`, `'face'`, `'3dOnly'`. |
| uvType | `string` | `'standard'` | Specifies which uvs are returned in the facescanning and faceloading events. Allowed values: `'standard'`, `'projected'`. Only relevant when `xrCameraType` is set to `'face'`. |
| leftHandedAxes | `boolean` | `false` | If true, use left-handed coordinates: X-right, Y-up, and Z-forward. Otherwise, X-left, Y-up, and Z-forward. |
| disableWorldTracking | `boolean` | `false` | If true, turn off SLAM tracking for efficiency. Must be set to false to enable VPS. |
| enableLighting | `boolean` | `false` | If true, return an estimate of lighting information |
| scale | `string` | `'responsive'` | Allowed values: `'responsive'`, `'absolute'`. `'responsive'` will return values so that the camera on frame 1 is at the origin defined via [XR8.XrController.updateCameraProjectionMatrix()](https://www.8thwall.com/docs/docs/engine/api/xrcontroller/updatecameraprojectionmatrix/). `'absolute'` will return the camera, image targets, etc in meters. When using `'absolute'`, the x-position, z-position, and rotation of the starting pose will respect the parameters set in [XR8.XrController.updateCameraProjectionMatrix()](https://www.8thwall.com/docs/docs/engine/api/xrcontroller/updatecameraprojectionmatrix/) once scale has been estimated. The y-position will depend on the camera's physical height from the ground plane. Must be set to `'responsive'` to enable VPS. |
| enableWorldPoints | `boolean` | `false` | If true, return the map points used for tracking |
| enableVps | `boolean` | `false` | If true, look for Project Locations and a mesh. The mesh that is returned has no relation to Project Locations and will be returned even if no Project Locations are configured. Must enable responsive scale and world tracking to enabled VPS. Only relevant when xrCameraType is set to `'world'` |
| mirroredDisplay | `boolean` | `false` | If true, flip the rendering left-right |
| meshGeometryFace | `boolean` | `false` | Whether to show face mesh geometry. Only relevant when xrCameraType is set to `'face'`. |
| meshGeometryEyes | `boolean` | `false` | Whether to show eye mesh geometry. Only relevant when xrCameraType is set to `'face'`. |
| meshGeometryIris | `boolean` | `false` | Whether to show iris mesh geometry. Only relevant when xrCameraType is set to `'face'`. |
| meshGeometryMouth | `boolean` | `false` | Whether to show mouth mesh geometry. Only relevant when xrCameraType is set to `'face'`. |
| enableEars | `boolean` | `false` | If true, runs ear detection simultaneously with Face Effects and returns ear attachment points. Only relevant when xrCameraType is set to `'face'`. |
| maxDetections | `number` | `1` | The maximum number of faces to detect. Allowed values: 1, 2, or 3. Only relevant when xrCameraType is set to `'face'`. |
