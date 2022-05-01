'use strict';
import Late from '../../../src/any/Late.js';
test('Late', () => {
    const value = new Late();
    expect(() => {
        console.log(value.value);
    }).toThrow(ReferenceError);
    value.value = 0;
    expect(value.value).toBe(0);
    expect(() => {
        value.value = 1;
    }).toThrow(ReferenceError);
});
