'use strict';
export function substring(from, startText, endText) {
    const startTextID = from.indexOf(startText);
    return from.substring(startTextID, from.indexOf(endText, startTextID));
}
export function isUint(value) {
    for (const ch of value) {
        if (ch < '0' || ch > '9')
            return false;
    }
    return true;
}
