Property | Type | Default | Description
| :- | :- | :- | :- |
| type | `string` | `''` | Allowed values: `'directional'`, `'point'`,  `'ambient'`, `'spot'`, `'area'` |
| castShadow | `boolean` | `true` | If the light source should cast shadows |
| intensity | `number` | `0.5` | The light's intensity, or strength |
| r | `number` | `255` | The amount of red the light emits. A value between 0 and 255. |
| g | `number` | `255` | The amount of green the light emits. A value between 0 and 255. |
| b | `number` | `255` | The amount of blue the light emits. A value between 0 and 255. |
| colorMap | `string` | `''` | The color map source |
| shadowBias | `number` | `-0.005` | How much to add or subtract from the normalized depth when deciding whether a surface is in shadow |
| shadowNormalBias | `number` | `0` | How much the position used to query the shadow map is offset along the object normal |
| shadowRadius | `number` | `1` | The radius of the shadow |
| shadowAutoUpdate | `boolean` | `true` | Should the shadow be automatically calculated and updated |
| shadowBlurSamples | `number` | `8` | The amount of samples to use when calculating the Virtual Shadow Map |
| shadowMapSizeHeight | `number` | `1024` | The height of the Shadow Map. Values **must** be powers of 2. |
| shadowMapSizeWidth | `number` | `1024` | The width of the Shadow Map. Values **must** be powers of 2. |
| shadowCameraNear | `number` | `0.5` | Camera frustum near-pane for calculating shadows |
| shadowCameraFar | `number` | `200` | Camera frustum far-pane for calculating shadows |
| shadowCameraLeft | `number` | `-50` | Camera frustum left-pane for calculating shadows |
| shadowCameraRight | `number` | `50` | Camera frustum right-pane for calculating shadows |
| shadowCameraBottom | `number` | `-50` | Camera frustum bottom-pane for calculating shadows |
| shadowCameraTop | `number` | `50` | Camera frustum top-pane for calculating shadows |
| targetX | `number` | `0` | The target X coordinate of the light (Directional only) |
| targetY | `number` | `0` | The target Y coordinate of the light (Directional only) |
| targetZ | `number` | `0` | The target Z coordinate of the light (Directional only) |
| width | `number` | `10` | Width of the light source (Area only) |
| height | `number` | `10` | Height of the light source (Area only) |
| penumbra | `number` | `0` | Percent of the spotlight cone that is attenuated due to penumbra. Accepted values between 0 and 1. (Spot only) |
| decay | `number` | `2` | The amount the light dims along the distance of the light |
| angle | `number` | `Math.PI / 3` | Maximum extent of the spotlight, in radians, from its direction. Should be no more than Math.PI / 2. |
| followCamera | `boolean` | `true` | Whether the light should follow where the camera is moving (Directional only) |
| distance | `number` | `0` | When distance is zero, light will attenuate according to inverse-square law to infinite distance. When distance is non-zero, light will attenuate according to inverse-square law until near the distance cutoff, where it will then attenuate quickly and smoothly to 0. Inherently, cutoffs are not physically correct. |
