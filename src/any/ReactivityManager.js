'use strict';
import Reactive from './Reactive.js';
export default class ReactivityManager {
    constructor() {
        this.reactives = {};
        this.watcherIDs = {};
    }
    watch(reactive, onChange) {
        this.reactives[reactive.id] = reactive;
        const result = reactive.watch(onChange);
        if (this.watcherIDs[reactive.id] === undefined)
            this.watcherIDs[reactive.id] = [result.watcherID];
        else
            this.watcherIDs[reactive.id]?.push(result.watcherID);
        return result.reactive;
    }
    watch2(reactiveA, reactiveB, onChange) {
        const result = new Reactive(onChange(reactiveA.value, reactiveB.value));
        this.watch(reactiveA, value => {
            result.value = onChange(value, reactiveB.value);
        });
        this.watch(reactiveB, value => {
            result.value = onChange(reactiveA.value, value);
        });
        return result;
    }
    watch3(reactiveA, reactiveB, reactiveC, onChange) {
        const result = new Reactive(onChange(reactiveA.value, reactiveB.value, reactiveC.value));
        this.watch(reactiveA, value => {
            result.value = onChange(value, reactiveB.value, reactiveC.value);
        });
        this.watch(reactiveB, value => {
            result.value = onChange(reactiveA.value, value, reactiveC.value);
        });
        this.watch(reactiveC, value => {
            result.value = onChange(reactiveA.value, reactiveB.value, value);
        });
        return result;
    }
    freeWatchers() {
        for (const reactiveID of Object.keys(this.watcherIDs)) {
            const watcherIDs = this.watcherIDs[Number(reactiveID)];
            if (watcherIDs === undefined)
                continue;
            for (const watcherID of watcherIDs)
                this.reactives[Number(reactiveID)]?.unwatch(watcherID);
        }
    }
}
