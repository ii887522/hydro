# Seq
Defines a sequence between two values.

## Table of contents
- [normalize](https://github.com/ii887522/hydro/blob/master/docs/struct/Sequence.md#normalize)
- [unnormalize](https://github.com/ii887522/hydro/blob/master/docs/struct/Sequence.md#unnormalize)
- [toBound](https://github.com/ii887522/hydro/blob/master/docs/struct/Sequence.md#toBound)

## **normalize**
```ts
normalize (value: number): number
```
Maps the `value` given in this sequence to a value between 0 and 1.

`value`: The value to map from.

Returns a value between 0 and 1.

### **Example usage:**
```ts
expect(new Sequence(0, 5).normalize(1)).toBe(0.2)
```
<br />

## **unnormalize**
```ts
unnormalize (value: number): number
```
Maps the `value` given between 0 and 1 to a value belongs to this sequence.

`value`: The value to map from.

Returns a value belongs to this sequence.

### **Example usage:**
```ts
expect(new Sequence(0, 5).unnormalize(0.2)).toBe(1)
```
<br />

## **toBound**
```ts
toBound (): Bound
```
Treats this sequence as a boundary.

Returns a boundary that represents this sequence.

### **Example usage:**
```ts
expect(new Sequence(0, 1).toBound()).toEqual(new Bound(0, 1))
```
<br />
