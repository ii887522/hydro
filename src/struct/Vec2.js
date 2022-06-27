'use strict';
export default class Vec2 {
    constructor(_x = 0, _y = 0) {
        this._x = _x;
        this._y = _y;
        this._length = 0;
        this.isLengthValid = false;
    }
    static fromVec2(that) {
        return new this(that.x, that.y);
    }
    static fromValue(value) {
        return new this(value, value);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (this.x === value)
            return;
        this._x = value;
        this.isLengthValid = false;
    }
    withX(value) {
        return new Vec2(value, this.y);
    }
    get y() {
        return this._y;
    }
    set y(value) {
        if (this.y === value)
            return;
        this._y = value;
        this.isLengthValid = false;
    }
    withY(value) {
        return new Vec2(this.x, value);
    }
    plus(that) {
        return new Vec2(this.x + that.x, this.y + that.y);
    }
    minus(that) {
        return new Vec2(this.x - that.x, this.y - that.y);
    }
    times(value) {
        return new Vec2(this.x * value, this.y * value);
    }
    divide(value) {
        return new Vec2(this.x / value, this.y / value);
    }
    assign(that) {
        if (this.isEqual(that))
            return;
        this.x = that.x;
        this.y = that.y;
        this.isLengthValid = false;
    }
    plusAssign(that) {
        if (that.isEqual(new Vec2()))
            return;
        this.x += that.x;
        this.y += that.y;
        this.isLengthValid = false;
    }
    minusAssign(that) {
        if (that.isEqual(new Vec2()))
            return;
        this.x -= that.x;
        this.y -= that.y;
        this.isLengthValid = false;
    }
    timesAssign(value) {
        if (value === 1)
            return;
        this.x *= value;
        this.y *= value;
        this.isLengthValid = false;
    }
    divideAssign(value) {
        if (value === 1)
            return;
        this.x /= value;
        this.y /= value;
        this.isLengthValid = false;
    }
    isEqual(that) {
        return this.x === that.x && this.y === that.y;
    }
    isNotEqual(that) {
        return this.x !== that.x || this.y !== that.y;
    }
    get squaredLength() {
        return this.x * this.x + this.y * this.y;
    }
    get length() {
        if (this.isLengthValid)
            return this._length;
        const result = Math.hypot(this.x, this.y);
        this._length = result;
        this.isLengthValid = true;
        return result;
    }
    get normalized() {
        return this.divide(this.length);
    }
    get xFliped() {
        return new Vec2(-this.x, this.y);
    }
    get yFliped() {
        return new Vec2(this.x, -this.y);
    }
    get fliped() {
        return new Vec2(-this.x, -this.y);
    }
    toString() {
        return `${this.x},${this.y}`;
    }
}
