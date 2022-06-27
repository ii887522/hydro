'use strict'

import Vec2 from '../../../src/struct/Vec2.js'
import Vec3 from '../../../src/struct/Vec3.js'
import Vec4 from '../../../src/struct/Vec4.js'
import Seq from '../../../src/struct/Seq.js'

import {
  toSec,
  isOdd,
  isEven,
  isPrime,
  getNextPrime,
  isPowOf2,
  lerp,
  lerpVec2,
  lerpVec3,
  lerpVec4,
  linearMap,
  linearMapVec2,
  minPos,
  maxPos,
  minNeg,
  maxNeg
} from '../../../src/funcs/math_ext.js'

test('toSeconds', () => {
  expect(toSec(0)).toBe(0)
  expect(toSec(1e+9)).toBe(1)
  expect(toSec(2e+9)).toBe(2)
})

test('isOdd', () => {
  expect(isOdd(0)).toBeFalsy()
  expect(isOdd(1)).toBeTruthy()
  expect(isOdd(2)).toBeFalsy()
  expect(isOdd(3)).toBeTruthy()
})

test('isEven', () => {
  expect(isEven(0)).toBeTruthy()
  expect(isEven(1)).toBeFalsy()
  expect(isEven(2)).toBeTruthy()
  expect(isEven(3)).toBeFalsy()
})

test('isPrime', () => {
  expect(isPrime(0)).toBeFalsy()
  expect(isPrime(1)).toBeFalsy()
  expect(isPrime(2)).toBeTruthy()
  expect(isPrime(3)).toBeTruthy()
  expect(isPrime(4)).toBeFalsy()
  expect(isPrime(5)).toBeTruthy()
  expect(isPrime(6)).toBeFalsy()
  expect(isPrime(7)).toBeTruthy()
  expect(isPrime(8)).toBeFalsy()
  expect(isPrime(9)).toBeFalsy()
  expect(isPrime(10)).toBeFalsy()
  expect(isPrime(11)).toBeTruthy()
  expect(isPrime(12)).toBeFalsy()
  expect(isPrime(13)).toBeTruthy()
  expect(isPrime(14)).toBeFalsy()
  expect(isPrime(15)).toBeFalsy()
  expect(isPrime(16)).toBeFalsy()
  expect(isPrime(17)).toBeTruthy()
  expect(isPrime(18)).toBeFalsy()
  expect(isPrime(19)).toBeTruthy()
  expect(isPrime(20)).toBeFalsy()
  expect(isPrime(21)).toBeFalsy()
  expect(isPrime(22)).toBeFalsy()
  expect(isPrime(23)).toBeTruthy()
})

test('getNextPrime', () => {
  expect(getNextPrime(0)).toBe(2)
  expect(getNextPrime(1)).toBe(2)
  expect(getNextPrime(2)).toBe(3)
  expect(getNextPrime(3)).toBe(5)
  expect(getNextPrime(4)).toBe(5)
  expect(getNextPrime(5)).toBe(7)
  expect(getNextPrime(6)).toBe(7)
  expect(getNextPrime(7)).toBe(11)
})

test('isPowerOfTwo', () => {
  expect(isPowOf2(1)).toBeTruthy()
  expect(isPowOf2(2)).toBeTruthy()
  expect(isPowOf2(3)).toBeFalsy()
  expect(isPowOf2(4)).toBeTruthy()
  expect(isPowOf2(5)).toBeFalsy()
})

test('lerp', () => {
  expect(lerp(0, 0, 0)).toBe(0)
  expect(lerp(1, 0, 0)).toBe(0)
  expect(lerp(2, 0, 0)).toBe(0)
  expect(lerp(2, 1, 0)).toBe(-1)
  expect(lerp(2, 2, 0)).toBe(-2)
  expect(lerp(2, 2, 1)).toBe(0)
  expect(lerp(2, 2, 2)).toBe(2)
})

