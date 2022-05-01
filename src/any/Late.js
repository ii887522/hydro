'use strict';
export default class Late {
    get value() {
        if (this._value === undefined)
            throw new ReferenceError('Value should be initialized before being accessed!');
        return this._value;
    }
    set value(value) {
        if (this._value !== undefined)
            throw new ReferenceError('Value has already been initialized!');
        this._value = value;
    }
}
