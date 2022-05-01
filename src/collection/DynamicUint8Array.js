'use strict';
import Holder from '../struct/Holder.js';
import { swapInHolders } from '../../index.js';
export default class DynamicUint8Array {
    constructor() {
        this.currentData = new Holder(new Uint8Array(32));
        this.nextData = new Holder(new Uint8Array(0));
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    get() {
        return this.currentData.value.slice(0, this.size);
    }
    add(array) {
        const growthFactor = 1.33;
        if (this.size + array.length > this.currentData.value.length) {
            this.grow(Math.floor((this.size + array.length) * growthFactor));
        }
        this.currentData.value.set(array, this.size);
        this._size += array.length;
    }
    grow(nextSize) {
        this.nextData.value = new Uint8Array(nextSize);
        swapInHolders(this.currentData, this.nextData);
        this.currentData.value.set(this.nextData.value);
    }
}
