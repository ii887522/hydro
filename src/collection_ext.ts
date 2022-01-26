'use strict'

import { requireDefined, swapInHolders } from '../index.js'
import Range from './Range.js'
import Holder from './Holder.js'

/**
 * It exchanges objects that are inside the received `array`.
 *
 * @param array The array that contains objects to be exchanged with each other.
 * @param leftIndex The index which identifies the left object to be moved.
 * @param rightIndex The index which identifies the right object to be moved.
 */
export function swapInArray<T> (array: T[], leftIndex: number, rightIndex: number): void {
  const left = requireDefined(array[leftIndex])
  array[leftIndex] = requireDefined(array[rightIndex])
  array[rightIndex] = left
}

/**
 * It copy the whole contents of the `srcArray` into the `destArray`.
 *
 * @param srcArray The array to copy from.
 * @param destArray The array to copy into.
 */
export function copy<T> (srcArray: T[], destArray: T[]): void {
  for (let i = 0; i !== srcArray.length; ++i) destArray[i] = requireDefined(srcArray[i])
}

/**
 * It sorts a portion of the array `received` by using insertion sort.
 *
 * @param array The array to be sorted from.
 * @param indices The indices specify the portion of the `array` where the elements inside it will become sorted.
 * @param compare The function used to determine whether the positions of both elements should be swapped during sorting. If the function returns true, both elements will be
 *   swapped, otherwise nothing happens.
 */
export function insertionSort<T> (
  array: T[], indices: Range = new Range(0, Number.MAX_SAFE_INTEGER), compare: (left: T, right: T) => boolean = (left, right) => left > right
): void {
  const maxIndex = Math.min(indices.max, array.length - 1)
  for (let i = indices.min + 1; i <= maxIndex; ++i) {
    for (let j = i; j > indices.min; --j) {
      if (compare(requireDefined(array[j - 1]), requireDefined(array[j]))) swapInArray(array, j - 1, j)
      else break
    }
  }
}

/**
 * It sorts the `array` received into a sequence of sorted runs by using insertion sort. A run is a number of consecutive elements which is a part of the `array`.
 *
 * @param array The array to be sorted from.
 * @param runSize The size of the consecutive elements which will become sorted.
 * @param compare The function used to determine whether the positions of both elements should be swapped during sorting. If the function returns true, both elements will be
 *   swapped, otherwise nothing happens.
 */
export function insertionSorts<T> (array: T[], runSize: number = Number.MAX_SAFE_INTEGER, compare: (left: T, right: T) => boolean = (left, right) => left > right): void {
  for (let i = 0; i < array.length; i += runSize) insertionSort(array, new Range(i, i + runSize - 1), compare)
}

/**
 * It sorts the `array` received by using merge sort and assuming that there is a sequence of sorted runs in the `array`. Each sorted run has `sortedRunSize` consecutive
 * elements which is a part of the `array`.
 *
 * @param array The array to be sorted from.
 * @param sortedRunSize The size of the consecutive elements which has become sorted.
 * @param compare The function used to determine whether the positions of both elements should be swapped during sorting. If the function returns true, both elements will be
 *   swapped, otherwise nothing happens.
 */
export function mergeSort<T> (array: T[], sortedRunSize: number = 1, compare: (left: T, right: T) => boolean = (left, right) => left > right): void {
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
        if (right < array.length && right !== rightEnd && (left === leftEnd || compare(requireDefined(nextArray.value[left]), requireDefined(nextArray.value[right])))) {
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
 * It sorts the `array` received by using tim sort.
 *
 * @param array The array to be sorted from.
 * @param compare The function used to determine whether the positions of both elements should be swapped during sorting. If the function returns true, both elements will be
 *   swapped, otherwise nothing happens.
 */
export function sort<T> (array: T[], compare: (left: T, right: T) => boolean = (left, right) => left > right): void {
  const runSize = 32
  insertionSorts(array, runSize, compare)
  mergeSort(array, runSize, compare)
}
