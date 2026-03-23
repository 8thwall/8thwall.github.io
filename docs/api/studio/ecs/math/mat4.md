---
id: mat4
---

# mat4

The Mat4 interface represents a 4x4 matrix, stored as a 16-element array in column-major order. This type of matrix is commonly used in 3D geometry to represent transformations, including position, rotation, and scale (also known as a TRS matrix). These matrices are essential for defining the position, orientation, and size of objects in a 3D scene.

Certain matrices, such as TRS matrices, have efficiently computable inverses. In these cases, Mat4 allows for the inverse to be calculated in constant time, making it O(1) operation. Mat4 objects are created using the ecs.math.mat4 factory (Mat4Factory) or through operations on existing Mat4 instances.

## Factory

### i

Identity matrix

``` ts
ecs.math.mat4.i() // -> mat4
```

### of

Creates a matrix with directly specified data, using column-major order. Optional inverse can be provided. If not provided, the inverse will be calculated automatically if the matrix is invertible. Attempting to calculate the inverse for a non-invertible matrix will throw an error.

``` ts
ecs.math.mat4.of(data: number[], inverseData?: number[]) // -> mat4
```

### r

Creates a rotation matrix from a quaternion.

``` ts
ecs.math.mat4.r(q: QuatSource) // -> mat4
```

### rows

Creates a matrix using specified row data. You can also optionally provide inverse row data. Both dataRows and inverseDataRows should be arrayed, each containing four numbers. If the inverse is not provided, it will be computed automatically if the matrix is invertible. 

:::danger
Attempting to calculate the inverse for a non-invertible matrix will throw an error.
:::

``` ts
ecs.math.mat4.rows(dataRows: number[][], inverseDataRows?: number[][]) // -> mat4
```

### s

Creates a scale matrix. Specify the scale factors along the x, y, and z axes.

``` ts
ecs.math.mat4.s(x: number, y: number, z: number) // -> mat4
```

### t

Creates a translation matrix. Specify the translation offsets along the x, y, and z axes.

``` ts
ecs.math.mat4.t(x: number, y: number, z: number) // -> mat4
```

### tr

Creates a combined translation and rotation matrix using a translation vector and a quaternion for the rotation.

``` ts
ecs.math.mat4.tr(t: Vec3Source, r: QuatSource) // -> mat4
```

### trs

Creates a combined translation, rotation, and scale matrix. Use a translation vector, a quaternion for rotation, and scale factors for x, y, and z axes.

``` ts
ecs.math.mat4.trs(t: Vec3Source, r: QuatSource, s: Vec3Source) // -> mat4
```

## Immutable

The following methods perform computations using the current value of a Mat4 without altering its contents. Methods that return Mat4 types generate new instances. While immutable APIs are generally safer, more readable, and reduce errors compared to mutable APIs, they may be less efficient in scenarios where thousands of objects are created each frame. 

:::note
If garbage collection becomes a performance issue, consider using the Mutable API.
:::

### clone

Create a new matrix with the same components as this matrix.

``` ts
ecs.math.mat4.clone() // -> mat4
```

### data

Get the raw data of the matrix, in column-major order.

``` ts
ecs.math.mat4.data() // -> number[]
```

### decomposeTrs

Decompose the matrix into its translation, rotation, and scale components, assuming it was formed by a translation, rotation, and scale in that order. If ‘target’ is supplied, the result will be stored in ‘target’ and ‘target’ will be returned. Otherwise, a new {t, r, s} object will be created and returned.

``` ts
ecs.math.mat4.decomposeTrs(target?: {t: Vec3, r: Quat, s: Vec3}) // -> {t: Vec3, r: Quat, s: Vec3}
```

### determinant

Compute the determinant of the matrix.

``` ts
ecs.math.mat4.determinant() // -> number
```

### equals

Check whether two matrices are equal, with a specified floating point tolerance.

``` ts
ecs.math.mat4.equals(m: Mat4, tolerance: number) // -> boolean
```

### inv

Invert the matrix or throw if the matrix is not invertible. Because Mat4 stores precomputed inverse, this operation is O(1).

