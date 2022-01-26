# collection_ext

## Table of contents
- [swapInArray](https://github.com/ii887522/hydro/blob/master/docs/collection_ext.md#swapInArray)
- [copy](https://github.com/ii887522/hydro/blob/master/docs/collection_ext.md#copy)
- [insertionSort](https://github.com/ii887522/hydro/blob/master/docs/collection_ext.md#insertionSort)
- [insertionSorts](https://github.com/ii887522/hydro/blob/master/docs/collection_ext.md#insertionSorts)
- [mergeSort](https://github.com/ii887522/hydro/blob/master/docs/collection_ext.md#mergeSort)
- [sort](https://github.com/ii887522/hydro/blob/master/docs/collection_ext.md#sort)

## **swapInArray**
```ts
function swapInArray<T> (array: T[], leftIndex: number, rightIndex: number): void
```
It exchanges objects that are inside the received `array`.

`array`: The array that contains objects to be exchanged with each other.
`leftIndex`: The index which identifies the left object to be moved.
`rightIndex`: The index which identifies the right object to be moved.

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
It copy the whole contents of the `srcArray` into the `destArray`.

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
function insertionSort<T> (array: T[], indices: Range = new Range(0, Number.MAX_SAFE_INTEGER), compare: (left: T, right: T) => boolean = (left, right) => left > right): void
```
It sorts a portion of the array `received` by using insertion sort.

`array`: The array to be sorted from.

`indices`: The indices specify the portion of the `array` where the elements inside it will become sorted.

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
function insertionSorts<T> (array: T[], runSize: number = Number.MAX_SAFE_INTEGER, compare: (left: T, right: T) => boolean = (left, right) => left > right): void
```
It sorts the `array` received into a sequence of sorted runs by using insertion sort. A run is a number of consecutive elements which is a part of an `array`.

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
function mergeSort<T> (array: T[], sortedRunSize: number = 1, compare: (left: T, right: T) => boolean = (left, right) => left > right): void
```
It sorts the `array` received by using merge sort and assuming that there is a sequence of sorted runs in the `array`. Each sorted run has `sortedRunSize` consecutive elements which is a part of the `array`.

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
It sorts the `array` received by using tim sort.

`array`: The array to be sorted from.

`compare`: The function used to determine whether the positions of both elements should be swapped during sorting. If the function returns true, both elements will be swapped, otherwise nothing happens.

### **Example usage:**
```ts
const numbers = [3, 2, 3, 0]
sort(numbers, (left, right) => left < right)
expect(numbers).toEqual([3, 3, 2, 0])
```
<br />
