'use strict';
import Reactive from './Reactive.js';
export default class ReactivityManager {
    constructor() {
        this.reactives = {};
        this.watcherReactives = {};
    }
    watch(reactive, onChange) {
        this.reactives[reactive.id] = reactive;
        const result = reactive.watch(onChange);
        if (this.watcherReactives[reactive.id] === undefined) {
            this.watcherReactives[reactive.id] = [result];
        }
        else
            this.watcherReactives[reactive.id]?.push(result);
        return result;
    }
    watch2(reactiveA, reactiveB, onChange) {
        const result = Reactive.from(onChange(reactiveA.value, reactiveB.value));
        this.watch(reactiveA, value => {
            result.value = onChange(value, reactiveB.value);
        });
        this.watch(reactiveB, value => {
            result.value = onChange(reactiveA.value, value);
        });
        return result;
    }
    watch3(reactiveA, reactiveB, reactiveC, onChange) {
        const result = Reactive.from(onChange(reactiveA.value, reactiveB.value, reactiveC.value));
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
        for (const reactiveID of Object.keys(this.watcherReactives)) {
            const watcherReactives = this.watcherReactives[Number(reactiveID)];
            if (watcherReactives === undefined)
                continue;
            for (const watcherReactive of watcherReactives)
                this.reactives[Number(reactiveID)]?.unwatch(watcherReactive);
        }
    }
}
