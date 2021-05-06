import { hiddenAnagram, filterSentence, sortWord, lookForAnagram } from './'

describe('Find hidden anagram', () => {
    test('Empty string should return noutfond', () => {
        expect(hiddenAnagram('','')).toBe('noutfond')
    })

    test('abc and abc should return abc', () => {
        expect(hiddenAnagram('abc','abc')).toBe('abc')
    })

    test('a B@ c and abc should return abc', () => {
        expect(hiddenAnagram('a B@ c','abc')).toBe('abc')
    })

    test('abc and bc should return bc', () => {
        expect(hiddenAnagram('abc','bc')).toBe('bc')
    })

    test('An old west action hero actor and Clint Eastwood should return noldwestactio', () => {
        expect(hiddenAnagram('An old west action hero actor','Clint Eastwood')).toBe('noldwestactio')
    })

    test('Mr. Mojo Rising could be a song title and Jim Morrison should return mrmojorisin', () => {
        expect(hiddenAnagram('Mr. Mojo Rising could be a song title','Jim Morrison')).toBe('mrmojorisin')
    })

    test('"Banana? margaritas and ANAGRAM should return anamarg', () => {
        expect(hiddenAnagram('"Banana? margaritas','ANAGRAM')).toBe('anamarg')
    })

    test('D e b90it->?$ (c)a r...d,,#~ and bad credit should return debitcard', () => {
        expect(hiddenAnagram('D e b90it->?$ (c)a r...d,,#~','bad credit')).toBe('debitcard')
    })

    test('Bright is the moon and Bongo mirth should return noutfond', () => {
        expect(hiddenAnagram('Bright is the moon','Bongo mirth')).toBe('noutfond')
    })
})

describe('Filter sentences', () => {
    test('Clean word returns the same string', () => {
        expect(filterSentence('test')).toBe('test')
    })

    test('Capitals in word returns the same string in lowercase', () => {
        expect(filterSentence('Test')).toBe('test')
    })

    test('Word with special chars returns filtered string', () => {
        expect(filterSentence('T-e+s@t')).toBe('test')
    })

    test('String with special chars returns filtered string', () => {
        expect(filterSentence('T-e+s@t this sEnTenc3e?')).toBe('testthissentence')
    })
})

describe('Sort word', () => {
    test('Empty should be empty', () => {
        expect(sortWord('')).toBe('')
    })

    test('Sorted should return same word', () => {
        expect(sortWord('abc')).toBe('abc')
    })

    test('Unsorted should return sorted word', () => {
        expect(sortWord('cba')).toBe('abc')
    })
})

describe('Look for anagram', () => {
    test('Anagrams should return true', () => {
        expect(lookForAnagram('abc','acb')).toBe(true)
    })

    test('Nonanagrams should return false', () => {
        expect(lookForAnagram('abc','def')).toBe(false)
    })

    test('Different length should return false', () => {
        expect(lookForAnagram('abc','abcd')).toBe(false)
    })
})