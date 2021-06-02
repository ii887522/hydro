'use strict'

/**
 * It is an array that will automatically resize itself when the elements that needs to be inserted are too many.
 *
 * Not Thread Safe
 */
export default class DynamicUint8Array {
  private readonly lData = new Uint8Array(32)
  private readonly rData = new Uint8Array(0)
  private currentData = this.lData
  private nextData = this.rData
  private size = 0

  /**
   * It returns the array itself.
   */
  get (): Uint8Array {
    return this.currentData.slice(0, this.size)
  }

  /**
   * It appends array elements passed in to itself.
   */
  add (array: ArrayLike<number>): void {
    const growthFactor = 1.33
    if (this.size + array.length > this.currentData.length) this.grow(Math.floor((this.size + array.length) * growthFactor))
    this.currentData.set(array, this.size)
    this.size += array.length
  }

  private grow (nextSize: number): void {
    this.nextData = new Uint8Array(nextSize)
    this.swapData()
    this.currentData.set(this.nextData)
  }

  private swapData (): void {
    const aux = this.currentData
    this.currentData = this.nextData
    this.nextData = aux
  }
}
