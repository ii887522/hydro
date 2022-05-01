'use strict';
import ReactiveArray from '../../../src/reactive/ReactiveArray.js';
test('ReactiveArray::set', () => {
    const array = new ReactiveArray(0, 0, 0);
    array.set(0, 1);
    expect(array.get(0)).toBe(1);
    expect(array.get(1)).toBe(0);
    expect(array.get(2)).toBe(0);
    array.set(0, 2);
    expect(array.get(0)).toBe(2);
    expect(array.get(1)).toBe(0);
    expect(array.get(2)).toBe(0);
    array.set(0, 3);
    expect(array.get(0)).toBe(3);
    expect(array.get(1)).toBe(0);
    expect(array.get(2)).toBe(0);
    array.set(1, 3);
    expect(array.get(0)).toBe(3);
    expect(array.get(1)).toBe(3);
    expect(array.get(2)).toBe(0);
    array.set(2, 3);
    expect(array.get(0)).toBe(3);
    expect(array.get(1)).toBe(3);
    expect(array.get(2)).toBe(3);
});
test('ReactiveArray::push', () => {
    const array = new ReactiveArray();
    array.push(0);
    expect(array.get(0)).toBe(0);
    array.push(1);
    expect(array.get(0)).toBe(0);
    expect(array.get(1)).toBe(1);
    array.push(2);
    expect(array.get(0)).toBe(0);
    expect(array.get(1)).toBe(1);
    expect(array.get(2)).toBe(2);
});
test('ReactiveArray::pop', () => {
    const array = new ReactiveArray(0, 1, 2, 3);
    expect(array.pop()).toBe(3);
    expect(array.get(0)).toBe(0);
    expect(array.get(1)).toBe(1);
    expect(array.get(2)).toBe(2);
    expect(array.pop()).toBe(2);
    expect(array.get(0)).toBe(0);
    expect(array.get(1)).toBe(1);
    expect(array.pop()).toBe(1);
    expect(array.get(0)).toBe(0);
});
test('loop through reactive array without items', () => {
    expect(new ReactiveArray()[Symbol.iterator]().next()).toEqual({ done: true, value: undefined });
});
test('loop through reactive array with an item', () => {
    const iterator = new ReactiveArray(0)[Symbol.iterator]();
    expect(iterator.next()).toEqual({ done: false, value: 0 });
    expect(iterator.next()).toEqual({ done: true, value: undefined });
});
test('loop through reactive array with 2 items', () => {
    const iterator = new ReactiveArray(0, 1)[Symbol.iterator]();
    expect(iterator.next()).toEqual({ done: false, value: 0 });
    expect(iterator.next()).toEqual({ done: false, value: 1 });
    expect(iterator.next()).toEqual({ done: true, value: undefined });
});
