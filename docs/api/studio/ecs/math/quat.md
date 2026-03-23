---
id: quat
---

# quat

Interface representing a quaternion. A quaternion is represented by (x, y, z, w) coordinates and represents a 3D rotation. Quaternions can be converted to and from 4x4 rotation matrices with the interfaces in Mat4. Quaternion objects are created with the ecs.math.quat QuatFactory, or through operations on other Quat objects.

## Source

The QuatSource interface represents any object that has x, y, z, and w properties and hence can be used as a data source to create a Quat. In addition, QuatSource can be used as an argument to Quat algorithms, meaning that any object with {x: number, y: number, z: number, w: number} properties can be used.

## Properties

Quat has the following enumerable properties:

``readonly x: number`` Access the x component of the quaternion.

``readonly y: number`` Access the y component of the quaternion.

``readonly z: number`` Access the z component of the quaternion.

``readonly w: number`` Access the w component of the quaternion.

## Factory

### axisAngle

Create a Quat from an axis-angle representation. The direction of the aa vector gives the axis of rotation, and the magnitude of the vector gives the angle, in radians. For example, quat.axisAngle(vec3.up().scale(Math.PI / 2)) represents a 90-degree rotation about the y-axis and is equivalent to quat.yDegrees(90). If a target is supplied, the result will be stored in the target and the target will be returned. Otherwise, a new Quat will be created and returned.

``` ts
ecs.math.quat.axisAngle(aa: Vec3Source, target?: Quat) // -> quat
```

### from

Create a Quat from an object with x, y, z, w properties.
 
``` ts
ecs.math.quat.from({x, y, z, w}: {x: number, y: number, z: number, w: number}) // -> quat
```

### lookAt

Create a Quat representing the rotation required for an object positioned at ‘eye’ to look at an object positioned at ‘target,’ with the given ‘up vector.

``` ts
ecs.math.quat.lookAt(eye: Vec3Source, target: Vec3Source, up: Vec3Source) // -> quat
```

### pitchYawRollDegrees

Construct a quaternion from a pitch / yaw / roll representation, also known as YXZ Euler angles. Rotation is specified in degrees.

``` ts
ecs.math.quat.pitchYawRollDegrees(v: Vec3Source) // -> quat
```

### pitchYawRollRadians

Construct a quaternion from a pitch / yaw / roll representation, also known as YXZ Euler angles. Rotation is specified in radians.

``` ts
ecs.math.quat.pitchYawRollRadians(v: Vec3Source) // -> quat
```

### xDegrees

Create a Quat which represents a rotation about the x-axis. Rotation is specified in degrees.

``` ts
ecs.math.quat.xDegrees(degrees: number) // -> quat
```

### xRadians

Create a Quat which represents a rotation about the x-axis. Rotation is specified in radians.

``` ts
ecs.math.quat.xRadians(radians: number) // -> quat
```

### xyzw

Create a Quat from x, y, z, w values.

``` ts
ecs.math.quat.xyzw(x: number, y: number, z: number, w: number) // -> quat
```

### yDegrees

Create a Quat which represents a rotation about the y-axis. Rotation is specified in degrees.

``` ts
ecs.math.quat.yDegrees(degrees: number) // -> quat
```

### yRadians

Create a Quat which represents a rotation about the y-axis. Rotation is specified in radians.

``` ts
ecs.math.quat.yRadians(radians: number) // -> quat
```

### zDegrees

Create a Quat which represents a rotation about the z-axis. Rotation is specified in degrees.

``` ts
ecs.math.quat.zDegrees(degrees: number) // -> quat
```

### zRadians

Create a Quat which represents a rotation about the z-axis. Rotation is specified in radians.

``` ts
ecs.math.quat.zRadians(radians: number) // -> quat
```

### zero

Create a Quat which represents a zero rotation.

``` ts
ecs.math.quat.zero() // -> quat
```

## Immutable

The following methods perform calculations using the current value of a Quat without modifying its contents. Methods that return Quat types create new instances. While immutable APIs are generally safer, more readable, and reduce the likelihood of errors, they can become inefficient when a large number of objects are allocated per frame. 

:::note
If garbage collection impacts performance, consider using the Mutable API described below.
:::

### axisAngle

Convert the quaternion to an axis-angle representation. The direction of the vector gives the axis of rotation, and the magnitude of the vector gives the angle, in radians. If ‘target’ is supplied, the result will be stored in ‘target’ and ‘target’ will be returned. Otherwise, a new Vec3 will be created and returned.

``` ts
existingQuat.axisAngle(target?: Vec3) // -> vec3
```

### clone

Create a new quaternion with the same components as this quaternion.

``` ts
existingQuat.clone() // -> quat
```

### conjugate

Return the rotational conjugate of this quaternion. The conjugate of a quaternion represents the same rotation in the opposite direction about the rotational axis.

``` ts
existingQuat.conjugate() // -> quat
```

### data

Access the quaternion as an array of [x, y, z, w].

``` ts
ecs.math.quat.data() // -> number[]
```

### degreesTo

Angle between two quaternions, in degrees.

``` ts
existingQuat.degreesTo(target: QuatSource) // -> number
```

### delta

Compute the quaternion required to rotate this quaternion to the target quaternion.

``` ts
existingQuat.delta(target: QuatSource) // -> quat
```

### dot

Compute the dot product of this quaternion with another quaternion.

``` ts
existingQuat.dot(target: QuatSource) // -> number
```

### equals

Check whether two quaternions are equal, with a specified floating point tolerance.

``` ts
existingQuat.equals(q: QuatSource, tolerance: number) // -> boolean
```

### inv

Compute the quaternion which multiplies this quaternion to get a zero rotation quaternion.

