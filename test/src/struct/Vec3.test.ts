'use strict'

import Vec3 from '../../../src/struct/Vec3.js'

test('Vec3::fromVec3', () => {
  expect(Vec3.fromVec3(new Vec3(0, 0, 0))).toEqual(new Vec3(0, 0, 0))
  expect(Vec3.fromVec3(new Vec3(1, 0, 0))).toEqual(new Vec3(1, 0, 0))
  expect(Vec3.fromVec3(new Vec3(2, 0, 0))).toEqual(new Vec3(2, 0, 0))
  expect(Vec3.fromVec3(new Vec3(2, 1, 0))).toEqual(new Vec3(2, 1, 0))
  expect(Vec3.fromVec3(new Vec3(2, 2, 0))).toEqual(new Vec3(2, 2, 0))
  expect(Vec3.fromVec3(new Vec3(2, 2, 1))).toEqual(new Vec3(2, 2, 1))
  expect(Vec3.fromVec3(new Vec3(2, 2, 2))).toEqual(new Vec3(2, 2, 2))
})

test('Vec3::fromValue', () => {
  expect(Vec3.fromValue(0)).toEqual(new Vec3(0, 0, 0))
  expect(Vec3.fromValue(1)).toEqual(new Vec3(1, 1, 1))
  expect(Vec3.fromValue(2)).toEqual(new Vec3(2, 2, 2))
})

test('Vec3::withX', () => {
  expect(new Vec3(0, 0, 0).withX(0)).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(1, 0, 0).withX(0)).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(2, 0, 0).withX(0)).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(2, 1, 0).withX(0)).toEqual(new Vec3(0, 1, 0))
  expect(new Vec3(2, 2, 0).withX(0)).toEqual(new Vec3(0, 2, 0))
  expect(new Vec3(2, 2, 0).withX(1)).toEqual(new Vec3(1, 2, 0))
  expect(new Vec3(2, 2, 0).withX(2)).toEqual(new Vec3(2, 2, 0))
  expect(new Vec3(2, 2, 1).withX(2)).toEqual(new Vec3(2, 2, 1))
  expect(new Vec3(2, 2, 2).withX(2)).toEqual(new Vec3(2, 2, 2))
})

test('Vec3::withY', () => {
  expect(new Vec3(0, 0, 0).withY(0)).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(1, 0, 0).withY(0)).toEqual(new Vec3(1, 0, 0))
  expect(new Vec3(2, 0, 0).withY(0)).toEqual(new Vec3(2, 0, 0))
  expect(new Vec3(2, 1, 0).withY(0)).toEqual(new Vec3(2, 0, 0))
  expect(new Vec3(2, 2, 0).withY(0)).toEqual(new Vec3(2, 0, 0))
  expect(new Vec3(2, 2, 0).withY(1)).toEqual(new Vec3(2, 1, 0))
  expect(new Vec3(2, 2, 0).withY(2)).toEqual(new Vec3(2, 2, 0))
  expect(new Vec3(2, 2, 1).withY(2)).toEqual(new Vec3(2, 2, 1))
  expect(new Vec3(2, 2, 2).withY(2)).toEqual(new Vec3(2, 2, 2))
})

test('Vec3::withZ', () => {
  expect(new Vec3(0, 0, 0).withZ(0)).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(1, 0, 0).withZ(0)).toEqual(new Vec3(1, 0, 0))
  expect(new Vec3(2, 0, 0).withZ(0)).toEqual(new Vec3(2, 0, 0))
  expect(new Vec3(2, 1, 0).withZ(0)).toEqual(new Vec3(2, 1, 0))
  expect(new Vec3(2, 2, 0).withZ(0)).toEqual(new Vec3(2, 2, 0))
  expect(new Vec3(2, 2, 0).withZ(1)).toEqual(new Vec3(2, 2, 1))
  expect(new Vec3(2, 2, 0).withZ(2)).toEqual(new Vec3(2, 2, 2))
  expect(new Vec3(2, 2, 1).withZ(2)).toEqual(new Vec3(2, 2, 2))
  expect(new Vec3(2, 2, 2).withZ(2)).toEqual(new Vec3(2, 2, 2))
})

