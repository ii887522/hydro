'use strict';
import { requireDefined } from '../index.js';
export default class AvlTree {
    putBulk(...array) {
        for (const item of array)
            this.put(item.key, item.value);
    }
    put(key, value) {
        if (this.root !== undefined)
            this.putFrom(this.root, key, value);
        else
            this.root = new Node(key, value);
    }
    putFrom(from, key, value) {
        if (key < from.key)
            this.insertLeft(from, key, value);
        else if (key > from.key)
            this.insertRight(from, key, value);
        else
            from.value = value;
    }
    insertLeft(from, key, value) {
        if (from.left !== undefined)
            this.putFrom(from.left, key, value);
        else {
            from.left = new Node(key, value);
            from.left.parent = from;
        }
        from.leftHeight = from.left !== undefined ? Math.max(from.left.leftHeight, from.left.rightHeight) + 1 : 0;
        if (from.leftHeight - from.rightHeight <= 1)
            return;
        if (from.left.leftHeight > from.left.rightHeight)
            this.rotateRight(from);
        else
            this.flipRight(from);
    }
    insertRight(from, key, value) {
        if (from.right !== undefined)
            this.putFrom(from.right, key, value);
        else {
            from.right = new Node(key, value);
            from.right.parent = from;
        }
        from.rightHeight = from.right !== undefined ? Math.max(from.right.leftHeight, from.right.rightHeight) + 1 : 0;
        if (from.rightHeight - from.leftHeight <= 1)
            return;
        if (from.right.rightHeight > from.right.leftHeight)
            this.rotateLeft(from);
        else
            this.flipLeft(from);
    }
    get(key) {
        return this.root !== undefined ? this.getNodeFrom(this.root, key)?.value : undefined;
    }
    getNodeFrom(from, key) {
        if (key < from.key)
            return from.left !== undefined ? this.getNodeFrom(from.left, key) : undefined;
        else if (key > from.key)
            return from.right !== undefined ? this.getNodeFrom(from.right, key) : undefined;
        else
            return from;
    }
    min() {
        if (this.root === undefined)
            return;
        const result = this.minNodeFrom(this.root);
        return { key: result.key, value: result.value };
    }
    minNodeFrom(from) {
        let result = from;
        while (result.left !== undefined)
            result = result.left;
        return result;
    }
    max() {
        if (this.root === undefined)
            return;
        const result = this.maxNodeFrom(this.root);
        return { key: result.key, value: result.value };
    }
    maxNodeFrom(from) {
        let result = from;
        while (result.right !== undefined)
            result = result.right;
        return result;
    }
    removeBulk(...keys) {
        for (const key of keys)
            this.remove(key);
    }
    remove(key) {
        if (this.root === undefined)
            return;
        const target = this.getNodeFrom(this.root, key);
        if (target === undefined)
            return;
        const alternate = target.left !== undefined ? this.maxNodeFrom(target.left) : (target.right !== undefined ? this.minNodeFrom(target.right) : undefined);
        const startNodeToRefresh = alternate !== undefined ? (alternate.parent === target ? alternate : alternate.parent) : target.parent;
        if (alternate !== undefined) {
            if (alternate.parent !== target) {
                if (alternate.left !== undefined)
                    alternate.left.parent = alternate.parent;
                else if (alternate.right !== undefined)
                    alternate.right.parent = alternate.parent;
                if (alternate.parent?.left === alternate)
                    alternate.parent.left = alternate.right;
                else if (alternate.parent?.right === alternate)
                    alternate.parent.right = alternate.left;
            }
            if (target.left !== alternate)
                alternate.left = target.left;
            if (target.right !== alternate)
                alternate.right = target.right;
            alternate.parent = target.parent;
        }
        if (target.left !== alternate && target.left !== undefined)
            target.left.parent = alternate;
        if (target.right !== alternate && target.right !== undefined)
            target.right.parent = alternate;
        if (target.parent !== undefined) {
            if (target.parent.left === target)
                target.parent.left = alternate;
            else
                target.parent.right = alternate;
        }
        else
            this.root = alternate;
        target.left = undefined;
        target.right = undefined;
        target.parent = undefined;
        this.refresh(startNodeToRefresh);
    }
    refresh(start) {
        let current = start;
        while (current !== undefined) {
            current.leftHeight = current.left !== undefined ? Math.max(current.left.leftHeight, current.left.rightHeight) + 1 : 0;
            current.rightHeight = current.right !== undefined ? Math.max(current.right.leftHeight, current.right.rightHeight) + 1 : 0;
            if (current.leftHeight - current.rightHeight > 1) {
                if (requireDefined(current.left).leftHeight > requireDefined(current.left).rightHeight)
                    this.rotateRight(current);
                else
                    this.flipRight(current);
            }
            else if (current.rightHeight - current.leftHeight > 1) {
                if (requireDefined(current.right).rightHeight > requireDefined(current.right).leftHeight)
                    this.rotateLeft(current);
                else
                    this.flipLeft(current);
            }
            current = current.parent;
        }
    }
    rotateRight(from) {
        const fromParent = from.parent;
        const isFromParentLeft = fromParent?.left === from;
        if (fromParent !== undefined) {
            if (isFromParentLeft)
                fromParent.left = from.left;
            else
                fromParent.right = from.left;
        }
        else
            this.root = from.left;
        const node = from.left?.right;
        from.left = node;
        from.parent = fromParent !== undefined ? (isFromParentLeft ? fromParent.left : fromParent.right) : this.root;
        from.leftHeight = from.left !== undefined ? Math.max(from.left.leftHeight, from.left.rightHeight) + 1 : 0;
        requireDefined(from.parent).right = from;
        requireDefined(from.parent).parent = fromParent;
        requireDefined(from.parent).rightHeight = Math.max(from.leftHeight, from.rightHeight) + 1;
        if (node !== undefined)
            node.parent = from;
    }
    flipRight(from) {
        const fromParent = from.parent;
        const isFromParentLeft = fromParent?.left === from;
        if (fromParent !== undefined) {
            if (isFromParentLeft)
                fromParent.left = from.left?.right;
            else
                fromParent.right = from.left?.right;
        }
        else
            this.root = from.left?.right;
        const leftNode = from.left?.right?.left;
        const rightNode = from.left?.right?.right;
        from.left = rightNode;
        from.parent = fromParent !== undefined ? (isFromParentLeft ? fromParent.left : fromParent.right) : this.root;
        from.leftHeight = rightNode !== undefined ? Math.max(rightNode.leftHeight, rightNode.rightHeight) + 1 : 0;
        requireDefined(from.parent).left = from.parent?.parent;
        requireDefined(from.parent).right = from;
        requireDefined(from.parent).parent = fromParent;
        requireDefined(requireDefined(from.parent).left).right = leftNode;
        requireDefined(requireDefined(from.parent).left).parent = from.parent;
        requireDefined(requireDefined(from.parent).left).rightHeight = leftNode !== undefined ? Math.max(leftNode.leftHeight, leftNode.rightHeight) + 1 : 0;
        requireDefined(from.parent).leftHeight =
            Math.max(requireDefined(requireDefined(from.parent).left).leftHeight, requireDefined(requireDefined(from.parent).left).rightHeight) + 1;
        requireDefined(from.parent).rightHeight = Math.max(from.leftHeight, from.rightHeight) + 1;
        if (leftNode !== undefined)
            leftNode.parent = requireDefined(from.parent).left;
        if (rightNode !== undefined)
            rightNode.parent = from;
    }
    rotateLeft(from) {
        const fromParent = from.parent;
        const isFromParentRight = fromParent?.right === from;
        if (fromParent !== undefined) {
            if (isFromParentRight)
                fromParent.right = from.right;
            else
                fromParent.left = from.right;
        }
        else
            this.root = from.right;
        const node = from.right?.left;
        from.right = node;
        from.parent = fromParent !== undefined ? (isFromParentRight ? fromParent.right : fromParent.left) : this.root;
        from.rightHeight = from.right !== undefined ? Math.max(from.right.leftHeight, from.right.rightHeight) + 1 : 0;
        requireDefined(from.parent).left = from;
        requireDefined(from.parent).parent = fromParent;
        requireDefined(from.parent).leftHeight = Math.max(from.leftHeight, from.rightHeight) + 1;
        if (node !== undefined)
            node.parent = from;
    }
    flipLeft(from) {
        const fromParent = from.parent;
        const isFromParentRight = fromParent?.right === from;
        if (fromParent !== undefined) {
            if (isFromParentRight)
                fromParent.right = from.right?.left;
            else
                fromParent.left = from.right?.left;
        }
        else
            this.root = from.right?.left;
        const leftNode = from.right?.left?.left;
        const rightNode = from.right?.left?.right;
        from.right = leftNode;
        from.parent = fromParent !== undefined ? (isFromParentRight ? fromParent.right : fromParent.left) : this.root;
        from.rightHeight = leftNode !== undefined ? Math.max(leftNode.leftHeight, leftNode.rightHeight) + 1 : 0;
        requireDefined(from.parent).left = from;
        requireDefined(from.parent).right = from.parent?.parent;
        requireDefined(from.parent).parent = fromParent;
        requireDefined(requireDefined(from.parent).right).left = rightNode;
        requireDefined(requireDefined(from.parent).right).parent = from.parent;
        requireDefined(requireDefined(from.parent).right).leftHeight = rightNode !== undefined ? Math.max(rightNode.leftHeight, rightNode.rightHeight) + 1 : 0;
        requireDefined(from.parent).leftHeight = Math.max(from.leftHeight, from.rightHeight) + 1;
        requireDefined(from.parent).rightHeight =
            Math.max(requireDefined(requireDefined(from.parent).right).leftHeight, requireDefined(requireDefined(from.parent).right).rightHeight) + 1;
        if (leftNode !== undefined)
            leftNode.parent = from;
        if (rightNode !== undefined)
            rightNode.parent = requireDefined(from.parent).right;
    }
    toArrayPreorder() {
        return this.root !== undefined ? this.toArrayPreorderFrom(this.root) : [];
    }
    toArrayPreorderFrom(from) {
        const result = [];
        result.push({ key: from.key, value: from.value });
        if (from.left !== undefined)
            result.push(...this.toArrayPreorderFrom(from.left));
        if (from.right !== undefined)
            result.push(...this.toArrayPreorderFrom(from.right));
        return result;
    }
    toArrayInorder() {
        return this.root !== undefined ? this.toArrayInorderFrom(this.root) : [];
    }
    toArrayInorderFrom(from) {
        const result = [];
        if (from.left !== undefined)
            result.push(...this.toArrayInorderFrom(from.left));
        result.push({ key: from.key, value: from.value });
        if (from.right !== undefined)
            result.push(...this.toArrayInorderFrom(from.right));
        return result;
    }
    toArrayPostorder() {
        return this.root !== undefined ? this.toArrayPostorderFrom(this.root) : [];
    }
    toArrayPostorderFrom(from) {
        const result = [];
        if (from.left !== undefined)
            result.push(...this.toArrayPostorderFrom(from.left));
        if (from.right !== undefined)
            result.push(...this.toArrayPostorderFrom(from.right));
        result.push({ key: from.key, value: from.value });
        return result;
    }
}
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.leftHeight = 0;
        this.rightHeight = 0;
    }
}
