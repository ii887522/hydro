# Reactive
It is a wrapper over the value so that changes to the value can be notified to all the watchers subscribed to this wrapper. It is used to establish component communications through the value in the wrapper to reduce coupling between components.

## Table of contents
- [get value](https://github.com/ii887522/hydro/blob/master/docs/Reactive.md#get-value)
- [set value](https://github.com/ii887522/hydro/blob/master/docs/Reactive.md#get-value)
- [watch](https://github.com/ii887522/hydro/blob/master/docs/Reactive.md#watch)

## **get value**
```ts
get value (): T
```

### **Example usage:**
```ts
const n = new Reactive(0)
expect(n.value).toBe(0)
```
<br />

## **set value**
```ts
set value (value: T)
```

### **Example usage:**
```ts
const n = new Reactive(0)
n.value = 1
expect(n.value).toBe(1)
```
<br />

## **watch**
```ts
watch (onValueChange: (oldValue: T, newValue: T) => void): void
```
It registers a handler that processes the changes of the value so that the component which watches this object can be notified.

`onValueChange`: The handler that processes the changes of the value.

### **Example usage:**
```ts
const n = new Reactive(0)
let count = 0
n.watch((_, newValue) => {
  count += newValue
})
```
<br />
