'use strict'

import Reactive from './Reactive.js'

/**
 * A manager that allows users to register watchers more conveniently and unwatch all registered watchers at once.
 */
export default class ReactivityManager {
  private readonly reactives: { [reactiveID: number]: Reactive<unknown> } = { }
  private readonly watcherReactives: { [reactiveID: number]: Array<Reactive<unknown>> } = { }

  /**
   * Registers a new watcher that transforms the reactive object received into a new reactive object that holds a
   * different type.
   *
   * @param reactive The reactive object which its value changes are listened for.
   * @param onChange A watcher that listens for new value and processes it.
   * @returns A transformed reactive object.
   */
  watch<A, R> (reactive: Reactive<A>, onChange: (value: A) => R): Reactive<R> {
    this.reactives[reactive.id] = reactive as Reactive<unknown>
    const result = reactive.watch(onChange)
    if (this.watcherReactives[reactive.id] === undefined) {
      this.watcherReactives[reactive.id] = [result as Reactive<unknown>]
    } else this.watcherReactives[reactive.id]?.push(result as Reactive<unknown>)
    return result
  }

  /**
   * Registers a new watcher that transforms these reactive objects received into a new reactive object that holds a
   * different type.
   *
   * @param reactiveA The first reactive object which its value changes are listened for.
   * @param reactiveB The second reactive object which its value changes are listened for.
   * @param onChange A watcher that listens for new value and processes it.
   * @returns A transformed reactive object.
   */
  watch2<A, B, R> (reactiveA: Reactive<A>, reactiveB: Reactive<B>, onChange: (a: A, b: B) => R): Reactive<R> {
    const result = Reactive.from(onChange(reactiveA.value, reactiveB.value))
    this.watch(reactiveA, value => {
      result.value = onChange(value, reactiveB.value)
    })
    this.watch(reactiveB, value => {
      result.value = onChange(reactiveA.value, value)
    })
    return result
  }

  /**
   * Registers a new watcher that transforms these reactive objects received into a new reactive object that holds a
   * different type.
   *
   * @param reactiveA The first reactive object which its value changes are listened for.
   * @param reactiveB The second reactive object which its value changes are listened for.
   * @param reactiveC The third reactive object which its value changes are listened for.
   * @param onChange A watcher that listens for new value and processes it.
   * @returns A transformed reactive object.
   */
  watch3<A, B, C, R> (
    reactiveA: Reactive<A>, reactiveB: Reactive<B>, reactiveC: Reactive<C>, onChange: (a: A, b: B, c: C) => R
  ): Reactive<R> {
    const result = Reactive.from(onChange(reactiveA.value, reactiveB.value, reactiveC.value))
    this.watch(reactiveA, value => {
      result.value = onChange(value, reactiveB.value, reactiveC.value)
    })
    this.watch(reactiveB, value => {
      result.value = onChange(reactiveA.value, value, reactiveC.value)
    })
    this.watch(reactiveC, value => {
      result.value = onChange(reactiveA.value, reactiveB.value, value)
    })
    return result
  }

  /**
   * Detaches all watchers registered through this manager.
   */
  freeWatchers (): void {
    for (const reactiveID of Object.keys(this.watcherReactives)) {
      const watcherReactives = this.watcherReactives[Number(reactiveID)]
      if (watcherReactives === undefined) continue
      for (const watcherReactive of watcherReactives) this.reactives[Number(reactiveID)]?.unwatch(watcherReactive)
    }
  }
}
