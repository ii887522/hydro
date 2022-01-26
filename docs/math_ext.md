# math_ext

## Table of contents
- [toSeconds](https://github.com/ii887522/hydro/blob/master/docs/math_ext.md#toSeconds)
- [isOdd](https://github.com/ii887522/hydro/blob/master/docs/math_ext.md#isOdd)
- [isEven](https://github.com/ii887522/hydro/blob/master/docs/math_ext.md#isEven)
- [isPrime](https://github.com/ii887522/hydro/blob/master/docs/math_ext.md#isPrime)
- [getNextPrime](https://github.com/ii887522/hydro/blob/master/docs/math_ext.md#getNextPrime)
- [clamp](https://github.com/ii887522/hydro/blob/master/docs/math_ext.md#clamp)
- [isOverlap](https://github.com/ii887522/hydro/blob/master/docs/math_ext.md#isOverlap)
- [isPowerOfTwo](https://github.com/ii887522/hydro/blob/master/docs/math_ext.md#isPowerOfTwo)

## **toSeconds**
```ts
function toSeconds(nanoseconds: number): number
```
It converts nanoseconds into seconds.

`nanoseconds`: The value to be converted.

It returns the received value in terms of seconds.

### **Example usage:**
```ts
expect(toSeconds(2e+9)).toBe(2)
```
<br />

## **isOdd**
```ts
function isOdd(value: number): boolean
```
It checks whether the received `value` is an odd number.

`value`: The value to be checked.

It returns true if the `value` is an odd number, false otherwise.

### **Example usage:**
```ts
expect(isOdd(0)).toBeFalsy()
```
<br />

## **isEven**
```ts
function isEven(value: number): boolean
```
It checks whether the received `value` is an even number.

`value`: The value to be checked.

It returns true if the `value` is an even number, false otherwise.

### **Example usage:**
```ts
expect(isEven(0)).toBeTruthy()
```
<br />

## **isPrime**
```ts
function isPrime(value: number): boolean
```
It checks whether the received `value` is a prime number.

`value`: The value to be checked.

It returns true if the `value` is a prime number, false otherwise.

### **Example usage:**
```ts
expect(isPrime(0)).toBeFalsy()
```
<br />

## **getNextPrime**
```ts
function getNextPrime(from: number): number
```
It finds out the next prime number after the given `from`.

`from`: The starting value to find the next prime number.

It returns the next prime number immediately after `from`.

### **Example usage:**
```ts
expect(getNextPrime(0)).toBe(2)
```
<br />

## **clamp**
```ts
function clamp(value: number, range: Range): number
```
It constraints the `value` given in the `range` and returns the result.

`value`: The value to be constrained.

`range`: The range the constrainted value can be in.

It returns the constrained value.

### **Example usage:**
```ts
expect(clamp(0, new Range(1, 3))).toBe(1)
```
<br />

## **isOverlap**
```ts
function isOverlap(value: number, range: Range): boolean
```
It checks whether the `value` is in the given `range`.

`value`: The value to be checked with.

`range`: The range to be checked with.

It returns true if the `value` is in the given `range`, false otherwise.

### **Example usage:**
```ts
expect(isOverlap(0, new Range(1, 3))).toBeFalsy()
```
<br />

## **isPowerOfTwo**
```ts
function isPowerOfTwo (value: number): boolean
```
It checks whether the `value` given is equal to 2 to the power of n where n is an integer.

`value`: The value to be checked.

It returns true if the `value` is equal to 2 to the power of n where n is an integer, false otherwise.

### **Example usage:**
```ts
expect(isPowerOfTwo(1)).toBeTruthy()
```
<br />
