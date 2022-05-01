'use strict'

export default class Vector2 {
  private _length = 0
  private isLengthValid = false

  constructor (private _x: number = 0, private _y: number = 0) { } // eslint-disable-line no-useless-constructor

  static fromVector2 (that: Vector2): Vector2 {
    return new this(that.x, that.y)
  }

  static fromValue (value: number): Vector2 {
    return new this(value, value)
  }

  get x (): number {
    return this._x
  }

  set x (value: number) {
    if (this.x === value) return
    this._x = value
    this.isLengthValid = false
  }

  withX (value: number): Vector2 {
    return new Vector2(value, this.y)
  }

  get y (): number {
    return this._y
  }

  set y (value: number) {
    if (this.y === value) return
    this._y = value
    this.isLengthValid = false
  }

  withY (value: number): Vector2 {
    return new Vector2(this.x, value)
  }

  plus (that: Vector2): Vector2 {
    return new Vector2(this.x + that.x, this.y + that.y)
  }

  minus (that: Vector2): Vector2 {
    return new Vector2(this.x - that.x, this.y - that.y)
  }

  times (value: number): Vector2 {
    return new Vector2(this.x * value, this.y * value)
  }

  divide (value: number): Vector2 {
    return new Vector2(this.x / value, this.y / value)
  }

  assign (that: Vector2): void {
    if (this.isEqual(that)) return
    this.x = that.x
    this.y = that.y
    this.isLengthValid = false
  }

  plusAssign (that: Vector2): void {
    if (that.isEqual(new Vector2())) return
    this.x += that.x
    this.y += that.y
    this.isLengthValid = false
  }

  minusAssign (that: Vector2): void {
    if (that.isEqual(new Vector2())) return
    this.x -= that.x
    this.y -= that.y
    this.isLengthValid = false
  }

  timesAssign (value: number): void {
    if (value === 1) return
    this.x *= value
    this.y *= value
    this.isLengthValid = false
  }

  divideAssign (value: number): void {
    if (value === 1) return
    this.x /= value
    this.y /= value
    this.isLengthValid = false
  }

  isEqual (that: Vector2): boolean {
    return this.x === that.x && this.y === that.y
  }

  isNotEqual (that: Vector2): boolean {
    return this.x !== that.x || this.y !== that.y
  }

  get squaredLength (): number {
    return this.x * this.x + this.y * this.y
  }

  get length (): number {
    if (this.isLengthValid) return this._length
    const result = Math.hypot(this.x, this.y)
    this._length = result
    this.isLengthValid = true
    return result
  }

  get normalized (): Vector2 {
    return this.divide(this.length)
  }

  get xFliped (): Vector2 {
    return new Vector2(-this.x, this.y)
  }

  get yFliped (): Vector2 {
    return new Vector2(this.x, -this.y)
  }

  get fliped (): Vector2 {
    return new Vector2(-this.x, -this.y)
  }

  toString (): string {
    return `${this.x},${this.y}`
  }
}
