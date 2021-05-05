import { shuffleCount, createDeck, faroShuffle, decksAreEqual } from './'

describe('013 Faro Shuffle', () => {
    test('5 should create deck: [1,2,3,4,5]', () => {
        expect(createDeck(5)).toEqual([1, 2, 3, 4, 5])
    })

    test('0 should create deck: []', () => {
        expect(createDeck(0)).toEqual([])
    })

    test('Same decks should be true', () => {
        expect(decksAreEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toEqual(true)
    })

    test('Different deck lengths should be false', () => {
        expect(decksAreEqual([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])).toEqual(false)
    })

    test('Same deck different order should be false', () => {
        expect(decksAreEqual([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).toEqual(false)
    })

    test('[1, 2, 3, 4] should be shuffled to [1, 3, 2, 4]', () => {
        expect(faroShuffle([1, 2, 3, 4])).toEqual([1, 3, 2, 4])
    })

    test('[1, 2, 3, 4, 5, 6, 7, 8] should be shuffled to [1, 5, 2, 6, 3, 7, 4, 8]', () => {
        expect(faroShuffle([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 5, 2, 6, 3, 7, 4, 8])
    })

    test('[1, 5, 2, 6, 3, 7, 4, 8] should be shuffled to [1, 3, 5, 7, 2, 4, 6, 8]', () => {
        expect(faroShuffle([1, 5, 2, 6, 3, 7, 4, 8])).toEqual([1, 3, 5, 7, 2, 4, 6, 8])
    })

    test('[1, 3, 5, 7, 2, 4, 6, 8] should be shuffled to [1, 2, 3, 4, 5, 6, 7, 8]', () => {
        expect(faroShuffle([1, 3, 5, 7, 2, 4, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    })

    test('0 return 0', () => {
        expect(shuffleCount(0)).toBe(0)
    })

    test('Uneven returns 0', () => {
        expect(shuffleCount(7)).toBe(0)
    })

    test('2 returns 1', () => {
        expect(shuffleCount(2)).toBe(1)
    })

    test('8 returns 3', () => {
        expect(shuffleCount(8)).toBe(3)
    })

    test('14 returns 12', () => {
        expect(shuffleCount(14)).toBe(12)
    })

    test('52 returns 8', () => {
        expect(shuffleCount(52)).toBe(8)
    })
})