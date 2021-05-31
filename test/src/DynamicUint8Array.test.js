'use strict';
import { assert } from 'console';
import DynamicUint8Array from '../../src/DynamicUint8Array.js';
import { equal } from '../../index.js';
function testAdd() {
    const array = new DynamicUint8Array();
    array.add([]);
    assert(equal(array.get(), new Uint8Array()));
    array.add([0]);
    assert(equal(array.get(), new Uint8Array([0])));
    array.add([1]);
    assert(equal(array.get(), new Uint8Array([0, 1])));
    array.add([1, 0]);
    assert(equal(array.get(), new Uint8Array([0, 1, 1, 0])));
    array.add([1, 1]);
    assert(equal(array.get(), new Uint8Array([0, 1, 1, 0, 1, 1])));
    array.add([1, 1, 0]);
    assert(equal(array.get(), new Uint8Array([0, 1, 1, 0, 1, 1, 1, 1, 0])));
    array.add([1, 1, 1]);
    assert(equal(array.get(), new Uint8Array([0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1])));
    array.add([1, 1, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
    assert(equal(array.get(), new Uint8Array([0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])));
}
testAdd();
