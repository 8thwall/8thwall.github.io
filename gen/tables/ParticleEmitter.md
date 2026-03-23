Property | Type | Default | Description
| :- | :- | :- | :- |
| stopped | `boolean` | `false` | Playback state of the emitter |
| emitterLife | `number` | `1` | The lifetime of the emitter in seconds |
| particlesPerShot | `number` | `1` | Particles per emission |
| emitDelay | `number` | `1` | The time between particle emissions |
| minimumLifespan | `number` | `1` | Minimum lifetime range for each particle |
| maximumLifespan | `number` | `10` | Maximum lifetime range for each particle |
| mass | `number` | `1` | Mass of each particle |
| gravity | `number` | `0` | Gravity factor of each particle |
| scale | `number` | `1` | Uniform scale of each particle |
| forceX | `number` | `0` | Force applied to each particle in the X direction |
| forceY | `number` | `0` | Force applied to each particle in the Y direction |
| forceZ | `number` | `0` | Force applied to each particle in the Z direction |
| spread | `number` | `0` | Area and direction that each particles spawns relative to its origin |
| radialVelocity | `number` | `0` | Amount of radial velocity applied to each particle |
| spawnAreaType | `string` | `'point'` | Allowed values: `'point'`, `'box'` and `'sphere'` |
| spawnAreaWidth | `number` | `0` | Width of the spawn area box (Box only) |
| spawnAreaHeight | `number` | `0` | Height of the spawn area box (Box only) |
| spawnAreaDepth | `number` | `0` | Depth of the spawn area box (Box only) |
| spawnAreaRadius | `number` | `0` | Radius of the spawn area sphere (Sphere only) |
| boundingZoneType | `string` | `''` | Allowed values: `'none'`, `'box'`, `'sphere'` |
| boundingZoneWidth | `number` | `0` | Width of the bounding zone (Box only) |
| boundingZoneHeight | `number` | `0` | Height of the bounding zone (Box only) |
| boundingZoneDepth | `number` | `0` | Depth of the bounding zone (Box only) |
| boundingZoneRadius | `number` | `0` | Radius of the bounding zone (Sphere only) |
| resourceType | `string` | `'none'` | Allowed values: `'sprite'`, `'model'` |
| resourceUrl | `string` | `''` | URL of the resource |
| blendingMode | `string` | `''` | Allowed values: `'none'`, `'normal'`, `'add'`, `'multiply'`, `'subtract'` |
| animateColor | `boolean` | `false` | Determines if color should be animated |
| colorStart | `string` | `''` | The starting color of each particle |
| colorEnd | `string` | `''` | The ending color of each particle |
| randomDrift | `boolean` | `false` | Enable randomized drifting for each particle |
| randomDriftRange | `number` | `0` | Determines the randomized drift range and speed of each particle |
| collisions | `boolean` | `false` | Determines if particles should respond to physics collisions |
