# AvlTree
It is a binary search tree that automatically balances itself when operations such as insertions and deletions are applied to maintain the efficiency of all the operations supported in the tree. It allows the user to access objects in the tree in anyway. Objects with duplicate keys in the tree are not supported. All objects in the tree must have unique keys. If the user performs an inorder traversal of the tree, then all objects retrieved from the tree are sorted in ascending order by key only.

## Table of contents
- [putBulk](https://github.com/ii887522/hydro/blob/master/docs/AvlTree.md#put)
- [put](https://github.com/ii887522/hydro/blob/master/docs/AvlTree.md#put)
- [get](https://github.com/ii887522/hydro/blob/master/docs/AvlTree.md#get)
- [min](https://github.com/ii887522/hydro/blob/master/docs/AvlTree.md#min)
- [max](https://github.com/ii887522/hydro/blob/master/docs/AvlTree.md#max)
- [removeBulk](https://github.com/ii887522/hydro/blob/master/docs/AvlTree.md#removeBulk)
- [remove](https://github.com/ii887522/hydro/blob/master/docs/AvlTree.md#remove)
- [toArrayPreorder](https://github.com/ii887522/hydro/blob/master/docs/AvlTree.md#toArrayPreorder)
- [toArrayInorder](https://github.com/ii887522/hydro/blob/master/docs/AvlTree.md#toArrayInorder)
- [toArrayPostorder](https://github.com/ii887522/hydro/blob/master/docs/AvlTree.md#toArrayPostorder)

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
  { key: 4, value: 'e' },
  { key: 5, value: 'f' },
  { key: 6, value: 'g' },
  { key: 7, value: 'h' },
  { key: 8, value: 'i' },
  { key: 9, value: 'j' },
  { key: 10, value: 'k' },
  { key: 11, value: 'l' },
  { key: 12, value: 'm' },
  { key: 13, value: 'n' },
  { key: 14, value: 'o' },
  { key: 15, value: 'p' },
  { key: 16, value: 'q' },
  { key: 17, value: 'r' },
  { key: 18, value: 's' },
  { key: 19, value: 't' },
  { key: 20, value: 'u' },
  { key: 21, value: 'v' },
  { key: 22, value: 'w' },
  { key: 23, value: 'x' },
  { key: 24, value: 'y' },
  { key: 25, value: 'z' },
  { key: 26, value: 'aa' },
  { key: 27, value: 'ab' },
  { key: 28, value: 'ac' },
  { key: 29, value: 'ad' },
  { key: 30, value: 'ae' },
  { key: 31, value: 'af' }
)
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
expect(tree.min()).toEqual({ key: 2, value: 'a' })
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
expect(tree.max()).toEqual({ key: 2, value: 'a' })
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
tree.removeBulk(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31)
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
tree.remove(0)
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
expect(tree.toArrayPreorder()).toEqual([{ key: 1, value: 'a' }])
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
expect(tree.toArrayInorder()).toEqual([{ key: 1, value: 'a' }])
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
expect(tree.toArrayPostorder()).toEqual([{ key: 1, value: 'a' }])
```
<br />
