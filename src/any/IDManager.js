'use strict';
export default class IDManager {
    constructor() {
        this.idStack = [];
        this.nextID = 0;
    }
    next() {
        const id = this.idStack.pop();
        if (id !== undefined)
            return id;
        const result = this.nextID;
        ++this.nextID;
        return result;
    }
    free(id) {
        if (id < 0 || id >= this.nextID) {
            throw new RangeError('The id to be freed must have been generated by IDManager::next() before!');
        }
        this.idStack.push(id);
    }
}