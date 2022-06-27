'use strict'

import Vec2 from '../../../src/struct/Vec2.js'
import Vec3 from '../../../src/struct/Vec3.js'
import Vec4 from '../../../src/struct/Vec4.js'
import Seq from '../../../src/struct/Seq.js'

import {
  toSeconds,
  isOdd,
  isEven,
  isPrime,
  getNextPrime,
  isPowerOfTwo,
  lerp,
  lerpVector2,
  lerpVector3,
  lerpVector4,
  linearMap,
  linearMapVector2,
  minPositive,
  maxPositive,
  minNegative,
  maxNegative
} from '../../../src/funcs/math_ext.js'

test('toSeconds', () => {
  expect(toSeconds(0)).toBe(0)
  expect(toSeconds(1e+9)).toBe(1)
  expect(toSeconds(2e+9)).toBe(2)
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
  expect(isPowerOfTwo(1)).toBeTruthy()
  expect(isPowerOfTwo(2)).toBeTruthy()
  expect(isPowerOfTwo(3)).toBeFalsy()
  expect(isPowerOfTwo(4)).toBeTruthy()
  expect(isPowerOfTwo(5)).toBeFalsy()
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
  expect(lerpVector2(0, new Vec2(0, 0), new Vec2(0, 0))).toEqual(new Vec2(0, 0))
  expect(lerpVector2(1, new Vec2(0, 0), new Vec2(0, 0))).toEqual(new Vec2(0, 0))
  expect(lerpVector2(2, new Vec2(0, 0), new Vec2(0, 0))).toEqual(new Vec2(0, 0))
  expect(lerpVector2(2, new Vec2(1, 0), new Vec2(0, 0))).toEqual(new Vec2(-1, 0))
  expect(lerpVector2(2, new Vec2(2, 0), new Vec2(0, 0))).toEqual(new Vec2(-2, 0))
  expect(lerpVector2(2, new Vec2(2, 0), new Vec2(1, 0))).toEqual(new Vec2(0, 0))
  expect(lerpVector2(2, new Vec2(2, 0), new Vec2(2, 0))).toEqual(new Vec2(2, 0))
  expect(lerpVector2(2, new Vec2(2, 1), new Vec2(2, 0))).toEqual(new Vec2(2, -1))
  expect(lerpVector2(2, new Vec2(2, 2), new Vec2(2, 0))).toEqual(new Vec2(2, -2))
  expect(lerpVector2(2, new Vec2(2, 2), new Vec2(2, 1))).toEqual(new Vec2(2, 0))
  expect(lerpVector2(2, new Vec2(2, 2), new Vec2(2, 2))).toEqual(new Vec2(2, 2))
})

test('lerpVector3', () => {
  expect(lerpVector3(0, new Vec3(0, 0, 0), new Vec3(0, 0, 0))).toEqual(new Vec3(0, 0, 0))
  expect(lerpVector3(1, new Vec3(0, 0, 0), new Vec3(0, 0, 0))).toEqual(new Vec3(0, 0, 0))
  expect(lerpVector3(2, new Vec3(0, 0, 0), new Vec3(0, 0, 0))).toEqual(new Vec3(0, 0, 0))
  expect(lerpVector3(2, new Vec3(1, 0, 0), new Vec3(0, 0, 0))).toEqual(new Vec3(-1, 0, 0))
  expect(lerpVector3(2, new Vec3(2, 0, 0), new Vec3(0, 0, 0))).toEqual(new Vec3(-2, 0, 0))
  expect(lerpVector3(2, new Vec3(2, 0, 0), new Vec3(1, 0, 0))).toEqual(new Vec3(0, 0, 0))
  expect(lerpVector3(2, new Vec3(2, 0, 0), new Vec3(2, 0, 0))).toEqual(new Vec3(2, 0, 0))
  expect(lerpVector3(2, new Vec3(2, 1, 0), new Vec3(2, 0, 0))).toEqual(new Vec3(2, -1, 0))
  expect(lerpVector3(2, new Vec3(2, 2, 0), new Vec3(2, 0, 0))).toEqual(new Vec3(2, -2, 0))
  expect(lerpVector3(2, new Vec3(2, 2, 0), new Vec3(2, 1, 0))).toEqual(new Vec3(2, 0, 0))
  expect(lerpVector3(2, new Vec3(2, 2, 0), new Vec3(2, 2, 0))).toEqual(new Vec3(2, 2, 0))
  expect(lerpVector3(2, new Vec3(2, 2, 1), new Vec3(2, 2, 0))).toEqual(new Vec3(2, 2, -1))
  expect(lerpVector3(2, new Vec3(2, 2, 2), new Vec3(2, 2, 0))).toEqual(new Vec3(2, 2, -2))
  expect(lerpVector3(2, new Vec3(2, 2, 2), new Vec3(2, 2, 1))).toEqual(new Vec3(2, 2, 0))
  expect(lerpVector3(2, new Vec3(2, 2, 2), new Vec3(2, 2, 2))).toEqual(new Vec3(2, 2, 2))
})

