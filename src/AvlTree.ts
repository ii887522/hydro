'use strict'

import { requireDefined } from '../index.js'

/**
 * It is a binary search tree that automatically balances itself when operations such as insertions and deletions are applied to maintain the efficiency of all the operations
 * supported in the tree. It allows the user to access objects in the tree in anyway. Objects with duplicate keys in the tree are not supported. All objects in the tree must
 * have unique keys. If the user performs an inorder traversal of the tree, then all objects retrieved from the tree are sorted in ascending order by key only.
 */
export default class AvlTree<K, V> {
  private root?: Node<K, V>

  /**
   * It allows the user to insert multiple objects at once and update multiple objects by their respective `key`.
   *
   * @param array The array which contains multiple objects with `key` and `value` pair to be inserted and updated.
   */
  putBulk (...array: Array<{ key: K, value: V }>): void {
    for (const item of array) this.put(item.key, item.value)
  }

  /**
   * It allows the user to insert an object with a new `key` and update an existing object by `key`.
   *
   * @param key The key used to identify an object to be inserted or updated.
   * @param value The new value in an object to be inserted or replaces the old value of an existing object.
   */
  put (key: K, value: V): void {
    if (this.root !== undefined) this.putFrom(this.root, key, value)
    else this.root = new Node(key, value)
  }

  private putFrom (from: Node<K, V>, key: K, value: V): void {
    if (key < from.key) this.insertLeft(from, key, value)
    else if (key > from.key) this.insertRight(from, key, value)
    else from.value = value
  }

  private insertLeft (from: Node<K, V>, key: K, value: V): void {
    if (from.left !== undefined) this.putFrom(from.left, key, value)
    else {
      from.left = new Node(key, value)
      from.left.parent = from
    }
    from.leftHeight = from.left !== undefined ? Math.max(from.left.leftHeight, from.left.rightHeight) + 1 : 0
    if (from.leftHeight - from.rightHeight <= 1) return
    if (from.left.leftHeight > from.left.rightHeight) this.rotateRight(from)
    else this.flipRight(from)
  }

  private insertRight (from: Node<K, V>, key: K, value: V): void {
    if (from.right !== undefined) this.putFrom(from.right, key, value)
    else {
      from.right = new Node(key, value)
      from.right.parent = from
    }
    from.rightHeight = from.right !== undefined ? Math.max(from.right.leftHeight, from.right.rightHeight) + 1 : 0
    if (from.rightHeight - from.leftHeight <= 1) return
    if (from.right.rightHeight > from.right.leftHeight) this.rotateLeft(from)
    else this.flipLeft(from)
  }

  /**
   * It retrieves the value of an existing object by `key`.
   *
   * @param key The key used to identify an existing object to be retrieved from.
   * @returns The value of the requested object or undefined if the object identified by the given `key` is not found.
   */
  get (key: K): V | undefined {
    return this.root !== undefined ? this.getNodeFrom(this.root, key)?.value : undefined
  }

  private getNodeFrom (from: Node<K, V>, key: K): Node<K, V> | undefined {
    if (key < from.key) return from.left !== undefined ? this.getNodeFrom(from.left, key) : undefined
    else if (key > from.key) return from.right !== undefined ? this.getNodeFrom(from.right, key) : undefined
    else return from
  }

  /**
   * It retrieves the minimum object where the minimum is determined by the minimum key in the tree.
   *
   * @returns The requested object or undefined if the tree does not contain any objects.
   */
  min (): { key: K, value: V } | undefined {
    if (this.root === undefined) return
    const result = this.minNodeFrom(this.root)
    return { key: result.key, value: result.value }
  }

  private minNodeFrom (from: Node<K, V>): Node<K, V> {
    let result = from
    while (result.left !== undefined) result = result.left
    return result
  }

  /**
   * It retrieves the maximum object where the maximum is determined by the maximum key in the tree.
   *
   * @returns The requested object or undefined if the tree does not contain any objects.
   */
  max (): { key: K, value: V } | undefined {
    if (this.root === undefined) return
    const result = this.maxNodeFrom(this.root)
    return { key: result.key, value: result.value }
  }

  private maxNodeFrom (from: Node<K, V>): Node<K, V> {
    let result = from
    while (result.right !== undefined) result = result.right
    return result
  }

  /**
   * It removes multiple objects by their respective `key`. No objects will be removed from the tree if all the `key` received is not found in the tree.
   *
   * @param keys The keys used to identify multiple objects in the tree.
   */
  removeBulk (...keys: K[]): void {
    for (const key of keys) this.remove(key)
  }

