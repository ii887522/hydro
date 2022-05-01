'use strict'

export default class Vector4 {
  private _length = 0
  private isLengthValid = false

  // eslint-disable-next-line no-useless-constructor
  constructor (private _x: number = 0, private _y: number = 0, private _z: number = 0, private _w: number = 0) { }

  static fromVector4 (that: Vector4): Vector4 {
    return new this(that.x, that.y, that.z, that.w)
  }

  static fromValue (value: number): Vector4 {
    return new this(value, value, value, value)
  }

  get x (): number {
    return this._x
  }

  set x (value: number) {
    if (this._x === value) return
    this._x = value
    this.isLengthValid = false
  }

  withX (value: number): Vector4 {
    return new Vector4(value, this.y, this.z, this.w)
  }

  get y (): number {
    return this._y
  }

  set y (value: number) {
    if (this._y === value) return
    this._y = value
    this.isLengthValid = false
  }

  withY (value: number): Vector4 {
    return new Vector4(this.x, value, this.z, this.w)
  }

  get z (): number {
    return this._z
  }

  set z (value: number) {
    if (this._z === value) return
    this._z = value
    this.isLengthValid = false
  }

  withZ (value: number): Vector4 {
    return new Vector4(this.x, this.y, value, this.w)
  }

  get w (): number {
    return this._w
  }

  set w (value: number) {
    if (this._w === value) return
    this._w = value
    this.isLengthValid = false
  }

  withW (value: number): Vector4 {
    return new Vector4(this.x, this.y, this.z, value)
  }

  plus (that: Vector4): Vector4 {
    return new Vector4(this.x + that.x, this.y + that.y, this.z + that.z, this.w + that.w)
  }

  minus (that: Vector4): Vector4 {
    return new Vector4(this.x - that.x, this.y - that.y, this.z - that.z, this.w - that.w)
  }

  times (value: number): Vector4 {
    return new Vector4(this.x * value, this.y * value, this.z * value, this.w * value)
  }

  divide (value: number): Vector4 {
    return new Vector4(this.x / value, this.y / value, this.z / value, this.w / value)
  }

  assign (that: Vector4): void {
    if (this.isEqual(that)) return
    this.x = that.x
    this.y = that.y
    this.z = that.z
    this.w = that.w
    this.isLengthValid = false
  }

  plusAssign (that: Vector4): void {
    if (that.isEqual(new Vector4())) return
    this.x += that.x
    this.y += that.y
    this.z += that.z
    this.w += that.w
    this.isLengthValid = false
  }

  minusAssign (that: Vector4): void {
    if (that.isEqual(new Vector4())) return
    this.x -= that.x
    this.y -= that.y
    this.z -= that.z
    this.w -= that.w
    this.isLengthValid = false
  }

  timesAssign (value: number): void {
    if (value === 1) return
    this.x *= value
    this.y *= value
    this.z *= value
    this.w *= value
    this.isLengthValid = false
  }

  divideAssign (value: number): void {
    if (value === 1) return
    this.x /= value
    this.y /= value
    this.z /= value
    this.w /= value
    this.isLengthValid = false
  }

  isEqual (that: Vector4): boolean {
    return this.x === that.x && this.y === that.y && this.z === that.z && this.w === that.w
  }

  isNotEqual (that: Vector4): boolean {
    return this.x !== that.x || this.y !== that.y || this.z !== that.z || this.w !== that.w
  }

  get squaredLength (): number {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
  }

  get length (): number {
    if (this.isLengthValid) return this._length
    const result = Math.hypot(this.x, this.y, this.z, this.w)
    this._length = result
    this.isLengthValid = true
    return result
  }

  get normalized (): Vector4 {
    return this.divide(this.length)
  }

  get xFliped (): Vector4 {
    return new Vector4(-this.x, this.y, this.z, this.w)
  }

  get yFliped (): Vector4 {
    return new Vector4(this.x, -this.y, this.z, this.w)
  }

  get zFliped (): Vector4 {
    return new Vector4(this.x, this.y, -this.z, this.w)
  }

  get wFliped (): Vector4 {
    return new Vector4(this.x, this.y, this.z, -this.w)
  }

  get fliped (): Vector4 {
    return new Vector4(-this.x, -this.y, -this.z, -this.w)
  }

  toString (): string {
    return `${this.x},${this.y},${this.z},${this.w}`
  }
}
