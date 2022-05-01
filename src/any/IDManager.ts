'use strict'

/**
 * It manages and recycles id numbers to be used for any purposes so that id numbers will not become depleted if users
 * keep retrieving and discarding id numbers.
 */
export default class IDManager {
  private readonly idStack: number[] = []
  private nextID = 0

  /**
   * It returns the next available id number.
   *
   * @returns An available id number.
   */
  next (): number {
    const id = this.idStack.pop()
    if (id !== undefined) return id
    const result = this.nextID
    ++this.nextID
    return result
  }

  /**
   * It makes the allocated id number to become available again and ready to be used in the future.
   *
   * @param id The allocated id number to return.
   */
  free (id: number): void {
    if (id < 0 || id >= this.nextID) {
      throw new RangeError('The id to be freed must have been generated by IDManager::next() before!')
    }
    this.idStack.push(id)
  }
}
