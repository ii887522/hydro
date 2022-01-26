'use strict'

import Holder from './src/Holder.js'
import Range from './src/Range.js'

export { default as AvlTree } from './src/AvlTree.js'
export * from './src/collection_ext.js'
export * from './src/components.js'
export { default as DynamicUint8Array } from './src/DynamicUint8Array.js'
export * from './src/fs_ext.js'
export { Holder }
export * from './src/math_ext.js'
export { Range }
export { default as Reactive } from './src/Reactive.js'
export * from './src/string_ext.js'
export * from './src/worker_ext.js'

/**
 * It simply consumes any object received and do nothing for it and return immediately.
 *
 * @param _ The object to be consumed.
 */
export function consume (_: any): void { }

/**
 * It simply requires that the `object` received must not be undefined.
 *
 * @param object The object to be checked for.
 * @returns The `object` which is always defined.
 */
export function requireDefined<T> (object: T | undefined): T {
  if (object === undefined) throw new ReferenceError('object should not be undefined!')
  return object
}

/**
 * It checks whether the content of both arrays received are exactly the same.
 *
 * @param left The first array to be compared.
 * @param right The second array to be compared.
 * @returns true if both arrays received are exactly the same, false otherwise.
 */
export function equal (left: Uint8Array, right: Uint8Array): boolean {
  if (left.length !== right.length) return false
  for (let i = 0; i !== left.length; ++i) {
    if (left[i] !== right[i]) return false
  }
  return true
}

/**
 * It exchanges objects that are held by both holders.
 *
 * @param left The first holder where its object will be exchanged.
 * @param right The second holder where its object will be exchanged.
 */
export function swapInHolders<T> (left: Holder<T>, right: Holder<T>): void {
  const aux = left.value
  left.value = right.value
  right.value = aux
}

/**
 * It converts seconds into a time with a format like 'mmm:ss'.
 *
 * @param seconds The value to be converted.
 * @returns The received value in terms of time with a format like 'mmm:ss'.
 */
export function formatTime (seconds: number): string {
  const secondsPerMinute = 60
  return `${Math.floor(Math.ceil(seconds) / secondsPerMinute)}:${(Math.ceil(seconds) % secondsPerMinute).toString().padStart(2, '0')}`
}
