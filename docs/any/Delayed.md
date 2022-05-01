# Delayed
It is a value holder that allows new value to be assigned in the future by the `timeout` given. Users of this class must keep calling `step(dt)` method to simulate delayed assignment of new value.

## Table of contents
- [get value](https://github.com/ii887522/hydro/blob/master/docs/any/Delayed.md#get-value)
- [set value](https://github.com/ii887522/hydro/blob/master/docs/any/Delayed.md#set-value)
- [setNow](https://github.com/ii887522/hydro/blob/master/docs/any/Delayed.md#setNow)
- [step](https://github.com/ii887522/hydro/blob/master/docs/any/Delayed.md#step)

## **get value**
```ts
get value (): T
```

### **Example usage:**
```ts
const delayedValue = new Delayed(0)
expect(delayedValue.value).toBe(0)
```
<br />

## **set value**
```ts
set value (value: T)
```

### **Example usage:**
```ts
const delayedValue = new Delayed(0)
delayedValue.value = 1
expect(delayedValue.value).toBe(0)
```
<br />

## **setNow**
```ts
setNow (value: T): void
```

### **Example usage:**
```ts
const delayedValue = new Delayed(0)
delayedValue.setNow(3)
expect(delayedValue.value).toBe(3)
```

## **step**
```ts
step (dt: number): void
```
It advances the time being tracked by the given `dt` for simulating delayed assignment of new value.

`dt`: Some small amount of time to advance.

### **Example usage:**
```ts
const delayedValue = new Delayed(0)
delayedValue.value = 1
delayedValue.step(1)
expect(delayedValue.value).toBe(1)
```
