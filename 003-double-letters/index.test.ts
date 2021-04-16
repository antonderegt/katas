import { splitOnDoubleLetter } from "./index";

describe('splitOnDoubleLetter', () => {
    test('Should return [] when no repeat letters are found', () => {
        expect(splitOnDoubleLetter('Easy')).toEqual([]);
    });

    test('Should split word in two parts',() => {
        expect(splitOnDoubleLetter('Letter')).toEqual(['let','ter'])
    });

    test('Should split word in two parts',() => {
        expect(splitOnDoubleLetter('Really')).toEqual(['real','ly'])
    });

    test('Should split word in two parts',() => {
        expect(splitOnDoubleLetter('Happy')).toEqual(['hap','py'])
    });

    test('Should split word in two parts',() => {
        expect(splitOnDoubleLetter('Shall')).toEqual(['shal','l'])
    });

    test('Should split word in two parts',() => {
        expect(splitOnDoubleLetter('Tool')).toEqual(['to','ol'])
    });

    test('Should split word in four parts',() => {
        expect(splitOnDoubleLetter('Mississippi')).toEqual(['mis','sis','sip','pi'])
    });

    test('Should return [] on empty word',() => {
        expect(splitOnDoubleLetter('')).toEqual([])
    });

    test('Should split word in four parts',() => {
        expect(splitOnDoubleLetter('AAAA')).toEqual(['a','a','a','a'])
    });

    test('Should return [] on single letter',() => {
        expect(splitOnDoubleLetter('A')).toEqual([])
    });
})