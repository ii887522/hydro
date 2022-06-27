# Bound
Defines a boundary between the minimum and maximum value.

## Table of contents
- [mid](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#mid)
- [isIntersect](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#isIntersect)
- [intersect](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#intersect)
- [clamp](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#clamp)
- [random](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#random)
- [toSeq](https://github.com/ii887522/hydro/blob/master/docs/struct/Bound.md#toSeq)

## **mid**
```ts
get mid (): number
```

### **Example usage:**
```ts
expect(new Bound(0, 2).mid).toBe(1)
```
<br />

## **isIntersect**
```ts
isIntersect (that: Bound): boolean
```
Checks whether the boundary received overlaps with this boundary.

`that`: The boundary to be checked with.

Returns true if both boundaries overlaps, false otherwise.

### **Example usage:**
```ts
expect(new Bound(1, 2).isIntersect(new Bound(0, 0))).toBeFalsy()
```
<br />

## **intersect**
```ts
intersect (that: Bound): Bound | undefined
```
Finds out the intersection between both boundaries received as a boundary.

`that`: The boundary to intersect with.

Returns an intersection as a boundary if exist.

### **Example usage:**
```ts
expect(new Bound(0, 2).intersect(new Bound(0, 0))).toEqual(new Bound(0, 0))
```
<br />

## **clamp**
```ts
clamp (value: number): number
```
Constrains the `value` given in this boundary and returns the result.

`value`: The value to be constrained.

Returns the constrained value.

### **Example usage:**
```ts
expect(new Bound(2, 4).clamp(5)).toBe(4)
```
<br />

## **random**
```ts
random (): number
```
Returns a random value in this boundary.

### **Example usage:**
```ts
expect(new Bound(0, 2).random()).toBeGreaterThanOrEqual(0)
expect(new Bound(0, 2).random()).toBeLessThanOrEqual(2)
```
<br />

## **toSeq**
```ts
toSeq (): Seq
```
Treats this boundary as a sequence.

Returns a sequence that represents this boundary.

### **Example usage:**
```ts
expect(new Bound(1, 2).toSeq()).toEqual(new Seq(1, 2))
```
<br />
