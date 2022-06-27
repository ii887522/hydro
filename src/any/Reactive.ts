'use strict'

import IDManager from './IDManager.js'

/**
 * A wrapper that listens for changes to the value being held and automatically notifies all registered watchers about
 * the new value given. It is used to establish communications between multiple modules to achieve loose coupling
 * between the modules involved.
 */
export default class Reactive<T> {
  private static readonly idManager = new IDManager()
  private readonly watcherIDManager = new IDManager()
  readonly id = Reactive.idManager.next()
  private _value: T

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly children: Array<{ onChange: (value: T) => any, reactive: Reactive<any> }> = []

  protected constructor (value: T, private readonly watcherID: number = -1) {
    this._value = value
  }

  /**
   * @param value The initial value to be held by this wrapper.
   */
  static from<T>(value: T): Reactive<T> {
    return new this(value)
  }

  get value (): T {
    return this._value
  }

  set value (value: T) {
    if (this.value === value) return
    this._value = value
    this.wakeChildren()
  }

  /**
   * Notifies all other reactive objects associated with their watchers about the new value given just now.
   */
  protected wakeChildren (): void {
    for (let i = 0; i !== this.children.length; ++i) {
      const child = this.children[i]
      if (child === undefined) continue
      child.reactive.value = child.onChange(this.value)
    }
  }

  /**
   * Registers a new watcher that transforms this reactive object into a new reactive object that holds a different
   * type.
   *
   * @param onChange A watcher that listens for new value and processes it.
   * @returns A transformed reactive object that can be unwatched on in the future.
   */
  watch<U> (onChange: (value: T) => U): Reactive<U> {
    const watcherID = this.watcherIDManager.next()
    const reactive = new Reactive(onChange(this.value), watcherID)
    this.children[watcherID] = { onChange, reactive }
    return reactive
  }

  /**
   * Detaches the registered watcher associated with the `reactive` given so the watcher no longer reacts to changes of
   * the value helded by this reactive object.
   *
   * @param reactive The transformed reactive that is associated with the watcher to be unwatched.
   */
  unwatch<U> (reactive: Reactive<U>): void {
    delete this.children[reactive.watcherID] // eslint-disable-line @typescript-eslint/no-dynamic-delete
    this.watcherIDManager.free(reactive.watcherID)
  }
}
