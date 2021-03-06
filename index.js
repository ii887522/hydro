'use strict';
import { rmdir, mkdir, readdir, rm } from 'fs';
import DynamicUint8Array from './src/DynamicUint8Array.js';
import Holder from './src/Holder.js';
export { DynamicUint8Array, Holder };
export function consume(_) { }
export async function emptyDir(dirPath) {
    return await new Promise((resolve, reject) => {
        rmdir(dirPath, { recursive: true }, _err => {
            mkdir(dirPath, err => {
                if (err !== null)
                    reject(err);
                resolve();
            });
        });
    });
}
export async function removeFiles(extensionName, dirPath) {
    return await new Promise((resolve, reject) => {
        readdir(dirPath, (err, filePaths) => {
            if (err !== null)
                reject(err);
            let pendingEntryCount = 0;
            for (const filePath of filePaths) {
                if (filePath.endsWith(`.${extensionName}`))
                    ++pendingEntryCount;
            }
            for (const filePath of filePaths) {
                if (filePath.endsWith(`.${extensionName}`)) {
                    rm(`${dirPath}${filePath}`, err => {
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
export function substring(from, startText, endText) {
    const startTextI = from.indexOf(startText);
    return from.substring(startTextI, from.indexOf(endText, startTextI));
}
export function equal(l, r) {
    if (l.length !== r.length)
        return false;
    for (let i = 0; i !== l.length; ++i) {
        if (l[i] !== r[i])
            return false;
    }
    return true;
}
export function swap(l, r) {
    const aux = l.value;
    l.value = r.value;
    r.value = aux;
}
