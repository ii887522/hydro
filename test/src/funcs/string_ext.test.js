'use strict';
import { substring, isUint } from '../../../src/funcs/string_ext.js';
test('substring', () => {
    expect(substring('SDL2-2.0.12/lib/x86/SDL2.dll', 'SDL', 'l')).toBe('SDL2-2.0.12/');
    expect(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'SDL', 'l')).toBe('SDL2_image-2.0.5/');
    expect(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', 'l')).toBe('image-2.0.5/');
    expect(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', '.dll')).toBe('image-2.0.5/lib/x86/libpng16-16');
});
test('isUint', () => {
    expect(isUint('/')).toBeFalsy();
    expect(isUint('0')).toBeTruthy();
    expect(isUint('5')).toBeTruthy();
    expect(isUint('9')).toBeTruthy();
    expect(isUint(':')).toBeFalsy();
    expect(isUint(':/')).toBeFalsy();
    expect(isUint(':0')).toBeFalsy();
    expect(isUint(':9')).toBeFalsy();
    expect(isUint('::')).toBeFalsy();
    expect(isUint(':5')).toBeFalsy();
    expect(isUint('9/')).toBeFalsy();
    expect(isUint('95')).toBeTruthy();
    expect(isUint('95/')).toBeFalsy();
    expect(isUint('950')).toBeTruthy();
    expect(isUint('955')).toBeTruthy();
    expect(isUint('959')).toBeTruthy();
    expect(isUint('95:')).toBeFalsy();
});
