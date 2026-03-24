---
id: vec3
---

# vec3

Interface representing a 3D vector. A 3D vector is represented by (x, y, z) coordinates and can represent a point in space, a directional vector, or other types of data with three ordered dimensions. 3D vectors can be multiplied by 4x4 matrices (Mat4) using homogeneous coordinate math, enabling efficient 3D geometry computation. Vec3 objects are created with the ecs.math.vec3 Vec3Factory, or through operations on other Vec3 objects.

## Source

The Vec3Source interface represents any object that has x, y, and z properties and hence can be used as a data source to create a Vec3. In addition, Vec3Source can be used as an argument to Vec3 algorithms, meaning that any object with {x: number, y: number, z: number} properties can be used.

## Properties

Vec3 has the following enumerable properties:

``readonly x: number`` Access the x component of the vector.

``readonly y: number`` Access the y component of the vector.

``readonly z: number`` Access the z component of the vector.

## Factory

### from

Create a Vec3 from a Vec3, or another object with x, y properties.

``` ts
ecs.math.vec3.from({x, y, z}: {x: number, y: number, z: number}) // -> vec3
```

### one

Create a vec3 where all elements are set to one. This is equivalent to ```vec3.from({x: 1, y: 1, z: 1})```.

``` ts
ecs.math.vec3.one() // -> vec3
```

### scale

Create a vec3 with all elements set to the scale value s. This is equivalent to ```vec3.from({x: s, y: s, z: s})```.

``` ts
ecs.math.vec3.scale(s: number) // -> vec3
```

### xyz

Create a Vec3 from x, y, z values. This is equivalent to ```vec3.from({x, y, z})```.

``` ts
ecs.math.vec3.xyz(x: number, y: number, z: number) // -> vec3
```

### zero

Create a vec3 where all elements are set to zero. This is equivalent to ```vec3.from({x: 0, y: 0, z: 0})```.

``` ts
ecs.math.vec3.zero() // -> vec3
```

## Immutable

The following methods perform computations based on the current value of a Vec3 but do not modify its contents. Methods that return Vec3 types return new objects. Immutable APIs are typically safer, more readable, and less error-prone than mutable APIs, but may be inefficient in situations where thousands of objects are allocated each frame.

:::note
If garbage collection impacts performance, consider using the Mutable API described below.
:::

### clone

Create a new vector with the same components as this vector.

``` ts
existingVec3.clone() // -> vec3
```

### cross

Compute the cross-product of this vector and another vector.

``` ts
existingVec3.cross(v: Vec3Source) // -> vec3
```

### data

Access the vector as a homogeneous array (four dimensions).

``` ts
existingVec3.data() // -> number[]
```

### distanceTo

Compute the Euclidean distance between this vector and another vector.

``` ts
existingVec3.distanceTo(v: Vec3Source) // -> number
```

### divide

Element-wise vector division.

``` ts
existingVec3.divide(v: Vec3Source) // -> vec3
```

### dot

Compute the dot product of this vector and another vector.

``` ts
existingVec3.dot(v: Vec3Source) // -> number
```

### equals

Check whether two vectors are equal, with a specified floating point tolerance.

``` ts
existingVec3.equals(v: Vec3Source, tolerance: number) // -> boolean
```

### length

Length of the vector.

``` ts
existingVec3.length() // -> number
```

### minus

Subtract a vector from this vector.

``` ts
existingVec3.minus(v: Vec3Source) // -> vec3
```

### mix

Compute a linear interpolation between this vector and another vector v with a factor t such that the result is thisVec * (1 - t) + v * t. The factor t should be between zero and 1.

``` ts
existingVec3.mix(v: Vec3Source, t: number) // -> vec3
```

### normalize

Return a new vector with the same direction as this vector, but with a length of 1.

``` ts
existingVec3.normalize() // -> vec3
```

### plus

Add two vectors together.

``` ts
existingVec3.plus(v: Vec3Source) // -> vec3
```

### scale

Multiply the vector by a scalar.

``` ts
existingVec3.scale(s: number) // -> vec3
```

### times

Element-wise vector multiplication.

``` ts
existingVec3.times(v: Vec3Source) // -> vec3
```

## Mutable

The following methods perform computations based on the current value of a Vec3 and modify its contents in place. They are parallel to methods in the mutable API above. Methods that return Vec3 types return a reference to the current object for convenient method chaining. Mutable APIs can be more performant than Immutable APIs, but are typically less safe, less readable, and more error-prone.

### SetCross

Compute the cross-product of this vector and another vector. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setCross(v: Vec3Source) // -> vec3
```

### setDivide

Element-wise vector division. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setDivide(v: Vec3Source) // -> vec3
```

### setMinus

Subtract a vector from this vector. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setMinus(v: Vec3Source) // -> vec3
```

### setMix

Compute a linear interpolation between this vector and another vector v with a factor t such that the result is thisVec * (1 - t) + v * t. The factor t should be between 0 and 1. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setMix(v: Vec3Source, t: number) // -> vec3
```

### setNormalize

Set the vector to be a version of itself with the same direction but with length 1. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setNormalize() // -> vec3
```

### setPlus

Add two vectors together. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setPlus(v: Vec3Source) // -> vec3
```

### setScale

Multiply the vector by a scalar. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setScale(s: number) // -> vec3
```

### setTimes

Element-wise vector multiplication. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setTimes(v: Vec3Source) // -> vec3
```

### setX

Set the Vec3's x component. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setX(v: number) // -> vec3
```

### setY

Set the Vec3's y component. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setY(v: number) // -> vec3
```

### setZ

Set the Vec3's z component. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setZ(v: number) // -> vec3
```

### Set

The following methods set the value of the current Vec3 object without regard to its current content, replacing whatever was there before.

### makeOne

Set the Vec3 to be all ones. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.makeOne() // -> vec3
```

### makeScale

Set the Vec3 to have all components set to the scale value s. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.makeScale(s: number) // -> vec3
```

### makeZero

Set the Vec3 to be all zeros. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.makeZero() // -> vec3
```

### setFrom

Set this Vec3 to have the same value as another Vec3 or another object with x and y, and z properties. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setFrom(source: Vec3Source) // -> vec3
```

### setXyz

Set the Vec3's x, y, and z components. Store the result in this Vec3 and return this Vec3 for chaining.

``` ts
existingVec3.setXyz(x: number, y: number, z: number) // -> vec3
```