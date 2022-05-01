'use strict';
export default class Holder {
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
}
