'use strict'

import Holder from './Holder.js'
import { swap } from '../index.js'

/**
 * It is an array that will automatically resize itself when the elements that needs to be inserted are too many.
 *
 * Not Thread Safe
 */
export default class DynamicUint8Array {
  private readonly lData = new Uint8Array(32)
  private readonly rData = new Uint8Array(0)
  private readonly currentData = new Holder(this.lData)
  private readonly nextData = new Holder(this.rData)
  private size = 0

  /**
   * It returns the array itself.
   */
  get (): Uint8Array {
    return this.currentData.value.slice(0, this.size)
  }

  /**
   * It appends array elements passed in to itself.
   */
  add (array: ArrayLike<number>): void {
    const growthFactor = 1.33
    if (this.size + array.length > this.currentData.value.length) this.grow(Math.floor((this.size + array.length) * growthFactor))
    this.currentData.value.set(array, this.size)
    this.size += array.length
  }

  private grow (nextSize: number): void {
    this.nextData.value = new Uint8Array(nextSize)
    swap(this.currentData, this.nextData)
    this.currentData.value.set(this.nextData.value)
  }
}
