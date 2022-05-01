'use strict';
export default class Dynamic {
    constructor(getValue, interval = 1) {
        this.getValue = getValue;
        this.interval = interval;
        this.t = 0;
        this._value = getValue();
    }
    get value() {
        return this._value;
    }
    step(dt) {
        this.t += dt;
        if (this.t < this.interval)
            return;
        this.t %= this.interval;
        this._value = this.getValue();
    }
}
