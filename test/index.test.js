'use strict';
import { assert } from 'console';
import { getFileName, substring, equal } from '../index.js';
import './src/DynamicUint8Array.test.js';
function testGetFileName() {
    assert(getFileName('SDL2-2.0.12/lib/x86/SDL2.dll') === 'SDL2.dll');
    assert(getFileName('SDL2_image-2.0.5/lib/x86/libpng16-16.dll') === 'libpng16-16.dll');
    assert(getFileName('SDL2_ttf-2.0.15/lib/x86/SDL2_ttf.dll') === 'SDL2_ttf.dll');
}
function testSubstring() {
    assert(substring('SDL2-2.0.12/lib/x86/SDL2.dll', 'SDL', 'l') === 'SDL2-2.0.12/');
    assert(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'SDL', 'l') === 'SDL2_image-2.0.5/');
    assert(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', 'l') === 'image-2.0.5/');
    assert(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', '.dll') === 'image-2.0.5/lib/x86/libpng16-16');
}
function testEqual() {
    assert(equal(new Uint8Array(0), new Uint8Array(0)));
    assert(equal(new Uint8Array([]), new Uint8Array(0)));
    assert(equal(new Uint8Array([]), new Uint8Array([])));
    assert(!equal(new Uint8Array([0]), new Uint8Array([])));
    assert(!equal(new Uint8Array([1]), new Uint8Array([])));
    assert(!equal(new Uint8Array([1]), new Uint8Array([0])));
    assert(!equal(new Uint8Array([1, 0]), new Uint8Array([])));
    assert(!equal(new Uint8Array([1, 1]), new Uint8Array([])));
    assert(!equal(new Uint8Array([1, 1]), new Uint8Array([0, 0])));
    assert(!equal(new Uint8Array([1, 1, 0]), new Uint8Array([])));
    assert(!equal(new Uint8Array([1, 1, 1]), new Uint8Array([])));
    assert(!equal(new Uint8Array([1, 1, 1]), new Uint8Array([0])));
    assert(!equal(new Uint8Array([1, 1, 1]), new Uint8Array([1])));
    assert(!equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 0])));
    assert(!equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 1])));
    assert(!equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 1, 0])));
    assert(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 1, 1])));
}
testGetFileName();
testSubstring();
testEqual();
