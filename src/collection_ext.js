'use strict';
import { requireDefined, swapInHolders } from '../index.js';
import Range from './Range.js';
import Holder from './Holder.js';
export function swapInArray(array, leftIndex, rightIndex) {
    const left = requireDefined(array[leftIndex]);
    array[leftIndex] = requireDefined(array[rightIndex]);
    array[rightIndex] = left;
}
export function copy(srcArray, destArray) {
    for (let i = 0; i !== srcArray.length; ++i)
        destArray[i] = requireDefined(srcArray[i]);
}
export function insertionSort(array, indices = new Range(0, Number.MAX_SAFE_INTEGER), compare = (left, right) => left > right) {
    const maxIndex = Math.min(indices.max, array.length - 1);
    for (let i = indices.min + 1; i <= maxIndex; ++i) {
        for (let j = i; j > indices.min; --j) {
            if (compare(requireDefined(array[j - 1]), requireDefined(array[j])))
                swapInArray(array, j - 1, j);
            else
                break;
        }
    }
}
export function insertionSorts(array, runSize = Number.MAX_SAFE_INTEGER, compare = (left, right) => left > right) {
    for (let i = 0; i < array.length; i += runSize)
        insertionSort(array, new Range(i, i + runSize - 1), compare);
}
export function mergeSort(array, sortedRunSize = 1, compare = (left, right) => left > right) {
    if (array.length <= 1)
        return;
    let step = sortedRunSize * 2;
    const currentArray = new Holder([]);
    const nextArray = new Holder(array);
    while (true) {
        for (let i = 0; i < array.length; i += step) {
            const leftEnd = Math.floor(i + step * 0.5);
            const rightEnd = i + step;
            let left = i;
            let right = leftEnd;
            let current = i;
            while (left !== leftEnd || right !== rightEnd) {
                if (left === array.length || (left === leftEnd && right === array.length))
                    break;
                if (right < array.length && right !== rightEnd && (left === leftEnd || compare(requireDefined(nextArray.value[left]), requireDefined(nextArray.value[right])))) {
                    currentArray.value[current] = requireDefined(nextArray.value[right]);
                    ++right;
                }
                else {
                    currentArray.value[current] = requireDefined(nextArray.value[left]);
                    ++left;
                }
                ++current;
            }
        }
        swapInHolders(currentArray, nextArray);
        if (step >= array.length)
            break;
        step *= 2;
    }
    if (currentArray.value === array)
        copy(nextArray.value, array);
}
export function sort(array, compare = (left, right) => left > right) {
    const runSize = 32;
    insertionSorts(array, runSize, compare);
    mergeSort(array, runSize, compare);
}
