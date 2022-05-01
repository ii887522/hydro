'use strict';
export default class Vector3 {
    constructor(_x = 0, _y = 0, _z = 0) {
        this._x = _x;
        this._y = _y;
        this._z = _z;
        this._length = 0;
        this.isLengthValid = false;
    }
    static fromVector3(that) {
        return new this(that.x, that.y, that.z);
    }
    static fromValue(value) {
        return new this(value, value, value);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (this._x === value)
            return;
        this._x = value;
        this.isLengthValid = false;
    }
    withX(value) {
        return new Vector3(value, this.y, this.z);
    }
    get y() {
        return this._y;
    }
    set y(value) {
        if (this._y === value)
            return;
        this._y = value;
        this.isLengthValid = false;
    }
    withY(value) {
        return new Vector3(this.x, value, this.z);
    }
    get z() {
        return this._z;
    }
    set z(value) {
        if (this._z === value)
            return;
        this._z = value;
        this.isLengthValid = false;
    }
    withZ(value) {
        return new Vector3(this.x, this.y, value);
    }
    plus(that) {
        return new Vector3(this.x + that.x, this.y + that.y, this.z + that.z);
    }
    minus(that) {
        return new Vector3(this.x - that.x, this.y - that.y, this.z - that.z);
    }
    times(value) {
        return new Vector3(this.x * value, this.y * value, this.z * value);
    }
    divide(value) {
        return new Vector3(this.x / value, this.y / value, this.z / value);
    }
    assign(that) {
        if (this.isEqual(that))
            return;
        this.x = that.x;
        this.y = that.y;
        this.z = that.z;
        this.isLengthValid = false;
    }
    plusAssign(that) {
        if (that.isEqual(new Vector3()))
            return;
        this.x += that.x;
        this.y += that.y;
        this.z += that.z;
        this.isLengthValid = false;
    }
    minusAssign(that) {
        if (that.isEqual(new Vector3()))
            return;
        this.x -= that.x;
        this.y -= that.y;
        this.z -= that.z;
        this.isLengthValid = false;
    }
    timesAssign(value) {
        if (value === 1)
            return;
        this.x *= value;
        this.y *= value;
        this.z *= value;
        this.isLengthValid = false;
    }
    divideAssign(value) {
        if (value === 1)
            return;
        this.x /= value;
        this.y /= value;
        this.z /= value;
        this.isLengthValid = false;
    }
    isEqual(that) {
        return this.x === that.x && this.y === that.y && this.z === that.z;
    }
    isNotEqual(that) {
        return this.x !== that.x || this.y !== that.y || this.z !== that.z;
    }
    get squaredLength() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    get length() {
        if (this.isLengthValid)
            return this._length;
        const result = Math.hypot(this.x, this.y, this.z);
        this._length = result;
        this.isLengthValid = true;
        return result;
    }
    get normalized() {
        return this.divide(this.length);
    }
    get xFliped() {
        return new Vector3(-this.x, this.y, this.z);
    }
    get yFliped() {
        return new Vector3(this.x, -this.y, this.z);
    }
    get zFliped() {
        return new Vector3(this.x, this.y, -this.z);
    }
    get fliped() {
        return new Vector3(-this.x, -this.y, -this.z);
    }
    toString() {
        return `${this.x},${this.y},${this.z}`;
    }
}
