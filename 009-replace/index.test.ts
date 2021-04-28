import { replaceVowel } from './'

describe('009 Replace vowel with another character', () => {
    test('No vowel returns same word', () => {
        expect(replaceVowel('brr')).toBe('brr')
    })

    test('Vowel should be replaced', () => {
        expect(replaceVowel('karAchi')).toBe('k1r1ch3')
    })
    
    test('Vowel should be replaced', () => {
        expect(replaceVowel('chEmBur')).toBe('ch2mb5r')
    })

    test('Vowel should be replaced', () => {
        expect(replaceVowel('khandbari')).toBe('kh1ndb1r3')
    })

    test('Vowel should be replaced', () => {
        expect(replaceVowel('LexiCAl')).toBe('l2x3c1l')
    })

    test('Vowel should be replaced', () => {
        expect(replaceVowel('fuNctionS')).toBe('f5nct34ns')
    })

    test('Vowel should be replaced', () => {
        expect(replaceVowel('EASY')).toBe('21sy')
    })
})