'use strict'

import Sequence from '../struct/Sequence.js'
import Vector2 from '../struct/Vector2.js'
import Vector3 from '../struct/Vector3.js'
import Vector4 from '../struct/Vector4.js'

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
 * It checks whether the `value` given is equal to 2 to the power of n where n is an integer.
 *
 * @param value The value to be checked.
 * @returns true if the `value` is equal to 2 to the power of n where n is an integer, false otherwise.
 */
export function isPowerOfTwo (value: number): boolean {
  const power = Math.log2(value)
  return power === Math.floor(power)
}

/**
 * It performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.
 *
 * @param t The time to requset for a linear interpolation result.
 * @param a The value when `t` = 0 .
 * @param b The value when `t` = 1 .
 * @returns A value at time `t`.
 */
export function lerp (t: number, a: number, b: number): number {
  return a + (b - a) * t
}

/**
 * It performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.
 *
 * @param t The time to requset for a linear interpolation result.
 * @param a The value when `t` = 0 .
 * @param b The value when `t` = 1 .
 * @returns A value at time `t`.
 */
export function lerpVector2 (t: number, a: Vector2, b: Vector2): Vector2 {
  return new Vector2(lerp(t, a.x, b.x), lerp(t, a.y, b.y))
}

/**
 * It performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.
 *
 * @param t The time to requset for a linear interpolation result.
 * @param a The value when `t` = 0 .
 * @param b The value when `t` = 1 .
 * @returns A value at time `t`.
 */
export function lerpVector3 (t: number, a: Vector3, b: Vector3): Vector3 {
  return new Vector3(lerp(t, a.x, b.x), lerp(t, a.y, b.y), lerp(t, a.z, b.z))
}

/**
 * It performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.
 *
 * @param t The time to requset for a linear interpolation result.
 * @param a The value when `t` = 0 .
 * @param b The value when `t` = 1 .
 * @returns A value at time `t`.
 */
export function lerpVector4 (t: number, a: Vector4, b: Vector4): Vector4 {
  return new Vector4(lerp(t, a.x, b.x), lerp(t, a.y, b.y), lerp(t, a.z, b.z), lerp(t, a.w, b.w))
}

/**
 * It finds a minimum positive value and its associated index from the array given.
 *
 * @param values The array to search from.
 * @returns A minimum positive value and its associated index from the array given.
 */
export function minPositive (...values: readonly number[]): { index: number, value: number } {
  let minPositiveValue = Infinity
  let index = -1
  for (let i = 0; i !== values.length; ++i) {
    const value = values[i]
    if (value === undefined || value < 0 || value >= minPositiveValue) continue
    minPositiveValue = value
    index = i
  }
  return { index, value: minPositiveValue }
}

/**
 * It finds a maximum positive value and its associated index from the array given.
 *
 * @param values The array to search from.
 * @returns A maximum positive value and its associated index from the array given.
 */
export function maxPositive (...values: readonly number[]): { index: number, value: number } {
  let maxPositiveValue = -Infinity
  let index = -1
  for (let i = 0; i !== values.length; ++i) {
    const value = values[i]
    if (value === undefined || value < 0 || value <= maxPositiveValue) continue
    maxPositiveValue = value
    index = i
  }
  return { index, value: maxPositiveValue }
}

/**
 * It finds a minimum negative value and its associated index from the array given.
 *
 * @param values The array to search from.
 * @returns A minimum negative value and its associated index from the array given.
 */
export function minNegative (...values: readonly number[]): { index: number, value: number } {
  let minNegativeValue = Infinity
  let index = -1
  for (let i = 0; i !== values.length; ++i) {
    const value = values[i]
    if (value === undefined || value >= 0 || value >= minNegativeValue) continue
    minNegativeValue = value
    index = i
  }
  return { index, value: minNegativeValue }
}

/**
 * It finds a maximum negative value and its associated index from the array given.
 *
 * @param values The array to search from.
 * @returns A maximum negative value and its associated index from the array given.
 */
export function maxNegative (...values: readonly number[]): { index: number, value: number } {
  let maxNegativeValue = -Infinity
  let index = -1
  for (let i = 0; i !== values.length; ++i) {
    const value = values[i]
    if (value === undefined || value >= 0 || value <= maxNegativeValue) continue
    maxNegativeValue = value
    index = i
  }
  return { index, value: maxNegativeValue }
}

/**
 * It linearly maps the `value` from the first sequence given to the second sequence given.
 *
 * @param value The value to map from.
 * @param from The sequence that the `value` belongs to.
 * @param to The sequence that the `value` maps to.
 * @returns A mapped value that belongs to the second sequence given.
 */
export function linearMap (value: number, from: Sequence, to: Sequence): number {
  return to.unnormalize(from.normalize(value))
}

/**
 * It linearly maps the `value` from the first region given to the second region given.
 *
 * @param value The value to map from.
 * @param fromPosition The position of the region that the `value` belongs to.
 * @param fromSize The size of the region that the `value` belongs to.
 * @param toPosition The position of the region that the `value` maps to.
 * @param toSize The size of the region that the `value` maps to.
 * @returns A mapped value that belongs to the second region given.
 */
export function linearMapVector2 (
  value: Vector2, fromPosition: Vector2, fromSize: Vector2, toPosition: Vector2, toSize: Vector2
): Vector2 {
  return new Vector2(
    linearMap(
      value.x,
      new Sequence(fromPosition.x, fromPosition.x + fromSize.x),
      new Sequence(toPosition.x, toPosition.x + toSize.x)
    ),
    linearMap(
      value.y,
      new Sequence(fromPosition.y, fromPosition.y + fromSize.y),
      new Sequence(toPosition.y, toPosition.y + toSize.y)
    )
  )
}
