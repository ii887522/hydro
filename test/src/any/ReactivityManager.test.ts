'use strict'

import Reactive from '../../../src/any/Reactive.js'
import ReactivityManager from '../../../src/any/ReactivityManager.js'

test('ReactivityManager::watch', () => {
  const reactivityManager = new ReactivityManager()
  const value = new Reactive(0)
  const squaredValue = reactivityManager.watch(value, value => value * value)
  expect(squaredValue.value).toBe(0)
  value.value = 1
  expect(squaredValue.value).toBe(1)
  value.value = 2
  expect(squaredValue.value).toBe(4)
  const valueStr = reactivityManager.watch(value, value => `${value}`)
  expect(valueStr.value).toBe('2')
  value.value = 3
  expect(valueStr.value).toBe('3')
  value.value = 4
  expect(valueStr.value).toBe('4')
  const str = new Reactive('a')
  const repeatedStr = reactivityManager.watch(str, value => `${value}${value}`)
  expect(repeatedStr.value).toBe('aa')
  str.value = 'b'
  expect(repeatedStr.value).toBe('bb')
  str.value = '1'
  expect(repeatedStr.value).toBe('11')
  const number = reactivityManager.watch(str, value => Number(value))
  expect(number.value).toBe(1)
  str.value = '2'
  expect(number.value).toBe(2)
  str.value = '3'
  expect(number.value).toBe(3)
})

test('ReactivityManager::watch2', () => {
  const reactivityManager = new ReactivityManager()
  const a = new Reactive(0)
  const b = new Reactive(0)
  const sum = reactivityManager.watch2(a, b, (a, b) => a + b)
  expect(sum.value).toBe(0)
  a.value = 1
  expect(sum.value).toBe(1)
  b.value = 2
  expect(sum.value).toBe(3)
  a.value = 3
  expect(sum.value).toBe(5)
  b.value = 4
  expect(sum.value).toBe(7)
  const diff = reactivityManager.watch2(a, b, (a, b) => a - b)
  expect(diff.value).toBe(-1)
  a.value = 5
  expect(diff.value).toBe(1)
  b.value = 3
  expect(diff.value).toBe(2)
  a.value = 6
  expect(diff.value).toBe(3)
  b.value = 2
  expect(diff.value).toBe(4)
  const c = new Reactive('a')
  const d = new Reactive('b')
  const cd = reactivityManager.watch2(c, d, (c, d) => `${c}${d}`)
  expect(cd.value).toBe('ab')
  c.value = 'b'
  expect(cd.value).toBe('bb')
  d.value = 'c'
  expect(cd.value).toBe('bc')
  c.value = 'd'
  expect(cd.value).toBe('dc')
  d.value = 'e'
  expect(cd.value).toBe('de')
  const minStr = reactivityManager.watch2(c, d, (c, d) => c < d ? c : d)
  expect(minStr.value).toBe('d')
  c.value = 'f'
  expect(minStr.value).toBe('e')
  d.value = 'g'
  expect(minStr.value).toBe('f')
  c.value = 'h'
  expect(minStr.value).toBe('g')
  d.value = 'i'
  expect(minStr.value).toBe('h')
})

test('ReactivityManager::watch3', () => {
  const reactivityManager = new ReactivityManager()
  const a = new Reactive(0)
  const b = new Reactive(0)
  const c = new Reactive(0)
  const sum = reactivityManager.watch3(a, b, c, (a, b, c) => a + b + c)
  expect(sum.value).toBe(0)
  a.value = 1
  expect(sum.value).toBe(1)
  b.value = 2
  expect(sum.value).toBe(3)
  c.value = 3
  expect(sum.value).toBe(6)
  a.value = 4
  expect(sum.value).toBe(9)
  b.value = 5
  expect(sum.value).toBe(12)
  c.value = 6
  expect(sum.value).toBe(15)
  const diff = reactivityManager.watch3(a, b, c, (a, b, c) => a - b - c)
  expect(diff.value).toBe(-7)
  a.value = 7
  expect(diff.value).toBe(-4)
  b.value = 8
  expect(diff.value).toBe(-7)
  c.value = 9
  expect(diff.value).toBe(-10)
  a.value = 10
  expect(diff.value).toBe(-7)
  b.value = 11
  expect(diff.value).toBe(-10)
  c.value = 12
  expect(diff.value).toBe(-13)
  const d = new Reactive('a')
  const e = new Reactive('b')
  const f = new Reactive('c')
  const def = reactivityManager.watch3(d, e, f, (d, e, f) => `${d}${e}${f}`)
  expect(def.value).toBe('abc')
  d.value = 'd'
  expect(def.value).toBe('dbc')
  e.value = 'e'
  expect(def.value).toBe('dec')
  f.value = 'f'
  expect(def.value).toBe('def')
  d.value = 'g'
  expect(def.value).toBe('gef')
  e.value = 'h'
  expect(def.value).toBe('ghf')
  f.value = 'i'
  expect(def.value).toBe('ghi')
  const minStr = reactivityManager.watch3(d, e, f, (d, e, f) => d < e ? (d < f ? d : f) : (e < f ? e : f))
  expect(minStr.value).toBe('g')
  d.value = 'j'
  expect(minStr.value).toBe('h')
  e.value = 'k'
  expect(minStr.value).toBe('i')
  f.value = 'l'
  expect(minStr.value).toBe('j')
  d.value = 'm'
  expect(minStr.value).toBe('k')
  e.value = 'n'
  expect(minStr.value).toBe('l')
  f.value = 'o'
  expect(minStr.value).toBe('m')
})

test('ReactivityManager::freeWatchers', () => {
  const reactivityManager = new ReactivityManager()
  const value = new Reactive(0)
  const squaredValue = reactivityManager.watch(value, value => value * value)
  expect(squaredValue.value).toBe(0)
  value.value = 1
  expect(squaredValue.value).toBe(1)
  reactivityManager.freeWatchers()
  value.value = 2
  expect(squaredValue.value).toBe(1)
})
