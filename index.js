'use strict';
import Holder from './src/Holder.js';
import Range from './src/Range.js';
export { default as AvlTree } from './src/AvlTree.js';
export * from './src/collection_ext.js';
export * from './src/components.js';
export { default as DynamicUint8Array } from './src/DynamicUint8Array.js';
export * from './src/fs_ext.js';
export { Holder };
export * from './src/math_ext.js';
export { Range };
export { default as Reactive } from './src/Reactive.js';
export * from './src/string_ext.js';
export * from './src/worker_ext.js';
export function consume(_) { }
export function requireDefined(object) {
    if (object === undefined)
        throw new ReferenceError('object should not be undefined!');
    return object;
}
export function equal(left, right) {
    if (left.length !== right.length)
        return false;
    for (let i = 0; i !== left.length; ++i) {
        if (left[i] !== right[i])
            return false;
    }
    return true;
}
export function swapInHolders(left, right) {
    const aux = left.value;
    left.value = right.value;
    right.value = aux;
}
export function formatTime(seconds) {
    const secondsPerMinute = 60;
    return `${Math.floor(Math.ceil(seconds) / secondsPerMinute)}:${(Math.ceil(seconds) % secondsPerMinute).toString().padStart(2, '0')}`;
}
