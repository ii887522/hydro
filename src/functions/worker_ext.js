'use strict';
import cluster from 'cluster';
import { cpus } from 'os';
import constants from '../any/constants.js';
let keys;
export function spawnWorkers() {
    for (let i = 0; i !== cpus().length; ++i)
        cluster.fork();
}
export function spawnRevivableWorkers() {
    spawnWorkers();
    cluster.on('exit', () => {
        cluster.fork().on('listening', () => {
            process.send?.call(undefined, constants.listening);
        });
    });
}
export function supportIncrementalRestart() {
    process.on('SIGINT', () => {
        keys = Object.keys(cluster.workers ?? {});
        if (cluster.workers !== undefined)
            cluster.workers[keys.pop() ?? '']?.kill();
    });
    process.on('message', message => {
        if (message !== constants.listening)
            return;
        if (keys.length !== 0 && cluster.workers !== undefined)
            cluster.workers[keys.pop() ?? '']?.kill();
    });
}