``` ts
ecs.math.mat4.inv() // -> mat4
```

### inverseData

Get the raw data of the inverse matrix, in column-major order, or null if the matrix is not invertible.

``` ts
ecs.math.mat4.inverseData() // -> number[] | null
```

### lookAt

Get a matrix with the same position and scale as this matrix, but with the rotation set to look at the target.

``` ts
ecs.math.mat4.lookAt(target: Vec3Source, up: Vec3Source) // -> mat4
```

### scale

Multiply the matrix by a scalar. 

:::danger
Scaling by 0 throws an error.
:::

``` ts
ecs.math.mat4.scale(s: number) // -> mat4
```

### transpose

Get the transpose of the matrix.

``` ts
ecs.math.mat4.transpose() // -> mat4
```

### times

Multiply the matrix by another matrix.

``` ts
ecs.math.mat4.times(m: Mat4) // -> mat4
```

### timesVec

Multiply the matrix by a vector using homogeneous coordinates.

``` ts
ecs.math.mat4.timesVec(v: Vec3Source, target?: Vec3) // -> vec3
```

## Mutable

The following methods compute results based on the current value of a Mat4 and modify its contents directly. They mirror the methods in the Immutable API described earlier. Methods returning Mat4 types provide a reference to the same object, allowing for method chaining. While mutable APIs can offer better performance than immutable ones, they tend to be less safe, less readable, and more prone to errors. 

:::note
If code is unlikely to be executed frequently within a single frame, consider using the Immutable API for better code safety and clarity.
:::

### setInv

Invert the matrix or throw if the matrix is not invertible. Because Mat4 stores precomputed inverse, this operation is O(1). Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.setInv() // -> mat4
```

### setLookAt

Set the matrix rotation to look at the target, keeping translation and scale unchanged. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.setLookAt(target: Vec3Source, up: Vec3Source) // -> mat4
```

### setPremultiply

Sets this matrix the result of m times this matrix. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.setPremultiply(m: Mat4) // -> mat4
```

### setScale

Multiply each element of the matrix by a scaler. Scaling by 0 throws an error. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.setScale(s: number) // -> mat4
```

### setTimes

Set the matrix to the result of this matrix times m. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.setTimes(target: Mat4Source) // -> mat4
```

### setTranspose

Set the matrix to its transpose. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.setTranspose() // -> mat4
```

## Set

The following methods set the value of the current Mat4 object without regard to its current content, replacing whatever was there before.

### makeI

Set the matrix to the identity matrix. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.makeI() // -> mat4
```

### makeR

Set this matrix to a rotation matrix from the specified quaternion. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.makeR(r: QuatSource) // -> mat4
```

### makeRows

Create a matrix with specified row data and optionally specified inverse row data. dataRows and inverseDataRows should be four arrays, each with four numbers. If the inverse is not specified, it will be computed if the matrix is invertible. 

:::danger
If the matrix is not invertible, calling inv() will throw an error.
:::

``` ts
existingMat4.makeRows(rowData: number[][], inverseRowData?: number[][]) // -> mat4
```

### makeS

Set this matrix to a scale matrix from the specified vector. No element of the vector should be zero. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.makeS(s: Vec3Source) // -> mat4
```

### makeT

Set this matrix to a translation matrix from the specified vector. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.makeT(s: Vec3Source) // -> mat4
```

### makeTr

Set this matrix to a translation and rotation matrix from the specified vector and quaternion. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.makeTr(t: Vec3Source, r: QuatSource) // -> mat4
```

### makeTrs

Set this matrix to a translation, rotation, and scale matrix from the specified vectors and quaternion. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.makeTrs(t: Vec3Source, r: QuatSource, s: Vec3Source) // -> mat4
```

### set

Sets the value of the matrix and inverse to the provided values. If no inverse is provided, one will be computed if possible. If the matrix is not invertible, calling inv() will throw an error. Store the result in this Mat4 and return this Mat4 for chaining.

``` ts
existingMat4.set(data: number[], inverseData?: number[]) // -> mat4
```