test('lerpVector2', () => {
  expect(lerpVec2(0, new Vec2(0, 0), new Vec2(0, 0))).toEqual(new Vec2(0, 0))
  expect(lerpVec2(1, new Vec2(0, 0), new Vec2(0, 0))).toEqual(new Vec2(0, 0))
  expect(lerpVec2(2, new Vec2(0, 0), new Vec2(0, 0))).toEqual(new Vec2(0, 0))
  expect(lerpVec2(2, new Vec2(1, 0), new Vec2(0, 0))).toEqual(new Vec2(-1, 0))
  expect(lerpVec2(2, new Vec2(2, 0), new Vec2(0, 0))).toEqual(new Vec2(-2, 0))
  expect(lerpVec2(2, new Vec2(2, 0), new Vec2(1, 0))).toEqual(new Vec2(0, 0))
  expect(lerpVec2(2, new Vec2(2, 0), new Vec2(2, 0))).toEqual(new Vec2(2, 0))
  expect(lerpVec2(2, new Vec2(2, 1), new Vec2(2, 0))).toEqual(new Vec2(2, -1))
  expect(lerpVec2(2, new Vec2(2, 2), new Vec2(2, 0))).toEqual(new Vec2(2, -2))
  expect(lerpVec2(2, new Vec2(2, 2), new Vec2(2, 1))).toEqual(new Vec2(2, 0))
  expect(lerpVec2(2, new Vec2(2, 2), new Vec2(2, 2))).toEqual(new Vec2(2, 2))
})

test('lerpVector3', () => {
  expect(lerpVec3(0, new Vec3(0, 0, 0), new Vec3(0, 0, 0))).toEqual(new Vec3(0, 0, 0))
  expect(lerpVec3(1, new Vec3(0, 0, 0), new Vec3(0, 0, 0))).toEqual(new Vec3(0, 0, 0))
  expect(lerpVec3(2, new Vec3(0, 0, 0), new Vec3(0, 0, 0))).toEqual(new Vec3(0, 0, 0))
  expect(lerpVec3(2, new Vec3(1, 0, 0), new Vec3(0, 0, 0))).toEqual(new Vec3(-1, 0, 0))
  expect(lerpVec3(2, new Vec3(2, 0, 0), new Vec3(0, 0, 0))).toEqual(new Vec3(-2, 0, 0))
  expect(lerpVec3(2, new Vec3(2, 0, 0), new Vec3(1, 0, 0))).toEqual(new Vec3(0, 0, 0))
  expect(lerpVec3(2, new Vec3(2, 0, 0), new Vec3(2, 0, 0))).toEqual(new Vec3(2, 0, 0))
  expect(lerpVec3(2, new Vec3(2, 1, 0), new Vec3(2, 0, 0))).toEqual(new Vec3(2, -1, 0))
  expect(lerpVec3(2, new Vec3(2, 2, 0), new Vec3(2, 0, 0))).toEqual(new Vec3(2, -2, 0))
  expect(lerpVec3(2, new Vec3(2, 2, 0), new Vec3(2, 1, 0))).toEqual(new Vec3(2, 0, 0))
  expect(lerpVec3(2, new Vec3(2, 2, 0), new Vec3(2, 2, 0))).toEqual(new Vec3(2, 2, 0))
  expect(lerpVec3(2, new Vec3(2, 2, 1), new Vec3(2, 2, 0))).toEqual(new Vec3(2, 2, -1))
  expect(lerpVec3(2, new Vec3(2, 2, 2), new Vec3(2, 2, 0))).toEqual(new Vec3(2, 2, -2))
  expect(lerpVec3(2, new Vec3(2, 2, 2), new Vec3(2, 2, 1))).toEqual(new Vec3(2, 2, 0))
  expect(lerpVec3(2, new Vec3(2, 2, 2), new Vec3(2, 2, 2))).toEqual(new Vec3(2, 2, 2))
})

