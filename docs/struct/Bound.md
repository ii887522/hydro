# Bound
It defines a boundary between the minimum and maximum value.

## Table of contents
- [middle](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#middle)
- [isIntersect](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#isIntersect)
- [intersect](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#intersect)
- [clamp](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#clamp)
- [random](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#random)
- [toSequence](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#toSequence)

## **middle**
```ts
get middle (): number
```

### **Example usage:**
```ts
expect(new Bound(0, 2).middle).toBe(1)
```
<br />

## **isIntersect**
```ts
isIntersect (that: Bound): boolean
```
It checks whether the boundary received overlaps with this boundary.

`that`: The boundary to be checked with.

It returns true if both boundaries overlaps, false otherwise.

### **Example usage:**
```ts
expect(new Bound(1, 2).isIntersect(new Bound(0, 0))).toBeFalsy()
```
<br />

## **intersect**
```ts
intersect (that: Bound): Bound | undefined
```
It finds out the intersection between both boundaries received as a boundary.

`that`: The boundary to intersect with.

It returns An intersection as a boundary if exist.

### **Example usage:**
```ts
expect(new Bound(0, 2).intersect(new Bound(0, 0))).toEqual(new Bound(0, 0))
```
<br />

## **clamp**
```ts
clamp (value: number): number
```
It constrains the `value` given in this boundary and returns the result.

`value`: The value to be constrained.

It returns The constrained value.

### **Example usage:**
```ts
expect(new Bound(2, 4).clamp(5)).toBe(4)
```
<br />

## **random**
```ts
random (): number
```
It returns a random value in this boundary.

### **Example usage:**
```ts
expect(new Bound(0, 2).random()).toBeGreaterThanOrEqual(0)
expect(new Bound(0, 2).random()).toBeLessThanOrEqual(2)
```
<br />

## **toSequence**
```ts
toSequence (): Sequence
```
It treats this boundary as a sequence.

It returns a sequence that represents this boundary.

### **Example usage:**
```ts
expect(new Bound(1, 2).toSequence()).toEqual(new Sequence(1, 2))
```
<br />
