# IDManager
It manages and recycles id numbers to be used for any purposes so that id numbers will not become depleted if users keep retrieving and discarding id numbers.

## Table of contents
- [next](https://github.com/ii887522/hydro/blob/master/docs/any/IDManager.md#next)
- [free](https://github.com/ii887522/hydro/blob/master/docs/any/IDManager.md#free)

## **next**
```ts
next (): number
```
It returns the next available id number.

It returns an available id number.

### **Example usage:**
```ts
const idManager = new IDManager()
expect(idManager.next()).toBe(0)
expect(idManager.next()).toBe(1)
expect(idManager.next()).toBe(2)
```
<br />

## **free**
```ts
free (id: number): void
```
It makes the allocated id number to become available again and ready to be used in the future.

`id`: The allocated id number to return.

### **Example usage:**
```ts
const idManager = new IDManager()
expect(idManager.next()).toBe(0)
idManager.free(0)
expect(idManager.next()).toBe(0)
```
<br />
