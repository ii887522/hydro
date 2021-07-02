# hydro
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

It is a general purpose JavaScript/TypeScript library that can help developers create various kinds of application in no time.

## Table of Contents
- [Contributing](https://github.com/ii887522/hydro#contributing)
- [References](https://github.com/ii887522/hydro#references)

## Contributing
Please go to https://github.com/ii887522/hydro/blob/master/CONTRIBUTING.md to get some information about contributing to hydro.

## References

### **consume**
```ts
function consume (_: any): void
```
It simply consumes any object passed in and do nothing for it and return immediately.
#### **Example usage:**
```ts
consume(0)
```
<br />

### **emptyDir**
```ts
async function emptyDir (dirPath: string): Promise<void>
```
It removes all the files and subdirectories in directory passed in as its path.

`dirPath`: it must ends with /
#### **Example usage:**
```ts
emptyDir('path/to/dir/')
```
<br />

### **removeFiles**
```ts
async function removeFiles (extensionName: string, dirPath: string): Promise<void>
```
It removes all files in the directory passed in as its path with matching extension name passed in.

`extensionName`: it must not starts with '.'<br />
`dirPath`: it must ends with /
#### **Example usage:**
```ts
removeFiles('dll', 'path/to/dir/')
```
<br />

### **getFileName**
```ts
function getFileName (path: string): string
```
It returns the file name with extension name if exists from the path given.
#### **Example usage:**
```ts
assert(getFileName('SDL2-2.0.12/lib/x86/SDL2.dll') === 'SDL2.dll')
```
<br />

### **substring**
```ts
function substring(from: string, startText: string, endText: string): string
```
It returns a substring from the original string based on the start and end text of the substring excluding end text.
#### **Example usage:**
```ts
assert(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', '.dll') === 'image-2.0.5/lib/x86/libpng16-16')
```
<br />

### **equal**
```ts
function equal (l: Uint8Array, r: Uint8Array): boolean
```
It checks whether both arrays passed in are exactly the same.
#### **Example usage:**
```ts
assert(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 1, 1])))
```
<br />

### **swap**
```ts
function swap<T> (l: Holder<T>, r: Holder<T>): void
```
It swaps objects between these 2 holders.
#### **Example usage:**
```ts
const a = new Holder(0)
const b = new Holder(1)
swap(a, b)
```
<br />

### **DynamicUint8Array**
```ts
class DynamicUint8Array
```
It is an array that will automatically resize itself when the elements that needs to be inserted are too many.
#### **Example usage:**
```ts
const array = new DynamicUint8Array()
```
<br />

### **DynamicUint8Array::get**
```ts
get (): Uint8Array
```
It returns the array itself.
#### **Example usage:**
```ts
assert(equal(array.get(), new Uint8Array([0, 1, 1, 0, 1, 1])))
```
<br />

### **DynamicUint8Array::add**
```ts
add (array: ArrayLike<number>): void
```
It appends array elements passed in to itself.
#### **Example usage:**
```ts
array.add([1, 1, 0])
```
<br />

### **Holder**
```ts
class Holder
```
It holds an object.
#### **Example usage:**
```ts
const count = new Holder(0)
count.value = 1
assert(count.value == 1)
```
<br />
