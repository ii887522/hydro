'use strict'

import DynamicUint8Array from '../../src/DynamicUint8Array.js'
import { equal } from '../../index.js'

test('DynamicUint8Array::add', () => {
  const array = new DynamicUint8Array()
  array.add([])
  expect(equal(array.get(), new Uint8Array())).toBeTruthy()
  array.add([0])
  expect(equal(array.get(), new Uint8Array([0]))).toBeTruthy()
  array.add([1])
  expect(equal(array.get(), new Uint8Array([0, 1]))).toBeTruthy()
  array.add([1, 0])
  expect(equal(array.get(), new Uint8Array([0, 1, 1, 0]))).toBeTruthy()
  array.add([1, 1])
  expect(equal(array.get(), new Uint8Array([0, 1, 1, 0, 1, 1]))).toBeTruthy()
  array.add([1, 1, 0])
  expect(equal(array.get(), new Uint8Array([0, 1, 1, 0, 1, 1, 1, 1, 0]))).toBeTruthy()
  array.add([1, 1, 1])
  expect(equal(array.get(), new Uint8Array([0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1]))).toBeTruthy()
  array.add([1, 1, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
  expect(equal(array.get(), new Uint8Array([0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]))).toBeTruthy()
})
