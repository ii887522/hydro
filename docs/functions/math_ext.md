# math_ext

## Table of contents
- [toSeconds](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#toSeconds)
- [isOdd](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#isOdd)
- [isEven](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#isEven)
- [isPrime](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#isPrime)
- [getNextPrime](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#getNextPrime)
- [isPowerOfTwo](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#isPowerOfTwo)
- [lerp](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#lerp)
- [lerpVector2](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#lerpVector2)
- [lerpVector3](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#lerpVector3)
- [lerpVector4](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#lerpVector4)
- [minPositive](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#minPositive)
- [maxPositive](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#maxPositive)
- [minNegative](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#minNegative)
- [maxNegative](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#maxNegative)
- [linearMap](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#linearMap)
- [linearMapVector2](https://github.com/ii887522/hydro/blob/master/docs/functions/math_ext.md#linearMapVector2)

## **toSeconds**
```ts
function toSeconds(nanoseconds: number): number
```
Converts nanoseconds into seconds.

`nanoseconds`: The value to be converted.

Returns the received value in terms of seconds.

### **Example usage:**
```ts
expect(toSeconds(2e+9)).toBe(2)
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

## **isPowerOfTwo**
```ts
function isPowerOfTwo (value: number): boolean
```
Checks whether the `value` given is equal to 2 to the power of n where n is an integer.

`value`: The value to be checked.

Returns true if the `value` is equal to 2 to the power of n where n is an integer, false otherwise.

### **Example usage:**
```ts
expect(isPowerOfTwo(1)).toBeTruthy()
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

## **lerpVector2**
```ts
function lerpVector2 (t: number, a: Vector2, b: Vector2): Vector2
```
Performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.

`t`: The time to requset for a linear interpolation result.

`a`: The value when `t` = 0 .

`b`: The value when `t` = 1 .

Returns a value at time `t`.

### **Example usage:**
```ts
expect(lerpVector2(2, new Vector2(2, 1), new Vector2(2, 0))).toEqual(new Vector2(2, -1))
```
<br />

## **lerpVector3**
```ts
function lerpVector3 (t: number, a: Vector3, b: Vector3): Vector3
```
Performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.

`t`: The time to requset for a linear interpolation result.

`a`: The value when `t` = 0 .

`b`: The value when `t` = 1 .

Returns a value at time `t`.

### **Example usage:**
```ts
expect(lerpVector3(2, new Vector3(2, 2, 1), new Vector3(2, 2, 0))).toEqual(new Vector3(2, 2, -1))
```
<br />

## **lerpVector4**
```ts
function lerpVector4 (t: number, a: Vector4, b: Vector4): Vector4
```
Performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.

`t`: The time to requset for a linear interpolation result.

`a`: The value when `t` = 0 .

`b`: The value when `t` = 1 .

Returns a value at time `t`.

### **Example usage:**
```ts
expect(lerpVector4(2, new Vector4(2, 2, 2, 1), new Vector4(2, 2, 2, 0))).toEqual(new Vector4(2, 2, 2, -1))
```
<br />

## **minPositive**
```ts
function minPositive (...values: readonly number[]): { id: number, value: number }
```
Finds a minimum positive value and its associated index from the array given.

`values`: The array to search from.

Returns a minimum positive value and its associated index from the array given.

### **Example usage:**
```ts
expect(minPositive(2, 2, 0)).toEqual({ id: 2, value: 0 })
```
<br />

## **maxPositive**
```ts
function maxPositive (...values: readonly number[]): { id: number, value: number }
```
Finds a maximum positive value and its associated index from the array given.

`values`: The array to search from.

Returns a maximum positive value and its associated index from the array given.

### **Example usage:**
```ts
expect(maxPositive(0, 0, 2)).toEqual({ id: 2, value: 2 })
```
<br />

## **minNegative**
```ts
function minNegative (...values: readonly number[]): { id: number, value: number }
```
Finds a minimum negative value and its associated index from the array given.

`values`: The array to search from.

Returns a minimum negative value and its associated index from the array given.

### **Example usage:**
```ts
expect(minNegative(-1, -1, -2)).toEqual({ id: 2, value: -2 })
```

## **maxNegative**
```ts
function maxNegative (...values: readonly number[]): { id: number, value: number }
```
Finds a maximum negative value and its associated index from the array given.

`values`: The array to search from.

Returns a maximum negative value and its associated index from the array given.

### **Example usage:**
```ts
expect(maxNegative(-3, -3, -1)).toEqual({ id: 2, value: -1 })
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

## **linearMapVector2**
```ts
function linearMapVector2 (
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
  linearMapVector2(new Vector2(2, 2), new Vector2(2, 2), new Vector2(1, 1), new Vector2(1, 0), new Vector2(1, 1))
).toEqual(new Vector2(1, 0))
```
<br />
