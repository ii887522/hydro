'use strict';
export * from './src/any/index.js';
export * from './src/collection/index.js';
export * from './src/functions/index.js';
export * from './src/reactive/index.js';
export * from './src/struct/index.js';
export function consume(_) { }
export function Boolean(value) {
    return value === 'true';
}
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
    return (`${Math.floor(Math.ceil(seconds) / secondsPerMinute)}:` +
        `${(Math.ceil(seconds) % secondsPerMinute).toString().padStart(2, '0')}`);
}
