'use strict'

import { rmdir, mkdir } from 'fs'

export function consume (_: any): void { }

/**
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

export function getFileName (path: string): string {
  return path.substring(path.lastIndexOf('/') + 1)
}
