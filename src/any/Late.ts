'use strict'

/**
 * It is a holder that allows late initialization of the value being held.
 */
export default class Late<T> {
  private _value?: T

  get value (): T {
    if (this._value === undefined) throw new ReferenceError('Value should be initialized before being accessed!')
    return this._value
  }

  set value (value: T) {
    if (this._value !== undefined) throw new ReferenceError('Value has already been initialized!')
    this._value = value
  }
}
