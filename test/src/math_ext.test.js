'use strict';
import { toSeconds, isOdd, isEven, isPrime, getNextPrime, clamp, isOverlap, isPowerOfTwo } from '../../src/math_ext.js';
import Range from '../../src/Range.js';
test('toSeconds', () => {
    expect(toSeconds(0)).toBe(0);
    expect(toSeconds(1e+9)).toBe(1);
    expect(toSeconds(2e+9)).toBe(2);
});
test('isOdd', () => {
    expect(isOdd(0)).toBeFalsy();
    expect(isOdd(1)).toBeTruthy();
    expect(isOdd(2)).toBeFalsy();
    expect(isOdd(3)).toBeTruthy();
});
test('isEven', () => {
    expect(isEven(0)).toBeTruthy();
    expect(isEven(1)).toBeFalsy();
    expect(isEven(2)).toBeTruthy();
    expect(isEven(3)).toBeFalsy();
});
test('isPrime', () => {
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(6)).toBeFalsy();
    expect(isPrime(7)).toBeTruthy();
    expect(isPrime(8)).toBeFalsy();
    expect(isPrime(9)).toBeFalsy();
    expect(isPrime(10)).toBeFalsy();
    expect(isPrime(11)).toBeTruthy();
    expect(isPrime(12)).toBeFalsy();
    expect(isPrime(13)).toBeTruthy();
    expect(isPrime(14)).toBeFalsy();
    expect(isPrime(15)).toBeFalsy();
    expect(isPrime(16)).toBeFalsy();
    expect(isPrime(17)).toBeTruthy();
    expect(isPrime(18)).toBeFalsy();
    expect(isPrime(19)).toBeTruthy();
    expect(isPrime(20)).toBeFalsy();
    expect(isPrime(21)).toBeFalsy();
    expect(isPrime(22)).toBeFalsy();
    expect(isPrime(23)).toBeTruthy();
});
test('getNextPrime', () => {
    expect(getNextPrime(0)).toBe(2);
    expect(getNextPrime(1)).toBe(2);
    expect(getNextPrime(2)).toBe(3);
    expect(getNextPrime(3)).toBe(5);
    expect(getNextPrime(4)).toBe(5);
    expect(getNextPrime(5)).toBe(7);
    expect(getNextPrime(6)).toBe(7);
    expect(getNextPrime(7)).toBe(11);
});
test('clamp', () => {
    expect(clamp(0, new Range(1, 3))).toBe(1);
    expect(clamp(1, new Range(1, 3))).toBe(1);
    expect(clamp(2, new Range(1, 3))).toBe(2);
    expect(clamp(3, new Range(1, 3))).toBe(3);
    expect(clamp(4, new Range(1, 3))).toBe(3);
    expect(clamp(0, new Range(2, 6))).toBe(2);
    expect(clamp(2, new Range(2, 6))).toBe(2);
    expect(clamp(4, new Range(2, 6))).toBe(4);
    expect(clamp(6, new Range(2, 6))).toBe(6);
    expect(clamp(8, new Range(2, 6))).toBe(6);
});
test('isOverlap', () => {
    expect(isOverlap(0, new Range(1, 3))).toBeFalsy();
    expect(isOverlap(1, new Range(1, 3))).toBeTruthy();
    expect(isOverlap(2, new Range(1, 3))).toBeTruthy();
    expect(isOverlap(3, new Range(1, 3))).toBeTruthy();
    expect(isOverlap(4, new Range(1, 3))).toBeFalsy();
    expect(isOverlap(0, new Range(2, 6))).toBeFalsy();
    expect(isOverlap(2, new Range(2, 6))).toBeTruthy();
    expect(isOverlap(4, new Range(2, 6))).toBeTruthy();
    expect(isOverlap(6, new Range(2, 6))).toBeTruthy();
    expect(isOverlap(8, new Range(2, 6))).toBeFalsy();
});
test('isPowerOfTwo', () => {
    expect(isPowerOfTwo(1)).toBeTruthy();
    expect(isPowerOfTwo(2)).toBeTruthy();
    expect(isPowerOfTwo(3)).toBeFalsy();
    expect(isPowerOfTwo(4)).toBeTruthy();
    expect(isPowerOfTwo(5)).toBeFalsy();
});
