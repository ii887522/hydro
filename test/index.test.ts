'use strict'

import { assert } from 'console'
import { getFileName, substring } from '../index.js'

assert(getFileName('SDL2-2.0.12/lib/x86/SDL2.dll') === 'SDL2.dll')
assert(getFileName('SDL2_image-2.0.5/lib/x86/libpng16-16.dll') === 'libpng16-16.dll')
assert(getFileName('SDL2_ttf-2.0.15/lib/x86/SDL2_ttf.dll') === 'SDL2_ttf.dll')
assert(substring('SDL2-2.0.12/lib/x86/SDL2.dll', 'SDL', 'l') === 'SDL2-2.0.12/')
assert(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'SDL', 'l') === 'SDL2_image-2.0.5/')
assert(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', 'l') === 'image-2.0.5/')
assert(substring('SDL2_image-2.0.5/lib/x86/libpng16-16.dll', 'image', '.dll') === 'image-2.0.5/lib/x86/libpng16-16')
