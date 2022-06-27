'use strict'

import Seq from '../struct/Seq.js'
import Vec2 from '../struct/Vec2.js'
import Vec3 from '../struct/Vec3.js'
import Vec4 from '../struct/Vec4.js'

/**
 * Converts nanoseconds into seconds.
 *
 * @param nanosec The value to be converted.
 * @returns The received value in terms of seconds.
 */
export function toSec (nanosec: number): number {
  return nanosec * 1e-9
}

/**
 * Checks whether the received `value` is an odd number.
 *
 * @param value The value to be checked.
 * @returns true if the `value` is an odd number, false otherwise.
 */
export function isOdd (value: number): boolean {
  return value % 2 === 1
}

/**
 * Checks whether the received `value` is an even number.
 *
 * @param value The value to be checked.
 * @returns true if the `value` is an even number, false otherwise.
 */
export function isEven (value: number): boolean {
  return value % 2 === 0
}

/**
 * Checks whether the received `value` is a prime number.
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
 * Finds out the next prime number after the given `from`.
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
 * Checks whether the `value` given is equal to 2 to the power of n where n is an integer.
 *
 * @param value The value to be checked.
 * @returns true if the `value` is equal to 2 to the power of n where n is an integer, false otherwise.
 */
export function isPowOf2 (value: number): boolean {
  const power = Math.log2(value)
  return power === Math.floor(power)
}

/**
 * Performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.
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
 * Performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.
 *
 * @param t The time to requset for a linear interpolation result.
 * @param a The value when `t` = 0 .
 * @param b The value when `t` = 1 .
 * @returns A value at time `t`.
 */
export function lerpVec2 (t: number, a: Vec2, b: Vec2): Vec2 {
  return new Vec2(lerp(t, a.x, b.x), lerp(t, a.y, b.y))
}

/**
 * Performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.
 *
 * @param t The time to requset for a linear interpolation result.
 * @param a The value when `t` = 0 .
 * @param b The value when `t` = 1 .
 * @returns A value at time `t`.
 */
export function lerpVec3 (t: number, a: Vec3, b: Vec3): Vec3 {
  return new Vec3(lerp(t, a.x, b.x), lerp(t, a.y, b.y), lerp(t, a.z, b.z))
}

/**
 * Performs a linear interpolation to find a value at time `t` when t = 0, value is `a`; t = 1, value is `b`.
 *
 * @param t The time to requset for a linear interpolation result.
 * @param a The value when `t` = 0 .
 * @param b The value when `t` = 1 .
 * @returns A value at time `t`.
 */
export function lerpVec4 (t: number, a: Vec4, b: Vec4): Vec4 {
  return new Vec4(lerp(t, a.x, b.x), lerp(t, a.y, b.y), lerp(t, a.z, b.z), lerp(t, a.w, b.w))
}

/**
 * Finds a minimum positive value and its associated index from the array given.
 *
 * @param values The array to search from.
 * @returns A minimum positive value and its associated index from the array given.
 */
export function minPos (...values: readonly number[]): { id: number, value: number } {
  let minPosValue = Infinity
  let id = -1
  for (let i = 0; i !== values.length; ++i) {
    const value = values[i]
    if (value === undefined || value < 0 || value >= minPosValue) continue
    minPosValue = value
    id = i
  }
  return { id, value: minPosValue }
}

/**
 * Finds a maximum positive value and its associated index from the array given.
 *
 * @param values The array to search from.
 * @returns A maximum positive value and its associated index from the array given.
 */
export function maxPos (...values: readonly number[]): { id: number, value: number } {
  let maxPosValue = -Infinity
  let id = -1
  for (let i = 0; i !== values.length; ++i) {
    const value = values[i]
    if (value === undefined || value < 0 || value <= maxPosValue) continue
    maxPosValue = value
    id = i
  }
  return { id, value: maxPosValue }
}

/**
 * Finds a minimum negative value and its associated index from the array given.
 *
 * @param values The array to search from.
 * @returns A minimum negative value and its associated index from the array given.
 */
export function minNeg (...values: readonly number[]): { id: number, value: number } {
  let minNegValue = Infinity
  let id = -1
  for (let i = 0; i !== values.length; ++i) {
    const value = values[i]
    if (value === undefined || value >= 0 || value >= minNegValue) continue
    minNegValue = value
    id = i
  }
  return { id, value: minNegValue }
}

/**
 * Finds a maximum negative value and its associated index from the array given.
 *
 * @param values The array to search from.
 * @returns A maximum negative value and its associated index from the array given.
 */
export function maxNeg (...values: readonly number[]): { id: number, value: number } {
  let maxNegValue = -Infinity
  let id = -1
  for (let i = 0; i !== values.length; ++i) {
    const value = values[i]
    if (value === undefined || value >= 0 || value <= maxNegValue) continue
    maxNegValue = value
    id = i
  }
  return { id, value: maxNegValue }
}

/**
 * Linearly maps the `value` from the first sequence given to the second sequence given.
 *
 * @param value The value to map from.
 * @param from The sequence that the `value` belongs to.
 * @param to The sequence that the `value` maps to.
 * @returns A mapped value that belongs to the second sequence given.
 */
export function linearMap (value: number, from: Seq, to: Seq): number {
  return to.unnormalize(from.normalize(value))
}

/**
 * Linearly maps the `value` from the first region given to the second region given.
 *
 * @param value The value to map from.
 * @param fromPosition The position of the region that the `value` belongs to.
 * @param fromSize The size of the region that the `value` belongs to.
 * @param toPosition The position of the region that the `value` maps to.
 * @param toSize The size of the region that the `value` maps to.
 * @returns A mapped value that belongs to the second region given.
 */
export function linearMapVec2 (
  value: Vec2, fromPosition: Vec2, fromSize: Vec2, toPosition: Vec2, toSize: Vec2
): Vec2 {
  return new Vec2(
    linearMap(
      value.x,
      new Seq(fromPosition.x, fromPosition.x + fromSize.x),
      new Seq(toPosition.x, toPosition.x + toSize.x)
    ),
    linearMap(
      value.y,
      new Seq(fromPosition.y, fromPosition.y + fromSize.y),
      new Seq(toPosition.y, toPosition.y + toSize.y)
    )
  )
}
