# Late
It is a holder that allows late initialization of the value being held.

## Table of contents
- [get value](https://github.com/ii887522/hydro/blob/master/docs/any/Late.md#get-value)
- [set value](https://github.com/ii887522/hydro/blob/master/docs/any/Late.md#set-value)

## **get value**
```ts
get value (): T
```

### **Example usage:**
```ts
const value = new Late<number>()
expect(() => {
  console.log(value.value)
}).toThrow(ReferenceError)
```
<br />

## **set value**
```ts
set value (value: T)
```

### **Example usage:**
```ts
const value = new Late<number>()
value.value = 0
expect(value.value).toBe(0)
```
<br />
