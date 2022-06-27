# Dynamic
A value holder that keeps changing its value by the `interval` given. Users of this class must keep calling `step(dt)` method to simulate frequently changing value.

## Table of contents
- [get value](https://github.com/ii887522/hydro/blob/master/docs/any/Dynamic.md#get-value)
- [step](https://github.com/ii887522/hydro/blob/master/docs/any/Dynamic.md#step)

## **get value**
```ts
get value (): T
```

### **Example usage:**
```ts
let value = 0
const dynamicValue = new Dynamic(() => {
  ++value
  return value
})
expect(dynamicValue.value).toBe(1)
```
<br />

## **step**
```ts
step (dt: number): void
```
Advances the time being tracked by the given `dt` for simulating frequently changing value.

`dt`: Some small amount of time to advance.

### **Example usage:**
```ts
let value = 0
const dynamicValue = new Dynamic(() => {
  ++value
  return value
})
dynamicValue.step(0)
expect(dynamicValue.value).toBe(1)
dynamicValue.step(1)
expect(dynamicValue.value).toBe(2)
dynamicValue.step(2)
expect(dynamicValue.value).toBe(3)
```
<br />
