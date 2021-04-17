import { splitOnDoubleLetter } from "./index";

describe('splitOnDoubleLetter', () => {
    test('Should return [] when no repeat letters are found', () => {
        expect(splitOnDoubleLetter('Easy')).toEqual([]);
    });

    test('Should split word in two parts',() => {
        expect(splitOnDoubleLetter('Letter')).toEqual(['Let','ter'])
    });

    test('Should split word in two parts',() => {
        expect(splitOnDoubleLetter('Really')).toEqual(['Real','ly'])
    });

    test('Should split word in two parts',() => {
        expect(splitOnDoubleLetter('Happy')).toEqual(['Hap','py'])
    });

    test('Should split word in two parts',() => {
        expect(splitOnDoubleLetter('Shall')).toEqual(['Shal','l'])
    });

    test('Should split word in two parts',() => {
        expect(splitOnDoubleLetter('Tool')).toEqual(['To','ol'])
    });

    test('Should split word in four parts',() => {
        expect(splitOnDoubleLetter('Mississippi')).toEqual(['Mis','sis','sip','pi'])
    });

    test('Should return [] on empty word',() => {
        expect(splitOnDoubleLetter('')).toEqual([])
    });

    test('Should split word in four parts',() => {
        expect(splitOnDoubleLetter('AAAA')).toEqual(['A','A','A','A'])
    });

    test('Should return [] on single letter',() => {
        expect(splitOnDoubleLetter('A')).toEqual([])
    });
})