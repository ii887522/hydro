'use strict'

import Reactive from '../../../src/any/Reactive.js'

test('watch a reactive object with initial value equal to 0', () => {
  const value = Reactive.from(0)
  const valueSquared = value.watch(value => value * value)
  expect(valueSquared.value).toBe(0)
  value.value = 1
  expect(valueSquared.value).toBe(1)
  value.value = 2
  expect(valueSquared.value).toBe(4)
  const valueStr = value.watch(value => `${value}`)
  expect(valueStr.value).toBe('2')
  value.value = 3
  expect(valueStr.value).toBe('3')
  value.value = 4
  expect(valueStr.value).toBe('4')
  value.value = 4
  expect(valueStr.value).toBe('4')
})

test('watch a reactive object with initial value equal to a', () => {
  const str = Reactive.from('a')
  const repeatedStr = str.watch(value => `${value}${value}`)
  expect(repeatedStr.value).toBe('aa')
  str.value = 'b'
  expect(repeatedStr.value).toBe('bb')
  str.value = '1'
  expect(repeatedStr.value).toBe('11')
  const number = str.watch(value => Number(value))
  expect(number.value).toBe(1)
  str.value = '2'
  expect(number.value).toBe(2)
  str.value = '21'
  expect(number.value).toBe(21)
  str.value = '21'
  expect(number.value).toBe(21)
})

test('Reactive::unwatch', () => {
  const value = Reactive.from(0)
  const squaredValue = value.watch(value => value * value)
  expect(squaredValue.value).toBe(0)
  value.value = 3
  expect(squaredValue.value).toBe(9)
  value.unwatch(squaredValue)
  value.value = 4
  expect(squaredValue.value).toBe(9)
})