``` ts
existingQuat.inv() // -> quat
```

### negate

Negate all components of this quaternion. The result is a quaternion representing the same rotation as this quaternion.

``` ts
existingQuat.negate() // -> quat
```

### normalize

Get the normalized version of this quaternion with a length of 1.

``` ts
existingQuat.normalize() // -> quat
```

### pitchYawRollRadians

Convert the quaternion to pitch, yaw, and roll angles in radians.

``` ts
ecs.math.quat.pitchYawRollRadians(target?: Vec3) // -> vec3
```

### pitchYawRollDegrees

Convert the quaternion to pitch, yaw, and roll angles in degrees.

``` ts
ecs.math.quat.pitchYawRollDegrees(target?: Vec3) // -> vec3
```

### plus

Add two quaternions together.

``` ts
ecs.math.quat.plus(q: QuatSource) // -> quat
```

### radiansTo

Angle between two quaternions, in radians.

``` ts
existingQuat.radiansTo(target: QuatSource) // -> number
```

### slerp

Spherical interpolation between two quaternions given a provided interpolation value. If the interpolation is set to 0, then it will return this quaternion. If the interpolation is set to 1, then it will return the target quaternion.

``` ts
ecs.math.quat.slerp(target: QuatSource, t: number) // -> quat
```

### times

Multiply two quaternions together.

``` ts
existingQuat.times(q: QuatSource) // -> quat
```

### timesVec

Multiply the quaternion by a vector. This is equivalent to converting the quaternion to a rotation matrix and multiplying the matrix by the vector.

``` ts
ecs.math.quat.times(v: Vec3Source, target?: Vec3) // -> vec3
```

## Mutable

The following methods perform calculations using the current value of a Quat and modify it directly. These methods correspond to those in the Immutable API above. When returning Quat types, they provide a reference to the same object, allowing for method chaining. While mutable APIs can offer better performance than immutable ones, they tend to be less safe, less readable, and more prone to errors. If the code is unlikely to be called frequently within a single frame, consider using the Immutable API for improved safety and clarity.

### setConjugate

Set this quaternion to its rotational conjugate. The conjugate of a quaternion represents the same rotation in the opposite direction about the rotational axis. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setConjugate() // -> quat
```

### setDelta

Compute the quaternion required to rotate this quaternion to the target quaternion. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setDelta(target: QuatSource) // -> quat
```

### setInv

Set this to the quaternion which multiplies this quaternion to get a zero rotation quaternion. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setInv() // -> quat
```

### setNegate

Negate all components of this quaternion. The result is a quaternion representing the same rotation as this quaternion. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setNegate() // -> quat
```

### setNormalize

Get the normalized version of this quaternion with a length of 1. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setNormalize() // -> quat
```

### setPlus

Add this quaternion to another quaternion. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setPlus(q: QuatSource) // -> quat
```

### setPremultiply

Set this quaternion as the result of q times this quaternion. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setPremultiply(q: QuatSource) // -> quat
```

### setRotateToward

Rotate this quaternion towards the target quaternion by a given number of radians, clamped to the target. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setRotateToward(target: QuatSource, radians: number) // -> quat
```

### setSlerp

Spherical interpolation between two quaternions given a provided interpolation value. If the interpolation is set to 0, then it will return this quaternion. If the interpolation is set to 1, then it will return the target quaternion. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setSlerp(target: QuatSource, t: number) // -> quat
```

### setTimes

Multiply two quaternions together. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setTimes(target: QuatSource) // -> quat
```

## Set

The following methods set the value of the current Quat object without regard to its current content, replacing whatever was there before.

### makeAxisAngle

Set a Quat from an axis-angle representation. The direction of the vector gives the axis of rotation, and the magnitude of the vector gives the angle, in radians. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.makeAxisAngle(aa: Vec3Source) // -> quat
```

### makePitchYawRollRadians

Set the quaternion to a rotation specified by pitch, yaw, and roll angles in radians. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.makePitchYawRollRadians(v: Vec3Source) // -> quat
```

### makeLookAt

Set the quaternion to a rotation that would cause the eye to look at the target with the given-up vector. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.makeLookAt(eye: Vec3Source, target: Vec3Source, up: Vec3Source) // -> quat
```

### makePitchYawRollDegrees

Set the quaternion to a rotation specified by pitch, yaw, and roll angles in degrees. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.makePitchYawRollDegrees(v: Vec3Source) // -> quat
```

### makeXDegrees

Set the quaternion to a rotation about the x-axis (pitch) in degrees. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.makeXDegrees(degrees: number) // -> quat
```

### makeXRadians

Set the quaternion to a rotation about the x-axis (pitch) in radians. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.makeXRadians(radians: number) // -> quat
```

### makeYDegrees

Set the quaternion to a rotation about the y-axis (yaw) in degrees. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.makeYDegrees(degrees: number) // -> quat
```

### makeYRadians

Set the quaternion to a rotation about the y-axis (yaw) in radians. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.makeYRadians(radians: number) // -> quat
```

### makeZDegrees

Set the quaternion to a rotation about the z-axis (roll) in degrees. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.makeZDegrees(degrees: number) // -> quat
```

### makeZRadians

Set the quaternion to a rotation about the z-axis (roll) in radians. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.makeZRadians(radians: number) // -> quat
```

### makeZero

Set the quaternion to a zero rotation. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.makeZero() // -> quat
```

### setFrom

Set this quaternion to the value in another quaternion. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setFrom(q: QuatSource) // -> quat
```

### setXyzw

Set the quaternion to the specified x, y, z, and w values. Store the result in this Quat and return this Quat for chaining.

``` ts
existingQuat.setXyzw(x: number, y: number, z: number, w: number) // -> quat
```