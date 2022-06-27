'use strict'

import { mkdir, readdir, rm, readFileSync, writeFileSync, access } from 'fs'

/**
 * Removes all files and subdirectories in the directory where its path is received from its parameter.
 *
 * @param dirPath The path where the directory is to be emptied. The path must not ends with /
 */
export async function emptyDir (dirPath: string): Promise<void> {
  return await new Promise((resolve, reject) => {
    rm(`${dirPath}/`, { recursive: true }, _err => {
      mkdir(`${dirPath}/`, err => {
        if (err !== null) {
          reject(err)
          return
        }
        resolve()
      })
    })
  })
}

/**
 * Removes all files in the directory where its path is received from its parameter with matching extension name
 * received.
 *
 * @param extName Files where its file name contains the extension name will be removed. The name must not starts
 *   with .
 * @param dirPath The path where the directory is to be focused on. The path must not ends with /
 */
export async function removeFiles (extName: string, dirPath: string): Promise<void> {
  return await new Promise((resolve, reject) => {
    readdir(`${dirPath}/`, (err, filePaths) => {
      if (err !== null) {
        resolve()
        return
      }
      let pendingEntryCount = 0
      for (const filePath of filePaths) {
        if (filePath.endsWith(`.${extName}`)) ++pendingEntryCount
      }
      for (const filePath of filePaths) {
        if (filePath.endsWith(`.${extName}`)) {
          rm(`${dirPath}/${filePath}`, err => {
            if (err !== null) {
              reject(err)
              return
            }
            if (--pendingEntryCount === 0) resolve()
          })
        }
      }
    })
  })
}

/**
 * Returns the file name with its extension name from the `path` given.
 *
 * @param path The file path where its file name is to be extracted from.
 * @return The file name from the `path` given.
 */
export function getFileName (path: string): string {
  return path.substring(path.lastIndexOf('/') + 1)
}

/**
 * Checks whether the directory path given has at least one file with an `extensionName` that is received from the
 * parameter.
 *
 * @param extName The extension name used during checking. The name must not start with .
 * @param dirPath The path where the directory is to be focused on. The path must not end with /
 * @returns true if there is at least one file with an `extensionName` that is coming from the parameter, false
 *   otherwise.
 */
export async function hasFileWithExt (extName: string, dirPath: string): Promise<boolean> {
  return await new Promise((resolve, reject) => {
    access(`${dirPath}/`, err => {
      if (err !== null) {
        resolve(false)
        return
      }
      readdir(`${dirPath}/`, (err, filePaths) => {
        if (err !== null) {
          reject(err)
          return
        }
        for (const filePath of filePaths) {
          if (filePath.endsWith(`.${extName}`)) {
            resolve(true)
            return
          }
        }
        resolve(false)
      })
    })
  })
}

/**
 * It returns an object that is stored in the file where its `path` is received from its parameter.
 *
 * @param path The file path where its file contains a JSON object.
 * @returns An object read from a file where its `path` is given.
 */
export function readObject (path: string): any {
  return JSON.parse(readFileSync(path).toString())
}

/**
 * It stores an `object` recevied into the file where its `path` is recevied from its parameter.
 *
 * @param path The file path where its file stores a JSON object.
 * @param object The object to be stored into the file where its `path` is given.
 */
export function writeObject (path: string, object: any): void {
  writeFileSync(path, JSON.stringify(object))
}
