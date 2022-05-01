'use strict';
export function substring(from, startText, endText) {
    const startTextIndex = from.indexOf(startText);
    return from.substring(startTextIndex, from.indexOf(endText, startTextIndex));
}
export function isUint(value) {
    for (const ch of value) {
        if (ch < '0' || ch > '9')
            return false;
    }
    return true;
}
