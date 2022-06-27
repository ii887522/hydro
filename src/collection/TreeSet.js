'use strict';
import TreeMap from './TreeMap.js';
export default class TreeSet {
    constructor() {
        this.map = new TreeMap();
    }
    get isEmpty() {
        return this.map.isEmpty;
    }
    get length() {
        return this.map.length;
    }
    toArray() {
        return this.map.toArray().map(entry => entry.key);
    }
    clear() {
        this.map.clear();
    }
    has(value) {
        return this.map.has(value);
    }
    remove(value) {
        this.map.remove(value);
    }
    min() {
        return this.map.min()?.key;
    }
    max() {
        return this.map.max()?.key;
    }
    bulkPut(...array) {
        this.map.bulkPut(...array.map(value => ({ key: value, value: null })));
    }
    put(value) {
        this.map.put(value, null);
    }
}
