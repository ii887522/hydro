'use strict';
import Bound from './Bound.js';
export default class Seq {
    constructor(a = 0, b = 0) {
        this.a = a;
        this.b = b;
    }
    normalize(value) {
        return (value - this.a) / (this.b - this.a);
    }
    unnormalize(value) {
        return value * (this.b - this.a) + this.a;
    }
    toBound() {
        return new Bound(this.a, this.b);
    }
}
