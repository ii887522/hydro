'use strict'

import cluster from 'cluster'
import { cpus } from 'os'
import constants from '../any/consts.js'

let keys: string[]

/**
 * Creates as many background workers as the number of CPU cores you have.
 */
export function spawnWorkers (): void {
  for (let i = 0; i !== cpus().length; ++i) cluster.fork()
}

/**
 * Creates as many background workers as the number of CPU cores you have. If any background worker is killed for some
 * reasons, then a new background worker will be created to maintain the number of active background workers
 * operate in the system.
 */
export function spawnRevivableWorkers (): void {
  spawnWorkers()
  cluster.on('exit', () => {
    cluster.fork().on('listening', () => {
      process.send?.call(undefined, constants.listening)
    })
  })
}

/**
 * After this function is called, if the process is interrupted in anyway, then the background workers in the
 * corresponding cluster will be restarted one by one to ensure there are still some active background workers for
 * processing.
 */
export function supportIncrementalRestart (): void {
  process.on('SIGINT', () => {
    keys = Object.keys(cluster.workers ?? { })
    if (cluster.workers !== undefined) cluster.workers[keys.pop() ?? '']?.kill()
  })
  process.on('message', message => {
    if (message !== constants.listening) return
    if (keys.length !== 0 && cluster.workers !== undefined) cluster.workers[keys.pop() ?? '']?.kill()
  })
}
