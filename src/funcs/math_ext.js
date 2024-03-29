'use strict';
import Seq from '../struct/Seq.js';
import Vec2 from '../struct/Vec2.js';
import Vec3 from '../struct/Vec3.js';
import Vec4 from '../struct/Vec4.js';
export function toSec(nanosec) {
    return nanosec * 1e-9;
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
export function isPowOf2(value) {
    const power = Math.log2(value);
    return power === Math.floor(power);
}
export function lerp(t, a, b) {
    return a + (b - a) * t;
}
export function lerpVec2(t, a, b) {
    return new Vec2(lerp(t, a.x, b.x), lerp(t, a.y, b.y));
}
export function lerpVec3(t, a, b) {
    return new Vec3(lerp(t, a.x, b.x), lerp(t, a.y, b.y), lerp(t, a.z, b.z));
}
export function lerpVec4(t, a, b) {
    return new Vec4(lerp(t, a.x, b.x), lerp(t, a.y, b.y), lerp(t, a.z, b.z), lerp(t, a.w, b.w));
}
export function minPos(...values) {
    let minPosValue = Infinity;
    let id = -1;
    for (let i = 0; i !== values.length; ++i) {
        const value = values[i];
        if (value === undefined || value < 0 || value >= minPosValue)
            continue;
        minPosValue = value;
        id = i;
    }
    return { id, value: minPosValue };
}
export function maxPos(...values) {
    let maxPosValue = -Infinity;
    let id = -1;
    for (let i = 0; i !== values.length; ++i) {
        const value = values[i];
        if (value === undefined || value < 0 || value <= maxPosValue)
            continue;
        maxPosValue = value;
        id = i;
    }
    return { id, value: maxPosValue };
}
export function minNeg(...values) {
    let minNegValue = Infinity;
    let id = -1;
    for (let i = 0; i !== values.length; ++i) {
        const value = values[i];
        if (value === undefined || value >= 0 || value >= minNegValue)
            continue;
        minNegValue = value;
        id = i;
    }
    return { id, value: minNegValue };
}
export function maxNeg(...values) {
    let maxNegValue = -Infinity;
    let id = -1;
    for (let i = 0; i !== values.length; ++i) {
        const value = values[i];
        if (value === undefined || value >= 0 || value <= maxNegValue)
            continue;
        maxNegValue = value;
        id = i;
    }
    return { id, value: maxNegValue };
}
export function linearMap(value, from, to) {
    return to.unnormalize(from.normalize(value));
}
export function linearMapVec2(value, fromPosition, fromSize, toPosition, toSize) {
    return new Vec2(linearMap(value.x, new Seq(fromPosition.x, fromPosition.x + fromSize.x), new Seq(toPosition.x, toPosition.x + toSize.x)), linearMap(value.y, new Seq(fromPosition.y, fromPosition.y + fromSize.y), new Seq(toPosition.y, toPosition.y + toSize.y)));
}