test('Vec3::plus', () => {
  expect(new Vec3(0, 0, 0).plus(new Vec3(0, 0, 0))).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(1, 0, 0).plus(new Vec3(0, 0, 0))).toEqual(new Vec3(1, 0, 0))
  expect(new Vec3(2, 0, 0).plus(new Vec3(0, 0, 0))).toEqual(new Vec3(2, 0, 0))
  expect(new Vec3(2, 1, 0).plus(new Vec3(0, 0, 0))).toEqual(new Vec3(2, 1, 0))
  expect(new Vec3(2, 2, 0).plus(new Vec3(0, 0, 0))).toEqual(new Vec3(2, 2, 0))
  expect(new Vec3(2, 2, 0).plus(new Vec3(1, 0, 0))).toEqual(new Vec3(3, 2, 0))
  expect(new Vec3(2, 2, 0).plus(new Vec3(2, 0, 0))).toEqual(new Vec3(4, 2, 0))
  expect(new Vec3(2, 2, 0).plus(new Vec3(2, 1, 0))).toEqual(new Vec3(4, 3, 0))
  expect(new Vec3(2, 2, 0).plus(new Vec3(2, 2, 0))).toEqual(new Vec3(4, 4, 0))
  expect(new Vec3(2, 2, 1).plus(new Vec3(2, 2, 0))).toEqual(new Vec3(4, 4, 1))
  expect(new Vec3(2, 2, 2).plus(new Vec3(2, 2, 0))).toEqual(new Vec3(4, 4, 2))
  expect(new Vec3(2, 2, 2).plus(new Vec3(2, 2, 1))).toEqual(new Vec3(4, 4, 3))
  expect(new Vec3(2, 2, 2).plus(new Vec3(2, 2, 2))).toEqual(new Vec3(4, 4, 4))
})

test('Vec3::minus', () => {
  expect(new Vec3(0, 0, 0).minus(new Vec3(0, 0, 0))).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(1, 0, 0).minus(new Vec3(0, 0, 0))).toEqual(new Vec3(1, 0, 0))
  expect(new Vec3(2, 0, 0).minus(new Vec3(0, 0, 0))).toEqual(new Vec3(2, 0, 0))
  expect(new Vec3(2, 1, 0).minus(new Vec3(0, 0, 0))).toEqual(new Vec3(2, 1, 0))
  expect(new Vec3(2, 2, 0).minus(new Vec3(0, 0, 0))).toEqual(new Vec3(2, 2, 0))
  expect(new Vec3(2, 2, 0).minus(new Vec3(1, 0, 0))).toEqual(new Vec3(1, 2, 0))
  expect(new Vec3(2, 2, 0).minus(new Vec3(2, 0, 0))).toEqual(new Vec3(0, 2, 0))
  expect(new Vec3(2, 2, 0).minus(new Vec3(2, 1, 0))).toEqual(new Vec3(0, 1, 0))
  expect(new Vec3(2, 2, 0).minus(new Vec3(2, 2, 0))).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(2, 2, 1).minus(new Vec3(2, 2, 0))).toEqual(new Vec3(0, 0, 1))
  expect(new Vec3(2, 2, 2).minus(new Vec3(2, 2, 0))).toEqual(new Vec3(0, 0, 2))
  expect(new Vec3(2, 2, 2).minus(new Vec3(2, 2, 1))).toEqual(new Vec3(0, 0, 1))
  expect(new Vec3(2, 2, 2).minus(new Vec3(2, 2, 2))).toEqual(new Vec3(0, 0, 0))
})

test('Vec3::times', () => {
  expect(new Vec3(0, 0, 0).times(0)).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(1, 0, 0).times(0)).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(2, 0, 0).times(0)).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(2, 1, 0).times(0)).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(2, 2, 0).times(0)).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(2, 2, 0).times(1)).toEqual(new Vec3(2, 2, 0))
  expect(new Vec3(2, 2, 0).times(2)).toEqual(new Vec3(4, 4, 0))
  expect(new Vec3(2, 2, 1).times(2)).toEqual(new Vec3(4, 4, 2))
  expect(new Vec3(2, 2, 2).times(2)).toEqual(new Vec3(4, 4, 4))
})