  /**
   * It removes an existing object by `key`. No objects will be removed from the tree if the `key` received is not found in the tree.
   *
   * @param key The key used to identify an existing object in the tree.
   */
  remove (key: K): void {
    if (this.root === undefined) return
    const target = this.getNodeFrom(this.root, key)
    if (target === undefined) return
    const alternate = target.left !== undefined ? this.maxNodeFrom(target.left) : (target.right !== undefined ? this.minNodeFrom(target.right) : undefined)
    const startNodeToRefresh = alternate !== undefined ? (alternate.parent === target ? alternate : alternate.parent) : target.parent
    if (alternate !== undefined) {
      if (alternate.parent !== target) {
        if (alternate.left !== undefined) alternate.left.parent = alternate.parent
        else if (alternate.right !== undefined) alternate.right.parent = alternate.parent
        if (alternate.parent?.left === alternate) alternate.parent.left = alternate.right
        else if (alternate.parent?.right === alternate) alternate.parent.right = alternate.left
      }
      if (target.left !== alternate) alternate.left = target.left
      if (target.right !== alternate) alternate.right = target.right
      alternate.parent = target.parent
    }
    if (target.left !== alternate && target.left !== undefined) target.left.parent = alternate
    if (target.right !== alternate && target.right !== undefined) target.right.parent = alternate
    if (target.parent !== undefined) {
      if (target.parent.left === target) target.parent.left = alternate
      else target.parent.right = alternate
    } else this.root = alternate
    target.left = undefined
    target.right = undefined
    target.parent = undefined
    this.refresh(startNodeToRefresh)
  }

  private refresh (start: Node<K, V> | undefined): void {
    let current = start
    while (current !== undefined) {
      current.leftHeight = current.left !== undefined ? Math.max(current.left.leftHeight, current.left.rightHeight) + 1 : 0
      current.rightHeight = current.right !== undefined ? Math.max(current.right.leftHeight, current.right.rightHeight) + 1 : 0
      if (current.leftHeight - current.rightHeight > 1) {
        if (requireDefined(current.left).leftHeight > requireDefined(current.left).rightHeight) this.rotateRight(current)
        else this.flipRight(current)
      } else if (current.rightHeight - current.leftHeight > 1) {
        if (requireDefined(current.right).rightHeight > requireDefined(current.right).leftHeight) this.rotateLeft(current)
        else this.flipLeft(current)
      }
      current = current.parent
    }
  }

  private rotateRight (from: Node<K, V>): void {
    const fromParent = from.parent
    const isFromParentLeft = fromParent?.left === from
    if (fromParent !== undefined) {
      if (isFromParentLeft) fromParent.left = from.left
      else fromParent.right = from.left
    } else this.root = from.left
    const node = from.left?.right
    from.left = node
    from.parent = fromParent !== undefined ? (isFromParentLeft ? fromParent.left : fromParent.right) : this.root
    from.leftHeight = from.left !== undefined ? Math.max(from.left.leftHeight, from.left.rightHeight) + 1 : 0
    requireDefined(from.parent).right = from
    requireDefined(from.parent).parent = fromParent
    requireDefined(from.parent).rightHeight = Math.max(from.leftHeight, from.rightHeight) + 1
    if (node !== undefined) node.parent = from
  }

  private flipRight (from: Node<K, V>): void {
    const fromParent = from.parent
    const isFromParentLeft = fromParent?.left === from
    if (fromParent !== undefined) {
      if (isFromParentLeft) fromParent.left = from.left?.right
      else fromParent.right = from.left?.right
    } else this.root = from.left?.right
    const leftNode = from.left?.right?.left
    const rightNode = from.left?.right?.right
    from.left = rightNode
    from.parent = fromParent !== undefined ? (isFromParentLeft ? fromParent.left : fromParent.right) : this.root
    from.leftHeight = rightNode !== undefined ? Math.max(rightNode.leftHeight, rightNode.rightHeight) + 1 : 0
    requireDefined(from.parent).left = from.parent?.parent
    requireDefined(from.parent).right = from
    requireDefined(from.parent).parent = fromParent
    requireDefined(requireDefined(from.parent).left).right = leftNode
    requireDefined(requireDefined(from.parent).left).parent = from.parent
    requireDefined(requireDefined(from.parent).left).rightHeight = leftNode !== undefined ? Math.max(leftNode.leftHeight, leftNode.rightHeight) + 1 : 0
    requireDefined(from.parent).leftHeight =
      Math.max(requireDefined(requireDefined(from.parent).left).leftHeight, requireDefined(requireDefined(from.parent).left).rightHeight) + 1
    requireDefined(from.parent).rightHeight = Math.max(from.leftHeight, from.rightHeight) + 1
    if (leftNode !== undefined) leftNode.parent = requireDefined(from.parent).left
    if (rightNode !== undefined) rightNode.parent = from
  }

