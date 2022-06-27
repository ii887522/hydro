'use strict';
import Reactive from '../any/Reactive.js';
export default class ReactiveArray extends Reactive {
    constructor(...value) {
        super(value);
    }
    set(id, item) {
        this.value[id] = item;
        this.wakeChildren();
    }
    get(id) {
        return this.value[id];
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
        let id = -1;
        return {
            next: () => {
                ++id;
                const value = this.value[id];
                return value !== undefined ? { done: false, value } : { done: true, value: undefined };
            }
        };
    }
}
