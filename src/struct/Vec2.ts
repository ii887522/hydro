'use strict'

export default class Vec2 {
  private _length = 0
  private isLengthValid = false

  constructor (private _x: number = 0, private _y: number = 0) { } // eslint-disable-line no-useless-constructor

  static fromVec2 (that: Vec2): Vec2 {
    return new this(that.x, that.y)
  }

  static fromValue (value: number): Vec2 {
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

  withX (value: number): Vec2 {
    return new Vec2(value, this.y)
  }

  get y (): number {
    return this._y
  }

  set y (value: number) {
    if (this.y === value) return
    this._y = value
    this.isLengthValid = false
  }

  withY (value: number): Vec2 {
    return new Vec2(this.x, value)
  }

  plus (that: Vec2): Vec2 {
    return new Vec2(this.x + that.x, this.y + that.y)
  }

  minus (that: Vec2): Vec2 {
    return new Vec2(this.x - that.x, this.y - that.y)
  }

  times (value: number): Vec2 {
    return new Vec2(this.x * value, this.y * value)
  }

  divide (value: number): Vec2 {
    return new Vec2(this.x / value, this.y / value)
  }

  assign (that: Vec2): void {
    if (this.isEqual(that)) return
    this.x = that.x
    this.y = that.y
    this.isLengthValid = false
  }

  plusAssign (that: Vec2): void {
    if (that.isEqual(new Vec2())) return
    this.x += that.x
    this.y += that.y
    this.isLengthValid = false
  }

  minusAssign (that: Vec2): void {
    if (that.isEqual(new Vec2())) return
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

  isEqual (that: Vec2): boolean {
    return this.x === that.x && this.y === that.y
  }

  isNotEqual (that: Vec2): boolean {
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

  get normalized (): Vec2 {
    return this.divide(this.length)
  }

  get xFliped (): Vec2 {
    return new Vec2(-this.x, this.y)
  }

  get yFliped (): Vec2 {
    return new Vec2(this.x, -this.y)
  }

  get fliped (): Vec2 {
    return new Vec2(-this.x, -this.y)
  }

  toString (): string {
    return `${this.x},${this.y}`
  }
}
