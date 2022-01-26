'use strict'

import Holder from './Holder.js'
import { swapInHolders } from '../index.js'

/**
 * It is an array that contains many integers between 0 and 255 (inclusive). It will automatically resize itself when there is not enough space to hold more integers
 * requested. The index of the array starts from 0 for the first integer until `size - 1` for the last integer.
 */
export default class DynamicUint8Array {
  private readonly currentData = new Holder(new Uint8Array(32))
  private readonly nextData = new Holder(new Uint8Array(0))
  private _size = 0

  get size (): number {
    return this._size
  }

  /**
   * It returns the array itself.
   *
   * @returns The array itself.
   */
  get (): Uint8Array {
    return this.currentData.value.slice(0, this.size)
  }

  /**
   * It appends `array` received to itself.
   *
   * @param array The array to be inserted at the end.
   */
  add (array: ArrayLike<number>): void {
    const growthFactor = 1.33
    if (this.size + array.length > this.currentData.value.length) this.grow(Math.floor((this.size + array.length) * growthFactor))
    this.currentData.value.set(array, this.size)
    this._size += array.length
  }

  private grow (nextSize: number): void {
    this.nextData.value = new Uint8Array(nextSize)
    swapInHolders(this.currentData, this.nextData)
    this.currentData.value.set(this.nextData.value)
  }
}
