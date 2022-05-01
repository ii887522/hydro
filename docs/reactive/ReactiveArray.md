# ReactiveArray
It is a wrapper that listens for changes to the array being held and automatically notifies all registered watchers
about the new values in the array given. It is used to establish communications between multiple modules to achieve
loose coupling between the modules involved.

## Table of contents
- [set](https://github.com/ii887522/hydro/blob/master/docs/reactive/ReactiveArray.md#set)
- [get](https://github.com/ii887522/hydro/blob/master/docs/reactive/ReactiveArray.md#get)
- [push](https://github.com/ii887522/hydro/blob/master/docs/reactive/ReactiveArray.md#push)
- [pop](https://github.com/ii887522/hydro/blob/master/docs/reactive/ReactiveArray.md#pop)
- [iterator](https://github.com/ii887522/hydro/blob/master/docs/reactive/ReactiveArray.md#iterator)

## **set**
```ts
set (index: number, item: T): void
```
It replaces an old item located at the `index` with the new `item`.

`index`: The position for which the item needs to be replaced.

`item`: The new item located at the `index`.

### **Example usage:**
```ts
const array = new ReactiveArray(0, 0, 0)
array.set(0, 1)
expect(array.get(0)).toBe(1)
expect(array.get(1)).toBe(0)
expect(array.get(2)).toBe(0)
```
<br />

## **get**
```ts
get (index: number): T | undefined
```
It retrieves the item located at `index`.

`index`: The position for which the item needs to be returned.

It returns the item located at `index`.

### **Example usage:**
```ts
const array = new ReactiveArray(0, 1, 2)
expect(array.get(0)).toBe(0)
expect(array.get(1)).toBe(1)
expect(array.get(2)).toBe(2)
```
<br />

## **push**
```ts
push (item: T): void
```
It inserts a new `item` at the end of this array thereby increases the size of the array by 1.

`item`: The new item to be inserted at the end of this array.

### **Example usage:**
```ts
const array = new ReactiveArray()
array.push(0)
array.push(1)
array.push(2)
expect(array.get(0)).toBe(0)
expect(array.get(1)).toBe(1)
expect(array.get(2)).toBe(2)
```
<br />

## **pop**
```ts
pop (): T | undefined
```
It removes an old item at the end of this array thereby decreases the size of the array by 1.

It returns the old item that is just removed from this array.

### **Example usage:**
```ts
const array = new ReactiveArray(0, 1, 2, 3)
expect(array.pop()).toBe(3)
expect(array.get(0)).toBe(0)
expect(array.get(1)).toBe(1)
expect(array.get(2)).toBe(2)
```
<br />

## **iterator**
```ts
[Symbol.iterator] (): Iterator<T>
```
It creates an iterator that allows the user to loop through this array in ascending order once.

It returns a forward iterator that can loop through this array once.

### **Example usage:**
```ts
const iterator = new ReactiveArray(0, 1)[Symbol.iterator]()
expect(iterator.next()).toEqual({ done: false, value: 0 })
expect(iterator.next()).toEqual({ done: false, value: 1 })
expect(iterator.next()).toEqual({ done: true, value: undefined })
```
<br />
