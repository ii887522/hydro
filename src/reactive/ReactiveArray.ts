'use strict'

import Reactive from '../any/Reactive.js'

/**
 * A wrapper that listens for changes to the array being held and automatically notifies all registered watchers
 * about the new values in the array given. It is used to establish communications between multiple modules to achieve
 * loose coupling between the modules involved.
 */
export default class ReactiveArray<T> extends Reactive<T[]> implements Iterable<T> {
  /**
   * @param value The initial value to be held by this wrapper.
   */
  constructor (...value: T[]) {
    super(value)
  }

  /**
   * Replaces an old item located at the `id` with the new `item`.
   *
   * @param id The position for which the item needs to be replaced.
   * @param item The new item located at the `id`.
   */
  set (id: number, item: T): void {
    this.value[id] = item
    this.wakeChildren()
  }

  /**
   * Retrieves the item located at `id`.
   *
   * @param id The position for which the item needs to be returned.
   * @returns The item located at `id`.
   */
  get (id: number): T | undefined {
    return this.value[id]
  }

  /**
   * Inserts a new `item` at the end of this array thereby increases the size of the array by 1.
   *
   * @param item The new item to be inserted at the end of this array.
   */
  push (item: T): void {
    this.value.push(item)
    this.wakeChildren()
  }

  /**
   * Removes an old item at the end of this array thereby decreases the size of the array by 1.
   *
   * @returns The old item that is just removed from this array.
   */
  pop (): T | undefined {
    const result = this.value.pop()
    this.wakeChildren()
    return result
  }

  /**
   * Creates an iterator that allows the user to loop through this array in ascending order once.
   *
   * @returns A forward iterator that can loop through this array once.
   */
  [Symbol.iterator] (): Iterator<T> {
    let id = -1
    return {
      next: () => {
        ++id
        const value = this.value[id]
        return value !== undefined ? { done: false, value } : { done: true, value: undefined }
      }
    }
  }
}
