'use strict'

export default class Vec3 {
  private _length = 0
  private isLengthValid = false

  // eslint-disable-next-line no-useless-constructor
  constructor (private _x: number = 0, private _y: number = 0, private _z: number = 0) { }

  static fromVec3 (that: Vec3): Vec3 {
    return new this(that.x, that.y, that.z)
  }

  static fromValue (value: number): Vec3 {
    return new this(value, value, value)
  }

  get x (): number {
    return this._x
  }

  set x (value: number) {
    if (this._x === value) return
    this._x = value
    this.isLengthValid = false
  }

  withX (value: number): Vec3 {
    return new Vec3(value, this.y, this.z)
  }

  get y (): number {
    return this._y
  }

  set y (value: number) {
    if (this._y === value) return
    this._y = value
    this.isLengthValid = false
  }

  withY (value: number): Vec3 {
    return new Vec3(this.x, value, this.z)
  }

  get z (): number {
    return this._z
  }

  set z (value: number) {
    if (this._z === value) return
    this._z = value
    this.isLengthValid = false
  }

  withZ (value: number): Vec3 {
    return new Vec3(this.x, this.y, value)
  }

  plus (that: Vec3): Vec3 {
    return new Vec3(this.x + that.x, this.y + that.y, this.z + that.z)
  }

  minus (that: Vec3): Vec3 {
    return new Vec3(this.x - that.x, this.y - that.y, this.z - that.z)
  }

  times (value: number): Vec3 {
    return new Vec3(this.x * value, this.y * value, this.z * value)
  }

  divide (value: number): Vec3 {
    return new Vec3(this.x / value, this.y / value, this.z / value)
  }

  assign (that: Vec3): void {
    if (this.isEqual(that)) return
    this.x = that.x
    this.y = that.y
    this.z = that.z
    this.isLengthValid = false
  }

  plusAssign (that: Vec3): void {
    if (that.isEqual(new Vec3())) return
    this.x += that.x
    this.y += that.y
    this.z += that.z
    this.isLengthValid = false
  }

  minusAssign (that: Vec3): void {
    if (that.isEqual(new Vec3())) return
    this.x -= that.x
    this.y -= that.y
    this.z -= that.z
    this.isLengthValid = false
  }

  timesAssign (value: number): void {
    if (value === 1) return
    this.x *= value
    this.y *= value
    this.z *= value
    this.isLengthValid = false
  }

  divideAssign (value: number): void {
    if (value === 1) return
    this.x /= value
    this.y /= value
    this.z /= value
    this.isLengthValid = false
  }

  isEqual (that: Vec3): boolean {
    return this.x === that.x && this.y === that.y && this.z === that.z
  }

  isNotEqual (that: Vec3): boolean {
    return this.x !== that.x || this.y !== that.y || this.z !== that.z
  }

  get squaredLength (): number {
    return this.x * this.x + this.y * this.y + this.z * this.z
  }

  get length (): number {
    if (this.isLengthValid) return this._length
    const result = Math.hypot(this.x, this.y, this.z)
    this._length = result
    this.isLengthValid = true
    return result
  }

  get normalized (): Vec3 {
    return this.divide(this.length)
  }

  get xFliped (): Vec3 {
    return new Vec3(-this.x, this.y, this.z)
  }

  get yFliped (): Vec3 {
    return new Vec3(this.x, -this.y, this.z)
  }

  get zFliped (): Vec3 {
    return new Vec3(this.x, this.y, -this.z)
  }

  get fliped (): Vec3 {
    return new Vec3(-this.x, -this.y, -this.z)
  }

  toString (): string {
    return `${this.x},${this.y},${this.z}`
  }
}
