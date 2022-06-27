'use strict'

import TreeMap from './TreeMap.js'

export default class TreeSet<T> {
  private readonly map = new TreeMap<T, null>()

  get isEmpty (): boolean {
    return this.map.isEmpty
  }

  get length (): number {
    return this.map.length
  }

  toArray (): T[] {
    return this.map.toArray().map(entry => entry.key)
  }

  clear (): void {
    this.map.clear()
  }

  has (value: T): boolean {
    return this.map.has(value)
  }

  remove (value: T): void {
    this.map.remove(value)
  }

  min (): T | undefined {
    return this.map.min()?.key
  }

  max (): T | undefined {
    return this.map.max()?.key
  }

  bulkPut (...array: T[]): void {
    this.map.bulkPut(...array.map(value => ({ key: value, value: null })))
  }

  put (value: T): void {
    this.map.put(value, null)
  }
}
