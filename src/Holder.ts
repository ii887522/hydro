'use strict'

/**
 * It holds an object.
 *
 * Not Thread Safe
 */
export default class Holder<T> {
  constructor (private _value: T) { }

  get value (): T {
    return this._value
  }

  set value (value: T) {
    this._value = value
  }
}
