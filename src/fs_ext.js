'use strict';
import { rmdir, mkdir, readdir, rm, readFileSync, writeFileSync, access } from 'fs';
export async function emptyDir(dirPath) {
    return await new Promise((resolve, reject) => {
        rmdir(`${dirPath}/`, { recursive: true }, _err => {
            mkdir(`${dirPath}/`, err => {
                if (err !== null)
                    reject(err);
                resolve();
            });
        });
    });
}
export async function removeFiles(extensionName, dirPath) {
    return await new Promise((resolve, reject) => {
        readdir(`${dirPath}/`, (err, filePaths) => {
            if (err !== null)
                reject(err);
            let pendingEntryCount = 0;
            for (const filePath of filePaths) {
                if (filePath.endsWith(`.${extensionName}`))
                    ++pendingEntryCount;
            }
            for (const filePath of filePaths) {
                if (filePath.endsWith(`.${extensionName}`)) {
                    rm(`${dirPath}/${filePath}`, err => {
                        if (err !== null)
                            reject(err);
                        if (--pendingEntryCount === 0)
                            resolve();
                    });
                }
            }
        });
    });
}
export function getFileName(path) {
    return path.substring(path.lastIndexOf('/') + 1);
}
export async function hasFileWithExtension(extensionName, dirPath) {
    return await new Promise((resolve, reject) => {
        access(`${dirPath}/`, err => {
            if (err !== null) {
                resolve(false);
                return;
            }
            readdir(`${dirPath}/`, (err, filePaths) => {
                if (err !== null)
                    reject(err);
                for (const filePath of filePaths) {
                    if (filePath.endsWith(`.${extensionName}`)) {
                        resolve(true);
                        return;
                    }
                }
                resolve(false);
            });
        });
    });
}
export function readObject(path) {
    return JSON.parse(readFileSync(path).toString());
}
export function writeObject(path, object) {
    writeFileSync(path, JSON.stringify(object));
}
