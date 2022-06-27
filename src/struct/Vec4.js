'use strict';
export default class Vec4 {
    constructor(_x = 0, _y = 0, _z = 0, _w = 0) {
        this._x = _x;
        this._y = _y;
        this._z = _z;
        this._w = _w;
        this._length = 0;
        this.isLengthValid = false;
    }
    static fromVec4(that) {
        return new this(that.x, that.y, that.z, that.w);
    }
    static fromValue(value) {
        return new this(value, value, value, value);
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
        return new Vec4(value, this.y, this.z, this.w);
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
        return new Vec4(this.x, value, this.z, this.w);
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
        return new Vec4(this.x, this.y, value, this.w);
    }
    get w() {
        return this._w;
    }
    set w(value) {
        if (this._w === value)
            return;
        this._w = value;
        this.isLengthValid = false;
    }
    withW(value) {
        return new Vec4(this.x, this.y, this.z, value);
    }
    plus(that) {
        return new Vec4(this.x + that.x, this.y + that.y, this.z + that.z, this.w + that.w);
    }
    minus(that) {
        return new Vec4(this.x - that.x, this.y - that.y, this.z - that.z, this.w - that.w);
    }
    times(value) {
        return new Vec4(this.x * value, this.y * value, this.z * value, this.w * value);
    }
    divide(value) {
        return new Vec4(this.x / value, this.y / value, this.z / value, this.w / value);
    }
    assign(that) {
        if (this.isEqual(that))
            return;
        this.x = that.x;
        this.y = that.y;
        this.z = that.z;
        this.w = that.w;
        this.isLengthValid = false;
    }
    plusAssign(that) {
        if (that.isEqual(new Vec4()))
            return;
        this.x += that.x;
        this.y += that.y;
        this.z += that.z;
        this.w += that.w;
        this.isLengthValid = false;
    }
    minusAssign(that) {
        if (that.isEqual(new Vec4()))
            return;
        this.x -= that.x;
        this.y -= that.y;
        this.z -= that.z;
        this.w -= that.w;
        this.isLengthValid = false;
    }
    timesAssign(value) {
        if (value === 1)
            return;
        this.x *= value;
        this.y *= value;
        this.z *= value;
        this.w *= value;
        this.isLengthValid = false;
    }
    divideAssign(value) {
        if (value === 1)
            return;
        this.x /= value;
        this.y /= value;
        this.z /= value;
        this.w /= value;
        this.isLengthValid = false;
    }
    isEqual(that) {
        return this.x === that.x && this.y === that.y && this.z === that.z && this.w === that.w;
    }
    isNotEqual(that) {
        return this.x !== that.x || this.y !== that.y || this.z !== that.z || this.w !== that.w;
    }
    get squaredLength() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    get length() {
        if (this.isLengthValid)
            return this._length;
        const result = Math.hypot(this.x, this.y, this.z, this.w);
        this._length = result;
        this.isLengthValid = true;
        return result;
    }
    get normalized() {
        return this.divide(this.length);
    }
    get xFliped() {
        return new Vec4(-this.x, this.y, this.z, this.w);
    }
    get yFliped() {
        return new Vec4(this.x, -this.y, this.z, this.w);
    }
    get zFliped() {
        return new Vec4(this.x, this.y, -this.z, this.w);
    }
    get wFliped() {
        return new Vec4(this.x, this.y, this.z, -this.w);
    }
    get fliped() {
        return new Vec4(-this.x, -this.y, -this.z, -this.w);
    }
    toString() {
        return `${this.x},${this.y},${this.z},${this.w}`;
    }
}
