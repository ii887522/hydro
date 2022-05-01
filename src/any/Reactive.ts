'use strict'

import IDManager from './IDManager.js'

/**
 * It is a wrapper that listens for changes to the value being held and automatically notifies all registered watchers
 * about the new value given. It is used to establish communications between multiple modules to achieve loose coupling
 * between the modules involved.
 */
export default class Reactive<T> {
  private static readonly idManager = new IDManager()
  private readonly watcherIDManager = new IDManager()
  readonly id = Reactive.idManager.next()
  private _value: T

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly children: Array<{ onChange: (value: T) => any, reactive: Reactive<any> }> = []

  /**
   * @param value The initial value to be held by this wrapper.
   */
  constructor (value: T) {
    this._value = value
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
   * It notifies all other reactive objects associated with their watchers about the new value given just now.
   */
  protected wakeChildren (): void {
    for (let i = 0; i !== this.children.length; ++i) {
      const child = this.children[i]
      if (child === undefined) continue
      child.reactive.value = child.onChange(this.value)
    }
  }

  /**
   * It registers a new watcher that transforms this reactive object into a new reactive object that holds a different
   * type.
   *
   * @param onChange It is a watcher that listens for new value and processes it.
   * @returns A watcher id that can be used to unwatch this watcher and a transformed reactive object.
   */
  watch<U> (onChange: (value: T) => U): { watcherID: number, reactive: Reactive<U> } {
    const watcherID = this.watcherIDManager.next()
    const reactive = new Reactive(onChange(this.value))
    this.children[watcherID] = { onChange, reactive }
    return { watcherID, reactive }
  }

  /**
   * It detaches the registered watcher associated with the `watcherID` given so the watcher no longer reacts to
   * changes of the value helded by this reactive object.
   *
   * @param watcherID The id number that is associated with the watcher to be unwatched.
   */
  unwatch (watcherID: number): void {
    delete this.children[watcherID] // eslint-disable-line @typescript-eslint/no-dynamic-delete
    this.watcherIDManager.free(watcherID)
  }
}
