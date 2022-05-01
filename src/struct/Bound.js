'use strict';
import Sequence from './Sequence.js';
export default class Bound {
    constructor(a = 0, b = 0) {
        this.min = Math.min(a, b);
        this.max = Math.max(a, b);
    }
    get middle() {
        return (this.min + this.max) * 0.5;
    }
    isIntersect(that) {
        return this.min <= that.max && this.max >= that.min;
    }
    intersect(that) {
        return this.isIntersect(that) ? new Bound(Math.max(this.min, that.min), Math.min(this.max, that.max)) : undefined;
    }
    clamp(value) {
        return value < this.min ? this.min : (value > this.max ? this.max : value);
    }
    random() {
        return Math.random() * (this.max - this.min) + this.min;
    }
    toSequence() {
        return new Sequence(this.min, this.max);
    }
}