test('Vec3::divide', () => {
  expect(new Vec3(0, 0, 0).divide(1)).toEqual(new Vec3(0, 0, 0))
  expect(new Vec3(1, 0, 0).divide(1)).toEqual(new Vec3(1, 0, 0))
  expect(new Vec3(2, 0, 0).divide(1)).toEqual(new Vec3(2, 0, 0))
  expect(new Vec3(2, 1, 0).divide(1)).toEqual(new Vec3(2, 1, 0))
  expect(new Vec3(2, 2, 0).divide(1)).toEqual(new Vec3(2, 2, 0))
  expect(new Vec3(2, 2, 0).divide(2)).toEqual(new Vec3(1, 1, 0))
  expect(new Vec3(2, 2, 0).divide(4)).toEqual(new Vec3(0.5, 0.5, 0))
  expect(new Vec3(2, 2, 1).divide(4)).toEqual(new Vec3(0.5, 0.5, 0.25))
  expect(new Vec3(2, 2, 2).divide(4)).toEqual(new Vec3(0.5, 0.5, 0.5))
})

test('Vec3::assign', () => {
  const vector = new Vec3()
  vector.assign(new Vec3(0, 0, 0))
  expect(vector).toEqual(new Vec3(0, 0, 0))
  vector.assign(new Vec3(1, 0, 0))
  expect(vector).toEqual(new Vec3(1, 0, 0))
  vector.assign(new Vec3(2, 0, 0))
  expect(vector).toEqual(new Vec3(2, 0, 0))
  vector.assign(new Vec3(2, 1, 0))
  expect(vector).toEqual(new Vec3(2, 1, 0))
  vector.assign(new Vec3(2, 2, 0))
  expect(vector).toEqual(new Vec3(2, 2, 0))
  vector.assign(new Vec3(2, 2, 1))
  expect(vector).toEqual(new Vec3(2, 2, 1))
  vector.assign(new Vec3(2, 2, 2))
  expect(vector).toEqual(new Vec3(2, 2, 2))
})

test('Vec3::plusAssign', () => {
  const vector = new Vec3()
  vector.plusAssign(new Vec3(0, 0, 0))
  expect(vector).toEqual(new Vec3(0, 0, 0))
  vector.plusAssign(new Vec3(1, 0, 0))
  expect(vector).toEqual(new Vec3(1, 0, 0))
  vector.plusAssign(new Vec3(2, 0, 0))
  expect(vector).toEqual(new Vec3(3, 0, 0))
  vector.plusAssign(new Vec3(2, 1, 0))
  expect(vector).toEqual(new Vec3(5, 1, 0))
  vector.plusAssign(new Vec3(2, 2, 0))
  expect(vector).toEqual(new Vec3(7, 3, 0))
  vector.plusAssign(new Vec3(2, 2, 1))
  expect(vector).toEqual(new Vec3(9, 5, 1))
  vector.plusAssign(new Vec3(2, 2, 2))
  expect(vector).toEqual(new Vec3(11, 7, 3))
})

test('Vec3::minusAssign', () => {
  const vector = new Vec3()
  vector.minusAssign(new Vec3(0, 0, 0))
  expect(vector).toEqual(new Vec3(0, 0, 0))
  vector.minusAssign(new Vec3(1, 0, 0))
  expect(vector).toEqual(new Vec3(-1, 0, 0))
  vector.minusAssign(new Vec3(2, 0, 0))
  expect(vector).toEqual(new Vec3(-3, 0, 0))
  vector.minusAssign(new Vec3(2, 1, 0))
  expect(vector).toEqual(new Vec3(-5, -1, 0))
  vector.minusAssign(new Vec3(2, 2, 0))
  expect(vector).toEqual(new Vec3(-7, -3, 0))
  vector.minusAssign(new Vec3(2, 2, 1))
  expect(vector).toEqual(new Vec3(-9, -5, -1))
  vector.minusAssign(new Vec3(2, 2, 2))
  expect(vector).toEqual(new Vec3(-11, -7, -3))
})

test('Vec3::timesAssign', () => {
  const vector = new Vec3(1, 1, 1)
  vector.timesAssign(1)
  expect(vector).toEqual(new Vec3(1, 1, 1))
  vector.timesAssign(2)
  expect(vector).toEqual(new Vec3(2, 2, 2))
  vector.timesAssign(3)
  expect(vector).toEqual(new Vec3(6, 6, 6))
})

test('Vec3::divideAssign', () => {
  const vector = new Vec3(1, 1, 1)
  vector.divideAssign(1)
  expect(vector).toEqual(new Vec3(1, 1, 1))
  vector.divideAssign(2)
  expect(vector).toEqual(new Vec3(0.5, 0.5, 0.5))
  vector.divideAssign(5)
  expect(vector).toEqual(new Vec3(0.1, 0.1, 0.1))
})