test('lerpVector4', () => {
  expect(lerpVec4(0, new Vec4(0, 0, 0, 0), new Vec4(0, 0, 0, 0))).toEqual(new Vec4(0, 0, 0, 0))
  expect(lerpVec4(1, new Vec4(0, 0, 0, 0), new Vec4(0, 0, 0, 0))).toEqual(new Vec4(0, 0, 0, 0))
  expect(lerpVec4(2, new Vec4(0, 0, 0, 0), new Vec4(0, 0, 0, 0))).toEqual(new Vec4(0, 0, 0, 0))
  expect(lerpVec4(2, new Vec4(1, 0, 0, 0), new Vec4(0, 0, 0, 0))).toEqual(new Vec4(-1, 0, 0, 0))
  expect(lerpVec4(2, new Vec4(2, 0, 0, 0), new Vec4(0, 0, 0, 0))).toEqual(new Vec4(-2, 0, 0, 0))
  expect(lerpVec4(2, new Vec4(2, 0, 0, 0), new Vec4(1, 0, 0, 0))).toEqual(new Vec4(0, 0, 0, 0))
  expect(lerpVec4(2, new Vec4(2, 0, 0, 0), new Vec4(2, 0, 0, 0))).toEqual(new Vec4(2, 0, 0, 0))
  expect(lerpVec4(2, new Vec4(2, 1, 0, 0), new Vec4(2, 0, 0, 0))).toEqual(new Vec4(2, -1, 0, 0))
  expect(lerpVec4(2, new Vec4(2, 2, 0, 0), new Vec4(2, 0, 0, 0))).toEqual(new Vec4(2, -2, 0, 0))
  expect(lerpVec4(2, new Vec4(2, 2, 0, 0), new Vec4(2, 1, 0, 0))).toEqual(new Vec4(2, 0, 0, 0))
  expect(lerpVec4(2, new Vec4(2, 2, 0, 0), new Vec4(2, 2, 0, 0))).toEqual(new Vec4(2, 2, 0, 0))
  expect(lerpVec4(2, new Vec4(2, 2, 1, 0), new Vec4(2, 2, 0, 0))).toEqual(new Vec4(2, 2, -1, 0))
  expect(lerpVec4(2, new Vec4(2, 2, 2, 0), new Vec4(2, 2, 0, 0))).toEqual(new Vec4(2, 2, -2, 0))
  expect(lerpVec4(2, new Vec4(2, 2, 2, 0), new Vec4(2, 2, 1, 0))).toEqual(new Vec4(2, 2, 0, 0))
  expect(lerpVec4(2, new Vec4(2, 2, 2, 0), new Vec4(2, 2, 2, 0))).toEqual(new Vec4(2, 2, 2, 0))
  expect(lerpVec4(2, new Vec4(2, 2, 2, 1), new Vec4(2, 2, 2, 0))).toEqual(new Vec4(2, 2, 2, -1))
  expect(lerpVec4(2, new Vec4(2, 2, 2, 2), new Vec4(2, 2, 2, 0))).toEqual(new Vec4(2, 2, 2, -2))
  expect(lerpVec4(2, new Vec4(2, 2, 2, 2), new Vec4(2, 2, 2, 1))).toEqual(new Vec4(2, 2, 2, 0))
  expect(lerpVec4(2, new Vec4(2, 2, 2, 2), new Vec4(2, 2, 2, 2))).toEqual(new Vec4(2, 2, 2, 2))
})

test('linearMap', () => {
  expect(linearMap(0, new Seq(0, 1), new Seq(0, 1))).toBe(0)
  expect(linearMap(1, new Seq(0, 1), new Seq(0, 1))).toBe(1)
  expect(linearMap(2, new Seq(0, 1), new Seq(0, 1))).toBe(2)
  expect(linearMap(2, new Seq(0, 2), new Seq(0, 1))).toBe(1)
  expect(linearMap(2, new Seq(0, 4), new Seq(0, 1))).toBe(0.5)
  expect(linearMap(2, new Seq(2, 4), new Seq(0, 1))).toBe(0)
  expect(linearMap(2, new Seq(3, 4), new Seq(0, 1))).toBe(-1)
  expect(linearMap(2, new Seq(3, 4), new Seq(0, 2))).toBe(-2)
  expect(linearMap(2, new Seq(3, 4), new Seq(0, 3))).toBe(-3)
  expect(linearMap(2, new Seq(3, 4), new Seq(1, 3))).toBe(-1)
  expect(linearMap(2, new Seq(3, 4), new Seq(2, 3))).toBe(1)
})

