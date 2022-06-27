'use strict';
import Vec2 from '../../../src/struct/Vec2.js';
test('Vec2::fromVec2', () => {
    expect(Vec2.fromVec2(new Vec2(0, 0))).toEqual(new Vec2(0, 0));
    expect(Vec2.fromVec2(new Vec2(1, 0))).toEqual(new Vec2(1, 0));
    expect(Vec2.fromVec2(new Vec2(2, 0))).toEqual(new Vec2(2, 0));
    expect(Vec2.fromVec2(new Vec2(2, 1))).toEqual(new Vec2(2, 1));
    expect(Vec2.fromVec2(new Vec2(2, 2))).toEqual(new Vec2(2, 2));
});
test('Vec2::fromValue', () => {
    expect(Vec2.fromValue(0)).toEqual(new Vec2(0, 0));
    expect(Vec2.fromValue(1)).toEqual(new Vec2(1, 1));
    expect(Vec2.fromValue(2)).toEqual(new Vec2(2, 2));
});
test('Vec2::withX', () => {
    expect(new Vec2(0, 0).withX(0)).toEqual(new Vec2(0, 0));
    expect(new Vec2(1, 0).withX(0)).toEqual(new Vec2(0, 0));
    expect(new Vec2(2, 0).withX(0)).toEqual(new Vec2(0, 0));
    expect(new Vec2(2, 1).withX(0)).toEqual(new Vec2(0, 1));
    expect(new Vec2(2, 2).withX(0)).toEqual(new Vec2(0, 2));
    expect(new Vec2(2, 2).withX(1)).toEqual(new Vec2(1, 2));
    expect(new Vec2(2, 2).withX(2)).toEqual(new Vec2(2, 2));
});
test('Vec2::withY', () => {
    expect(new Vec2(0, 0).withY(0)).toEqual(new Vec2(0, 0));
    expect(new Vec2(1, 0).withY(0)).toEqual(new Vec2(1, 0));
    expect(new Vec2(2, 0).withY(0)).toEqual(new Vec2(2, 0));
    expect(new Vec2(2, 1).withY(0)).toEqual(new Vec2(2, 0));
    expect(new Vec2(2, 2).withY(0)).toEqual(new Vec2(2, 0));
    expect(new Vec2(2, 2).withY(1)).toEqual(new Vec2(2, 1));
    expect(new Vec2(2, 2).withY(2)).toEqual(new Vec2(2, 2));
});
test('Vec2::plus', () => {
    expect(new Vec2(0, 0).plus(new Vec2(0, 0))).toEqual(new Vec2(0, 0));
    expect(new Vec2(1, 0).plus(new Vec2(0, 0))).toEqual(new Vec2(1, 0));
    expect(new Vec2(2, 0).plus(new Vec2(0, 0))).toEqual(new Vec2(2, 0));
    expect(new Vec2(2, 1).plus(new Vec2(0, 0))).toEqual(new Vec2(2, 1));
    expect(new Vec2(2, 2).plus(new Vec2(0, 0))).toEqual(new Vec2(2, 2));
    expect(new Vec2(2, 2).plus(new Vec2(1, 0))).toEqual(new Vec2(3, 2));
    expect(new Vec2(2, 2).plus(new Vec2(2, 0))).toEqual(new Vec2(4, 2));
    expect(new Vec2(2, 2).plus(new Vec2(2, 1))).toEqual(new Vec2(4, 3));
    expect(new Vec2(2, 2).plus(new Vec2(2, 2))).toEqual(new Vec2(4, 4));
});
test('Vec2::minus', () => {
    expect(new Vec2(0, 0).minus(new Vec2(0, 0))).toEqual(new Vec2(0, 0));
    expect(new Vec2(1, 0).minus(new Vec2(0, 0))).toEqual(new Vec2(1, 0));
    expect(new Vec2(2, 0).minus(new Vec2(0, 0))).toEqual(new Vec2(2, 0));
    expect(new Vec2(2, 1).minus(new Vec2(0, 0))).toEqual(new Vec2(2, 1));
    expect(new Vec2(2, 2).minus(new Vec2(0, 0))).toEqual(new Vec2(2, 2));
    expect(new Vec2(2, 2).minus(new Vec2(1, 0))).toEqual(new Vec2(1, 2));
    expect(new Vec2(2, 2).minus(new Vec2(2, 0))).toEqual(new Vec2(0, 2));
    expect(new Vec2(2, 2).minus(new Vec2(2, 1))).toEqual(new Vec2(0, 1));
    expect(new Vec2(2, 2).minus(new Vec2(2, 2))).toEqual(new Vec2(0, 0));
});
test('Vec2::times', () => {
    expect(new Vec2(0, 0).times(0)).toEqual(new Vec2(0, 0));
    expect(new Vec2(1, 0).times(0)).toEqual(new Vec2(0, 0));
    expect(new Vec2(2, 0).times(0)).toEqual(new Vec2(0, 0));
    expect(new Vec2(2, 1).times(0)).toEqual(new Vec2(0, 0));
    expect(new Vec2(2, 2).times(0)).toEqual(new Vec2(0, 0));
    expect(new Vec2(2, 2).times(1)).toEqual(new Vec2(2, 2));
    expect(new Vec2(2, 2).times(2)).toEqual(new Vec2(4, 4));
});
test('Vec2::divide', () => {
    expect(new Vec2(0, 0).divide(1)).toEqual(new Vec2(0, 0));
    expect(new Vec2(1, 0).divide(1)).toEqual(new Vec2(1, 0));
    expect(new Vec2(2, 0).divide(1)).toEqual(new Vec2(2, 0));
    expect(new Vec2(2, 1).divide(1)).toEqual(new Vec2(2, 1));
    expect(new Vec2(2, 2).divide(1)).toEqual(new Vec2(2, 2));
    expect(new Vec2(2, 2).divide(2)).toEqual(new Vec2(1, 1));
    expect(new Vec2(2, 2).divide(4)).toEqual(new Vec2(0.5, 0.5));
});
test('Vec2::assign', () => {
    const vector = new Vec2();
    vector.assign(new Vec2(0, 0));
    expect(vector).toEqual(new Vec2(0, 0));
    vector.assign(new Vec2(1, 0));
    expect(vector).toEqual(new Vec2(1, 0));
    vector.assign(new Vec2(2, 0));
    expect(vector).toEqual(new Vec2(2, 0));
    vector.assign(new Vec2(2, 1));
    expect(vector).toEqual(new Vec2(2, 1));
    vector.assign(new Vec2(2, 2));
    expect(vector).toEqual(new Vec2(2, 2));
});
test('Vec2::plusAssign', () => {
    const vector = new Vec2();
    vector.plusAssign(new Vec2(0, 0));
    expect(vector).toEqual(new Vec2(0, 0));
    vector.plusAssign(new Vec2(1, 0));
    expect(vector).toEqual(new Vec2(1, 0));
    vector.plusAssign(new Vec2(2, 0));
    expect(vector).toEqual(new Vec2(3, 0));
    vector.plusAssign(new Vec2(2, 1));
    expect(vector).toEqual(new Vec2(5, 1));
    vector.plusAssign(new Vec2(2, 2));
    expect(vector).toEqual(new Vec2(7, 3));
});
test('Vec2::minusAssign', () => {
    const vector = new Vec2();
    vector.minusAssign(new Vec2(0, 0));
    expect(vector).toEqual(new Vec2(0, 0));
    vector.minusAssign(new Vec2(1, 0));
    expect(vector).toEqual(new Vec2(-1, 0));
    vector.minusAssign(new Vec2(2, 0));
    expect(vector).toEqual(new Vec2(-3, 0));
    vector.minusAssign(new Vec2(2, 1));
    expect(vector).toEqual(new Vec2(-5, -1));
    vector.minusAssign(new Vec2(2, 2));
    expect(vector).toEqual(new Vec2(-7, -3));
});
test('Vec2::timesAssign', () => {
    const vector = new Vec2(1, 1);
    vector.timesAssign(1);
    expect(vector).toEqual(new Vec2(1, 1));
    vector.timesAssign(2);
    expect(vector).toEqual(new Vec2(2, 2));
    vector.timesAssign(3);
    expect(vector).toEqual(new Vec2(6, 6));
});
test('Vec2::divideAssign', () => {
    const vector = new Vec2(1, 1);
    vector.divideAssign(1);
    expect(vector).toEqual(new Vec2(1, 1));
    vector.divideAssign(2);
    expect(vector).toEqual(new Vec2(0.5, 0.5));
    vector.divideAssign(5);
    expect(vector).toEqual(new Vec2(0.1, 0.1));
});
test('Vec2::isEqual', () => {
    expect(new Vec2(0, 0).isEqual(new Vec2(0, 0))).toBeTruthy();
    expect(new Vec2(1, 0).isEqual(new Vec2(0, 0))).toBeFalsy();
    expect(new Vec2(2, 0).isEqual(new Vec2(0, 0))).toBeFalsy();
    expect(new Vec2(2, 1).isEqual(new Vec2(0, 0))).toBeFalsy();
    expect(new Vec2(2, 2).isEqual(new Vec2(0, 0))).toBeFalsy();
    expect(new Vec2(2, 2).isEqual(new Vec2(1, 0))).toBeFalsy();
    expect(new Vec2(2, 2).isEqual(new Vec2(2, 0))).toBeFalsy();
    expect(new Vec2(2, 2).isEqual(new Vec2(2, 1))).toBeFalsy();
    expect(new Vec2(2, 2).isEqual(new Vec2(2, 2))).toBeTruthy();
});
test('Vec2::isNotEqual', () => {
    expect(new Vec2(0, 0).isNotEqual(new Vec2(0, 0))).toBeFalsy();
    expect(new Vec2(1, 0).isNotEqual(new Vec2(0, 0))).toBeTruthy();
    expect(new Vec2(2, 0).isNotEqual(new Vec2(0, 0))).toBeTruthy();
    expect(new Vec2(2, 1).isNotEqual(new Vec2(0, 0))).toBeTruthy();
    expect(new Vec2(2, 2).isNotEqual(new Vec2(0, 0))).toBeTruthy();
    expect(new Vec2(2, 2).isNotEqual(new Vec2(1, 0))).toBeTruthy();
    expect(new Vec2(2, 2).isNotEqual(new Vec2(2, 0))).toBeTruthy();
    expect(new Vec2(2, 2).isNotEqual(new Vec2(2, 1))).toBeTruthy();
    expect(new Vec2(2, 2).isNotEqual(new Vec2(2, 2))).toBeFalsy();
});
test('Vec2::squaredLength', () => {
    expect(new Vec2(0, 0).squaredLength).toBe(0);
    expect(new Vec2(1, 0).squaredLength).toBe(1);
    expect(new Vec2(2, 0).squaredLength).toBe(4);
    expect(new Vec2(2, 1).squaredLength).toBe(5);
    expect(new Vec2(2, 2).squaredLength).toBe(8);
});
test('Vec2::length', () => {
    expect(new Vec2(0, 0).length).toBe(0);
    expect(new Vec2(1, 0).length).toBe(1);
    expect(new Vec2(2, 0).length).toBe(2);
    expect(new Vec2(2, 1).length).toBe(Math.sqrt(5));
    expect(new Vec2(2, 2).length).toBe(Math.sqrt(8));
});
test('Vec2::normalized', () => {
    expect(new Vec2(1, 0).normalized).toEqual(new Vec2(1, 0));
    expect(new Vec2(2, 0).normalized).toEqual(new Vec2(1, 0));
    expect(new Vec2(3, 0).normalized).toEqual(new Vec2(1, 0));
    expect(new Vec2(3, 4).normalized).toEqual(new Vec2(0.6, 0.8));
    expect(new Vec2(6, 8).normalized).toEqual(new Vec2(0.6, 0.8));
});
test('Vec2.xFliped', () => {
    expect(new Vec2(0, 0).xFliped).toEqual(new Vec2(-0, 0));
    expect(new Vec2(1, 0).xFliped).toEqual(new Vec2(-1, 0));
    expect(new Vec2(2, 0).xFliped).toEqual(new Vec2(-2, 0));
    expect(new Vec2(2, 1).xFliped).toEqual(new Vec2(-2, 1));
    expect(new Vec2(2, 2).xFliped).toEqual(new Vec2(-2, 2));
});
test('Vec2.yFliped', () => {
    expect(new Vec2(0, 0).yFliped).toEqual(new Vec2(0, -0));
    expect(new Vec2(1, 0).yFliped).toEqual(new Vec2(1, -0));
    expect(new Vec2(2, 0).yFliped).toEqual(new Vec2(2, -0));
    expect(new Vec2(2, 1).yFliped).toEqual(new Vec2(2, -1));
    expect(new Vec2(2, 2).yFliped).toEqual(new Vec2(2, -2));
});
test('Vec2.fliped', () => {
    expect(new Vec2(0, 0).fliped).toEqual(new Vec2(-0, -0));
    expect(new Vec2(1, 0).fliped).toEqual(new Vec2(-1, -0));
    expect(new Vec2(2, 0).fliped).toEqual(new Vec2(-2, -0));
    expect(new Vec2(2, 1).fliped).toEqual(new Vec2(-2, -1));
    expect(new Vec2(2, 2).fliped).toEqual(new Vec2(-2, -2));
});
test('Vec2.toString', () => {
    expect(new Vec2(0, 0).toString()).toBe('0,0');
    expect(new Vec2(1, 0).toString()).toBe('1,0');
    expect(new Vec2(2, 0).toString()).toBe('2,0');
    expect(new Vec2(2, 1).toString()).toBe('2,1');
    expect(new Vec2(2, 2).toString()).toBe('2,2');
});
