'use strict';
import Reactive from '../../src/Reactive.js';
test('set the reactive value when the initial value is equal to 0', () => {
    const n = new Reactive(0);
    n.value = 1;
    expect(n.value).toBe(1);
    let count = 0;
    n.watch((_, newValue) => {
        count += newValue;
    });
    n.value = 2;
    expect(n.value).toBe(2);
    expect(count).toBe(2);
    n.watch((_, newValue) => {
        count += newValue;
    });
    n.value = 3;
    expect(n.value).toBe(3);
    expect(count).toBe(8);
});
test('set the reactive value when the initial value is equal to 2', () => {
    const n = new Reactive(2);
    n.value = 1;
    expect(n.value).toBe(1);
    let count = 0;
    n.watch((_, newValue) => {
        count += newValue;
    });
    n.value = 2;
    expect(n.value).toBe(2);
    expect(count).toBe(2);
    n.watch((_, newValue) => {
        count += newValue;
    });
    n.value = 3;
    expect(n.value).toBe(3);
    expect(count).toBe(8);
});
