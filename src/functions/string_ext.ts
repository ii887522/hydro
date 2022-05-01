'use strict'

/**
 * It returns a substring from the original string received which starts from the start text given and ends with a text
 * which immediately precedes the end text given.
 *
 * @param from The original string given.
 * @param startText The start text included in the original string.
 * @param endText The end text included in the original string.
 * @returns The substring requested.
 */
export function substring (from: string, startText: string, endText: string): string {
  const startTextIndex = from.indexOf(startText)
  return from.substring(startTextIndex, from.indexOf(endText, startTextIndex))
}

/**
 * It checks whether the `value` given is actually an unsigned integer which is converted to a string.
 *
 * @param value The value to be checked.
 * @returns true if the `value` is an unsigned integer which is converted to a string, false otherwise.
 */
export function isUint (value: string): boolean {
  for (const ch of value) {
    if (ch < '0' || ch > '9') return false
  }
  return true
}
