# fs_ext

## Table of contents
- [emptyDir](https://github.com/ii887522/hydro/blob/master/docs/index.md#emptyDir)
- [removeFiles](https://github.com/ii887522/hydro/blob/master/docs/index.md#removeFiles)
- [getFileName](https://github.com/ii887522/hydro/blob/master/docs/index.md#getFileName)
- [hasFileWithExtension](https://github.com/ii887522/hydro/blob/master/docs/index.md#hasFileWithExtension)
- [readObject](https://github.com/ii887522/hydro/blob/master/docs/index.md#readObject)
- [writeObject](https://github.com/ii887522/hydro/blob/master/docs/index.md#writeObject)

## **emptyDir**
```ts
async function emptyDir (dirPath: string): Promise<void>
```
It removes all files and subdirectories in the directory where its path is received from its parameter.

`dirPath`: The path where the directory is to be emptied. The path must not ends with /

### **Example usage:**
```ts
emptyDir('path/to/dir')
```
<br />

## **removeFiles**
```ts
async function removeFiles (extensionName: string, dirPath: string): Promise<void>
```
It removes all files in the directory where its path is received from its parameter with matching extension name received.

`extensionName`: Files where its file name contains the extension name will be removed. The name must not starts with .

`dirPath`: The path where the directory is to be focused on. The path must not ends with /

### **Example usage:**
```ts
removeFiles('dll', 'path/to/dir')
```
<br />

## **getFileName**
```ts
function getFileName (path: string): string
```
It returns the file name with its extension name from the `path` given.

`path`: The file path where its file name is to be extracted from.

### **Example usage:**
```ts
expect(getFileName('SDL2-2.0.12/lib/x86/SDL2.dll')).toBe('SDL2.dll')
```
<br />

## **hasFileWithExtension**
```ts
async function hasFileWithExtension (extensionName: string, dirPath: string): Promise<boolean>
```
It checks whether the directory path given has at least one file with an extension name that is received from the parameter.

`extensionName`: The extension name used during checking. The name must not starts with .

`dirPath`: The path where the directory is to be focused on. The path must not ends with /

It returns true if there is at least one file with an extension name that is coming from the paramter, false otherwise.

### **Example usage:**
```ts
expect(await hasFileWithExtension('txt', 'test/res/a')).toBeFalsy()
```

## **readObject**
```ts
function readObject (path: string): any
```
It returns an object that is stored in the file where its `path` is received from its parameter.

`path`: The file path where its file contains a JSON object.

It retuns an object read from a file where its `path` is given.

### **Example usage:**
```ts
readObject('test/res/reverse_proxy.config.json')
```
<br />

## **writeObject**
```ts
function writeObject (path: string, object: any): void
```
It stores an `object` recevied into the file where its `path` is recevied from its parameter.

`path`: The file path where its file stores a JSON object.

`object`: The object to be stored into the file where its `path` is given.

### **Example usage:**
```ts
writeObject(
  'test/res/reverse_proxy.config.json',
  {
    "keyPath": "test/key.pem",
    "certPath": "test/cert.pem",
    "routes": [
      {
        "hostname": "example.dynv6.net",
        "target": "http://localhost:1024"
      },
      {
        "hostname": "www.example.dynv6.net",
        "target": "http://localhost:1024"
      },
      {
        "hostname": "abcdefg.dynv6.net",
        "target": "http://localhost:1025"
      },
      {
        "hostname": "www.abcdefg.dynv6.net",
        "target": "http://localhost:1025"
      }
    ]
  }
)
```
<br />
