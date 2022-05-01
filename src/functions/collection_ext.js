'use strict';
import { requireDefined, swapInHolders } from '../../index.js';
import Bound from '../struct/Bound.js';
import Holder from '../struct/Holder.js';
export function swapInArray(array, leftIndex, rightIndex) {
    const left = requireDefined(array[leftIndex]);
    array[leftIndex] = requireDefined(array[rightIndex]);
    array[rightIndex] = left;
}
export function copy(srcArray, destArray) {
    for (let i = 0; i !== srcArray.length; ++i)
        destArray[i] = requireDefined(srcArray[i]);
}
export function insertionSort(array, indices = new Bound(0, Number.MAX_SAFE_INTEGER), compare = (left, right) => left > right) {
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
        insertionSort(array, new Bound(i, i + runSize - 1), compare);
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
                if (right < array.length && right !== rightEnd && (left === leftEnd ||
                    compare(requireDefined(nextArray.value[left]), requireDefined(nextArray.value[right])))) {
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
    const runSize = 16;
    insertionSorts(array, runSize, compare);
    mergeSort(array, runSize, compare);
}
export function min(array, getValue) {
    let minValue = Infinity;
    let result = [];
    for (let i = 0; i !== array.length; ++i) {
        const object = array[i];
        if (object === undefined)
            continue;
        const value = getValue(object, i);
        if (value > minValue)
            continue;
        else if (value < minValue) {
            minValue = value;
            result = [object];
        }
        else
            result.push(object);
    }
    return result;
}
export function max(array, getValue) {
    let maxValue = -Infinity;
    let result = [];
    for (let i = 0; i !== array.length; ++i) {
        const object = array[i];
        if (object === undefined)
            continue;
        const value = getValue(object, i);
        if (value < maxValue)
            continue;
        else if (value > maxValue) {
            maxValue = value;
            result = [object];
        }
        else
            result.push(object);
    }
    return result;
}
export function toArray(map) {
    const result = [];
    const isExists = {};
    for (const objects of Object.values(map)) {
        for (const object of objects) {
            if (isExists[object.numbersHash().toString()] !== undefined)
                continue;
            result.push(object);
            isExists[object.numbersHash().toString()] = true;
        }
    }
    return result;
}
export function toMap(array) {
    const result = {};
    for (const object of array) {
        for (const hashPart of object.numbersHash()) {
            const row = result[hashPart];
            if (row === undefined)
                result[hashPart] = [object];
            else
                row.push(object);
        }
    }
    return result;
}
export function add(am, bm) {
    const rm = {};
    const isExists = {};
    for (const a of toArray(am)) {
        for (const hashPart of a.numbersHash()) {
            const rr = rm[hashPart];
            if (rr === undefined)
                rm[hashPart] = [a];
            else
                rr.push(a);
        }
        isExists[a.numbersHash().toString()] = true;
    }
    for (const b of toArray(bm)) {
        if (isExists[b.numbersHash().toString()] !== undefined)
            continue;
        for (const hashPart of b.numbersHash()) {
            const rr = rm[hashPart];
            if (rr === undefined)
                rm[hashPart] = [b];
            else
                rr.push(b);
        }
    }
    return rm;
}
export function subtract(am, bm) {
    const rm = {};
    const isExists = {};
    for (const b of toArray(bm))
        isExists[b.numbersHash().toString()] = true;
    for (const a of toArray(am)) {
        if (isExists[a.numbersHash().toString()] !== undefined)
            continue;
        for (const hashPart of a.numbersHash()) {
            const rr = rm[hashPart];
            if (rr === undefined)
                rm[hashPart] = [a];
            else
                rr.push(a);
        }
    }
    return rm;
}
