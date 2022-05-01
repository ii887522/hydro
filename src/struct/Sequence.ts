'use strict'

import Bound from './Bound.js'

/**
 * It defines a sequence between two values.
 */
export default class Sequence {
  /**
   * @param a The first value
   * @param b The second value
   */
  constructor (public a: number = 0, public b: number = 0) { } // eslint-disable-line no-useless-constructor

  /**
   * It maps the `value` given in this sequence to a value between 0 and 1.
   *
   * @param value The value to map from.
   * @returns A value between 0 and 1.
   */
  normalize (value: number): number {
    return (value - this.a) / (this.b - this.a)
  }

  /**
   * It maps the `value` given between 0 and 1 to a value belongs to this sequence.
   *
   * @param value The value to map from.
   * @returns A value belongs to this sequence.
   */
  unnormalize (value: number): number {
    return value * (this.b - this.a) + this.a
  }

  /**
   * It treats this sequence as a boundary.
   *
   * @returns A boundary that represents this sequence.
   */
  toBound (): Bound {
    return new Bound(this.a, this.b)
  }
}
