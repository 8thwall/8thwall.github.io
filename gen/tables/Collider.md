Property | Type | Default | Description
| :- | :- | :- | :- |
| type | `ecs.ColliderType` | `ecs.ColliderType.Static` | Supported types include static, dynamic, and kinematic |
| shape | `ecs.ColliderShape` | `ecs.ColliderShape.Box` | Supported shape types include geometries and auto generated shapes from meshes |
| width | `number` | `0` | Width of Box or Plane shapes |
| height | `number` | `0` | Height of Box, Plane, Capsule, Cone, or Cylinder shapes |
| depth | `number` | `0` | Depth of Box shape |
| radius | `number` | `0` | Radius of Sphere, Capsule, Cone, or Cylinder shapes |
| mass | `number` | `0` | Mass of the entity |
| eventOnly | `boolean` | `false` | Determines if the object should only dispatch collision events, and not physically respond |
| gravityFactor | `number` | `1` | Factor of which to scale the world’s gravity |
| lockXAxis | `boolean` | `false` | Disables rotation on the X Axis |
| lockYAxis | `boolean` | `false` | Disables rotation on the Y Axis |
| lockZAxis | `boolean` | `false` | Disables rotation on the Z Axis |
| friction | `number` | `0.5` | The amount of contact friction on the entity |
| restitution | `number` | `0` | The bounciness of the entity, negative values absorb impact |
| linearDamping | `number` | `0` | The amount of air resistance while moving |
| angularDamping | `number` | `0` | The amount of air resistance while rotating |
| lockXPosition | `boolean` | `false` | Prevents movement of the collider along the X-axis |
| lockYPosition | `boolean` | `false` | Prevents movement of the collider along the Y-axis |
| lockZPosition | `boolean` | `false` | Prevents movement of the collider along the Z-axis |
| highPrecision | `boolean` | `false` | Enables continuous collision detection to increase precision of collision events |
| offsetX | `number` | `0` | Local X offset of the collider shape from the object origin |
| offsetY | `number` | `0` | Local Y offset of the collider shape from the object origin |
| offsetZ | `number` | `0` | Local Z offset of the collider shape from the object origin |
| offsetQuaternionX | `number` | `0` | Quaterion X offset of the collider shape from the object orientation |
| offsetQuaternionY | `number` | `0` | Quaterion Y offset of the collider shape from the object orientation |
| offsetQuaternionZ | `number` | `0` | Quaterion Z offset of the collider shape from the object orientation |
| offsetQuaternionW | `number` | `1` | Quaterion W offset of the collider shape from the object orientation |
