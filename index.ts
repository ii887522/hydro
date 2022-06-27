'use strict'

import Holder from './src/struct/Holder.js'

export * from './src/any/index.js'
export * from './src/collection/index.js'
export * from './src/funcs/index.js'
export * from './src/reactive/index.js'
export * from './src/struct/index.js'

/**
 * It simply consumes any object received and do nothing for it and return immediately.
 *
 * @param _ The object to be consumed.
 */
export function consume (_: any): void { }

/**
 * It converts the string representation of boolean to a value of boolean type.
 *
 * @param value The string representation of boolean.
 * @returns A boolean.
 */
export function Boolean (value: string): boolean {
  return value === 'true'
}

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
 * It converts `seconds` into a time with a format like 'mmm:ss'.
 *
 * @param seconds The value to be converted.
 * @returns The received value in terms of time with a format like 'mmm:ss'.
 */
export function formatTime (seconds: number): string {
  const secondsPerMinute = 60
  return (
    `${Math.floor(Math.ceil(seconds) / secondsPerMinute)}:` +
    `${(Math.ceil(seconds) % secondsPerMinute).toString().padStart(2, '0')}`
  )
}
