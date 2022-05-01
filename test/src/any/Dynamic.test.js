'use strict';
import Dynamic from '../../../src/any/Dynamic.js';
test('step dynamic value when value keeps increasing', () => {
    let value = 0;
    const dynamicValue = new Dynamic(() => {
        ++value;
        return value;
    });
    dynamicValue.step(0);
    expect(dynamicValue.value).toBe(1);
    dynamicValue.step(1);
    expect(dynamicValue.value).toBe(2);
    dynamicValue.step(2);
    expect(dynamicValue.value).toBe(3);
    dynamicValue.step(3);
    expect(dynamicValue.value).toBe(4);
    dynamicValue.step(4);
    expect(dynamicValue.value).toBe(5);
});
test('step dynamic value when value keeps decreasing', () => {
    let value = 0;
    const dynamicValue = new Dynamic(() => {
        --value;
        return value;
    });
    dynamicValue.step(0);
    expect(dynamicValue.value).toBe(-1);
    dynamicValue.step(1);
    expect(dynamicValue.value).toBe(-2);
    dynamicValue.step(2);
    expect(dynamicValue.value).toBe(-3);
    dynamicValue.step(3);
    expect(dynamicValue.value).toBe(-4);
    dynamicValue.step(4);
    expect(dynamicValue.value).toBe(-5);
});
test('step dynamic value when value keeps decreasing and interval is 10', () => {
    let value = 0;
    const dynamicValue = new Dynamic(() => {
        --value;
        return value;
    }, 10);
    dynamicValue.step(0);
    expect(dynamicValue.value).toBe(-1);
    dynamicValue.step(3);
    expect(dynamicValue.value).toBe(-1);
    dynamicValue.step(7);
    expect(dynamicValue.value).toBe(-2);
    dynamicValue.step(10);
    expect(dynamicValue.value).toBe(-3);
    dynamicValue.step(20);
    expect(dynamicValue.value).toBe(-4);
});
