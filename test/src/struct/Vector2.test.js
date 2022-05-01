'use strict';
import Vector2 from '../../../src/struct/Vector2.js';
test('Vector2::fromVector2', () => {
    expect(Vector2.fromVector2(new Vector2(0, 0))).toEqual(new Vector2(0, 0));
    expect(Vector2.fromVector2(new Vector2(1, 0))).toEqual(new Vector2(1, 0));
    expect(Vector2.fromVector2(new Vector2(2, 0))).toEqual(new Vector2(2, 0));
    expect(Vector2.fromVector2(new Vector2(2, 1))).toEqual(new Vector2(2, 1));
    expect(Vector2.fromVector2(new Vector2(2, 2))).toEqual(new Vector2(2, 2));
});
test('Vector2::fromValue', () => {
    expect(Vector2.fromValue(0)).toEqual(new Vector2(0, 0));
    expect(Vector2.fromValue(1)).toEqual(new Vector2(1, 1));
    expect(Vector2.fromValue(2)).toEqual(new Vector2(2, 2));
});
test('Vector2::withX', () => {
    expect(new Vector2(0, 0).withX(0)).toEqual(new Vector2(0, 0));
    expect(new Vector2(1, 0).withX(0)).toEqual(new Vector2(0, 0));
    expect(new Vector2(2, 0).withX(0)).toEqual(new Vector2(0, 0));
    expect(new Vector2(2, 1).withX(0)).toEqual(new Vector2(0, 1));
    expect(new Vector2(2, 2).withX(0)).toEqual(new Vector2(0, 2));
    expect(new Vector2(2, 2).withX(1)).toEqual(new Vector2(1, 2));
    expect(new Vector2(2, 2).withX(2)).toEqual(new Vector2(2, 2));
});
test('Vector2::withY', () => {
    expect(new Vector2(0, 0).withY(0)).toEqual(new Vector2(0, 0));
    expect(new Vector2(1, 0).withY(0)).toEqual(new Vector2(1, 0));
    expect(new Vector2(2, 0).withY(0)).toEqual(new Vector2(2, 0));
    expect(new Vector2(2, 1).withY(0)).toEqual(new Vector2(2, 0));
    expect(new Vector2(2, 2).withY(0)).toEqual(new Vector2(2, 0));
    expect(new Vector2(2, 2).withY(1)).toEqual(new Vector2(2, 1));
    expect(new Vector2(2, 2).withY(2)).toEqual(new Vector2(2, 2));
});
test('Vector2::plus', () => {
    expect(new Vector2(0, 0).plus(new Vector2(0, 0))).toEqual(new Vector2(0, 0));
    expect(new Vector2(1, 0).plus(new Vector2(0, 0))).toEqual(new Vector2(1, 0));
    expect(new Vector2(2, 0).plus(new Vector2(0, 0))).toEqual(new Vector2(2, 0));
    expect(new Vector2(2, 1).plus(new Vector2(0, 0))).toEqual(new Vector2(2, 1));
    expect(new Vector2(2, 2).plus(new Vector2(0, 0))).toEqual(new Vector2(2, 2));
    expect(new Vector2(2, 2).plus(new Vector2(1, 0))).toEqual(new Vector2(3, 2));
    expect(new Vector2(2, 2).plus(new Vector2(2, 0))).toEqual(new Vector2(4, 2));
    expect(new Vector2(2, 2).plus(new Vector2(2, 1))).toEqual(new Vector2(4, 3));
    expect(new Vector2(2, 2).plus(new Vector2(2, 2))).toEqual(new Vector2(4, 4));
});
test('Vector2::minus', () => {
    expect(new Vector2(0, 0).minus(new Vector2(0, 0))).toEqual(new Vector2(0, 0));
    expect(new Vector2(1, 0).minus(new Vector2(0, 0))).toEqual(new Vector2(1, 0));
    expect(new Vector2(2, 0).minus(new Vector2(0, 0))).toEqual(new Vector2(2, 0));
    expect(new Vector2(2, 1).minus(new Vector2(0, 0))).toEqual(new Vector2(2, 1));
    expect(new Vector2(2, 2).minus(new Vector2(0, 0))).toEqual(new Vector2(2, 2));
    expect(new Vector2(2, 2).minus(new Vector2(1, 0))).toEqual(new Vector2(1, 2));
    expect(new Vector2(2, 2).minus(new Vector2(2, 0))).toEqual(new Vector2(0, 2));
    expect(new Vector2(2, 2).minus(new Vector2(2, 1))).toEqual(new Vector2(0, 1));
    expect(new Vector2(2, 2).minus(new Vector2(2, 2))).toEqual(new Vector2(0, 0));
});
test('Vector2::times', () => {
    expect(new Vector2(0, 0).times(0)).toEqual(new Vector2(0, 0));
    expect(new Vector2(1, 0).times(0)).toEqual(new Vector2(0, 0));
    expect(new Vector2(2, 0).times(0)).toEqual(new Vector2(0, 0));
    expect(new Vector2(2, 1).times(0)).toEqual(new Vector2(0, 0));
    expect(new Vector2(2, 2).times(0)).toEqual(new Vector2(0, 0));
    expect(new Vector2(2, 2).times(1)).toEqual(new Vector2(2, 2));
    expect(new Vector2(2, 2).times(2)).toEqual(new Vector2(4, 4));
});
test('Vector2::divide', () => {
    expect(new Vector2(0, 0).divide(1)).toEqual(new Vector2(0, 0));
    expect(new Vector2(1, 0).divide(1)).toEqual(new Vector2(1, 0));
    expect(new Vector2(2, 0).divide(1)).toEqual(new Vector2(2, 0));
    expect(new Vector2(2, 1).divide(1)).toEqual(new Vector2(2, 1));
    expect(new Vector2(2, 2).divide(1)).toEqual(new Vector2(2, 2));
    expect(new Vector2(2, 2).divide(2)).toEqual(new Vector2(1, 1));
    expect(new Vector2(2, 2).divide(4)).toEqual(new Vector2(0.5, 0.5));
});
test('Vector2::assign', () => {
    const vector = new Vector2();
    vector.assign(new Vector2(0, 0));
    expect(vector).toEqual(new Vector2(0, 0));
    vector.assign(new Vector2(1, 0));
    expect(vector).toEqual(new Vector2(1, 0));
    vector.assign(new Vector2(2, 0));
    expect(vector).toEqual(new Vector2(2, 0));
    vector.assign(new Vector2(2, 1));
    expect(vector).toEqual(new Vector2(2, 1));
    vector.assign(new Vector2(2, 2));
    expect(vector).toEqual(new Vector2(2, 2));
});
test('Vector2::plusAssign', () => {
    const vector = new Vector2();
    vector.plusAssign(new Vector2(0, 0));
    expect(vector).toEqual(new Vector2(0, 0));
    vector.plusAssign(new Vector2(1, 0));
    expect(vector).toEqual(new Vector2(1, 0));
    vector.plusAssign(new Vector2(2, 0));
    expect(vector).toEqual(new Vector2(3, 0));
    vector.plusAssign(new Vector2(2, 1));
    expect(vector).toEqual(new Vector2(5, 1));
    vector.plusAssign(new Vector2(2, 2));
    expect(vector).toEqual(new Vector2(7, 3));
});
test('Vector2::minusAssign', () => {
    const vector = new Vector2();
    vector.minusAssign(new Vector2(0, 0));
    expect(vector).toEqual(new Vector2(0, 0));
    vector.minusAssign(new Vector2(1, 0));
    expect(vector).toEqual(new Vector2(-1, 0));
    vector.minusAssign(new Vector2(2, 0));
    expect(vector).toEqual(new Vector2(-3, 0));
    vector.minusAssign(new Vector2(2, 1));
    expect(vector).toEqual(new Vector2(-5, -1));
    vector.minusAssign(new Vector2(2, 2));
    expect(vector).toEqual(new Vector2(-7, -3));
});
test('Vector2::timesAssign', () => {
    const vector = new Vector2(1, 1);
    vector.timesAssign(1);
    expect(vector).toEqual(new Vector2(1, 1));
    vector.timesAssign(2);
    expect(vector).toEqual(new Vector2(2, 2));
    vector.timesAssign(3);
    expect(vector).toEqual(new Vector2(6, 6));
});
test('Vector2::divideAssign', () => {
    const vector = new Vector2(1, 1);
    vector.divideAssign(1);
    expect(vector).toEqual(new Vector2(1, 1));
    vector.divideAssign(2);
    expect(vector).toEqual(new Vector2(0.5, 0.5));
    vector.divideAssign(5);
    expect(vector).toEqual(new Vector2(0.1, 0.1));
});
test('Vector2::isEqual', () => {
    expect(new Vector2(0, 0).isEqual(new Vector2(0, 0))).toBeTruthy();
    expect(new Vector2(1, 0).isEqual(new Vector2(0, 0))).toBeFalsy();
    expect(new Vector2(2, 0).isEqual(new Vector2(0, 0))).toBeFalsy();
    expect(new Vector2(2, 1).isEqual(new Vector2(0, 0))).toBeFalsy();
    expect(new Vector2(2, 2).isEqual(new Vector2(0, 0))).toBeFalsy();
    expect(new Vector2(2, 2).isEqual(new Vector2(1, 0))).toBeFalsy();
    expect(new Vector2(2, 2).isEqual(new Vector2(2, 0))).toBeFalsy();
    expect(new Vector2(2, 2).isEqual(new Vector2(2, 1))).toBeFalsy();
    expect(new Vector2(2, 2).isEqual(new Vector2(2, 2))).toBeTruthy();
});
test('Vector2::isNotEqual', () => {
    expect(new Vector2(0, 0).isNotEqual(new Vector2(0, 0))).toBeFalsy();
    expect(new Vector2(1, 0).isNotEqual(new Vector2(0, 0))).toBeTruthy();
    expect(new Vector2(2, 0).isNotEqual(new Vector2(0, 0))).toBeTruthy();
    expect(new Vector2(2, 1).isNotEqual(new Vector2(0, 0))).toBeTruthy();
    expect(new Vector2(2, 2).isNotEqual(new Vector2(0, 0))).toBeTruthy();
    expect(new Vector2(2, 2).isNotEqual(new Vector2(1, 0))).toBeTruthy();
    expect(new Vector2(2, 2).isNotEqual(new Vector2(2, 0))).toBeTruthy();
    expect(new Vector2(2, 2).isNotEqual(new Vector2(2, 1))).toBeTruthy();
    expect(new Vector2(2, 2).isNotEqual(new Vector2(2, 2))).toBeFalsy();
});
test('Vector2::squaredLength', () => {
    expect(new Vector2(0, 0).squaredLength).toBe(0);
    expect(new Vector2(1, 0).squaredLength).toBe(1);
    expect(new Vector2(2, 0).squaredLength).toBe(4);
    expect(new Vector2(2, 1).squaredLength).toBe(5);
    expect(new Vector2(2, 2).squaredLength).toBe(8);
});
test('Vector2::length', () => {
    expect(new Vector2(0, 0).length).toBe(0);
    expect(new Vector2(1, 0).length).toBe(1);
    expect(new Vector2(2, 0).length).toBe(2);
    expect(new Vector2(2, 1).length).toBe(Math.sqrt(5));
    expect(new Vector2(2, 2).length).toBe(Math.sqrt(8));
});
test('Vector2::normalized', () => {
    expect(new Vector2(1, 0).normalized).toEqual(new Vector2(1, 0));
    expect(new Vector2(2, 0).normalized).toEqual(new Vector2(1, 0));
    expect(new Vector2(3, 0).normalized).toEqual(new Vector2(1, 0));
    expect(new Vector2(3, 4).normalized).toEqual(new Vector2(0.6, 0.8));
    expect(new Vector2(6, 8).normalized).toEqual(new Vector2(0.6, 0.8));
});
test('Vector2.xFliped', () => {
    expect(new Vector2(0, 0).xFliped).toEqual(new Vector2(-0, 0));
    expect(new Vector2(1, 0).xFliped).toEqual(new Vector2(-1, 0));
    expect(new Vector2(2, 0).xFliped).toEqual(new Vector2(-2, 0));
    expect(new Vector2(2, 1).xFliped).toEqual(new Vector2(-2, 1));
    expect(new Vector2(2, 2).xFliped).toEqual(new Vector2(-2, 2));
});
test('Vector2.yFliped', () => {
    expect(new Vector2(0, 0).yFliped).toEqual(new Vector2(0, -0));
    expect(new Vector2(1, 0).yFliped).toEqual(new Vector2(1, -0));
    expect(new Vector2(2, 0).yFliped).toEqual(new Vector2(2, -0));
    expect(new Vector2(2, 1).yFliped).toEqual(new Vector2(2, -1));
    expect(new Vector2(2, 2).yFliped).toEqual(new Vector2(2, -2));
});
test('Vector2.fliped', () => {
    expect(new Vector2(0, 0).fliped).toEqual(new Vector2(-0, -0));
    expect(new Vector2(1, 0).fliped).toEqual(new Vector2(-1, -0));
    expect(new Vector2(2, 0).fliped).toEqual(new Vector2(-2, -0));
    expect(new Vector2(2, 1).fliped).toEqual(new Vector2(-2, -1));
    expect(new Vector2(2, 2).fliped).toEqual(new Vector2(-2, -2));
});
test('Vector2.toString', () => {
    expect(new Vector2(0, 0).toString()).toBe('0,0');
    expect(new Vector2(1, 0).toString()).toBe('1,0');
    expect(new Vector2(2, 0).toString()).toBe('2,0');
    expect(new Vector2(2, 1).toString()).toBe('2,1');
    expect(new Vector2(2, 2).toString()).toBe('2,2');
});
