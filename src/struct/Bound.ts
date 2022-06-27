'use strict'

import Seq from './Seq.js'

/**
 * Defines a boundary between the minimum and maximum value.
 */
export default class Bound {
  min: number
  max: number

  /**
   * @param a The first value
   * @param b The second value
   */
  constructor (a = 0, b = 0) {
    this.min = Math.min(a, b)
    this.max = Math.max(a, b)
  }

  get middle (): number {
    return (this.min + this.max) * 0.5
  }

  /**
   * Checks whether the boundary received overlaps with this boundary.
   *
   * @param that The boundary to be checked with.
   * @returns true if both boundaries overlaps, false otherwise.
   */
  isIntersect (that: Bound): boolean {
    return this.min <= that.max && this.max >= that.min
  }

  /**
   * Finds out the intersection between both boundaries received as a boundary.
   *
   * @param that The boundary to intersect with.
   * @returns An intersection as a boundary if exist.
   */
  intersect (that: Bound): Bound | undefined {
    return this.isIntersect(that) ? new Bound(Math.max(this.min, that.min), Math.min(this.max, that.max)) : undefined
  }

  /**
   * Constrains the `value` given in this boundary and returns the result.
   *
   * @param value The value to be constrained.
   * @returns The constrained value.
   */
  clamp (value: number): number {
    return value < this.min ? this.min : (value > this.max ? this.max : value)
  }

  /**
   * Returns a random value in this boundary.
   *
   * @returns A random value in this boundary.
   */
  random (): number {
    return Math.random() * (this.max - this.min) + this.min
  }

  /**
   * Treats this boundary as a sequence.
   *
   * @returns A sequence that represents this boundary.
   */
  toSequence (): Seq {
    return new Seq(this.min, this.max)
  }
}
