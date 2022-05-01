# index

## Table of contents
- [consume](https://github.com/ii887522/hydro/blob/master/docs/index.md#consume)
- [Boolean](https://github.com/ii887522/hydro/blob/master/docs/index.md#Boolean)
- [requireDefined](https://github.com/ii887522/hydro/blob/master/docs/index.md#requireDefined)
- [equal](https://github.com/ii887522/hydro/blob/master/docs/index.md#equal)
- [swapInHolders](https://github.com/ii887522/hydro/blob/master/docs/index.md#swapInHolders)
- [formatTime](https://github.com/ii887522/hydro/blob/master/docs/index.md#formatTime)

## **consume**
```ts
function consume (_: any): void
```
It simply consumes any object received and do nothing for it and return immediately.

`_`: The object to be consumed.

### **Example usage:**
```ts
consume(0)
```
<br />

## **Boolean**
```ts
function Boolean (value: string): boolean
```
It converts the string representation of boolean to a value of boolean type.

`value`: The string representation of boolean.

It returns a boolean.

### **Example usage:**
```ts
expect(Boolean('true')).toBeTruthy()
```
<br />

## **requireDefined**
```ts
function requireDefined<T> (object: T | undefined): T
```
It simply requires that the `object` received must not be undefined.

`object`: The object to be checked for.

It returns the `object` which is always defined.

### **Example usage:**
```ts
expect(requireDefined({ })).toEqual({ })
expect(() => requireDefined(undefined)).toThrow(ReferenceError)
```
<br />

## **equal**
```ts
function equal (l: Uint8Array, r: Uint8Array): boolean
```
It checks whether both arrays passed in are exactly the same.

`left`: The first array to be compared.

`right`: The second array to be compared.

It returns true if both arrays received are exactly the same, false otherwise.

### **Example usage:**
```ts
expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 1, 1]))).toBeTruthy()
```
<br />

## **swapInHolders**
```ts
function swapInHolders<T> (left: Holder<T>, right: Holder<T>): void
```
It exchanges objects that are held by both holders.

`left`: The first holder where its object will be exchanged.

`right`: The second holder where its object will be exchanged.

### **Example usage:**
```ts
const a = new Holder(0)
const b = new Holder(1)
swapInHolders(a, b)
expect(a.value).toBe(1)
expect(b.value).toBe(0)
```
<br />

## **formatTime**
```ts
function formatTime(seconds: number): string
```
It converts seconds into a time with a format like 'mmm:ss'.

`seconds`: The value to be converted.

It returns the received value in terms of time with a format like 'mmm:ss'.

### **Example usage:**
```ts
expect(formatTime(89)).toBe('1:29')
```
<br />
