'use strict';
import { getFileName, substring, equal } from '../index.js';
test('getFileName', () => {
    expect(getFileName('SDL2-2.0.12/lib/x86/SDL2.dll')).toBe('SDL2.dll');
    expect(getFileName('SDL2_image-2.0.5/lib/x86/libpng16-16.dll')).toBe('libpng16-16.dll');
    expect(getFileName('SDL2_ttf-2.0.15/lib/x86/SDL2_ttf.dll')).toBe('SDL2_ttf.dll');
});
test('substring', () => {
    expect(substring('SDL2-2.0.12/lib/x86/SDL2.dll', 'SDL', 'l')).toBe('SDL2-2.0.12/');
    expect(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'SDL', 'l')).toBe('SDL2_image-2.0.5/');
    expect(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', 'l')).toBe('image-2.0.5/');
    expect(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', '.dll')).toBe('image-2.0.5/lib/x86/libpng16-16');
});
test('equal', () => {
    expect(equal(new Uint8Array(0), new Uint8Array(0))).toBeTruthy();
    expect(equal(new Uint8Array([]), new Uint8Array(0))).toBeTruthy();
    expect(equal(new Uint8Array([]), new Uint8Array([]))).toBeTruthy();
    expect(equal(new Uint8Array([0]), new Uint8Array([]))).toBeFalsy();
    expect(equal(new Uint8Array([1]), new Uint8Array([]))).toBeFalsy();
    expect(equal(new Uint8Array([1]), new Uint8Array([0]))).toBeFalsy();
    expect(equal(new Uint8Array([1, 0]), new Uint8Array([]))).toBeFalsy();
    expect(equal(new Uint8Array([1, 1]), new Uint8Array([]))).toBeFalsy();
    expect(equal(new Uint8Array([1, 1]), new Uint8Array([0, 0]))).toBeFalsy();
    expect(equal(new Uint8Array([1, 1, 0]), new Uint8Array([]))).toBeFalsy();
    expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([]))).toBeFalsy();
    expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([0]))).toBeFalsy();
    expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1]))).toBeFalsy();
    expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 0]))).toBeFalsy();
    expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 1]))).toBeFalsy();
    expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 1, 0]))).toBeFalsy();
    expect(equal(new Uint8Array([1, 1, 1]), new Uint8Array([1, 1, 1]))).toBeTruthy();
});
