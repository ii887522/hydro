# hydro
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

It is a general purpose JavaScript/TypeScript library that can help developers create various kinds of application in no time.

## Table of Contents
- [For developers reading this in GitHub](https://gitlab.com/ii887522/hydro#for-developers-reading-this-in-github)
- [Contributing](https://gitlab.com/ii887522/hydro#contributing)
- [References](https://gitlab.com/ii887522/hydro#references)

## For developers reading this in GitHub
Please go to https://gitlab.com/ii887522/hydro to start contributing instead.

## Contributing
Please go to https://gitlab.com/ii887522/hydro/-/blob/master/CONTRIBUTING.md to get some information about contributing to hydro.

## References

### **consume**
```ts
function consume (_: any): void
```
It simply consumes any object passed in and do nothing for it and return immediately.
#### **Example usage:**
```ts
consume(0)
```
<br />

### **emptyDir**
```ts
async function emptyDir (dirPath: string): Promise<void>
```
It removes all the files and subdirectories in directory passed in as its path.

`dirPath`: it must ends with /
#### **Example usage:**
```ts
emptyDir('path/to/dir/')
```
<br />

### **getFileName**
```ts
function getFileName (path: string): string
```
It returns the file name with extension name if exists from the path given.
#### **Example usage:**
```ts
assert(getFileName('SDL2-2.0.12/lib/x86/SDL2.dll') === 'SDL2.dll')
```
<br />
