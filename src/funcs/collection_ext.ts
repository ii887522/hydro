'use strict'

import { requireDefined, swapInHolders } from '../../index.js'
import Bound from '../struct/Bound.js'
import Holder from '../struct/Holder.js'
import NumbersHashable from '../any/NumbersHashable.js'

/**
 * Exchanges objects that are inside the received `array`.
 *
 * @param array The array that contains objects to be exchanged with each other.
 * @param leftID The index which identifies the left object to be moved.
 * @param rightID The index which identifies the right object to be moved.
 */
export function swapInArray<T> (array: T[], leftID: number, rightID: number): void {
  const left = requireDefined(array[leftID])
  array[leftID] = requireDefined(array[rightID])
  array[rightID] = left
}

/**
 * Copy the whole contents of the `srcArray` into the `destArray`.
 *
 * @param srcArray The array to copy from.
 * @param destArray The array to copy into.
 */
export function copy<T> (srcArray: T[], destArray: T[]): void {
  for (let i = 0; i !== srcArray.length; ++i) destArray[i] = requireDefined(srcArray[i])
}

/**
 * Sorts a portion of the array `received` by using insertion sort.
 *
 * @param array The array to be sorted from.
 * @param indices The indices specify the portion of the `array` where the elements inside it will become sorted.
 * @param compare The function used to determine whether the positions of both elements should be swapped during
 *   sorting. If the function returns true, both elements will be swapped, otherwise nothing happens.
 */
export function insertionSort<T> (
  array: T[],
  indices: Bound = new Bound(0, Number.MAX_SAFE_INTEGER),
  compare: (left: T, right: T) => boolean = (left, right) => left > right
): void {
  const maxID = Math.min(indices.max, array.length - 1)
  for (let i = indices.min + 1; i <= maxID; ++i) {
    for (let j = i; j > indices.min; --j) {
      if (compare(requireDefined(array[j - 1]), requireDefined(array[j]))) swapInArray(array, j - 1, j)
      else break
    }
  }
}

/**
 * Sorts the `array` received into a sequence of sorted runs by using insertion sort. A run is a number of
 * consecutive elements which is a part of the `array`.
 *
 * @param array The array to be sorted from.
 * @param runSize The size of the consecutive elements which will become sorted.
 * @param compare The function used to determine whether the positions of both elements should be swapped during
 *   sorting. If the function returns true, both elements will be swapped, otherwise nothing happens.
 */
export function insertionSorts<T> (
  array: T[],
  runSize: number = Number.MAX_SAFE_INTEGER,
  compare: (left: T, right: T) => boolean = (left, right) => left > right
): void {
  for (let i = 0; i < array.length; i += runSize) insertionSort(array, new Bound(i, i + runSize - 1), compare)
}

/**
 * Sorts the `array` received by using merge sort and assuming that there is a sequence of sorted runs in the
 * `array`. Each sorted run has `sortedRunSize` consecutive elements which is a part of the `array`.
 *
 * @param array The array to be sorted from.
 * @param sortedRunSize The size of the consecutive elements which has become sorted.
 * @param compare The function used to determine whether the positions of both elements should be swapped during
 *   sorting. If the function returns true, both elements will be swapped, otherwise nothing happens.
 */
export function mergeSort<T> (
  array: T[], sortedRunSize: number = 1, compare: (left: T, right: T) => boolean = (left, right) => left > right
): void {
  if (array.length <= 1) return
  let step = sortedRunSize * 2
  const currentArray = new Holder<T[]>([])
  const nextArray = new Holder(array)
  while (true) {
    for (let i = 0; i < array.length; i += step) {
      const leftEnd = Math.floor(i + step * 0.5)
      const rightEnd = i + step
      let left = i
      let right = leftEnd
      let current = i
      while (left !== leftEnd || right !== rightEnd) {
        if (left === array.length || (left === leftEnd && right === array.length)) break
        if (
          right < array.length && right !== rightEnd && (left === leftEnd ||
          compare(requireDefined(nextArray.value[left]), requireDefined(nextArray.value[right])))
        ) {
          currentArray.value[current] = requireDefined(nextArray.value[right])
          ++right
        } else {
          currentArray.value[current] = requireDefined(nextArray.value[left])
          ++left
        }
        ++current
      }
    }
    swapInHolders(currentArray, nextArray)
    if (step >= array.length) break
    step *= 2
  }
  if (currentArray.value === array) copy(nextArray.value, array)
}

/**
 * Sorts the `array` received by using tim sort.
 *
 * @param array The array to be sorted from.
 * @param compare The function used to determine whether the positions of both elements should be swapped during
 *   sorting. If the function returns true, both elements will be swapped, otherwise nothing happens.
 */