test('lerpVector4', () => {
  expect(lerpVector4(0, new Vec4(0, 0, 0, 0), new Vec4(0, 0, 0, 0))).toEqual(new Vec4(0, 0, 0, 0))
  expect(lerpVector4(1, new Vec4(0, 0, 0, 0), new Vec4(0, 0, 0, 0))).toEqual(new Vec4(0, 0, 0, 0))
  expect(lerpVector4(2, new Vec4(0, 0, 0, 0), new Vec4(0, 0, 0, 0))).toEqual(new Vec4(0, 0, 0, 0))
  expect(lerpVector4(2, new Vec4(1, 0, 0, 0), new Vec4(0, 0, 0, 0))).toEqual(new Vec4(-1, 0, 0, 0))
  expect(lerpVector4(2, new Vec4(2, 0, 0, 0), new Vec4(0, 0, 0, 0))).toEqual(new Vec4(-2, 0, 0, 0))
  expect(lerpVector4(2, new Vec4(2, 0, 0, 0), new Vec4(1, 0, 0, 0))).toEqual(new Vec4(0, 0, 0, 0))
  expect(lerpVector4(2, new Vec4(2, 0, 0, 0), new Vec4(2, 0, 0, 0))).toEqual(new Vec4(2, 0, 0, 0))
  expect(lerpVector4(2, new Vec4(2, 1, 0, 0), new Vec4(2, 0, 0, 0))).toEqual(new Vec4(2, -1, 0, 0))
  expect(lerpVector4(2, new Vec4(2, 2, 0, 0), new Vec4(2, 0, 0, 0))).toEqual(new Vec4(2, -2, 0, 0))
  expect(lerpVector4(2, new Vec4(2, 2, 0, 0), new Vec4(2, 1, 0, 0))).toEqual(new Vec4(2, 0, 0, 0))
  expect(lerpVector4(2, new Vec4(2, 2, 0, 0), new Vec4(2, 2, 0, 0))).toEqual(new Vec4(2, 2, 0, 0))
  expect(lerpVector4(2, new Vec4(2, 2, 1, 0), new Vec4(2, 2, 0, 0))).toEqual(new Vec4(2, 2, -1, 0))
  expect(lerpVector4(2, new Vec4(2, 2, 2, 0), new Vec4(2, 2, 0, 0))).toEqual(new Vec4(2, 2, -2, 0))
  expect(lerpVector4(2, new Vec4(2, 2, 2, 0), new Vec4(2, 2, 1, 0))).toEqual(new Vec4(2, 2, 0, 0))
  expect(lerpVector4(2, new Vec4(2, 2, 2, 0), new Vec4(2, 2, 2, 0))).toEqual(new Vec4(2, 2, 2, 0))
  expect(lerpVector4(2, new Vec4(2, 2, 2, 1), new Vec4(2, 2, 2, 0))).toEqual(new Vec4(2, 2, 2, -1))
  expect(lerpVector4(2, new Vec4(2, 2, 2, 2), new Vec4(2, 2, 2, 0))).toEqual(new Vec4(2, 2, 2, -2))
  expect(lerpVector4(2, new Vec4(2, 2, 2, 2), new Vec4(2, 2, 2, 1))).toEqual(new Vec4(2, 2, 2, 0))
  expect(lerpVector4(2, new Vec4(2, 2, 2, 2), new Vec4(2, 2, 2, 2))).toEqual(new Vec4(2, 2, 2, 2))
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
    linearMapVector2(new Vec2(0, 0), new Vec2(0, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(0, 0))
  expect(
    linearMapVector2(new Vec2(1, 0), new Vec2(0, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(1, 0))
  expect(
    linearMapVector2(new Vec2(2, 0), new Vec2(0, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 0))
  expect(
    linearMapVector2(new Vec2(2, 1), new Vec2(0, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 1))
  expect(
    linearMapVector2(new Vec2(2, 2), new Vec2(0, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 2))
  expect(
    linearMapVector2(new Vec2(2, 2), new Vec2(1, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(1, 2))
  expect(
    linearMapVector2(new Vec2(2, 2), new Vec2(2, 0), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(0, 2))
  expect(
    linearMapVector2(new Vec2(2, 2), new Vec2(2, 1), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(0, 1))
  expect(
    linearMapVector2(new Vec2(2, 2), new Vec2(2, 2), new Vec2(1, 1), new Vec2(0, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(0, 0))
  expect(
    linearMapVector2(new Vec2(2, 2), new Vec2(2, 2), new Vec2(1, 1), new Vec2(1, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(1, 0))
  expect(
    linearMapVector2(new Vec2(2, 2), new Vec2(2, 2), new Vec2(1, 1), new Vec2(2, 0), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 0))
  expect(
    linearMapVector2(new Vec2(2, 2), new Vec2(2, 2), new Vec2(1, 1), new Vec2(2, 1), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 1))
  expect(
    linearMapVector2(new Vec2(2, 2), new Vec2(2, 2), new Vec2(1, 1), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(2, 2))
  expect(
    linearMapVector2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(1, 1), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(3, 3))
  expect(
    linearMapVector2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(2, 1), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(2.5, 3))
  expect(
    linearMapVector2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 1), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(2.25, 3))
  expect(
    linearMapVector2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 2), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(2.25, 2.5))
  expect(
    linearMapVector2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 4), new Vec2(2, 2), new Vec2(1, 1))
  ).toEqual(new Vec2(2.25, 2.25))
  expect(
    linearMapVector2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 4), new Vec2(2, 2), new Vec2(2, 1))
  ).toEqual(new Vec2(2.5, 2.25))
  expect(
    linearMapVector2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 4), new Vec2(2, 2), new Vec2(4, 1))
  ).toEqual(new Vec2(3, 2.25))
  expect(
    linearMapVector2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 4), new Vec2(2, 2), new Vec2(4, 2))
  ).toEqual(new Vec2(3, 2.5))
  expect(
    linearMapVector2(new Vec2(3, 3), new Vec2(2, 2), new Vec2(4, 4), new Vec2(2, 2), new Vec2(4, 4))
  ).toEqual(new Vec2(3, 3))
})

test('minPositive', () => {
  expect(minPositive()).toEqual({ id: -1, value: Infinity })
  expect(minPositive(-2)).toEqual({ id: -1, value: Infinity })
  expect(minPositive(-1)).toEqual({ id: -1, value: Infinity })
  expect(minPositive(0)).toEqual({ id: 0, value: 0 })
  expect(minPositive(1)).toEqual({ id: 0, value: 1 })
  expect(minPositive(2)).toEqual({ id: 0, value: 2 })
  expect(minPositive(2, -2)).toEqual({ id: 0, value: 2 })
  expect(minPositive(2, -1)).toEqual({ id: 0, value: 2 })
  expect(minPositive(2, 0)).toEqual({ id: 1, value: 0 })
  expect(minPositive(2, 1)).toEqual({ id: 1, value: 1 })
  expect(minPositive(2, 2)).toEqual({ id: 0, value: 2 })
  expect(minPositive(2, 2, -2)).toEqual({ id: 0, value: 2 })
  expect(minPositive(2, 2, -1)).toEqual({ id: 0, value: 2 })
  expect(minPositive(2, 2, 0)).toEqual({ id: 2, value: 0 })
  expect(minPositive(2, 2, 1)).toEqual({ id: 2, value: 1 })
  expect(minPositive(2, 2, 2)).toEqual({ id: 0, value: 2 })
})

test('maxPositive', () => {
  expect(maxPositive()).toEqual({ id: -1, value: -Infinity })
  expect(maxPositive(-2)).toEqual({ id: -1, value: -Infinity })
  expect(maxPositive(-1)).toEqual({ id: -1, value: -Infinity })
  expect(maxPositive(0)).toEqual({ id: 0, value: 0 })
  expect(maxPositive(1)).toEqual({ id: 0, value: 1 })
  expect(maxPositive(2)).toEqual({ id: 0, value: 2 })
  expect(maxPositive(0, -2)).toEqual({ id: 0, value: 0 })
  expect(maxPositive(0, -1)).toEqual({ id: 0, value: 0 })
  expect(maxPositive(0, 0)).toEqual({ id: 0, value: 0 })
  expect(maxPositive(0, 1)).toEqual({ id: 1, value: 1 })
  expect(maxPositive(0, 2)).toEqual({ id: 1, value: 2 })
  expect(maxPositive(0, 0, -2)).toEqual({ id: 0, value: 0 })
  expect(maxPositive(0, 0, -1)).toEqual({ id: 0, value: 0 })
  expect(maxPositive(0, 0, 0)).toEqual({ id: 0, value: 0 })
  expect(maxPositive(0, 0, 1)).toEqual({ id: 2, value: 1 })
  expect(maxPositive(0, 0, 2)).toEqual({ id: 2, value: 2 })
})

test('minNegative', () => {
  expect(minNegative()).toEqual({ id: -1, value: Infinity })
  expect(minNegative(-2)).toEqual({ id: 0, value: -2 })
  expect(minNegative(-1)).toEqual({ id: 0, value: -1 })
  expect(minNegative(0)).toEqual({ id: -1, value: Infinity })
  expect(minNegative(1)).toEqual({ id: -1, value: Infinity })
  expect(minNegative(2)).toEqual({ id: -1, value: Infinity })
  expect(minNegative(-1, -2)).toEqual({ id: 1, value: -2 })
  expect(minNegative(-1, -1)).toEqual({ id: 0, value: -1 })
  expect(minNegative(-1, 0)).toEqual({ id: 0, value: -1 })
  expect(minNegative(-1, 1)).toEqual({ id: 0, value: -1 })
  expect(minNegative(-1, 2)).toEqual({ id: 0, value: -1 })
  expect(minNegative(-1, -1, -2)).toEqual({ id: 2, value: -2 })
  expect(minNegative(-1, -1, -1)).toEqual({ id: 0, value: -1 })
  expect(minNegative(-1, -1, 0)).toEqual({ id: 0, value: -1 })
  expect(minNegative(-1, -1, 1)).toEqual({ id: 0, value: -1 })
  expect(minNegative(-1, -1, 2)).toEqual({ id: 0, value: -1 })
})

test('maxNegative', () => {
  expect(maxNegative()).toEqual({ id: -1, value: -Infinity })
  expect(maxNegative(-2)).toEqual({ id: 0, value: -2 })
  expect(maxNegative(-1)).toEqual({ id: 0, value: -1 })
  expect(maxNegative(0)).toEqual({ id: -1, value: -Infinity })
  expect(maxNegative(1)).toEqual({ id: -1, value: -Infinity })
  expect(maxNegative(2)).toEqual({ id: -1, value: -Infinity })
  expect(maxNegative(-3, -2)).toEqual({ id: 1, value: -2 })
  expect(maxNegative(-3, -1)).toEqual({ id: 1, value: -1 })
  expect(maxNegative(-3, 0)).toEqual({ id: 0, value: -3 })
  expect(maxNegative(-3, 1)).toEqual({ id: 0, value: -3 })
  expect(maxNegative(-3, 2)).toEqual({ id: 0, value: -3 })
  expect(maxNegative(-3, -3, -2)).toEqual({ id: 2, value: -2 })
  expect(maxNegative(-3, -3, -1)).toEqual({ id: 2, value: -1 })
  expect(maxNegative(-3, -3, 0)).toEqual({ id: 0, value: -3 })
  expect(maxNegative(-3, -3, 1)).toEqual({ id: 0, value: -3 })
  expect(maxNegative(-3, -3, 2)).toEqual({ id: 0, value: -3 })
})