test('Vec3::isEqual', () => {
  expect(new Vec3(0, 0, 0).isEqual(new Vec3(0, 0, 0))).toBeTruthy()
  expect(new Vec3(1, 0, 0).isEqual(new Vec3(0, 0, 0))).toBeFalsy()
  expect(new Vec3(2, 0, 0).isEqual(new Vec3(0, 0, 0))).toBeFalsy()
  expect(new Vec3(2, 1, 0).isEqual(new Vec3(0, 0, 0))).toBeFalsy()
  expect(new Vec3(2, 2, 0).isEqual(new Vec3(0, 0, 0))).toBeFalsy()
  expect(new Vec3(2, 2, 0).isEqual(new Vec3(1, 0, 0))).toBeFalsy()
  expect(new Vec3(2, 2, 0).isEqual(new Vec3(2, 0, 0))).toBeFalsy()
  expect(new Vec3(2, 2, 0).isEqual(new Vec3(2, 1, 0))).toBeFalsy()
  expect(new Vec3(2, 2, 0).isEqual(new Vec3(2, 2, 0))).toBeTruthy()
  expect(new Vec3(2, 2, 1).isEqual(new Vec3(2, 2, 0))).toBeFalsy()
  expect(new Vec3(2, 2, 2).isEqual(new Vec3(2, 2, 0))).toBeFalsy()
  expect(new Vec3(2, 2, 2).isEqual(new Vec3(2, 2, 1))).toBeFalsy()
  expect(new Vec3(2, 2, 2).isEqual(new Vec3(2, 2, 2))).toBeTruthy()
})

test('Vec3::isNotEqual', () => {
  expect(new Vec3(0, 0, 0).isNotEqual(new Vec3(0, 0, 0))).toBeFalsy()
  expect(new Vec3(1, 0, 0).isNotEqual(new Vec3(0, 0, 0))).toBeTruthy()
  expect(new Vec3(2, 0, 0).isNotEqual(new Vec3(0, 0, 0))).toBeTruthy()
  expect(new Vec3(2, 1, 0).isNotEqual(new Vec3(0, 0, 0))).toBeTruthy()
  expect(new Vec3(2, 2, 0).isNotEqual(new Vec3(0, 0, 0))).toBeTruthy()
  expect(new Vec3(2, 2, 0).isNotEqual(new Vec3(1, 0, 0))).toBeTruthy()
  expect(new Vec3(2, 2, 0).isNotEqual(new Vec3(2, 0, 0))).toBeTruthy()
  expect(new Vec3(2, 2, 0).isNotEqual(new Vec3(2, 1, 0))).toBeTruthy()
  expect(new Vec3(2, 2, 0).isNotEqual(new Vec3(2, 2, 0))).toBeFalsy()
  expect(new Vec3(2, 2, 1).isNotEqual(new Vec3(2, 2, 0))).toBeTruthy()
  expect(new Vec3(2, 2, 2).isNotEqual(new Vec3(2, 2, 0))).toBeTruthy()
  expect(new Vec3(2, 2, 2).isNotEqual(new Vec3(2, 2, 1))).toBeTruthy()
  expect(new Vec3(2, 2, 2).isNotEqual(new Vec3(2, 2, 2))).toBeFalsy()
})

test('Vec3::squaredLength', () => {
  expect(new Vec3(0, 0, 0).squaredLength).toBe(0)
  expect(new Vec3(1, 0, 0).squaredLength).toBe(1)
  expect(new Vec3(2, 0, 0).squaredLength).toBe(4)
  expect(new Vec3(2, 1, 0).squaredLength).toBe(5)
  expect(new Vec3(2, 2, 0).squaredLength).toBe(8)
  expect(new Vec3(2, 2, 1).squaredLength).toBe(9)
  expect(new Vec3(2, 2, 2).squaredLength).toBe(12)
})

test('Vec3::length', () => {
  expect(new Vec3(0, 0, 0).length).toBe(0)
  expect(new Vec3(1, 0, 0).length).toBe(1)
  expect(new Vec3(2, 0, 0).length).toBe(2)
  expect(new Vec3(2, 1, 0).length).toBe(Math.sqrt(5))
  expect(new Vec3(2, 2, 0).length).toBe(Math.sqrt(8))
  expect(new Vec3(2, 2, 1).length).toBe(3)
  expect(new Vec3(2, 2, 2).length).toBe(Math.sqrt(12))
})

