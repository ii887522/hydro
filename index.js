'use strict';
import { rmdir, mkdir } from 'fs';
import DynamicUint8Array from './src/DynamicUint8Array.js';
export { DynamicUint8Array };
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
