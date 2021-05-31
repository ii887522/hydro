'use strict'

import { rmdir, mkdir } from 'fs'
import DynamicUint8Array from './src/DynamicUint8Array.js'

export { DynamicUint8Array }

/**
 * It simply consumes any object passed in and do nothing for it and return immediately.
 */
export function consume (_: any): void { }

/**
 * It removes all the files and subdirectories in directory passed in as its path.
 * @param dirPath it must ends with /
 */
export async function emptyDir (dirPath: string): Promise<void> {
  return await new Promise((resolve, reject) => {
    rmdir(dirPath, { recursive: true }, _err => {
      mkdir(dirPath, err => {
        if (err !== null) reject(err)
        resolve()
      })
    })
  })
}

/**
 * It returns the file name with extension name if exists from the path given.
 */
export function getFileName (path: string): string {
  return path.substring(path.lastIndexOf('/') + 1)
}

/**
 * It returns a substring from the original string based on the start and end text of the substring excluding end text.
 * @param startText the start text of the substring
 * @param endText until the end text of the substring excluding itself
 */
export function substring (from: string, startText: string, endText: string): string {
  const startTextI = from.indexOf(startText)
  return from.substring(startTextI, from.indexOf(endText, startTextI))
}

/**
 * It checks whether both arrays passed in are exactly the same.
 */
export function equal (l: Uint8Array, r: Uint8Array): boolean {
  if (l.length !== r.length) return false
  for (let i = 0; i !== l.length; ++i) {
    if (l[i] !== r[i]) return false
  }
  return true
}