test('Vec3::normalized', () => {
  expect(new Vec3(1, 0, 0).normalized).toEqual(new Vec3(1, 0, 0))
  expect(new Vec3(2, 0, 0).normalized).toEqual(new Vec3(1, 0, 0))
  expect(new Vec3(3, 0, 0).normalized).toEqual(new Vec3(1, 0, 0))
  expect(new Vec3(3, 4, 0).normalized).toEqual(new Vec3(0.6, 0.8, 0))
  expect(new Vec3(6, 8, 0).normalized).toEqual(new Vec3(0.6, 0.8, 0))
  expect(new Vec3(2, 2, 1).normalized).toEqual(new Vec3(2 / 3, 2 / 3, 1 / 3))
})

test('Vec3.xFliped', () => {
  expect(new Vec3(0, 0, 0).xFliped).toEqual(new Vec3(-0, 0, 0))
  expect(new Vec3(1, 0, 0).xFliped).toEqual(new Vec3(-1, 0, 0))
  expect(new Vec3(2, 0, 0).xFliped).toEqual(new Vec3(-2, 0, 0))
  expect(new Vec3(2, 1, 0).xFliped).toEqual(new Vec3(-2, 1, 0))
  expect(new Vec3(2, 2, 0).xFliped).toEqual(new Vec3(-2, 2, 0))
  expect(new Vec3(2, 2, 1).xFliped).toEqual(new Vec3(-2, 2, 1))
  expect(new Vec3(2, 2, 2).xFliped).toEqual(new Vec3(-2, 2, 2))
})

test('Vec3.yFliped', () => {
  expect(new Vec3(0, 0, 0).yFliped).toEqual(new Vec3(0, -0, 0))
  expect(new Vec3(1, 0, 0).yFliped).toEqual(new Vec3(1, -0, 0))
  expect(new Vec3(2, 0, 0).yFliped).toEqual(new Vec3(2, -0, 0))
  expect(new Vec3(2, 1, 0).yFliped).toEqual(new Vec3(2, -1, 0))
  expect(new Vec3(2, 2, 0).yFliped).toEqual(new Vec3(2, -2, 0))
  expect(new Vec3(2, 2, 1).yFliped).toEqual(new Vec3(2, -2, 1))
  expect(new Vec3(2, 2, 2).yFliped).toEqual(new Vec3(2, -2, 2))
})

test('Vec3.zFliped', () => {
  expect(new Vec3(0, 0, 0).zFliped).toEqual(new Vec3(0, 0, -0))
  expect(new Vec3(1, 0, 0).zFliped).toEqual(new Vec3(1, 0, -0))
  expect(new Vec3(2, 0, 0).zFliped).toEqual(new Vec3(2, 0, -0))
  expect(new Vec3(2, 1, 0).zFliped).toEqual(new Vec3(2, 1, -0))
  expect(new Vec3(2, 2, 0).zFliped).toEqual(new Vec3(2, 2, -0))
  expect(new Vec3(2, 2, 1).zFliped).toEqual(new Vec3(2, 2, -1))
  expect(new Vec3(2, 2, 2).zFliped).toEqual(new Vec3(2, 2, -2))
})

test('Vec3.fliped', () => {
  expect(new Vec3(0, 0, 0).fliped).toEqual(new Vec3(-0, -0, -0))
  expect(new Vec3(1, 0, 0).fliped).toEqual(new Vec3(-1, -0, -0))
  expect(new Vec3(2, 0, 0).fliped).toEqual(new Vec3(-2, -0, -0))
  expect(new Vec3(2, 1, 0).fliped).toEqual(new Vec3(-2, -1, -0))
  expect(new Vec3(2, 2, 0).fliped).toEqual(new Vec3(-2, -2, -0))
  expect(new Vec3(2, 2, 1).fliped).toEqual(new Vec3(-2, -2, -1))
  expect(new Vec3(2, 2, 2).fliped).toEqual(new Vec3(-2, -2, -2))
})

test('Vec3.toString', () => {
  expect(new Vec3(0, 0, 0).toString()).toBe('0,0,0')
  expect(new Vec3(1, 0, 0).toString()).toBe('1,0,0')
  expect(new Vec3(2, 0, 0).toString()).toBe('2,0,0')
  expect(new Vec3(2, 1, 0).toString()).toBe('2,1,0')
  expect(new Vec3(2, 2, 0).toString()).toBe('2,2,0')
  expect(new Vec3(2, 2, 1).toString()).toBe('2,2,1')
  expect(new Vec3(2, 2, 2).toString()).toBe('2,2,2')
})
