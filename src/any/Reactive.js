'use strict';
import IDManager from './IDManager.js';
export default class Reactive {
    constructor(value, watcherID = -1) {
        this.watcherID = watcherID;
        this.watcherIDManager = new IDManager();
        this.id = Reactive.idManager.next();
        this.children = [];
        this._value = value;
    }
    static from(value) {
        return new this(value);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this.value === value)
            return;
        this._value = value;
        this.wakeChildren();
    }
    wakeChildren() {
        for (let i = 0; i !== this.children.length; ++i) {
            const child = this.children[i];
            if (child === undefined)
                continue;
            child.reactive.value = child.onChange(this.value);
        }
    }
    watch(onChange) {
        const watcherID = this.watcherIDManager.next();
        const reactive = new Reactive(onChange(this.value), watcherID);
        this.children[watcherID] = { onChange, reactive };
        return reactive;
    }
    unwatch(reactive) {
        delete this.children[reactive.watcherID];
        this.watcherIDManager.free(reactive.watcherID);
    }
}
Reactive.idManager = new IDManager();
