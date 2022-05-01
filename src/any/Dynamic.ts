'use strict'

/**
 * It is a value holder that keeps changing its value by the `interval` given. Users of this class must keep calling
 * `step(dt)` method to simulate frequently changing value.
 */
export default class Dynamic<T> {
  private t = 0
  private _value: T

  /**
   * @param getValue The function that returns a new temporary value of this holder.
   * @param interval The time to be elasped before the value is being updated.
   */
  constructor (private readonly getValue: () => T, private readonly interval: number = 1) {
    this._value = getValue()
  }

  get value (): T {
    return this._value
  }

  /**
   * It advances the time being tracked by the given `dt` for simulating frequently changing value.
   *
   * @param dt Some small amount of time to advance.
   */
  step (dt: number): void {
    this.t += dt
    if (this.t < this.interval) return
    this.t %= this.interval
    this._value = this.getValue()
  }
}
