# Reactive
It is a wrapper that listens for changes to the value being held and automatically notifies all registered watchers
about the new value given. It is used to establish communications between multiple modules to achieve loose coupling
between the modules involved.

## Table of contents
- [get value](https://github.com/ii887522/hydro/blob/master/docs/any/Reactive.md#get-value)
- [set value](https://github.com/ii887522/hydro/blob/master/docs/any/Reactive.md#set-value)
- [wakeChildren](https://github.com/ii887522/hydro/blob/master/docs/any/Reactive.md#wakeChildren)
- [watch](https://github.com/ii887522/hydro/blob/master/docs/any/Reactive.md#watch)
- [unwatch](https://github.com/ii887522/hydro/blob/master/docs/any/Reactive.md#unwatch)

## **get value**
```ts
get value (): T
```

### **Example usage:**
```ts
const value = new Reactive(0)
const { reactive: valueSquared } = value.watch(value => value * value)
expect(valueSquared.value).toBe(0)
```
<br />

## **set value**
```ts
set value (value: T)
```

### **Example usage:**
```ts
const value = new Reactive(0)
const { reactive: valueSquared } = value.watch(value => value * value)
value.value = 2
expect(valueSquared.value).toBe(4)
```
<br />

## **wakeChildren**
```ts
protected wakeChildren (): void
```
It notifies all other reactive objects associated with their watchers about the new value given just now.

### **Example usage:**
```ts
this.wakeChildren()
```
<br />

## **watch**
```ts
watch<U> (onChange: (value: T) => U): { watcherID: number, reactive: Reactive<U> }
```
It registers a new watcher that transforms this reactive object into a new reactive object that holds a different type.

`onChange`: It is a watcher that listens for new value and processes it.

It returns A watcher id that can be used to unwatch this watcher and a transformed reactive object.

### **Example usage:**
```ts
const value = new Reactive(2)
const { reactive: valueSquared } = value.watch(value => value * value)
expect(valueSquared.value).toBe(4)
```
<br />

## **unwatch**
```ts
unwatch (watcherID: number): void
```
It detaches the registered watcher associated with the `watcherID` given so the watcher no longer reacts to
changes of the value helded by this reactive object.

`watcherID`: The id number that is associated with the watcher to be unwatched.

### **Example usage:**
```ts
const value = new Reactive(0)
const { watcherID, reactive: squaredValue } = value.watch(value => value * value)
value.value = 3
expect(squaredValue.value).toBe(9)
value.unwatch(watcherID)
value.value = 4
expect(squaredValue.value).toBe(9)
```
<br />
