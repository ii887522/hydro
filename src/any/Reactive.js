'use strict';
import IDManager from './IDManager.js';
export default class Reactive {
    constructor(value) {
        this.watcherIDManager = new IDManager();
        this.id = Reactive.idManager.next();
        this.children = [];
        this._value = value;
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
        const reactive = new Reactive(onChange(this.value));
        this.children[watcherID] = { onChange, reactive };
        return { watcherID, reactive };
    }
    unwatch(watcherID) {
        delete this.children[watcherID];
        this.watcherIDManager.free(watcherID);
    }
}
Reactive.idManager = new IDManager();
