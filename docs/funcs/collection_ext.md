# collection_ext

## Table of contents
- [swapInArray](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#swapInArray)
- [copy](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#copy)
- [insertionSort](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#insertionSort)
- [insertionSorts](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#insertionSorts)
- [mergeSort](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#mergeSort)
- [sort](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#sort)
- [min](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#min)
- [max](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#max)
- [toArray](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#toArray)
- [toMap](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#toMap)
- [add](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#add)
- [subtract](https://github.com/ii887522/hydro/blob/master/docs/funcs/collection_ext.md#subtract)

## **swapInArray**
```ts
function swapInArray<T> (array: T[], leftID: number, rightID: number): void
```
Exchanges objects that are inside the received `array`.

`array`: The array that contains objects to be exchanged with each other.

`leftID`: The index which identifies the left object to be moved.

`rightID`: The index which identifies the right object to be moved.

### **Example usage:**
```ts
const array = [0, 1]
swapInArray(array, 0, 1)
expect(array).toEqual([1, 0])
```
<br />

## **copy**
```ts
function copy<T> (srcArray: T[], destArray: T[]): void
```
Copy the whole contents of the `srcArray` into the `destArray`.

`srcArray`: The array to copy from.

`destArray`: The array to copy into.

### **Example usage:**
```ts
const leftArray: any[] = [0]
const rightArray: any[] = []
copy(leftArray, rightArray)
expect(leftArray).toEqual([0])
expect(rightArray).toEqual([0])
```
<br />

## **insertionSort**
```ts
function insertionSort<T> (
  array: T[],
  ids: Range = new Range(0, Number.MAX_SAFE_INTEGER),
  compare: (left: T, right: T) => boolean = (left, right) => left > right
): void
```
Sorts a portion of the array `received` by using insertion sort.

`array`: The array to be sorted from.

`ids`: The indices specify the portion of the `array` where the elements inside it will become sorted.

`compare`: The function used to determine whether the positions of both elements should be swapped during sorting. If the function returns true, both elements will be swapped, otherwise nothing happens.

### **Example usage:**
```ts
const numbers = [3, 2, 3, 0]
insertionSort(numbers, new Range(0, numbers.length - 1), (left, right) => left < right)
expect(numbers).toEqual([3, 3, 2, 0])
```
<br />

## **insertionSorts**
```ts
function insertionSorts<T> (
  array: T[],
  runSize: number = Number.MAX_SAFE_INTEGER, compare: (left: T, right: T) => boolean = (left, right) => left > right
): void
```
Sorts the `array` received into a sequence of sorted runs by using insertion sort. A run is a number of consecutive elements which is a part of an `array`.

`array`: The array to be sorted from.

`runSize`: The size of the consecutive elements which will become sorted.

`compare`: The function used to determine whether the positions of both elements should be swapped during sorting. If the function returns true, both elements will be swapped, otherwise nothing happens.

### **Example usage:**
```ts
const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5, 9, 7]
insertionSorts(numbers, 4, (left, right) => left < right)
expect(numbers).toEqual([3, 3, 2, 0, 8, 6, 4, 1, 9, 7, 5])
```
<br />

## **mergeSort**
```ts
function mergeSort<T> (
  array: T[], sortedRunSize: number = 1, compare: (left: T, right: T) => boolean = (left, right) => left > right
): void
```
Sorts the `array` received by using merge sort and assuming that there is a sequence of sorted runs in the `array`. Each sorted run has `sortedRunSize` consecutive elements which is a part of the `array`.

`array`: The array to be sorted from.

`sortedRunSize`: The size of the consecutive elements which has become sorted.

`compare`: The function used to determine whether the positions of both elements should be swapped during sorting. If the function returns true, both elements will be swapped, otherwise nothing happens.

### **Example usage:**
```ts
const numbers = [3, 2, 3, 0]
mergeSort(numbers, 1, (left, right) => left < right)
expect(numbers).toEqual([3, 3, 2, 0])
```
<br />

## **sort**
```ts
function sort<T> (array: T[], compare: (left: T, right: T) => boolean = (left, right) => left > right): void
```
Sorts the `array` received by using tim sort.

`array`: The array to be sorted from.

`compare`: The function used to determine whether the positions of both elements should be swapped during sorting. If the function returns true, both elements will be swapped, otherwise nothing happens.

### **Example usage:**
```ts
const numbers = [3, 2, 3, 0]
sort(numbers, (left, right) => left < right)
expect(numbers).toEqual([3, 3, 2, 0])
```
<br />

## **min**
```ts
function min<T> (array: T[], getValue: (object: T, id: number) => number): T[]
```
Find the minimum objects from the `array` received determined by the value retrieved from each object in the `array` through the `getValue` function given.

`array`: The array to be searched from.

`getValue`: The function that retrieves a value from the object in the `array`.

Returns The minimum objects.

### **Example usage:**
```ts
expect(min([3, 1, 0], value => value)).toEqual([0])
```
<br />

## **max**
```ts
function max<T> (array: T[], getValue: (object: T, id: number) => number): T[]
```
Find the maximum objects from the `array` received determined by the value retrieved from each object in the `array` through the `getValue` function given.

`array`: The array to be searched from.

`getValue`: The function that retrieves a value from the object in the `array`.

Returns The maximum objects.

### **Example usage:**
```ts
expect(max([3, 1, 0], value => value)).toEqual([3])
```
<br />

## **toArray**
```ts
function toArray<T extends NumbersHashable> (map: { [key: string]: T[] }): T[]
```
Converts the `map` given which may have duplicate objects into an array without duplicates.

`map`: The map to be converted from.

Returns An array without duplicates.

### **Example usage:**
```ts
expect(
  toArray({
    0: [{ value: 3, numbersHash: () => [3, 1, 0] }],
    1: [{ value: 3, numbersHash: () => [3, 1, 0] }],
    2: [{ value: 1, numbersHash: () => [2] }],
    3: [{ value: 3, numbersHash: () => [3, 1, 0] }],
    4: [{ value: 0, numbersHash: () => [4] }]
  }).map(obj => ({ value: obj.value }))
).toEqual([{ value: 3 }, { value: 1 }, { value: 0 }])
```
<br />

## **toMap**
```ts
function toMap<T extends NumbersHashable> (array: T[]): { [key: string]: T[] }
```
Converts the `array` given without duplicate objects into a map with duplicates.

`array`: The array to be converted from.

Returns a map with duplicates.

### **Example usage:**
```ts
expect(
  Object.entries(
    toMap([
      { value: 3, numbersHash: () => [3, 1, 0] },
      { value: 1, numbersHash: () => [2] },
      { value: 0, numbersHash: () => [4] }
    ])
  ).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), { })
).toEqual({ 0: [{ value: 3 }], 1: [{ value: 3 }], 2: [{ value: 1 }], 3: [{ value: 3 }], 4: [{ value: 0 }] })
```
<br />

## **add**
```ts
function add<T extends NumbersHashable> (am: { [k: string]: T[] }, bm: { [k: string]: T[] }): { [k: string]: T[] }
```
Concatenates two maps received that may have duplicate objects into a map which contains duplicates.

`am`: The first map to include.

`bm`: The second map to include.

Returns a map which contains duplicates.

### **Example usage:**
```ts
expect(
  Object.entries(
    add(
      {
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
      },
      {
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
      }
    )
  ).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), { })
).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] })
```
<br />

## **subtract**
```ts
function subtract<T extends NumbersHashable> (am: { [k: string]: T[] }, bm: { [k: string]: T[] }): { [k: string]: T[] }
```
Removes objects from the first map where they exist in the second map and returns it.

`am` The map to remove objects from.

`bm` The map which contains the objects to be searched from the first map for removal.

Returns The first map without objects that exist in the second map.

### **Example usage:**
```ts
expect(
  Object.entries(
    subtract(
      {
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
      },
      {
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
      }
    )
  ).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), { })
).toEqual({ })
```
<br />
