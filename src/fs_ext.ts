'use strict'

import { rmdir, mkdir, readdir, rm, readFileSync, writeFileSync, access } from 'fs'

/**
 * It removes all files and subdirectories in the directory where its path is received from its parameter.
 *
 * @param dirPath The path where the directory is to be emptied. The path must not ends with /
 */
export async function emptyDir (dirPath: string): Promise<void> {
  return await new Promise((resolve, reject) => {
    rmdir(`${dirPath}/`, { recursive: true }, _err => {
      mkdir(`${dirPath}/`, err => {
        if (err !== null) reject(err)
        resolve()
      })
    })
  })
}

/**
 * It removes all files in the directory where its path is received from its parameter with matching extension name received.
 *
 * @param extensionName Files where its file name contains the extension name will be removed. The name must not starts with .
 * @param dirPath The path where the directory is to be focused on. The path must not ends with /
 */
export async function removeFiles (extensionName: string, dirPath: string): Promise<void> {
  return await new Promise((resolve, reject) => {
    readdir(`${dirPath}/`, (err, filePaths) => {
      if (err !== null) reject(err)
      let pendingEntryCount = 0
      for (const filePath of filePaths) {
        if (filePath.endsWith(`.${extensionName}`)) ++pendingEntryCount
      }
      for (const filePath of filePaths) {
        if (filePath.endsWith(`.${extensionName}`)) {
          rm(`${dirPath}/${filePath}`, err => {
            if (err !== null) reject(err)
            if (--pendingEntryCount === 0) resolve()
          })
        }
      }
    })
  })
}

/**
 * It returns the file name with its extension name from the `path` given.
 *
 * @param path The file path where its file name is to be extracted from.
 * @return The file name from the `path` given.
 */
export function getFileName (path: string): string {
  return path.substring(path.lastIndexOf('/') + 1)
}

/**
 * It checks whether the directory path given has at least one file with an extension name that is received from the parameter.
 *
 * @param extensionName The extension name used during checking. The name must not starts with .
 * @param dirPath The path where the directory is to be focused on. The path must not ends with /
 * @returns true if there is at least one file with an extension name that is coming from the paramter, false otherwise.
 */
export async function hasFileWithExtension (extensionName: string, dirPath: string): Promise<boolean> {
  return await new Promise((resolve, reject) => {
    access(`${dirPath}/`, err => {
      if (err !== null) {
        resolve(false)
        return
      }
      readdir(`${dirPath}/`, (err, filePaths) => {
        if (err !== null) reject(err)
        for (const filePath of filePaths) {
          if (filePath.endsWith(`.${extensionName}`)) {
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
