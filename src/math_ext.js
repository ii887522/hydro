'use strict';
export function toSeconds(nanoseconds) {
    return nanoseconds * 1e-9;
}
export function isOdd(value) {
    return value % 2 === 1;
}
export function isEven(value) {
    return value % 2 === 0;
}
export function isPrime(value) {
    if (value <= 1)
        return false;
    if (value === 2)
        return true;
    if (isEven(value))
        return false;
    if (value < 9)
        return true;
    const sqrtOfValue = Math.floor(Math.sqrt(value));
    if (sqrtOfValue * sqrtOfValue === value)
        return false;
    if (value < 15)
        return true;
    for (let i = 3; i <= sqrtOfValue; i += 2) {
        if (Math.floor(value / i) * i === value)
            return false;
    }
    return true;
}
export function getNextPrime(from) {
    if (from < 2)
        return 2;
    let result = from + (isEven(from) ? 1 : 2);
    while (!isPrime(result))
        result += 2;
    return result;
}
export function clamp(value, range) {
    if (value < range.min)
        return range.min;
    else if (value > range.max)
        return range.max;
    else
        return value;
}
export function isOverlap(value, range) {
    return value >= range.min && value <= range.max;
}
export function isPowerOfTwo(value) {
    const power = Math.log2(value);
    return power === Math.floor(power);
}