test('linearMapVector2', () => {
  expect(
    linearMapVec2(new Vec2(0, 0), new Vec2(0, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(0, 0))
  expect(
    linearMapVec2(new Vec2(1, 0), new Vec2(0, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(1, 0))
  expect(
    linearMapVec2(new Vec2(2, 0), new Vec2(0, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 0))
  expect(
    linearMapVec2(new Vec2(2, 1), new Vec2(0, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 1))
  expect(
    linearMapVec2(new Vec2(2, 2), new Vec2(0, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 2))
  expect(
    linearMapVec2(new Vec2(2, 2), new Vec2(1, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(1, 2))
  expect(
    linearMapVec2(new Vec2(2, 2), new Vec2(2, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(0, 2))
  expect(
    linearMapVec2(new Vec2(2, 2), new Vec2(2, 1), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(0, 1))
  expect(
    linearMapVec2(new Vec2(2, 2), new Vec2(2, 2), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(0, 0))
  expect(
    linearMapVec2(new Vec2(2, 2), new Vec2(2, 2), new Vec2(1, 1), new Vec2(1, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(1, 0))
  expect(
    linearMapVec2(new Vec2(2, 2), new Vec2(2, 2), new Vec2(1, 1), new Vec2(2, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 0))
  expect(
    linearMapVec2(new Vec2(2, 2), new Vec2(2, 2), new Vec2(1, 1), new Vec2(2, 1), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 1))
  expect(
    linearMapVec2(new Vec2(2, 2), new Vec2(2, 2), new Vec2(1, 1), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 2))
  expect(
    linearMapVec2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(1, 1), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(3, 3))
  expect(
    linearMapVec2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(2, 1), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(2.5, 3))
  expect(
    linearMapVec2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 1), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(2.25, 3))
  expect(
    linearMapVec2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 2), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(2.25, 2.5))
  expect(
    linearMapVec2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 4), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(2.25, 2.25))
  expect(
    linearMapVec2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 4), new Vec2(2, 2), new Vec2(2, 1))
  ).toEqual(new Vec2(2.5, 2.25))
  expect(
    linearMapVec2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 4), new Vec2(2, 2), new Vec2(4, 1))
  ).toEqual(new Vec2(3, 2.25))
  expect(
    linearMapVec2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 4), new Vec2(2, 2), new Vec2(4, 2))
  ).toEqual(new Vec2(3, 2.5))
  expect(
    linearMapVec2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 4), new Vec2(2, 2), new Vec2(4, 4))
  ).toEqual(new Vec2(3, 3))
})

test('minPositive', () => {
  expect(minPos()).toEqual({ id: -1, value: Infinity })
  expect(minPos(-2)).toEqual({ id: -1, value: Infinity })
  expect(minPos(-1)).toEqual({ id: -1, value: Infinity })
  expect(minPos(0)).toEqual({ id: 0, value: 0 })
  expect(minPos(1)).toEqual({ id: 0, value: 1 })
  expect(minPos(2)).toEqual({ id: 0, value: 2 })
  expect(minPos(2, -2)).toEqual({ id: 0, value: 2 })
  expect(minPos(2, -1)).toEqual({ id: 0, value: 2 })
  expect(minPos(2, 0)).toEqual({ id: 1, value: 0 })
  expect(minPos(2, 1)).toEqual({ id: 1, value: 1 })
  expect(minPos(2, 2)).toEqual({ id: 0, value: 2 })
  expect(minPos(2, 2, -2)).toEqual({ id: 0, value: 2 })
  expect(minPos(2, 2, -1)).toEqual({ id: 0, value: 2 })
  expect(minPos(2, 2, 0)).toEqual({ id: 2, value: 0 })
  expect(minPos(2, 2, 1)).toEqual({ id: 2, value: 1 })
  expect(minPos(2, 2, 2)).toEqual({ id: 0, value: 2 })
})

test('maxPositive', () => {
  expect(maxPos()).toEqual({ id: -1, value: -Infinity })
  expect(maxPos(-2)).toEqual({ id: -1, value: -Infinity })
  expect(maxPos(-1)).toEqual({ id: -1, value: -Infinity })
  expect(maxPos(0)).toEqual({ id: 0, value: 0 })
  expect(maxPos(1)).toEqual({ id: 0, value: 1 })
  expect(maxPos(2)).toEqual({ id: 0, value: 2 })
  expect(maxPos(0, -2)).toEqual({ id: 0, value: 0 })
  expect(maxPos(0, -1)).toEqual({ id: 0, value: 0 })
  expect(maxPos(0, 0)).toEqual({ id: 0, value: 0 })
  expect(maxPos(0, 1)).toEqual({ id: 1, value: 1 })
  expect(maxPos(0, 2)).toEqual({ id: 1, value: 2 })
  expect(maxPos(0, 0, -2)).toEqual({ id: 0, value: 0 })
  expect(maxPos(0, 0, -1)).toEqual({ id: 0, value: 0 })
  expect(maxPos(0, 0, 0)).toEqual({ id: 0, value: 0 })
  expect(maxPos(0, 0, 1)).toEqual({ id: 2, value: 1 })
  expect(maxPos(0, 0, 2)).toEqual({ id: 2, value: 2 })
})

test('minNegative', () => {
  expect(minNeg()).toEqual({ id: -1, value: Infinity })
  expect(minNeg(-2)).toEqual({ id: 0, value: -2 })
  expect(minNeg(-1)).toEqual({ id: 0, value: -1 })
  expect(minNeg(0)).toEqual({ id: -1, value: Infinity })
  expect(minNeg(1)).toEqual({ id: -1, value: Infinity })
  expect(minNeg(2)).toEqual({ id: -1, value: Infinity })
  expect(minNeg(-1, -2)).toEqual({ id: 1, value: -2 })
  expect(minNeg(-1, -1)).toEqual({ id: 0, value: -1 })
  expect(minNeg(-1, 0)).toEqual({ id: 0, value: -1 })
  expect(minNeg(-1, 1)).toEqual({ id: 0, value: -1 })
  expect(minNeg(-1, 2)).toEqual({ id: 0, value: -1 })
  expect(minNeg(-1, -1, -2)).toEqual({ id: 2, value: -2 })
  expect(minNeg(-1, -1, -1)).toEqual({ id: 0, value: -1 })
  expect(minNeg(-1, -1, 0)).toEqual({ id: 0, value: -1 })
  expect(minNeg(-1, -1, 1)).toEqual({ id: 0, value: -1 })
  expect(minNeg(-1, -1, 2)).toEqual({ id: 0, value: -1 })
})

test('maxNegative', () => {
  expect(maxNeg()).toEqual({ id: -1, value: -Infinity })
  expect(maxNeg(-2)).toEqual({ id: 0, value: -2 })
  expect(maxNeg(-1)).toEqual({ id: 0, value: -1 })
  expect(maxNeg(0)).toEqual({ id: -1, value: -Infinity })
  expect(maxNeg(1)).toEqual({ id: -1, value: -Infinity })
  expect(maxNeg(2)).toEqual({ id: -1, value: -Infinity })
  expect(maxNeg(-3, -2)).toEqual({ id: 1, value: -2 })
  expect(maxNeg(-3, -1)).toEqual({ id: 1, value: -1 })
  expect(maxNeg(-3, 0)).toEqual({ id: 0, value: -3 })
  expect(maxNeg(-3, 1)).toEqual({ id: 0, value: -3 })
  expect(maxNeg(-3, 2)).toEqual({ id: 0, value: -3 })
  expect(maxNeg(-3, -3, -2)).toEqual({ id: 2, value: -2 })
  expect(maxNeg(-3, -3, -1)).toEqual({ id: 2, value: -1 })
  expect(maxNeg(-3, -3, 0)).toEqual({ id: 0, value: -3 })
  expect(maxNeg(-3, -3, 1)).toEqual({ id: 0, value: -3 })
  expect(maxNeg(-3, -3, 2)).toEqual({ id: 0, value: -3 })
})
