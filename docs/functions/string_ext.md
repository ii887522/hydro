# string_ext

## Table of contents
- [substring](https://github.com/ii887522/hydro/blob/master/docs/functions/string_ext.md#substring)
- [isUint](https://github.com/ii887522/hydro/blob/master/docs/functions/string_ext.md#isUint)

## **substring**
```ts
function substring (from: string, startText: string, endText: string): string
```
It returns a substring from the original string received which starts from the start text given and ends with a text which immediately precedes the end text given.

`from`: The original string given.

`startText`: The start text included in the original string.

`endText`: The end text included in the original string.

### **Example usage:**
```ts
expect(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', '.dll')).toBe('image-2.0.5/lib/x86/libpng16-16')
```
<br />

## **isUint**
```ts
function isUint(value: string): boolean
```
It checks whether the `value` given is actually an unsigned integer which is converted to a string.

`value`: The value to be checked.

It returns true if the `value` is an unsigned integer which is converted to a string.

### **Example usage:**
```ts
expect(isUint('/')).toBeFalsy()
```
<br />
