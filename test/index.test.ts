'use strict'

import { getFileName, substring, equal, swap } from '../index.js'
import Holder from '../src/Holder.js'

test('getFileName', () => {
  expect(getFileName('SDL2-2.0.12/lib/x86/SDL2.dll')).toBe('SDL2.dll')
  expect(getFileName('SDL2_image-2.0.5/lib/x86/libpng16-16.dll')).toBe('libpng16-16.dll')
  expect(getFileName('SDL2_ttf-2.0.15/lib/x86/SDL2_ttf.dll')).toBe('SDL2_ttf.dll')
})

test('substring', () => {
  expect(substring('SDL2-2.0.12/lib/x86/SDL2.dll', 'SDL', 'l')).toBe('SDL2-2.0.12/')
  expect(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'SDL', 'l')).toBe('SDL2_image-2.0.5/')
  expect(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', 'l')).toBe('image-2.0.5/')
  expect(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', '.dll')).toBe('image-2.0.5/lib/x86/libpng16-16')
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

test('swap', () => {
  {
    const a = new Holder(0)
    const b = new Holder(1)
    swap(a, b)
    expect(a.value).toBe(1)
    expect(b.value).toBe(0)
  }
  {
    const a = new Holder(0)
    const b = new Holder(2)
    swap(a, b)
    expect(a.value).toBe(2)
    expect(b.value).toBe(0)
  }
  {
    const a = new Holder(0)
    const b = new Holder(3)
    swap(a, b)
    expect(a.value).toBe(3)
    expect(b.value).toBe(0)
  }
  {
    const a = new Holder(1)
    const b = new Holder(3)
    swap(a, b)
    expect(a.value).toBe(3)
    expect(b.value).toBe(1)
  }
  {
    const a = new Holder(2)
    const b = new Holder(3)
    swap(a, b)
    expect(a.value).toBe(3)
    expect(b.value).toBe(2)
  }
})
