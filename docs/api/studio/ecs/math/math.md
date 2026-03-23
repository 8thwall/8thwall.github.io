---
id: math
---

# math

## Description

This library includes types and functions to handle different types of math.

## Compatibility

The types in `ecs.math` represent widely followed paradigms and can be bridged easily to other libraries.

### three.js

The types in `ecs.math` can be converted to and from the corresponding three.js math types `THREE.Vector3`, `THREE.Quaternion`, and `THREE.Matrix4` by following the examples below.

``` ts
const {mat4, quat, vec3} = ecs.math

// Vec3 <--> THREE.Vector3
const v3js = new THREE.Vector3()
const v = vec3.zero()

v3js.copy(v)                // Set a THREE.Vector3 from a Vec3.
v.setFrom(v3js)             // Set a Vec3 from a THREE.Vector3.
const v2 = vec3.from(v3js)  // Create new Vec3 from a THREE.Vector3.

// Quat <--> THREE.Quaternion
const q3js = new THREE.Quaternion()
const q = quat.zero()

q3js.copy(q)                // Set a THREE.Quaternion from a Quat.
q.setFrom(q3js)             // Set a Quat from a THREE.Quaternion.
const q2 = quat.from(q3js)  // Create new Quat from a THREE.Quaternion.

// Mat4 <--> THREE.Matrix4
const m3js = new THREE.Matrix4()
const m = mat4.i()

m3js.fromArray(m.data())           // Set a THREE.Matrix4 from a Mat4.
m.set(m3js.elements)               // Set a Mat4 from a THREE.Matrix4.
const m2 = mat4.of(m3js.elements)  // Create a new Mat4 from a THREE.Matrix4
```