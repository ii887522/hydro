'use strict'

import Range from './Range.js'

/**
 * It converts nanoseconds into seconds.
 *
 * @param nanoseconds The value to be converted.
 * @returns The received value in terms of seconds.
 */
export function toSeconds (nanoseconds: number): number {
  return nanoseconds * 1e-9
}

/**
 * It checks whether the received `value` is an odd number.
 *
 * @param value The value to be checked.
 * @returns true if the `value` is an odd number, false otherwise.
 */
export function isOdd (value: number): boolean {
  return value % 2 === 1
}

/**
 * It checks whether the received `value` is an even number.
 *
 * @param value The value to be checked.
 * @returns true if the `value` is an even number, false otherwise.
 */
export function isEven (value: number): boolean {
  return value % 2 === 0
}

/**
 * It checks whether the received `value` is a prime number.
 *
 * @param value The value to be checked.
 * @returns true if the `value` is a prime number, false otherwise.
 */
export function isPrime (value: number): boolean {
  if (value <= 1) return false
  if (value === 2) return true
  if (isEven(value)) return false
  if (value < 9) return true
  const sqrtOfValue = Math.floor(Math.sqrt(value))
  if (sqrtOfValue * sqrtOfValue === value) return false
  if (value < 15) return true
  for (let i = 3; i <= sqrtOfValue; i += 2) {
    if (Math.floor(value / i) * i === value) return false
  }
  return true
}

/**
 * It finds out the next prime number after the given `from`.
 *
 * @param from The starting value to find the next prime number.
 * @returns The next prime number immediately after `from`.
 */
export function getNextPrime (from: number): number {
  if (from < 2) return 2
  let result = from + (isEven(from) ? 1 : 2)
  while (!isPrime(result)) result += 2
  return result
}

/**
 * It constraints the `value` given in the `range` and returns the result.
 *
 * @param value The value to be constrained.
 * @param range The range the constrainted value can be in.
 * @returns The constrained value.
 */
export function clamp (value: number, range: Range): number {
  if (value < range.min) return range.min
  else if (value > range.max) return range.max
  else return value
}

/**
 * It checks whether the `value` is in the given `range`.
 *
 * @param value The value to be checked with.
 * @param range The range to be checked with.
 * @returns true if the `value` is in the given `range`, false otherwise.
 */
export function isOverlap (value: number, range: Range): boolean {
  return value >= range.min && value <= range.max
}

/**
 * It checks whether the `value` given is equal to 2 to the power of n where n is an integer.
 *
 * @param value The value to be checked.
 * @returns true if the `value` is equal to 2 to the power of n where n is an integer, false otherwise.
 */
export function isPowerOfTwo (value: number): boolean {
  const power = Math.log2(value)
  return power === Math.floor(power)
}
