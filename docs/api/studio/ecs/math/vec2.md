---
id: vec2
---

# vec2

Interface representing a 2D vector. A 2D vector is represented by (x, y) coordinates and can represent a point in a plane, a directional vector, or other types of data with three ordered dimensions. Vec2 objects are created with the ecs.math.vec2 Vec2Factory, or through operations on other Vec2 objects.

## Source

The Vec2Source interface represents any object that has x and y properties and hence can be used as a data source to create a Vec2. In addition, Vec2Source can be used as an argument to Vec2 algorithms, meaning that any object with {x: number, y: number} properties can be used.

## Properties

Vec2Source has the following enumerable properties:

``readonly x: number`` Access the x component of the vector.

``readonly y: number`` Access the y component of the vector.

## Factory

### from

Create a Vec2 from a Vec2, or another object with x, y properties.

``` ts
ecs.math.vec2.from({x, y}: {x: number, y: number}) // -> vec2
```

### one

Create a vec2 where all elements are set to one. This is equivalent to ```vec2.from({x: 1, y: 1})```.

``` ts
ecs.math.vec2.one() // -> vec2
```

### scale

Create a vec2 with all elements set to the scale value s. This is equivalent to ```vec2.from({x: s, y: s})```.

``` ts
ecs.math.vec2.scale(s: number) // -> vec2
```

### xy

Create a Vec2 from x, y values. This is equivalent to ```vec2.from({x, y})```.

``` ts
ecs.math.vec2.xy(x: number, y: number) // -> vec2
```

### zero

Create a vec2 where all elements are set to zero. This is equivalent to ```vec2.from({x: 0, y: 0})```.

``` ts
ecs.math.vec2.zero() // -> vec2
```

## Immutable

The following methods perform computations based on the current value of a Vec2 but do not modify its contents. Methods that return Vec2 types return new objects. Immutable APIs are typically safer, more readable, and less error-prone than mutable APIs, but may be inefficient in situations where thousands of objects are allocated each frame.

:::note
If garbage collection impacts performance, consider using the Mutable API described below.
:::

### clone

Create a new vector with the same components as this vector.

``` ts
existingVec2.clone() // -> vec2
```

### cross

Compute the cross-product of this vector and another vector. For 2D vectors, the cross-product is the size of the z component of the 3D cross-product of the two vectors with 0 as the z component.

``` ts
existingVec2.cross(v: Vec2Source) // -> number
```

### distanceTo

Compute the Euclidean distance between this vector and another vector.

``` ts
existingVec2.distanceTo(v: Vec2Source) // -> number
```

### divide

Element-wise vector division.

``` ts
existingVec2.divide(v: Vec2Source) // -> vec2
```

### dot

Compute the dot product of this vector and another vector.

``` ts
existingVec2.dot(v: Vec2Source) // -> number
```

### equals

Check whether two vectors are equal, with a specified floating point tolerance.

``` ts
existingVec2.equals(v: Vec2Source, tolerance: number) // -> boolean
```

### length

Length of the vector.

``` ts
existingVec2.length() // -> number
```

### minus

Subtract a vector from this vector.

``` ts
existingVec2.minus(v: Vec2Source) // -> vec2
```

### mix

Compute a linear interpolation between this vector and another vector v with a factor t such that the result is thisVec * (1 - t) + v * t. The factor t should be between zero and 1.

``` ts
existingVec2.mix(v: Vec2Source, t: number) // -> vec2
```

### normalize

Return a new vector with the same direction as this vector, but with a length of 1.

``` ts
existingVec2.normalize() // -> vec2
```

### plus

Add two vectors together.

``` ts
existingVec2.plus(v: Vec2Source) // -> vec2
```

### scale

Multiply the vector by a scalar.

``` ts
existingVec2.scale(s: number) // -> vec2
```

### times

Element-wise vector multiplication.

``` ts
existingVec2.times(v: Vec2Source) // -> vec2
```

## Mutable

The following methods perform computations based on the current value of a Vec2 and modify its contents in place. They are parallel to methods in the mutable API above. Methods that return Vec2 types return a reference to the current object for convenient method chaining. Mutable APIs can be more performant than Immutable APIs, but are typically less safe, less readable, and more error-prone.

### setDivide

Element-wise vector division. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.setDivide(v: Vec2Source) // -> vec2
```

### setMinus

Subtract a vector from this vector. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.setMinus(v: Vec2Source) // -> vec2
```

### setMix

Compute a linear interpolation between this vector and another vector v with a factor t such that the result is thisVec * (1 - t) + v * t. The factor t should be between 0 and 1. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.setMix(v: Vec2Source, t: number) // -> vec2
```

### setNormalize

Set the vector to be a version of itself with the same direction but with length 1. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.setNormalize() // -> vec2
```

### setPlus

Add two vectors together. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.setPlus(v: Vec2Source) // -> vec2
```

### setScale

Multiply the vector by a scalar. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.setScale(s: number) // -> vec2
```

### setTimes

Element-wise vector multiplication. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.setTimes(v: Vec2Source) // -> vec2
```

### setX

Set the Vec2's x component. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.setX(v: number) // -> vec2
```

### setY

Set the Vec2's y component. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.setY(v: number) // -> vec2
```

### Set

The following methods set the value of the current Vec2 object without regard to its current content, replacing whatever was there before.

### makeOne

Set the Vec2 to be all ones. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.makeOne() // -> vec2
```

### makeScale

Set the Vec2 to have all components set to the scale value s. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.makeScale(s: number) // -> vec2
```

### makeZero

Set the Vec2 to be all zeros. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.makeZero() // -> vec2
```

### setFrom

Set this Vec2 to have the same value as another Vec2 or another object with x and y properties. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.setFrom(source: Vec2Source) // -> vec2
```

### setXy

Set the Vec2's x and y components. Store the result in this Vec2 and return this Vec2 for chaining.

``` ts
existingVec2.setXy(x: number, y: number) // -> vec2
```