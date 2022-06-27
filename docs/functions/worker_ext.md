# worker_ext

## Table of contents
- [spawnWorkers](https://github.com/ii887522/hydro/blob/master/docs/functions/worker_ext.md#spawnWorkers)
- [spawnRevivableWorkers](https://github.com/ii887522/hydro/blob/master/docs/functions/worker_ext.md#spawnRevivableWorkers)
- [supportIncrementalRestart](https://github.com/ii887522/hydro/blob/master/docs/functions/worker_ext.md#supportIncrementalRestart)

## **spawnWorkers**
```ts
function spawnWorkers (): void
```
Creates as many background workers as the number of CPU cores you have.

### **Example usage:**
```ts
spawnWorkers()
```
<br />

## **spawnRevivableWorkers**
```ts
function spawnRevivableWorkers (): void
```
Creates as many background workers as the number of CPU cores you have. If any background worker is killed for some
reasons, then a new background worker will be created to maintain the number of active background workers operate in the
system.

### **Example usage:**
```ts
spawnRevivableWorkers()
```
<br />

## **supportIncrementalRestart**
```ts
function supportIncrementalRestart (): void
```
After this function is called, if the process is interrupted in anyway, then the background workers in the corresponding
cluster will be restarted one by one to ensure there are still some active background workers for processing.

### **Example usage:**
```ts
supportIncrementalRestart()
```
