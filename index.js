'use strict';
import { rmdir, mkdir } from 'fs';
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
