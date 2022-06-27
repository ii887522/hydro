'use strict';
import { requireDefined } from '../../index.js';
export default class TreeMap {
    constructor() {
        this.nodes = [undefined];
        this.holeIDs = [];
        this.root = 0;
    }
    get isEmpty() {
        return this.length === 0;
    }
    get length() {
        return this.nodes.length - 1 - this.holeIDs.length;
    }
    update(id) {
        let cursor = id;
        while (cursor !== 0) {
            this.updateHeights(cursor);
            if (this.isBiased(cursor))
                this.balance(cursor);
            cursor = this.nodes[cursor]?.parent ?? 0;
        }
    }
    updateHeights(id) {
        this.updateLeftHeight(id);
        this.updateRightHeight(id);
    }
    updateLeftHeight(id) {
        const node = this.nodes[id];
        const left = node?.left ?? 0;
        if (left === 0)
            requireDefined(this.nodes[id]).leftHeight = 0;
        else {
            const leftNode = this.nodes[left];
            requireDefined(this.nodes[id]).leftHeight = Math.max(leftNode?.leftHeight ?? 0, leftNode?.rightHeight ?? 0) + 1;
        }
    }
    updateRightHeight(id) {
        const node = this.nodes[id];
        const right = node?.right ?? 0;
        if (right === 0)
            requireDefined(this.nodes[id]).rightHeight = 0;
        else {
            const rightNode = this.nodes[right];
            requireDefined(this.nodes[id]).rightHeight = Math.max(rightNode?.leftHeight ?? 0, rightNode?.rightHeight ?? 0) + 1;
        }
    }
    isBiased(id) {
        const node = this.nodes[id];
        return Math.abs((node?.leftHeight ?? 0) - (node?.rightHeight ?? 0)) > 1;
    }
    balance(id) {
        const node = this.nodes[id];
        if ((node?.leftHeight ?? 0) < (node?.rightHeight ?? 0)) {
            const rightNode = this.nodes[node?.right ?? 0];
            if ((rightNode?.leftHeight ?? 0) < (rightNode?.rightHeight ?? 0))
                this.rotateLeft(id);
            else
                this.flipRight(id);
        }
        else {
            const leftNode = this.nodes[node?.left ?? 0];
            if ((leftNode?.leftHeight ?? 0) < (leftNode?.rightHeight ?? 0))
                this.flipLeft(id);
            else
                this.rotateRight(id);
        }
    }
    rotateLeft(id) {
        const node = this.nodes[id];
        const p = node?.parent ?? 0;
        const r = node?.right ?? 0;
        const rl = this.nodes[r]?.left ?? 0;
        if (p === 0)
            this.root = r;
        else {
            const pNode = this.nodes[p];
            if (pNode?.left === id)
                pNode.left = r;
            else
                requireDefined(pNode).right = r;
        }
        requireDefined(node).right = rl;
        requireDefined(node).parent = r;
        const rNode = this.nodes[r];
        requireDefined(rNode).left = id;
        requireDefined(rNode).parent = p;
        const rlNode = this.nodes[rl];
        if (rlNode !== undefined)
            rlNode.parent = id;
        this.updateRightHeight(id);
    }
    flipRight(id) {
        const node = this.nodes[id];
        const p = node?.parent ?? 0;
        const r = node?.right ?? 0;
        const rl = this.nodes[r]?.left ?? 0;
        const rlNode = this.nodes[rl];
        const rll = rlNode?.left ?? 0;
        const rlr = rlNode?.right ?? 0;
        if (p === 0)
            this.root = rl;
        else {
            const pNode = this.nodes[p];
            if (pNode?.left === id)
                pNode.left = rl;
            else
                requireDefined(pNode).right = rl;
        }
        const rNode = this.nodes[r];
        requireDefined(rNode).parent = rl;
        requireDefined(rNode).left = rlr;
        requireDefined(rlNode).parent = p;
        requireDefined(rlNode).left = id;
        requireDefined(rlNode).right = r;
        requireDefined(node).parent = rl;
        requireDefined(node).right = rll;
        const rllNode = this.nodes[rll];
        if (rllNode !== undefined)
            rllNode.parent = id;
        const rlrNode = this.nodes[rlr];
        if (rlrNode !== undefined)
            rlrNode.parent = r;
        this.updateRightHeight(id);
        this.updateLeftHeight(r);
    }
    rotateRight(id) {
        const node = this.nodes[id];
        const p = node?.parent ?? 0;
        const l = node?.left ?? 0;
        const lr = this.nodes[l]?.right ?? 0;
        if (p === 0)
            this.root = l;
        else {
            const pNode = this.nodes[p];
            if (pNode?.left === id)
                pNode.left = l;
            else
                requireDefined(pNode).right = l;
        }
        requireDefined(node).parent = l;
        requireDefined(node).left = lr;
        const lNode = this.nodes[l];
        requireDefined(lNode).right = id;
        requireDefined(lNode).parent = p;
        const lrNode = this.nodes[lr];
        if (lrNode !== undefined) {
            lrNode.parent = id;
        }
        this.updateLeftHeight(id);
    }
    flipLeft(id) {
        const node = this.nodes[id];
        const p = node?.parent ?? 0;
        const l = node?.left ?? 0;
        const lr = this.nodes[l]?.right ?? 0;
        const lrNode = this.nodes[lr];
        const lrr = lrNode?.right ?? 0;
        const lrl = lrNode?.left ?? 0;
        if (p === 0)
            this.root = lr;
        else {
            const pNode = this.nodes[p];
            if (pNode?.left === id)
                pNode.left = lr;
            else
                requireDefined(pNode).right = lr;
        }
        const lNode = this.nodes[l];
        requireDefined(lNode).parent = lr;
        requireDefined(lNode).right = lrl;
        requireDefined(lrNode).parent = p;
        requireDefined(lrNode).right = id;
        requireDefined(lrNode).left = l;
        requireDefined(node).parent = lr;
        requireDefined(node).left = lrr;
        const lrrNode = this.nodes[lrr];
        if (lrrNode !== undefined)
            lrrNode.parent = id;
        const lrlNode = this.nodes[lrl];
        if (lrlNode !== undefined)
            lrlNode.parent = l;
        this.updateLeftHeight(id);
        this.updateRightHeight(l);
    }
    toArray() {
        return this.root !== 0 ? this.toArrayFrom(this.root) : [];
    }
    toArrayFrom(id) {
        const result = [];
        const node = this.nodes[id];
        if (node?.left !== 0)
            result.push(...this.toArrayFrom(node?.left ?? 0));
        result.push({ key: requireDefined(node).key, value: requireDefined(node).value });
        if (node?.right !== 0)
            result.push(...this.toArrayFrom(node?.right ?? 0));
        return result;
    }
    clear() {
        this.nodes = [undefined];
        this.holeIDs = [];
        this.root = 0;
    }
    insertRoot(key, value) {
        const holeID = this.holeIDs.pop();
        if (holeID !== undefined)
            this.fillHoleWithRoot(holeID, key, value);
        else
            this.pushRoot(key, value);
    }
    fillHoleWithRoot(holeID, key, value) {
        this.nodes[holeID] = new Node(key, value);
        this.root = holeID;
    }
    pushRoot(key, value) {
        this.nodes.push(new Node(key, value));
        this.root = 1;
    }
    has(key) {
        return this.get(key) !== undefined;
    }
    get(key) {
        const id = this.getID(key);
        return id !== undefined ? this.nodes[id]?.value : undefined;
    }
    set(key, value) {
        const id = this.getID(key);
        if (id !== undefined)
            requireDefined(this.nodes[id]).value = value;
    }
    remove(key) {
        const old = this.getID(key);
        if (old !== undefined) {
            const oldNode = this.nodes[old];
            const oldP = oldNode?.parent ?? 0;
            const oldL = oldNode?.left ?? 0;
            const oldR = oldNode?.right ?? 0;
            const result = oldNode?.value;
            this.holeIDs.push(old);
            if (oldL !== 0) {
                const newID = this.maxIDFrom(oldL);
                const newNode = this.nodes[newID];
                const newP = newNode?.parent ?? 0;
                const newL = newNode?.left ?? 0;
                if (oldP !== 0) {
                    const oldPNode = this.nodes[oldP];
                    if (oldPNode?.left === old)
                        oldPNode.left = newID;
                    else
                        requireDefined(oldPNode).right = newID;
                    requireDefined(newNode).parent = oldP;
                    if (newP !== old)
                        requireDefined(newNode).left = oldL;
                    requireDefined(newNode).right = oldR;
                }
                else {
                    this.root = newID;
                    requireDefined(newNode).parent = 0;
                    if (newP !== old)
                        requireDefined(newNode).left = oldL;
                    requireDefined(newNode).right = oldR;
                }
                if (oldR !== 0)
                    requireDefined(this.nodes[oldR]).parent = newID;
                if (newP !== old) {
                    requireDefined(this.nodes[oldL]).parent = newID;
                    requireDefined(this.nodes[newP]).right = newL;
                    if (newL !== 0)
                        requireDefined(this.nodes[newL]).parent = newP;
                    this.update(newP);
                }
                else
                    this.update(newID);
            }
            else if (oldR !== 0) {
                const newID = this.minIDFrom(oldR);
                const newNode = this.nodes[newID];
                const newP = newNode?.parent;
                const newR = newNode?.right;
                if (oldP !== 0) {
                    const oldPNode = this.nodes[oldP];
                    if (oldPNode?.left === old)
                        oldPNode.left = newID;
                    else
                        requireDefined(oldPNode).right = newID;
                    requireDefined(newNode).parent = oldP;
                    requireDefined(newNode).left = 0;
                    if (newP !== old)
                        requireDefined(newNode).right = oldR;
                }
                else {
                    this.root = newID;
                    const newNode = this.nodes[newID];
                    requireDefined(newNode).parent = 0;
                    requireDefined(newNode).left = 0;
                    if (newP !== old)
                        requireDefined(newNode).right = oldR;
                }
                if (newP !== old) {
                    requireDefined(this.nodes[oldR]).parent = newID;
                    requireDefined(this.nodes[newP ?? 0]).left = newR ?? 0;
                    if (newR !== 0)
                        requireDefined(this.nodes[newR ?? 0]).parent = newP ?? 0;
                    this.update(newP ?? 0);
                }
                else
                    this.update(newID);
            }
            else if (oldP !== 0) {
                const oldPNode = this.nodes[oldP];
                if (oldPNode?.left === old)
                    oldPNode.left = 0;
                else
                    requireDefined(oldPNode).right = 0;
                this.update(oldP);
            }
            else
                this.root = 0;
            return result;
        }
        else
            return undefined;
    }
    getID(key) {
        let cursor = this.root;
        while (cursor !== 0) {
            const cursorNode = this.nodes[cursor];
            if (cursorNode !== undefined && key < cursorNode.key)
                cursor = cursorNode.left;
            else if (cursorNode !== undefined && key > cursorNode.key)
                cursor = cursorNode.right;
            else
                return cursor;
        }
        return undefined;
    }
    min() {
        if (this.root !== 0) {
            const minNode = this.nodes[this.minIDFrom(this.root)];
            return minNode !== undefined ? { key: minNode.key, value: minNode.value } : undefined;
        }
        else
            return undefined;
    }
    minIDFrom(id) {
        let cursor = id;
        while (true) {
            const cursorNode = this.nodes[cursor];
            if (cursorNode?.left !== 0)
                cursor = cursorNode?.left ?? 0;
            else
                return cursor;
        }
    }
    max() {
        if (this.root !== 0) {
            const maxNode = this.nodes[this.maxIDFrom(this.root)];
            return maxNode !== undefined ? { key: maxNode.key, value: maxNode.value } : undefined;
        }
        else
            return undefined;
    }
    maxIDFrom(id) {
        let cursor = id;
        while (true) {
            const cursorNode = this.nodes[cursor];
            if (cursorNode?.right !== 0)
                cursor = cursorNode?.right ?? 0;
            else
                return cursor;
        }
    }
    bulkPut(...array) {
        for (const { key, value } of array)
            this.put(key, value);
    }
    put(key, value) {
        if (this.root === 0) {
            this.insertRoot(key, value);
            return;
        }
        let cursor = this.root;
        while (true) {
            const cursorNode = this.nodes[cursor];
            if (cursorNode !== undefined && key < cursorNode.key) {
                if (cursorNode.left === 0) {
                    const parent = cursorNode.parent;
                    this.insertLeft(cursor, key, value);
                    this.update(parent);
                    break;
                }
                else
                    cursor = cursorNode.left;
            }
            else if (cursorNode !== undefined && key > cursorNode.key) {
                if (cursorNode.right === 0) {
                    const parent = cursorNode.parent;
                    this.insertRight(cursor, key, value);
                    this.update(parent);
                }
                else
                    cursor = cursorNode.right;
            }
            else {
                requireDefined(this.nodes[cursor]).value = value;
                break;
            }
        }
    }
    insertLeft(id, key, value) {
        const holeID = this.holeIDs.pop();
        if (holeID !== undefined)
            this.fillHoleWithNodeWhenInsertLeft(id, holeID, key, value);
        else
            this.pushNodeWhenInsertLeft(id, key, value);
    }
    fillHoleWithNodeWhenInsertLeft(id, holeID, key, value) {
        const node = this.nodes[id];
        requireDefined(node).left = holeID;
        ++requireDefined(node).leftHeight;
        this.nodes[holeID] = new Node(key, value);
        requireDefined(this.nodes[holeID]).parent = id;
    }
    pushNodeWhenInsertLeft(id, key, value) {
        const nodeCount = this.nodes.length;
        const node = this.nodes[id];
        requireDefined(node).left = nodeCount;
        requireDefined(node).leftHeight += 1;
        const newNode = new Node(key, value);
        newNode.parent = id;
        this.nodes.push(newNode);
    }
    insertRight(id, key, value) {
        const holeID = this.holeIDs.pop();
        if (holeID !== undefined)
            this.fillHoleWithNodeWhenInsertRight(id, holeID, key, value);
        else
            this.pushNodeWhenInsertRight(id, key, value);
    }
    fillHoleWithNodeWhenInsertRight(id, holeID, key, value) {
        const node = this.nodes[id];
        requireDefined(node).right = holeID;
        ++requireDefined(node).rightHeight;
        this.nodes[holeID] = new Node(key, value);
        requireDefined(this.nodes[holeID]).parent = id;
    }
    pushNodeWhenInsertRight(id, key, value) {
        const nodeCount = this.nodes.length;
        const node = this.nodes[id];
        requireDefined(node).right = nodeCount;
        requireDefined(node).rightHeight += 1;
        const newNode = new Node(key, value);
        newNode.parent = id;
        this.nodes.push(newNode);
    }
}
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.parent = 0;
        this.left = 0;
        this.right = 0;
        this.leftHeight = 0;
        this.rightHeight = 0;
    }
}
