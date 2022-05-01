'use strict'

import { Boolean, requireDefined, equal, swapInHolders, formatTime } from '../index.js'
import Holder from '../src/struct/Holder.js'

test('Boolean', () => {
  expect(Boolean('true')).toBeTruthy()
  expect(Boolean('false')).toBeFalsy()
  expect(Boolean('')).toBeFalsy()
})

test('requireDefined', () => {
  expect(requireDefined({ })).toEqual({ })
  expect(requireDefined(0)).toBe(0)
  expect(() => requireDefined(undefined)).toThrow(ReferenceError)
})

test('equal', () => {
  expect(equal(new Uint8Array(0), new Uint8Array(0))).toBeTruthy()
  expect(equal(new Uint8Array([]), new Uint8Array(0))).toBeTruthy()
  expect(equal(new Uint8Array([]), new Uint8Array([]))).toBeTruthy()
  expect(equal(new Uint8Array([0]), new Uint8Array([]))).toBeFalsy()
  expect(equal(new Uint8Array([1]), new Uint8Array([]))).toBeFalsy()
  expect(equal(new Uint8Array([1]), new Uint8Array([0]))).toBeFalsy()
  expect(equal(new Uint8Array([1, 0]), new Uint8Array([]))).toBeFalsy()
  expect(equal(new Uint8Array([1, 1]), new Uint8Array([]))).toBeFalsy()
  expect(equal(new Uint8Array([1, 1]), new Uint8Array([0, 0]))).toBeFalsy()
  expect(equal(new Uint8Array([1, 1, 0]), new Uint8Array([]))).toBeFalsy()
  expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([]))).toBeFalsy()
  expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([0]))).toBeFalsy()
  expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1]))).toBeFalsy()
  expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 0]))).toBeFalsy()
  expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 1]))).toBeFalsy()
  expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 1, 0]))).toBeFalsy()
  expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 1, 1]))).toBeTruthy()
})

test('swap in holders between 0 and 1', () => {
  const a = new Holder(0)
  const b = new Holder(1)
  swapInHolders(a, b)
  expect(a.value).toBe(1)
  expect(b.value).toBe(0)
})

test('swap in holders between 0 and 2', () => {
  const a = new Holder(0)
  const b = new Holder(2)
  swapInHolders(a, b)
  expect(a.value).toBe(2)
  expect(b.value).toBe(0)
})

test('swap in holders between 0 and 3', () => {
  const a = new Holder(0)
  const b = new Holder(3)
  swapInHolders(a, b)
  expect(a.value).toBe(3)
  expect(b.value).toBe(0)
})

test('swap in holders between 1 and 3', () => {
  const a = new Holder(1)
  const b = new Holder(3)
  swapInHolders(a, b)
  expect(a.value).toBe(3)
  expect(b.value).toBe(1)
})

test('swap in holders between 2 and 3', () => {
  const a = new Holder(2)
  const b = new Holder(3)
  swapInHolders(a, b)
  expect(a.value).toBe(3)
  expect(b.value).toBe(2)
})

test('formatTime', () => {
  expect(formatTime(89)).toBe('1:29')
  expect(formatTime(59)).toBe('0:59')
  expect(formatTime(601)).toBe('10:01')
})
