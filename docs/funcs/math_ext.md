# math_ext

## Table of contents
- [toSec](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#toSec)
- [isOdd](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#isOdd)
- [isEven](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#isEven)
- [isPrime](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#isPrime)
- [getNextPrime](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#getNextPrime)
- [isPowOf2](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#isPowOf2)
- [lerp](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#lerp)
- [lerpVec2](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#lerpVec2)
- [lerpVec3](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#lerpVec3)
- [lerpVec4](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#lerpVec4)
- [minPos](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#minPos)
- [maxPos](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#maxPos)
- [minNeg](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#minNeg)
- [maxNeg](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#maxNeg)
- [linearMap](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#linearMap)
- [linearMapVec2](https://github.com/ii887522/hydro/blob/master/docs/funcs/math_ext.md#linearMapVec2)

## **toSec**
```ts
function toSec(nanosec: number): number
```
Converts nanoseconds into seconds.

`nanosec`: The value to be converted.

Returns the received value in terms of seconds.

### **Example usage:**
```ts
expect(toSec(2e+9)).toBe(2)
```
<br />

## **isOdd**
```ts
function isOdd(value: number): boolean
```
Checks whether the received `value` is an odd number.

`value`: The value to be checked.

Returns true if the `value` is an odd number, false otherwise.

### **Example usage:**
```ts
expect(isOdd(0)).toBeFalsy()
```
<br />

## **isEven**
```ts
function isEven(value: number): boolean
```
Checks whether the received `value` is an even number.

`value`: The value to be checked.

Returns true if the `value` is an even number, false otherwise.

### **Example usage:**
```ts
expect(isEven(0)).toBeTruthy()
```
<br />

## **isPrime**
```ts
function isPrime(value: number): boolean
```
Checks whether the received `value` is a prime number.

`value`: The value to be checked.

Returns true if the `value` is a prime number, false otherwise.

### **Example usage:**
```ts
expect(isPrime(0)).toBeFalsy()
```
<br />

## **getNextPrime**
```ts
function getNextPrime(from: number): number
```
Finds out the next prime number after the given `from`.

`from`: The starting value to find the next prime number.

Returns the next prime number immediately after `from`.

### **Example usage:**
```ts
expect(getNextPrime(0)).toBe(2)
```
<br />

## **isPowOf2**
```ts
function isPowOf2 (value: number): boolean
```
Checks whether the `value` given is equal to 2 to the power of n where n is an integer.

`value`: The value to be checked.

Returns true if the `value` is equal to 2 to the power of n where n is an integer, false otherwise.

### **Example usage:**
```ts
expect(isPowOf2(1)).toBeTruthy()
```
<br />

## **lerp**
```ts
function lerp (t: number, a: number, b: number): number
```
Performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.

`t`: The time to requset for a linear interpolation result.

`a`: The value when `t` = 0 .

`b`: The value when `t` = 1 .

Returns a value at time `t`.

### **Example usage:**
```ts
expect(lerp(2, 1, 0)).toBe(-1)
```
<br />

## **lerpVec2**
```ts
function lerpVec2 (t: number, a: Vec2, b: Vec2): Vec2
```
Performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.

`t`: The time to requset for a linear interpolation result.

`a`: The value when `t` = 0 .

`b`: The value when `t` = 1 .

Returns a value at time `t`.

### **Example usage:**
```ts
expect(lerpVec2(2, new Vec2(2, 1), new Vec2(2, 0))).toEqual(new Vec2(2, -1))
```
<br />

## **lerpVec3**
```ts
function lerpVec3 (t: number, a: Vec3, b: Vec3): Vec3
```
Performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.

`t`: The time to requset for a linear interpolation result.

`a`: The value when `t` = 0 .

`b`: The value when `t` = 1 .

Returns a value at time `t`.

### **Example usage:**
```ts
expect(lerpVec3(2, new Vec3(2, 2, 1), new Vec3(2, 2, 0))).toEqual(new Vec3(2, 2, -1))
```
<br />

## **lerpVec4**
```ts
function lerpVec4 (t: number, a: Vec4, b: Vec4): Vec4
```
Performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.

`t`: The time to requset for a linear interpolation result.

`a`: The value when `t` = 0 .

`b`: The value when `t` = 1 .

Returns a value at time `t`.

### **Example usage:**
```ts
expect(lerpVec4(2, new Vec4(2, 2, 2, 1), new Vec4(2, 2, 2, 0))).toEqual(new Vec4(2, 2, 2, -1))
```
<br />

## **minPos**
```ts
function minPos (...values: readonly number[]): { id: number, value: number }
```
Finds a minimum positive value and its associated index from the array given.

`values`: The array to search from.

Returns a minimum positive value and its associated index from the array given.

### **Example usage:**
```ts
expect(minPos(2, 2, 0)).toEqual({ id: 2, value: 0 })
```
<br />

## **maxPos**
```ts
function maxPos (...values: readonly number[]): { id: number, value: number }
```
Finds a maximum positive value and its associated index from the array given.

`values`: The array to search from.

Returns a maximum positive value and its associated index from the array given.

### **Example usage:**
```ts
expect(maxPos(0, 0, 2)).toEqual({ id: 2, value: 2 })
```
<br />

## **minNeg**
```ts
function minNeg (...values: readonly number[]): { id: number, value: number }
```
Finds a minimum negative value and its associated index from the array given.

`values`: The array to search from.

Returns a minimum negative value and its associated index from the array given.

### **Example usage:**
```ts
expect(minNeg(-1, -1, -2)).toEqual({ id: 2, value: -2 })
```

## **maxNeg**
```ts
function maxNeg (...values: readonly number[]): { id: number, value: number }
```
Finds a maximum negative value and its associated index from the array given.

`values`: The array to search from.

Returns a maximum negative value and its associated index from the array given.

### **Example usage:**
```ts
expect(maxNeg(-3, -3, -1)).toEqual({ id: 2, value: -1 })
```

## **linearMap**
```ts
function linearMap (value: number, from: Sequence, to: Sequence): number
```
Linearly maps the `value` from the first sequence given to the second sequence given.

`value`: The value to map from.

`from`: The sequence that the `value` belongs to.

`to`: The sequence that the `value` maps to.

Returns a mapped value that belongs to the second sequence given.

### **Example usage:**
```ts
expect(linearMap(2, new Sequence(0, 4), new Sequence(0, 1))).toBe(0.5)
```

## **linearMapVec2**
```ts
function linearMapVec2 (
  value: Vector2, fromPosition: Vector2, fromSize: Vector2, toPosition: Vector2, toSize: Vector2
): Vector2
```
Linearly maps the `value` from the first region given to the second region given.

`value`: The value to map from.

`fromPosition`: The position of the region that the `value` belongs to.

`fromSize`: The size of the region that the `value` belongs to.

`toPosition`: The position of the region that the `value` maps to.

`toSize`: The size of the region that the `value` maps to.

Returns a mapped value that belongs to the second region given.

### **Example usage:**
```ts
expect(
  linearMapVec2(new Vec2(2, 2), new Vec2(2, 2), new Vec2(1, 1), new Vec2(1, 0), new Vec2(1, 1))
).toEqual(new Vec2(1, 0))
```
<br />
