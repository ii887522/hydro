'use strict';
import { getFileName, hasFileWithExtension, readObject, writeObject } from '../../../src/funcs/fs_ext.js';
test('getFileName', () => {
    expect(getFileName('SDL2-2.0.12/lib/x86/SDL2.dll')).toBe('SDL2.dll');
    expect(getFileName('SDL2_image-2.0.5/lib/x86/libpng16-16.dll')).toBe('libpng16-16.dll');
    expect(getFileName('SDL2_ttf-2.0.15/lib/x86/SDL2_ttf.dll')).toBe('SDL2_ttf.dll');
});
test('hasFileWithExtension', async () => {
    expect(await hasFileWithExtension('txt', 'test/res/a')).toBeFalsy();
    expect(await hasFileWithExtension('txt', 'test/res/c')).toBeTruthy();
    expect(await hasFileWithExtension('txt', 'test/res/d')).toBeFalsy();
    expect(await hasFileWithExtension('txt', 'test/res/e')).toBeTruthy();
    expect(await hasFileWithExtension('txt', 'test/res/f')).toBeTruthy();
    expect(await hasFileWithExtension('txt', 'test/res/g')).toBeFalsy();
    expect(await hasFileWithExtension('txt', 'test/res/h')).toBeTruthy();
    expect(await hasFileWithExtension('txt', 'test/res/i')).toBeTruthy();
    expect(await hasFileWithExtension('png', 'test/res/a')).toBeFalsy();
    expect(await hasFileWithExtension('png', 'test/res/c')).toBeFalsy();
    expect(await hasFileWithExtension('png', 'test/res/d')).toBeTruthy();
    expect(await hasFileWithExtension('png', 'test/res/e')).toBeTruthy();
    expect(await hasFileWithExtension('png', 'test/res/f')).toBeFalsy();
    expect(await hasFileWithExtension('png', 'test/res/g')).toBeTruthy();
    expect(await hasFileWithExtension('png', 'test/res/h')).toBeTruthy();
    expect(await hasFileWithExtension('png', 'test/res/i')).toBeFalsy();
});
test('read an object from a non-existent file path', () => {
    try {
        readObject('a');
    }
    catch (error) {
        return;
    }
    fail();
});
test('read an object from a Javascript file', () => {
    expect.assertions(1);
    try {
        readObject('index.js');
    }
    catch (error) {
        expect(error).toBeInstanceOf(SyntaxError);
    }
});
test('read an object from a JSON file', () => {
    const config = readObject('test/res/reverse_proxy.config.json');
    expect(config.keyPath).toBe('test/key.pem');
    expect(config.certPath).toBe('test/cert.pem');
    expect(config.routes.length).toBe(4);
    expect(config.routes[0].hostname).toBe('example.dynv6.net');
    expect(config.routes[0].target).toBe('http://localhost:1024');
    expect(config.routes[1].hostname).toBe('www.example.dynv6.net');
    expect(config.routes[1].target).toBe('http://localhost:1024');
    expect(config.routes[2].hostname).toBe('abcdefg.dynv6.net');
    expect(config.routes[2].target).toBe('http://localhost:1025');
    expect(config.routes[3].hostname).toBe('www.abcdefg.dynv6.net');
    expect(config.routes[3].target).toBe('http://localhost:1025');
});
test('write an object to a JSON file', () => {
    writeObject('test/res/reverse_proxy.config.json', {
        keyPath: 'test/key.pem',
        certPath: 'test/cert.pem',
        routes: [
            {
                hostname: 'example.dynv6.net',
                target: 'http://localhost:1024'
            },
            {
                hostname: 'www.example.dynv6.net',
                target: 'http://localhost:1024'
            },
            {
                hostname: 'abcdefg.dynv6.net',
                target: 'http://localhost:1025'
            },
            {
                hostname: 'www.abcdefg.dynv6.net',
                target: 'http://localhost:1025'
            }
        ]
    });
    const config = readObject('test/res/reverse_proxy.config.json');
    expect(config.keyPath).toBe('test/key.pem');
    expect(config.certPath).toBe('test/cert.pem');
    expect(config.routes.length).toBe(4);
    expect(config.routes[0].hostname).toBe('example.dynv6.net');
    expect(config.routes[0].target).toBe('http://localhost:1024');
    expect(config.routes[1].hostname).toBe('www.example.dynv6.net');
    expect(config.routes[1].target).toBe('http://localhost:1024');
    expect(config.routes[2].hostname).toBe('abcdefg.dynv6.net');
    expect(config.routes[2].target).toBe('http://localhost:1025');
    expect(config.routes[3].hostname).toBe('www.abcdefg.dynv6.net');
    expect(config.routes[3].target).toBe('http://localhost:1025');
});
