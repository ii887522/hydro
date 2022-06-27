'use strict'

/**
 * A value holder that allows new value to be assigned in the future by the `timeout` given. Users of this class must
 * keep calling `step(dt)` method to simulate delayed assignment of new value.
 */
export default class Delayed<T> {
  private t = 0
  private pendingValue: T

  /**
   * @param _value The initial value held by this holder.
   * @param timeout The time to be elasped before the new value is being assigned to this holder.
   */
  constructor (private _value: T, private readonly timeout: number = 1) {
    this.pendingValue = _value
  }

  get value (): T {
    return this._value
  }

  set value (value: T) {
    this.pendingValue = value
  }

  setNow (value: T): void {
    this.pendingValue = value
    this._value = value
  }

  /**
   * Advances the time being tracked by the given `dt` for simulating delayed assignment of new value.
   *
   * @param dt Some small amount of time to advance.
   */
  step (dt: number): void {
    this.t += dt
    if (this.t < this.timeout) return
    this.t %= this.timeout
    this._value = this.pendingValue
  }
}
