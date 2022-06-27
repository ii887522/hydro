'use strict';
import Bound from '../../../src/struct/Bound.js';
import Seq from '../../../src/struct/Seq.js';
test('Seq::normalize', () => {
    expect(new Seq(0, 1).normalize(0)).toBe(0);
    expect(new Seq(0, 2).normalize(0)).toBe(0);
    expect(new Seq(0, 5).normalize(0)).toBe(0);
    expect(new Seq(0, 5).normalize(1)).toBe(0.2);
    expect(new Seq(0, 5).normalize(2)).toBe(0.4);
    expect(new Seq(1, 5).normalize(2)).toBe(0.25);
    expect(new Seq(2, 5).normalize(2)).toBe(0);
});
test('Seq::unnormalize', () => {
    expect(new Seq(0, 1).unnormalize(0)).toBe(0);
    expect(new Seq(0, 2).unnormalize(0)).toBe(0);
    expect(new Seq(0, 5).unnormalize(0)).toBe(0);
    expect(new Seq(0, 5).unnormalize(0.2)).toBe(1);
    expect(new Seq(0, 5).unnormalize(0.4)).toBe(2);
    expect(new Seq(1, 5).unnormalize(0.25)).toBe(2);
    expect(new Seq(2, 5).unnormalize(0)).toBe(2);
});
test('Seq::toBound', () => {
    expect(new Seq(0, 1).toBound()).toEqual(new Bound(0, 1));
    expect(new Seq(0, 2).toBound()).toEqual(new Bound(0, 2));
    expect(new Seq(0, 3).toBound()).toEqual(new Bound(0, 3));
    expect(new Seq(1, 3).toBound()).toEqual(new Bound(1, 3));
    expect(new Seq(2, 3).toBound()).toEqual(new Bound(2, 3));
});
