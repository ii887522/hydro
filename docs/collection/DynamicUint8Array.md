# DynamicUint8Array
An array that contains many integers between 0 and 255 (inclusive). It will automatically resize itself when there is not enough space to hold more integers requested. The index of the array starts from 0 for the first integer until `size - 1` for the last integer.

## Table of contents
- [get size](https://github.com/ii887522/hydro/blob/master/docs/collection/DynamicUint8Array.md#get-size)
- [get](https://github.com/ii887522/hydro/blob/master/docs/collection/DynamicUint8Array.md#get)
- [add](https://github.com/ii887522/hydro/blob/master/docs/collection/DynamicUint8Array.md#add)

## **get size**
```ts
get DynamicUint8Array.size (): number
```

### **Example usage:**
```ts
const array = new DynamicUint8Array()
expect(array.size).toBe(0)
```
<br />

## **get**
```ts
DynamicUint8Array.get (): Uint8Array
```

### **Example usage:**
```ts
const array = new DynamicUint8Array()
expect(equal(array.get(), new Uint8Array())).toBeTruthy()
```
<br />

## **add**
```ts
DynamicUint8Array.add (array: ArrayLike<number>): void
```
Appends `array` received to itself.

`array`: The array to be inserted at the end.

### **Example usage:**
```ts
const array = new DynamicUint8Array()
array.add([1, 1, 0])
expect(equal(array.get(), new Uint8Array([1, 1, 0]))).toBeTruthy()
```
<br />
