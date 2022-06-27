'use strict';
import { swapInArray, copy, insertionSort, insertionSorts, mergeSort, sort, min, max, toArray, toMap, add, subtract } from '../../../src/funcs/collection_ext.js';
import Bound from '../../../src/struct/Bound.js';
test('swap in array between 0 and 1', () => {
    const array = [0, 1];
    swapInArray(array, 0, 1);
    expect(array).toEqual([1, 0]);
});
test('swap in array between 0 and 2', () => {
    const array = [0, 1, 2];
    swapInArray(array, 0, 2);
    expect(array).toEqual([2, 1, 0]);
});
test('swap in array between 0 and 3', () => {
    const array = [0, 1, 2, 3];
    swapInArray(array, 0, 3);
    expect(array).toEqual([3, 1, 2, 0]);
});
test('swap in array between 1 and 3', () => {
    const array = [0, 1, 2, 3];
    swapInArray(array, 1, 3);
    expect(array).toEqual([0, 3, 2, 1]);
});
test('swap in array between 2 and 3', () => {
    const array = [0, 1, 2, 3];
    swapInArray(array, 2, 3);
    expect(array).toEqual([0, 1, 3, 2]);
});
test('copy between two empty arrays', () => {
    const leftArray = [];
    const rightArray = [];
    copy(leftArray, rightArray);
    expect(leftArray).toEqual([]);
    expect(rightArray).toEqual([]);
});
test('copy the left array with an element to the right array', () => {
    const leftArray = [0];
    const rightArray = [];
    copy(leftArray, rightArray);
    expect(leftArray).toEqual([0]);
    expect(rightArray).toEqual([0]);
});
test('copy the left array with 2 elements to the right array', () => {
    const leftArray = [0, 1];
    const rightArray = [];
    copy(leftArray, rightArray);
    expect(leftArray).toEqual([0, 1]);
    expect(rightArray).toEqual([0, 1]);
});
test('copy the left array with 2 elements to the right array with an element', () => {
    const leftArray = [0, 1];
    const rightArray = [2];
    copy(leftArray, rightArray);
    expect(leftArray).toEqual([0, 1]);
    expect(rightArray).toEqual([0, 1]);
});
test('copy the left array with 2 elements to the right array with 2 elements', () => {
    const leftArray = [0, 1];
    const rightArray = [2, 3];
    copy(leftArray, rightArray);
    expect(leftArray).toEqual([0, 1]);
    expect(rightArray).toEqual([0, 1]);
});
test('insertion sort an array that contains 0', () => {
    const numbers = [0];
    insertionSort(numbers);
    expect(numbers).toEqual([0]);
});
test('insertion sort an array that contains 1', () => {
    const numbers = [1];
    insertionSort(numbers);
    expect(numbers).toEqual([1]);
});
test('insertion sort an array that contains 1 and 0', () => {
    const numbers = [1, 0];
    insertionSort(numbers);
    expect(numbers).toEqual([0, 1]);
});
test("insertion sort an array that contains 2 1's", () => {
    const numbers = [1, 1];
    insertionSort(numbers);
    expect(numbers).toEqual([1, 1]);
});
test('insertion sort an array that contains 2 and 1', () => {
    const numbers = [2, 1];
    insertionSort(numbers);
    expect(numbers).toEqual([1, 2]);
});
test('insertion sort an array that contains 2, 1 and 0', () => {
    const numbers = [2, 1, 0];
    insertionSort(numbers);
    expect(numbers).toEqual([0, 1, 2]);
});
test('insertion sort an array that contains 2, 1 and 1', () => {
    const numbers = [2, 1, 1];
    insertionSort(numbers);
    expect(numbers).toEqual([1, 1, 2]);
});
test('insertion sort an array that contains 2, 1 and 2', () => {
    const numbers = [2, 1, 2];
    insertionSort(numbers);
    expect(numbers).toEqual([1, 2, 2]);
});
test('insertion sort an array that contains 2, 1 and 3', () => {
    const numbers = [2, 1, 3];
    insertionSort(numbers);
    expect(numbers).toEqual([1, 2, 3]);
});
test('insertion sort an array that contains 2, 2 and 3', () => {
    const numbers = [2, 2, 3];
    insertionSort(numbers);
    expect(numbers).toEqual([2, 2, 3]);
});
test('insertion sort an array that contains 3, 2 and 3', () => {
    const numbers = [3, 2, 3];
    insertionSort(numbers);
    expect(numbers).toEqual([2, 3, 3]);
});
test('insertion sort an array that contains 4 elements', () => {
    const numbers = [3, 2, 3, 0];
    insertionSort(numbers);
    expect(numbers).toEqual([0, 2, 3, 3]);
});
test('insertion sort an array that contains 4 elements in descending order', () => {
    const numbers = [3, 2, 3, 0];
    insertionSort(numbers, new Bound(0, numbers.length - 1), (left, right) => left < right);
    expect(numbers).toEqual([3, 3, 2, 0]);
});
test('insertion sort an array that contains 5 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 5];
    insertionSort(numbers, new Bound(1, numbers.length - 1), (left, right) => left < right);
    expect(numbers).toEqual([3, 5, 3, 2, 0]);
});
test('insertion sort 3 elements in the middle of an array in descending order', () => {
    const numbers = [3, 2, 3, 0, 5];
    insertionSort(numbers, new Bound(1, 3), (left, right) => left < right);
    expect(numbers).toEqual([3, 3, 2, 0, 5]);
});
test('insertion sorts an array that contains 0', () => {
    const numbers = [0];
    insertionSorts(numbers);
    expect(numbers).toEqual([0]);
});
test('insertion sorts an array that contains 1', () => {
    const numbers = [1];
    insertionSorts(numbers);
    expect(numbers).toEqual([1]);
});
test('insertion sorts an array that contains 1 and 0', () => {
    const numbers = [1, 0];
    insertionSorts(numbers);
    expect(numbers).toEqual([0, 1]);
});
test("insertion sorts an array that contains 2 1's", () => {
    const numbers = [1, 1];
    insertionSorts(numbers);
    expect(numbers).toEqual([1, 1]);
});
test('insertion sorts an array that contains 2 and 1', () => {
    const numbers = [2, 1];
    insertionSorts(numbers);
    expect(numbers).toEqual([1, 2]);
});
test('insertion sorts an array that contains 2, 1 and 0', () => {
    const numbers = [2, 1, 0];
    insertionSorts(numbers);
    expect(numbers).toEqual([0, 1, 2]);
});
test('insertion sorts an array that contains 2, 1 and 1', () => {
    const numbers = [2, 1, 1];
    insertionSorts(numbers);
    expect(numbers).toEqual([1, 1, 2]);
});
test('insertion sorts an array that contains 2, 1 and 2', () => {
    const numbers = [2, 1, 2];
    insertionSorts(numbers);
    expect(numbers).toEqual([1, 2, 2]);
});
test('insertion sorts an array that contains 2, 1 and 3', () => {
    const numbers = [2, 1, 3];
    insertionSorts(numbers);
    expect(numbers).toEqual([1, 2, 3]);
});
test('insertion sorts an array that contains 2, 2 and 3', () => {
    const numbers = [2, 2, 3];
    insertionSorts(numbers);
    expect(numbers).toEqual([2, 2, 3]);
});
test('insertion sorts an array that contains 3, 2 and 3', () => {
    const numbers = [3, 2, 3];
    insertionSorts(numbers);
    expect(numbers).toEqual([2, 3, 3]);
});
test('insertion sorts an array that contains 4 elements', () => {
    const numbers = [3, 2, 3, 0];
    insertionSorts(numbers);
    expect(numbers).toEqual([0, 2, 3, 3]);
});
test('insertion sorts an array that contains 4 elements in descending order', () => {
    const numbers = [3, 2, 3, 0];
    insertionSorts(numbers, 4, (left, right) => left < right);
    expect(numbers).toEqual([3, 3, 2, 0]);
});
test('insertion sorts an array that contains 5 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4];
    insertionSorts(numbers, 5, (left, right) => left < right);
    expect(numbers).toEqual([4, 3, 3, 2, 0]);
});
test('insertion sorts an array that contains 6 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8];
    insertionSorts(numbers, 6, (left, right) => left < right);
    expect(numbers).toEqual([8, 4, 3, 3, 2, 0]);
});
test('insertion sorts an array that contains 7 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6];
    insertionSorts(numbers, 7, (left, right) => left < right);
    expect(numbers).toEqual([8, 6, 4, 3, 3, 2, 0]);
});
test('insertion sorts an array that contains 8 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1];
    insertionSorts(numbers, 8, (left, right) => left < right);
    expect(numbers).toEqual([8, 6, 4, 3, 3, 2, 1, 0]);
});
test('insertion sorts an array that contains 9 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5];
    insertionSorts(numbers, 9, (left, right) => left < right);
    expect(numbers).toEqual([8, 6, 5, 4, 3, 3, 2, 1, 0]);
});
test('insertion sorts an array that contains 10 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5, 9];
    insertionSorts(numbers, 10, (left, right) => left < right);
    expect(numbers).toEqual([9, 8, 6, 5, 4, 3, 3, 2, 1, 0]);
});
test('insertion sorts an array that contains 11 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5, 9, 7];
    insertionSorts(numbers, 11, (left, right) => left < right);
    expect(numbers).toEqual([9, 8, 7, 6, 5, 4, 3, 3, 2, 1, 0]);
});
test('insertion sorts an array in descending order into sorted runs of 4 elements', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5, 9, 7];
    insertionSorts(numbers, 4, (left, right) => left < right);
    expect(numbers).toEqual([3, 3, 2, 0, 8, 6, 4, 1, 9, 7, 5]);
});
test('merge sort an array that contains 0', () => {
    const numbers = [0];
    mergeSort(numbers);
    expect(numbers).toEqual([0]);
});
test('merge sort an array that contains 1', () => {
    const numbers = [1];
    mergeSort(numbers);
    expect(numbers).toEqual([1]);
});
test('merge sort an array that contains 1 and 0', () => {
    const numbers = [1, 0];
    mergeSort(numbers);
    expect(numbers).toEqual([0, 1]);
});
test("merge sort an array that contains 2 1's", () => {
    const numbers = [1, 1];
    mergeSort(numbers);
    expect(numbers).toEqual([1, 1]);
});
test('merge sort an array that contains 2 and 1', () => {
    const numbers = [2, 1];
    mergeSort(numbers);
    expect(numbers).toEqual([1, 2]);
});
test('merge sort an array that contains 2, 1 and 0', () => {
    const numbers = [2, 1, 0];
    mergeSort(numbers);
    expect(numbers).toEqual([0, 1, 2]);
});
test('merge sort an array that contains 2, 1 and 1', () => {
    const numbers = [2, 1, 1];
    mergeSort(numbers);
    expect(numbers).toEqual([1, 1, 2]);
});
test('merge sort an array that contains 2, 1 and 3', () => {
    const numbers = [2, 1, 3];
    mergeSort(numbers);
    expect(numbers).toEqual([1, 2, 3]);
});
test('merge sort an array that contains 2, 2 and 3', () => {
    const numbers = [2, 2, 3];
    mergeSort(numbers);
    expect(numbers).toEqual([2, 2, 3]);
});
test('merge sort an array that contains 3, 2 and 3', () => {
    const numbers = [3, 2, 3];
    mergeSort(numbers);
    expect(numbers).toEqual([2, 3, 3]);
});
test('merge sort an array that contains 4 elements', () => {
    const numbers = [3, 2, 3, 0];
    mergeSort(numbers);
    expect(numbers).toEqual([0, 2, 3, 3]);
});
test('merge sort an array that contains 4 elements in descending order', () => {
    const numbers = [3, 2, 3, 0];
    mergeSort(numbers, 1, (left, right) => left < right);
    expect(numbers).toEqual([3, 3, 2, 0]);
});
test('merge sort an array that contains 5 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4];
    mergeSort(numbers, 1, (left, right) => left < right);
    expect(numbers).toEqual([4, 3, 3, 2, 0]);
});
test('merge sort an array that contains 6 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8];
    mergeSort(numbers, 1, (left, right) => left < right);
    expect(numbers).toEqual([8, 4, 3, 3, 2, 0]);
});
test('merge sort an array that contains 7 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6];
    mergeSort(numbers, 1, (left, right) => left < right);
    expect(numbers).toEqual([8, 6, 4, 3, 3, 2, 0]);
});
test('merge sort an array that contains 8 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1];
    mergeSort(numbers, 1, (left, right) => left < right);
    expect(numbers).toEqual([8, 6, 4, 3, 3, 2, 1, 0]);
});
test('merge sort an array that contains 9 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5];
    mergeSort(numbers, 1, (left, right) => left < right);
    expect(numbers).toEqual([8, 6, 5, 4, 3, 3, 2, 1, 0]);
});
test('merge sort an array that contains 10 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5, 9];
    mergeSort(numbers, 1, (left, right) => left < right);
    expect(numbers).toEqual([9, 8, 6, 5, 4, 3, 3, 2, 1, 0]);
});
test('merge sort an array that contains 11 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5, 9, 7];
    mergeSort(numbers, 1, (left, right) => left < right);
    expect(numbers).toEqual([9, 8, 7, 6, 5, 4, 3, 3, 2, 1, 0]);
});
test('merge sort an array that contains 11 elements in descending order with assumption that there are 2 elements in each sorted run', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5, 9, 7];
    mergeSort(numbers, 2, (left, right) => left < right);
    expect(numbers).toEqual([7, 6, 5, 9, 4, 8, 3, 3, 2, 1, 0]);
});
test('sort an array that contains 0', () => {
    const numbers = [0];
    sort(numbers);
    expect(numbers).toEqual([0]);
});
test('sort an array that contains 1', () => {
    const numbers = [1];
    sort(numbers);
    expect(numbers).toEqual([1]);
});
test('sort an array that contains 1, 0', () => {
    const numbers = [1, 0];
    sort(numbers);
    expect(numbers).toEqual([0, 1]);
});
test("sort an array that contains 2 1's", () => {
    const numbers = [1, 1];
    sort(numbers);
    expect(numbers).toEqual([1, 1]);
});
test('sort an array that contains 2 and 1', () => {
    const numbers = [2, 1];
    sort(numbers);
    expect(numbers).toEqual([1, 2]);
});
test('sort an array that contains 2, 1 and 0', () => {
    const numbers = [2, 1, 0];
    sort(numbers);
    expect(numbers).toEqual([0, 1, 2]);
});
test('sort an array that contains 2, 1 and 1', () => {
    const numbers = [2, 1, 1];
    sort(numbers);
    expect(numbers).toEqual([1, 1, 2]);
});
test('sort an array that contains 2, 1 and 2', () => {
    const numbers = [2, 1, 2];
    sort(numbers);
    expect(numbers).toEqual([1, 2, 2]);
});
test('sort an array that contains 2, 1 and 3', () => {
    const numbers = [2, 1, 3];
    sort(numbers);
    expect(numbers).toEqual([1, 2, 3]);
});
test('sort an array that contains 2, 2 and 3', () => {
    const numbers = [2, 2, 3];
    sort(numbers);
    expect(numbers).toEqual([2, 2, 3]);
});
test('sort an array that contains 3, 2 and 3', () => {
    const numbers = [3, 2, 3];
    sort(numbers);
    expect(numbers).toEqual([2, 3, 3]);
});
test('sort an array that contains 4 elements', () => {
    const numbers = [3, 2, 3, 0];
    sort(numbers);
    expect(numbers).toEqual([0, 2, 3, 3]);
});
test('sort an array that contains 4 elements in descending order', () => {
    const numbers = [3, 2, 3, 0];
    sort(numbers, (left, right) => left < right);
    expect(numbers).toEqual([3, 3, 2, 0]);
});
test('sort an array that contains 5 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4];
    sort(numbers, (left, right) => left < right);
    expect(numbers).toEqual([4, 3, 3, 2, 0]);
});
test('sort an array that contains 6 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8];
    sort(numbers, (left, right) => left < right);
    expect(numbers).toEqual([8, 4, 3, 3, 2, 0]);
});
test('sort an array that contains 7 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6];
    sort(numbers, (left, right) => left < right);
    expect(numbers).toEqual([8, 6, 4, 3, 3, 2, 0]);
});
test('sort an array that contains 8 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1];
    sort(numbers, (left, right) => left < right);
    expect(numbers).toEqual([8, 6, 4, 3, 3, 2, 1, 0]);
});
test('sort an array that contains 9 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5];
    sort(numbers, (left, right) => left < right);
    expect(numbers).toEqual([8, 6, 5, 4, 3, 3, 2, 1, 0]);
});
test('sort an array that contains 10 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5, 9];
    sort(numbers, (left, right) => left < right);
    expect(numbers).toEqual([9, 8, 6, 5, 4, 3, 3, 2, 1, 0]);
});
test('sort an array that contains 11 elements in descending order', () => {
    const numbers = [3, 2, 3, 0, 4, 8, 6, 1, 5, 9, 7];
    sort(numbers, (left, right) => left < right);
    expect(numbers).toEqual([9, 8, 7, 6, 5, 4, 3, 3, 2, 1, 0]);
});
test('min', () => {
    expect(min([], () => 0)).toEqual([]);
    expect(min([0], () => 0)).toEqual([0]);
    expect(min([1], () => 0)).toEqual([1]);
    expect(min([2], () => 0)).toEqual([2]);
    expect(min([2, 0], () => 0)).toEqual([2, 0]);
    expect(min([2, 1], () => 0)).toEqual([2, 1]);
    expect(min([3, 1], () => 0)).toEqual([3, 1]);
    expect(min([3, 1, 0], value => value)).toEqual([0]);
    expect(min([3, 1, 0], value => -value)).toEqual([3]);
});
test('max', () => {
    expect(max([], () => 0)).toEqual([]);
    expect(max([0], () => 0)).toEqual([0]);
    expect(max([1], () => 0)).toEqual([1]);
    expect(max([2], () => 0)).toEqual([2]);
    expect(max([2, 0], () => 0)).toEqual([2, 0]);
    expect(max([2, 1], () => 0)).toEqual([2, 1]);
    expect(max([3, 1], () => 0)).toEqual([3, 1]);
    expect(max([3, 1, 0], value => value)).toEqual([3]);
    expect(max([3, 1, 0], value => -value)).toEqual([0]);
});
test('toArray', () => {
    expect(toArray({})).toEqual([]);
    expect(toArray({ 0: [{ value: 0, numbersHash: () => [0] }] }).map(obj => ({ value: obj.value })))
        .toEqual([{ value: 0 }]);
    expect(toArray({ 0: [{ value: 1, numbersHash: () => [0] }] }).map(obj => ({ value: obj.value })))
        .toEqual([{ value: 1 }]);
    expect(toArray({ 0: [{ value: 2, numbersHash: () => [0] }] }).map(obj => ({ value: obj.value })))
        .toEqual([{ value: 2 }]);
    expect(toArray({ 1: [{ value: 2, numbersHash: () => [1] }] }).map(obj => ({ value: obj.value })))
        .toEqual([{ value: 2 }]);
    expect(toArray({ 2: [{ value: 2, numbersHash: () => [2] }] }).map(obj => ({ value: obj.value })))
        .toEqual([{ value: 2 }]);
    expect(toArray({ 0: [{ value: 2, numbersHash: () => [2, 0] }], 2: [{ value: 2, numbersHash: () => [2, 0] }] })
        .map(obj => ({ value: obj.value }))).toEqual([{ value: 2 }]);
    expect(toArray({ 1: [{ value: 2, numbersHash: () => [2, 1] }], 2: [{ value: 2, numbersHash: () => [2, 1] }] })
        .map(obj => ({ value: obj.value }))).toEqual([{ value: 2 }]);
    expect(toArray({ 1: [{ value: 2, numbersHash: () => [3, 1] }], 3: [{ value: 2, numbersHash: () => [3, 1] }] })
        .map(obj => ({ value: obj.value }))).toEqual([{ value: 2 }]);
    expect(toArray({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }).map(obj => ({ value: obj.value }))).toEqual([{ value: 2 }]);
    expect(toArray({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        2: [{ value: 0, numbersHash: () => [2] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }).map(obj => ({ value: obj.value }))).toEqual([{ value: 2 }, { value: 0 }]);
    expect(toArray({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        2: [{ value: 1, numbersHash: () => [2] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }).map(obj => ({ value: obj.value }))).toEqual([{ value: 2 }, { value: 1 }]);
    expect(toArray({
        0: [{ value: 3, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 3, numbersHash: () => [3, 1, 0] }],
        2: [{ value: 1, numbersHash: () => [2] }],
        3: [{ value: 3, numbersHash: () => [3, 1, 0] }]
    }).map(obj => ({ value: obj.value }))).toEqual([{ value: 3 }, { value: 1 }]);
    expect(toArray({
        0: [{ value: 3, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 3, numbersHash: () => [3, 1, 0] }],
        2: [{ value: 1, numbersHash: () => [2] }],
        3: [{ value: 3, numbersHash: () => [3, 1, 0] }],
        4: [{ value: 0, numbersHash: () => [4] }]
    }).map(obj => ({ value: obj.value }))).toEqual([{ value: 3 }, { value: 1 }, { value: 0 }]);
});
test('toMap', () => {
    expect(toMap([])).toEqual({});
    expect(Object.entries(toMap([{ value: 0, numbersHash: () => [0] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 0 }] });
    expect(Object.entries(toMap([{ value: 1, numbersHash: () => [0] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 1 }] });
    expect(Object.entries(toMap([{ value: 2, numbersHash: () => [0] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }] });
    expect(Object.entries(toMap([{ value: 2, numbersHash: () => [1] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 1: [{ value: 2 }] });
    expect(Object.entries(toMap([{ value: 2, numbersHash: () => [2] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 2: [{ value: 2 }] });
    expect(Object.entries(toMap([{ value: 2, numbersHash: () => [2, 0] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 2: [{ value: 2 }] });
    expect(Object.entries(toMap([{ value: 2, numbersHash: () => [2, 1] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 1: [{ value: 2 }], 2: [{ value: 2 }] });
    expect(Object.entries(toMap([{ value: 2, numbersHash: () => [3, 1] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(toMap([{ value: 2, numbersHash: () => [3, 1, 0] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(toMap([{ value: 2, numbersHash: () => [3, 1, 0] }, { value: 0, numbersHash: () => [2] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 2: [{ value: 0 }], 3: [{ value: 2 }] });
    expect(Object.entries(toMap([{ value: 2, numbersHash: () => [3, 1, 0] }, { value: 1, numbersHash: () => [2] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 2: [{ value: 1 }], 3: [{ value: 2 }] });
    expect(Object.entries(toMap([{ value: 3, numbersHash: () => [3, 1, 0] }, { value: 1, numbersHash: () => [2] }]))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 3 }], 1: [{ value: 3 }], 2: [{ value: 1 }], 3: [{ value: 3 }] });
    expect(Object.entries(toMap([
        { value: 3, numbersHash: () => [3, 1, 0] },
        { value: 1, numbersHash: () => [2] },
        { value: 0, numbersHash: () => [4] }
    ])).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 3 }], 1: [{ value: 3 }], 2: [{ value: 1 }], 3: [{ value: 3 }], 4: [{ value: 0 }] });
});
test('add', () => {
    expect(add({}, {})).toEqual({});
    expect(Object.entries(add({ 0: [{ value: 0, numbersHash: () => [0] }] }, {}))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 0 }] });
    expect(Object.entries(add({ 0: [{ value: 1, numbersHash: () => [0] }] }, {}))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 1 }] });
    expect(Object.entries(add({ 0: [{ value: 2, numbersHash: () => [0] }] }, {}))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }] });
    expect(Object.entries(add({ 1: [{ value: 2, numbersHash: () => [1] }] }, {}))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 1: [{ value: 2 }] });
    expect(Object.entries(add({ 2: [{ value: 2, numbersHash: () => [2] }] }, {}))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 2: [{ value: 2 }] });
    expect(Object.entries(add({ 0: [{ value: 2, numbersHash: () => [2, 0] }], 2: [{ value: 2, numbersHash: () => [2, 0] }] }, {})).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 2: [{ value: 2 }] });
    expect(Object.entries(add({ 1: [{ value: 2, numbersHash: () => [2, 1] }], 2: [{ value: 2, numbersHash: () => [2, 1] }] }, {})).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 1: [{ value: 2 }], 2: [{ value: 2 }] });
    expect(Object.entries(add({ 1: [{ value: 2, numbersHash: () => [3, 1] }], 3: [{ value: 2, numbersHash: () => [3, 1] }] }, {})).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(add({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {})).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(add({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        0: [{ value: 0, numbersHash: () => [0] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }, { value: 0 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(add({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        0: [{ value: 1, numbersHash: () => [0] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }, { value: 1 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(add({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        0: [{ value: 2, numbersHash: () => [0] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }, { value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(add({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        1: [{ value: 2, numbersHash: () => [1] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }, { value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(add({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        2: [{ value: 2, numbersHash: () => [2] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 2: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(add({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        1: [{ value: 2, numbersHash: () => [2, 1] }],
        2: [{ value: 2, numbersHash: () => [2, 1] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }, { value: 2 }], 2: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(add({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        1: [{ value: 2, numbersHash: () => [3, 1] }],
        3: [{ value: 2, numbersHash: () => [3, 1] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }, { value: 2 }], 3: [{ value: 2 }, { value: 2 }] });
    expect(Object.entries(add({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
});
test('subtract', () => {
    expect(subtract({}, {})).toEqual({});
    expect(Object.entries(subtract({ 0: [{ value: 0, numbersHash: () => [0] }] }, {}))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 0 }] });
    expect(Object.entries(subtract({ 0: [{ value: 1, numbersHash: () => [0] }] }, {}))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 1 }] });
    expect(Object.entries(subtract({ 0: [{ value: 2, numbersHash: () => [0] }] }, {}))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }] });
    expect(Object.entries(subtract({ 1: [{ value: 2, numbersHash: () => [1] }] }, {}))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 1: [{ value: 2 }] });
    expect(Object.entries(subtract({ 2: [{ value: 2, numbersHash: () => [2] }] }, {}))
        .reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 2: [{ value: 2 }] });
    expect(Object.entries(subtract({ 0: [{ value: 2, numbersHash: () => [2, 0] }], 2: [{ value: 2, numbersHash: () => [2, 0] }] }, {})).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 2: [{ value: 2 }] });
    expect(Object.entries(subtract({ 1: [{ value: 2, numbersHash: () => [2, 1] }], 2: [{ value: 2, numbersHash: () => [2, 1] }] }, {})).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 1: [{ value: 2 }], 2: [{ value: 2 }] });
    expect(Object.entries(subtract({ 1: [{ value: 2, numbersHash: () => [3, 1] }], 3: [{ value: 2, numbersHash: () => [3, 1] }] }, {})).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(subtract({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {})).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(subtract({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        0: [{ value: 0, numbersHash: () => [0] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(subtract({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        0: [{ value: 1, numbersHash: () => [0] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(subtract({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        0: [{ value: 2, numbersHash: () => [0] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(subtract({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        1: [{ value: 2, numbersHash: () => [1] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(subtract({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        2: [{ value: 2, numbersHash: () => [2] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(subtract({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        1: [{ value: 2, numbersHash: () => [2, 1] }],
        2: [{ value: 2, numbersHash: () => [2, 1] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(subtract({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        1: [{ value: 2, numbersHash: () => [3, 1] }],
        3: [{ value: 2, numbersHash: () => [3, 1] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({ 0: [{ value: 2 }], 1: [{ value: 2 }], 3: [{ value: 2 }] });
    expect(Object.entries(subtract({
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    }, {
        0: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        1: [{ value: 2, numbersHash: () => [3, 1, 0] }],
        3: [{ value: 2, numbersHash: () => [3, 1, 0] }]
    })).reduce((map, [key, array]) => ({ ...map, [key]: array.map(object => ({ value: object.value })) }), {})).toEqual({});
});
