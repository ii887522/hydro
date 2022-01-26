'use strict';
export default class Range {
    constructor(_min = 0, _max = 0) {
        this._min = _min;
        this._max = _max;
    }
    get min() {
        return this._min;
    }
    set min(value) {
        this._min = value;
    }
    get max() {
        return this._max;
    }
    set max(value) {
        this._max = value;
    }
}
