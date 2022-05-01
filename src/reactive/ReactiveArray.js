'use strict';
import Reactive from '../any/Reactive.js';
export default class ReactiveArray extends Reactive {
    constructor(...value) {
        super(value);
    }
    set(index, item) {
        this.value[index] = item;
        this.wakeChildren();
    }
    get(index) {
        return this.value[index];
    }
    push(item) {
        this.value.push(item);
        this.wakeChildren();
    }
    pop() {
        const result = this.value.pop();
        this.wakeChildren();
        return result;
    }
    [Symbol.iterator]() {
        let index = -1;
        return {
            next: () => {
                ++index;
                const value = this.value[index];
                return value !== undefined ? { done: false, value } : { done: true, value: undefined };
            }
        };
    }
}