export function sort<T> (array: T[], compare: (left: T, right: T) => boolean = (left, right) => left > right): void {
  const runSize = 16
  insertionSorts(array, runSize, compare)
  mergeSort(array, runSize, compare)
}

/**
 * Find the minimum objects from the `array` received determined by the value retrieved from each object in the
 * `array` through the `getValue` function given.
 *
 * @param array The array to be searched from.
 * @param getValue The function that retrieves a value from the object in the `array`.
 * @returns The minimum objects.
 */
export function min<T> (array: T[], getValue: (object: T, id: number) => number): T[] {
  let minValue = Infinity
  let result: T[] = []
  for (let i = 0; i !== array.length; ++i) {
    const object = array[i]
    if (object === undefined) continue
    const value = getValue(object, i)
    if (value > minValue) continue
    else if (value < minValue) {
      minValue = value
      result = [object]
    } else result.push(object)
  }
  return result
}

/**
 * Find the maximum objects from the `array` received determined by the value retrieved from each object in the
 * `array` through the `getValue` function given.
 *
 * @param array The array to be searched from.
 * @param getValue The function that retrieves a value from the object in the `array`.
 * @returns The maximum objects.
 */
export function max<T> (array: T[], getValue: (object: T, id: number) => number): T[] {
  let maxValue = -Infinity
  let result: T[] = []
  for (let i = 0; i !== array.length; ++i) {
    const object = array[i]
    if (object === undefined) continue
    const value = getValue(object, i)
    if (value < maxValue) continue
    else if (value > maxValue) {
      maxValue = value
      result = [object]
    } else result.push(object)
  }
  return result
}

/**
 * Converts the `map` given which may have duplicate objects into an array without duplicates.
 *
 * @param map The map to be converted from.
 * @returns An array without duplicates.
 */
export function toArray<T extends NumbersHashable> (map: { [key: string]: T[] }): T[] {
  const result: T[] = []
  const isExists: { [hash: string]: boolean } = { }
  for (const objects of Object.values(map)) {
    for (const object of objects) {
      if (isExists[object.numbersHash().toString()] !== undefined) continue
      result.push(object)
      isExists[object.numbersHash().toString()] = true
    }
  }
  return result
}

/**
 * Converts the `array` given without duplicate objects into a map with duplicates.
 *
 * @param array The array to be converted from.
 * @returns A map with duplicates.
 */
export function toMap<T extends NumbersHashable> (array: T[]): { [key: string]: T[] } {
  const result: { [key: string]: T[] } = { }
  for (const object of array) {
    for (const hashPart of object.numbersHash()) {
      const row = result[hashPart]
      if (row === undefined) result[hashPart] = [object]
      else row.push(object)
    }
  }
  return result
}

/**
 * Concatenates two maps received that may have duplicate objects into a map which contains duplicates.
 *
 * @param am The first map to include.
 * @param bm The second map to include.
 * @returns A map which contains duplicates.
 */
export function add<T extends NumbersHashable> (
  am: { [k: string]: T[] }, bm: { [k: string]: T[] }
): { [k: string]: T[] } {
  const rm: { [k: string]: T[] } = { }
  const isExists: { [hash: string]: boolean } = { }
  for (const a of toArray(am)) {
    for (const hashPart of a.numbersHash()) {
      const rr = rm[hashPart]
      if (rr === undefined) rm[hashPart] = [a]
      else rr.push(a)
    }
    isExists[a.numbersHash().toString()] = true
  }
  for (const b of toArray(bm)) {
    if (isExists[b.numbersHash().toString()] !== undefined) continue
    for (const hashPart of b.numbersHash()) {
      const rr = rm[hashPart]
      if (rr === undefined) rm[hashPart] = [b]
      else rr.push(b)
    }
  }
  return rm
}

/**
 * Removes objects from the first map where they exist in the second map and returns it.
 *
 * @param am The map to remove objects from.
 * @param bm The map which contains the objects to be searched from the first map for removal.
 * @returns The first map without objects that exist in the second map.
 */
export function subtract<T extends NumbersHashable> (
  am: { [k: string]: T[] }, bm: { [k: string]: T[] }
): { [k: string]: T[] } {
  const rm: { [k: string]: T[] } = { }
  const isExists: { [hash: string]: boolean } = { }
  for (const b of toArray(bm)) isExists[b.numbersHash().toString()] = true
  for (const a of toArray(am)) {
    if (isExists[a.numbersHash().toString()] !== undefined) continue
    for (const hashPart of a.numbersHash()) {
      const rr = rm[hashPart]
      if (rr === undefined) rm[hashPart] = [a]
      else rr.push(a)
    }
  }
  return rm
}
