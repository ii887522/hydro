'use strict';
export default class Delayed {
    constructor(_value, timeout = 1) {
        this._value = _value;
        this.timeout = timeout;
        this.t = 0;
        this.pendingValue = _value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this.pendingValue = value;
    }
    setNow(value) {
        this.pendingValue = value;
        this._value = value;
    }
    step(dt) {
        this.t += dt;
        if (this.t < this.timeout)
            return;
        this.t %= this.timeout;
        this._value = this.pendingValue;
    }
}
