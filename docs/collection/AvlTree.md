# AvlTree
It is a binary search tree that automatically balances itself when operations such as insertions and deletions are applied to maintain the efficiency of all the operations supported in the tree. It allows the user to access objects in the tree in anyway. Objects with duplicate keys in the tree are not supported. All objects in the tree must have unique keys. If the user performs an inorder traversal of the tree, then all objects retrieved from the tree are sorted in ascending order by key only.

## Table of contents
- [putBulk](https://github.com/ii887522/hydro/blob/master/docs/collection/AvlTree.md#putBulk)
- [put](https://github.com/ii887522/hydro/blob/master/docs/collection/AvlTree.md#put)
- [get](https://github.com/ii887522/hydro/blob/master/docs/collection/AvlTree.md#get)
- [min](https://github.com/ii887522/hydro/blob/master/docs/collection/AvlTree.md#min)
- [max](https://github.com/ii887522/hydro/blob/master/docs/collection/AvlTree.md#max)
- [removeBulk](https://github.com/ii887522/hydro/blob/master/docs/collection/AvlTree.md#removeBulk)
- [remove](https://github.com/ii887522/hydro/blob/master/docs/collection/AvlTree.md#remove)
- [toArrayPreorder](https://github.com/ii887522/hydro/blob/master/docs/collection/AvlTree.md#toArrayPreorder)
- [toArrayInorder](https://github.com/ii887522/hydro/blob/master/docs/collection/AvlTree.md#toArrayInorder)
- [toArrayPostorder](https://github.com/ii887522/hydro/blob/master/docs/collection/AvlTree.md#toArrayPostorder)

## **putBulk**
```ts
putBulk (...array: Array<{ key: K, value: V }>): void
```
It allows the user to insert multiple objects at once and update multiple objects by their respective `key`.

`array`: The array which contains multiple objects with `key` and `value` pair to be inserted and updated.

### **Example usage:**
```ts
const tree = new AvlTree<number, string>()
tree.putBulk(
  { key: 0, value: 'a' },
  { key: 1, value: 'b' },
  { key: 2, value: 'c' },
  { key: 3, value: 'd' },
  { key: 4, value: 'e' }
)
expect(tree.get(0)).toBe('a')
expect(tree.get(1)).toBe('b')
expect(tree.get(2)).toBe('c')
expect(tree.get(3)).toBe('d')
expect(tree.get(4)).toBe('e')
```
<br />

## **put**
```ts
put (key: K, value: V): void
```
It allows the user to insert an object with a new `key` and update an existing object by `key`.

`key`: The key used to identify an object to be inserted or updated.

`value`: The new value in an object to be inserted or replaces the old value of an existing object.

### **Example usage:**
```ts
const tree = new AvlTree<number, string>()
tree.put(0, 'a')
expect(tree.get(0)).toBe('a')
```
<br />

## **get**
```ts
get (key: K): V | undefined
```
It retrieves the value of an existing object by `key`.

`key`: The key used to identify an existing object to be retrieved from.

It returns the value of the requested object or undefined if the object identified by the given `key` is not found.

### **Example usage:**
```ts
const tree = new AvlTree<number, string>()
expect(tree.get(0)).toBe(undefined)
```
<br />

## **min**
```ts
min (): { key: K, value: V } | undefined
```
It retrieves the minimum object where the minimum is determined by the minimum key in the tree.

It returns the requested object or undefined if the tree does not contain any objects.

### **Example usage:**
```ts
const tree = new AvlTree<number, string>()
tree.put(2, 'a')
tree.put(1, 'b')
tree.put(0, 'c')
tree.put(3, 'd')
tree.put(4, 'e')
expect(tree.min()).toEqual({ key: 0, value: 'c' })
```
<br />

## **max**
```ts
max (): { key: K, value: V } | undefined
```
It retrieves the maximum object where the maximum is determined by the maximum key in the tree.

It returns the requested object or undefined if the tree does not contain any objects.

### **Example usage:**
```ts
const tree = new AvlTree<number, string>()
tree.put(2, 'a')
tree.put(3, 'b')
tree.put(4, 'c')
tree.put(1, 'd')
tree.put(0, 'e')
expect(tree.max()).toEqual({ key: 4, value: 'c' })
```
<br />

## **removeBulk**
```ts
removeBulk (...keys: Array<K>): void
```
It removes multiple objects by their respective `key`. No objects will be removed from the tree if all the `key` received is not found in the tree.

`keys`: The keys used to identify multiple objects in the tree.

### **Example usage:**
```ts
const tree = new AvlTree<number, string>()
tree.put(0, 'a')
tree.put(1, 'b')
tree.put(2, 'c')
tree.put(3, 'd')
tree.put(4, 'e')
tree.removeBulk(0, 1, 2, 3, 4)
expect(tree.get(0)).toBe(undefined)
expect(tree.get(1)).toBe(undefined)
expect(tree.get(2)).toBe(undefined)
expect(tree.get(3)).toBe(undefined)
expect(tree.get(4)).toBe(undefined)
```
<br />

## **remove**
```ts
remove (key: K): void
```
It removes an existing object by `key`. No objects will be removed from the tree if the `key` received is not found in the tree.

It returns the key used to identify an existing object in the tree.

### **Example usage:**
```ts
const tree = new AvlTree<number, string>()
tree.put(0, 'e')
tree.put(8, 'f')
tree.put(16, 'g')
tree.put(-8, 'h')
tree.put(-16, 'i')
tree.remove(0)
expect(tree.get(0)).toBe(undefined)
expect(tree.get(8)).toBe('f')
expect(tree.get(16)).toBe('g')
expect(tree.get(-8)).toBe('h')
expect(tree.get(-16)).toBe('i')
```
<br />

## **toArrayPreorder**
```ts
toArrayPreorder (): Array<{ key: K, value: V }>
```
It allows the user to convert the tree into an array by performing a preorder traversal of the tree and retrieves each object visited and stored them in an array and returns it.

It returns an array that contains objects from the tree.

### **Example usage:**
```ts
const tree = new AvlTree<number, string>()
tree.put(1, 'a')
tree.put(0, 'b')
tree.put(2, 'c')
tree.put(3, 'd')
tree.put(4, 'e')
expect(tree.toArrayPreorder())
  .toEqual([
    { key: 1, value: 'a' },
    { key: 0, value: 'b' },
    { key: 3, value: 'd' },
    { key: 2, value: 'c' },
    { key: 4, value: 'e' }
  ])
```
<br />

## **toArrayInorder**
```ts
toArrayInorder (): Array<{ key: K, value: V }>
```
It allows the user to convert the tree into an array by performing an inorder traversal of the tree and retrieves each object visited and stored them in an array and returns it.

It returns an array that contains objects from the tree sorted in ascending order by `key`.

### **Example usage:**
```ts
const tree = new AvlTree<number, string>()
tree.put(1, 'a')
tree.put(0, 'b')
tree.put(2, 'c')
tree.put(3, 'd')
tree.put(4, 'e')
expect(tree.toArrayInorder())
  .toEqual([
    { key: 0, value: 'b' },
    { key: 1, value: 'a' },
    { key: 2, value: 'c' },
    { key: 3, value: 'd' },
    { key: 4, value: 'e' }
  ])
```
<br />

## **toArrayPostorder**
```ts
toArrayPostorder (): Array<{ key: K, value: V }>
```
It allows the user to convert the tree into an array by performing a postorder traversal of the tree and retrieves each object visited and stored them in an array and returns it.

It returns an array that contains objects from the tree.

### **Example usage:**
```ts
const tree = new AvlTree<number, string>()
tree.put(1, 'a')
tree.put(0, 'b')
tree.put(2, 'c')
tree.put(3, 'd')
tree.put(4, 'e')
expect(tree.toArrayPostorder())
  .toEqual([
    { key: 0, value: 'b' },
    { key: 2, value: 'c' },
    { key: 4, value: 'e' },
    { key: 3, value: 'd' },
    { key: 1, value: 'a' }
  ])
```
<br />
