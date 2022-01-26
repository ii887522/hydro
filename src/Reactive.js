'use strict';
export default class Reactive {
    constructor(_value) {
        this._value = _value;
        this.onValueChanges = [];
    }
    get value() {
        return this._value;
    }
    set value(value) {
        const oldValue = this._value;
        const newValue = value;
        this._value = newValue;
        for (const onValueChange of this.onValueChanges)
            onValueChange(oldValue, newValue);
    }
    watch(onValueChange) {
        this.onValueChanges.push(onValueChange);
    }
}
