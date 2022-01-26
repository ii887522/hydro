'use strict'

/**
 * It is a wrapper over the value so that changes to the value can be notified to all the watchers subscribed to this wrapper. It is used to establish component
 * communications through the value in the wrapper to reduce coupling between components.
 */
export default class Reactive<T> {
  private readonly onValueChanges: Array<(oldValue: T, newValue: T) => void> = []

  constructor (private _value: T) { }

  get value (): T {
    return this._value
  }

  set value (value: T) {
    const oldValue = this._value
    const newValue = value
    this._value = newValue
    for (const onValueChange of this.onValueChanges) onValueChange(oldValue, newValue)
  }

  /**
   * It registers a handler that processes the changes of the value so that the component which watches this object can be notified.
   *
   * @param onValueChange The handler that processes the changes of the value.
   */
  watch (onValueChange: (oldValue: T, newValue: T) => void): void {
    this.onValueChanges.push(onValueChange)
  }
}
