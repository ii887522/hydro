# ReactivityManager
It is a manager that allows users to register watchers more conveniently and unwatch all registered watchers at once.

## Table of contents
- [watch](https://github.com/ii887522/hydro/blob/master/docs/any/ReactivityManager.md#watch)
- [watch2](https://github.com/ii887522/hydro/blob/master/docs/any/ReactivityManager.md#watch2)
- [watch3](https://github.com/ii887522/hydro/blob/master/docs/any/ReactivityManager.md#watch3)
- [freeWatchers](https://github.com/ii887522/hydro/blob/master/docs/any/ReactivityManager.md#freeWatchers)

## **watch**
```ts
watch<A, R> (reactive: Reactive<A>, onChange: (value: A) => R): Reactive<R>
```
It registers a new watcher that transforms the reactive object received into a new reactive object that holds a
different type.

`reactive`: The reactive object which its value changes are listened for.
`onChange`: It is a watcher that listens for new value and processes it.
It returns a transformed reactive object.

### **Example usage:**
```ts
const reactivityManager = new ReactivityManager()
const value = new Reactive(2)
const squaredValue = reactivityManager.watch(value, value => value * value)
expect(squaredValue.value).toBe(4)
```
<br />

## **watch2**
```ts
watch2<A, B, R> (reactiveA: Reactive<A>, reactiveB: Reactive<B>, onChange: (a: A, b: B) => R): Reactive<R>
```
It registers a new watcher that transforms these reactive objects received into a new reactive object that holds a
different type.

`reactiveA`: The first reactive object which its value changes are listened for.
`reactiveB`: The second reactive object which its value changes are listened for.
`onChange`: It is a watcher that listens for new value and processes it.

It returns A transformed reactive object.

### **Example usage:**
```ts
const reactivityManager = new ReactivityManager()
const a = new Reactive(1)
const b = new Reactive(2)
const sum = reactivityManager.watch2(a, b, (a, b) => a + b)
expect(sum.value).toBe(3)
```
<br />

## **watch3**
```ts
watch3<A, B, C, R> (
  reactiveA: Reactive<A>, reactiveB: Reactive<B>, reactiveC: Reactive<C>, onChange: (a: A, b: B, c: C) => R
): Reactive<R>
```
It registers a new watcher that transforms these reactive objects received into a new reactive object that holds a
different type.

`reactiveA`: The first reactive object which its value changes are listened for.
`reactiveB`: The second reactive object which its value changes are listened for.
`reactiveC`: The third reactive object which its value changes are listened for.
`onChange`: It is a watcher that listens for new value and processes it.

It returns a transformed reactive object.

### **Example usage:**
```ts
const reactivityManager = new ReactivityManager()
const a = new Reactive(1)
const b = new Reactive(2)
const c = new Reactive(3)
const sum = reactivityManager.watch3(a, b, c, (a, b, c) => a + b + c)
expect(sum.value).toBe(6)
```
<br />

## **freeWatchers**
```ts
freeWatchers (): void
```
It detaches all watchers registered through this manager.

### **Example usage:**
```ts
const reactivityManager = new ReactivityManager()
const value = new Reactive(0)
const squaredValue = reactivityManager.watch(value, value => value * value)
value.value = 2
expect(squaredValue.value).toBe(4)
reactivityManager.freeWatchers()
value.value = 3
expect(squaredValue.value).toBe(4)
```
<br />