  private rotateLeft (from: Node<K, V>): void {
    const fromParent = from.parent
    const isFromParentRight = fromParent?.right === from
    if (fromParent !== undefined) {
      if (isFromParentRight) fromParent.right = from.right
      else fromParent.left = from.right
    } else this.root = from.right
    const node = from.right?.left
    from.right = node
    from.parent = fromParent !== undefined ? (isFromParentRight ? fromParent.right : fromParent.left) : this.root
    from.rightHeight = from.right !== undefined ? Math.max(from.right.leftHeight, from.right.rightHeight) + 1 : 0
    requireDefined(from.parent).left = from
    requireDefined(from.parent).parent = fromParent
    requireDefined(from.parent).leftHeight = Math.max(from.leftHeight, from.rightHeight) + 1
    if (node !== undefined) node.parent = from
  }

  private flipLeft (from: Node<K, V>): void {
    const fromParent = from.parent
    const isFromParentRight = fromParent?.right === from
    if (fromParent !== undefined) {
      if (isFromParentRight) fromParent.right = from.right?.left
      else fromParent.left = from.right?.left
    } else this.root = from.right?.left
    const leftNode = from.right?.left?.left
    const rightNode = from.right?.left?.right
    from.right = leftNode
    from.parent = fromParent !== undefined ? (isFromParentRight ? fromParent.right : fromParent.left) : this.root
    from.rightHeight = leftNode !== undefined ? Math.max(leftNode.leftHeight, leftNode.rightHeight) + 1 : 0
    requireDefined(from.parent).left = from
    requireDefined(from.parent).right = from.parent?.parent
    requireDefined(from.parent).parent = fromParent
    requireDefined(requireDefined(from.parent).right).left = rightNode
    requireDefined(requireDefined(from.parent).right).parent = from.parent
    requireDefined(requireDefined(from.parent).right).leftHeight = rightNode !== undefined ? Math.max(rightNode.leftHeight, rightNode.rightHeight) + 1 : 0
    requireDefined(from.parent).leftHeight = Math.max(from.leftHeight, from.rightHeight) + 1
    requireDefined(from.parent).rightHeight =
      Math.max(requireDefined(requireDefined(from.parent).right).leftHeight, requireDefined(requireDefined(from.parent).right).rightHeight) + 1
    if (leftNode !== undefined) leftNode.parent = from
    if (rightNode !== undefined) rightNode.parent = requireDefined(from.parent).right
  }

  /**
   * It allows the user to convert the tree into an array by performing a preorder traversal of the tree and retrieves each object visited and stored them in an array and
   * returns it.
   *
   * @returns An array that contains objects from the tree.
   */
  toArrayPreorder (): Array<{ key: K, value: V }> {
    return this.root !== undefined ? this.toArrayPreorderFrom(this.root) : []
  }

  private toArrayPreorderFrom (from: Node<K, V>): Array<{ key: K, value: V }> {
    const result = []
    result.push({ key: from.key, value: from.value })
    if (from.left !== undefined) result.push(...this.toArrayPreorderFrom(from.left))
    if (from.right !== undefined) result.push(...this.toArrayPreorderFrom(from.right))
    return result
  }

  /**
   * It allows the user to convert the tree into an array by performing an inorder traversal of the tree and retrieves each object visited and stored them in an array and
   * returns it.
   *
   * @returns An array that contains objects from the tree sorted in ascending order by `key`.
   */
  toArrayInorder (): Array<{ key: K, value: V }> {
    return this.root !== undefined ? this.toArrayInorderFrom(this.root) : []
  }

  private toArrayInorderFrom (from: Node<K, V>): Array<{ key: K, value: V }> {
    const result = []
    if (from.left !== undefined) result.push(...this.toArrayInorderFrom(from.left))
    result.push({ key: from.key, value: from.value })
    if (from.right !== undefined) result.push(...this.toArrayInorderFrom(from.right))
    return result
  }

  /**
   * It allows the user to convert the tree into an array by performing a postorder traversal of the tree and retrieves each object visited and stored them in an array and
   * returns it.
   *
   * @returns An array that contains objects from the tree.
   */
  toArrayPostorder (): Array<{ key: K, value: V }> {
    return this.root !== undefined ? this.toArrayPostorderFrom(this.root) : []
  }

  private toArrayPostorderFrom (from: Node<K, V>): Array<{ key: K, value: V }> {
    const result = []
    if (from.left !== undefined) result.push(...this.toArrayPostorderFrom(from.left))
    if (from.right !== undefined) result.push(...this.toArrayPostorderFrom(from.right))
    result.push({ key: from.key, value: from.value })
    return result
  }
}

class Node<K, V> {
  left?: Node<K, V>
  right?: Node<K, V>
  parent?: Node<K, V>
  leftHeight = 0
  rightHeight = 0

  constructor (readonly key: K, public value: V) { }
}
