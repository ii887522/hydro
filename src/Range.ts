'use strict'

export default class Range {
  constructor (private _min: number = 0, private _max: number = 0) { }

  get min (): number {
    return this._min
  }

  set min (value: number) {
    this._min = value
  }

  get max (): number {
    return this._max
  }

  set max (value: number) {
    this._max = value
  }
}
