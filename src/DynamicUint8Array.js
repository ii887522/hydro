'use strict';
import Holder from './Holder.js';
import { swap } from '../index.js';
export default class DynamicUint8Array {
    constructor() {
        this.lData = new Uint8Array(32);
        this.rData = new Uint8Array(0);
        this.currentData = new Holder(this.lData);
        this.nextData = new Holder(this.rData);
        this.size = 0;
    }
    get() {
        return this.currentData.value.slice(0, this.size);
    }
    add(array) {
        const growthFactor = 1.33;
        if (this.size + array.length > this.currentData.value.length)
            this.grow(Math.floor((this.size + array.length) * growthFactor));
        this.currentData.value.set(array, this.size);
        this.size += array.length;
    }
    grow(nextSize) {
        this.nextData.value = new Uint8Array(nextSize);
        swap(this.currentData, this.nextData);
        this.currentData.value.set(this.nextData.value);
    }
}
