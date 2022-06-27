'use strict';
import Seq from '../../../src/struct/Seq.js';
import Bound from '../../../src/struct/Bound.js';
test('Bound::middle', () => {
    expect(new Bound(0, 0).middle).toBe(0);
    expect(new Bound(0, 1).middle).toBe(0.5);
    expect(new Bound(0, 2).middle).toBe(1);
    expect(new Bound(1, 2).middle).toBe(1.5);
    expect(new Bound(2, 2).middle).toBe(2);
});
test('Bound::isIntersect', () => {
    expect(new Bound(0, 0).isIntersect(new Bound(0, 0))).toBeTruthy();
    expect(new Bound(0, 1).isIntersect(new Bound(0, 0))).toBeTruthy();
    expect(new Bound(0, 2).isIntersect(new Bound(0, 0))).toBeTruthy();
    expect(new Bound(1, 2).isIntersect(new Bound(0, 0))).toBeFalsy();
    expect(new Bound(2, 2).isIntersect(new Bound(0, 0))).toBeFalsy();
    expect(new Bound(2, 2).isIntersect(new Bound(0, 1))).toBeFalsy();
    expect(new Bound(2, 2).isIntersect(new Bound(0, 2))).toBeTruthy();
    expect(new Bound(2, 2).isIntersect(new Bound(1, 2))).toBeTruthy();
    expect(new Bound(2, 2).isIntersect(new Bound(2, 2))).toBeTruthy();
});
test('Bound::intersect', () => {
    expect(new Bound(0, 0).intersect(new Bound(0, 0))).toEqual(new Bound(0, 0));
    expect(new Bound(0, 1).intersect(new Bound(0, 0))).toEqual(new Bound(0, 0));
    expect(new Bound(0, 2).intersect(new Bound(0, 0))).toEqual(new Bound(0, 0));
    expect(new Bound(1, 2).intersect(new Bound(0, 0))).toBeUndefined();
    expect(new Bound(2, 2).intersect(new Bound(0, 0))).toBeUndefined();
    expect(new Bound(2, 2).intersect(new Bound(0, 1))).toBeUndefined();
    expect(new Bound(2, 2).intersect(new Bound(0, 2))).toEqual(new Bound(2, 2));
    expect(new Bound(2, 2).intersect(new Bound(1, 2))).toEqual(new Bound(2, 2));
    expect(new Bound(2, 2).intersect(new Bound(2, 2))).toEqual(new Bound(2, 2));
});
test('Bound::clamp', () => {
    expect(new Bound(0, 0).clamp(0)).toBe(0);
    expect(new Bound(0, 1).clamp(0)).toBe(0);
    expect(new Bound(0, 2).clamp(0)).toBe(0);
    expect(new Bound(1, 2).clamp(0)).toBe(1);
    expect(new Bound(2, 2).clamp(0)).toBe(2);
    expect(new Bound(2, 4).clamp(1)).toBe(2);
    expect(new Bound(2, 4).clamp(2)).toBe(2);
    expect(new Bound(2, 4).clamp(3)).toBe(3);
    expect(new Bound(2, 4).clamp(4)).toBe(4);
    expect(new Bound(2, 4).clamp(5)).toBe(4);
});
test('Bound::random', () => {
    expect(new Bound(0, 0).random()).toBe(0);
    expect(new Bound(0, 1).random()).toBeGreaterThanOrEqual(0);
    expect(new Bound(0, 1).random()).toBeLessThanOrEqual(1);
    expect(new Bound(0, 2).random()).toBeGreaterThanOrEqual(0);
    expect(new Bound(0, 2).random()).toBeLessThanOrEqual(2);
    expect(new Bound(1, 2).random()).toBeGreaterThanOrEqual(1);
    expect(new Bound(1, 2).random()).toBeLessThanOrEqual(2);
    expect(new Bound(2, 2).random()).toBe(2);
});
test('Bound::toSequence', () => {
    expect(new Bound(0, 0).toSequence()).toEqual(new Seq(0, 0));
    expect(new Bound(0, 1).toSequence()).toEqual(new Seq(0, 1));
    expect(new Bound(0, 2).toSequence()).toEqual(new Seq(0, 2));
    expect(new Bound(1, 2).toSequence()).toEqual(new Seq(1, 2));
    expect(new Bound(2, 2).toSequence()).toEqual(new Seq(2, 2));
});
