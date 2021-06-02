'use strict';
export default class DynamicUint8Array {
    constructor() {
        this.lData = new Uint8Array(32);
        this.rData = new Uint8Array(0);
        this.currentData = this.lData;
        this.nextData = this.rData;
        this.size = 0;
    }
    get() {
        return this.currentData.slice(0, this.size);
    }
    add(array) {
        const growthFactor = 1.33;
        if (this.size + array.length > this.currentData.length)
            this.grow(Math.floor((this.size + array.length) * growthFactor));
        this.currentData.set(array, this.size);
        this.size += array.length;
    }
    grow(nextSize) {
        this.nextData = new Uint8Array(nextSize);
        this.swapData();
        this.currentData.set(this.nextData);
    }
    swapData() {
        const aux = this.currentData;
        this.currentData = this.nextData;
        this.nextData = aux;
    }
}
