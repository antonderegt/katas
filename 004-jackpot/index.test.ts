import { jackpot } from './index';

describe('004', () => {
    test('Should return true when all elements are identical', () => {
        expect(jackpot(["@", "@", "@", "@"])).toBe(true);
    })

    test('Should return true when all elements are identical', () => {
        expect(jackpot(["abc", "abc", "abc", "abc"])).toBe(true);
    })

    test('Should return true when all elements are identical', () => {
        expect(jackpot(["SS", "SS", "SS", "SS"])).toBe(true);
    })

    test('Should return false when all elements are NOT identical', () => {
        expect(jackpot(["&&", "&", "&&&", "&&&&"])).toBe(false);
    })

    test('Should return false when casing doesn\'t match', () => {
        expect(jackpot(["SS", "SS", "SS", "Ss"])).toBe(false);
    })

    test('Should return true with matching numbers as strings', () => {
        expect(jackpot(["123", "123", "123", "123"])).toBe(true);
    })

    // test('Should return false when wrong data type is used', () => {
    //     expect(jackpot([123, 123, 123, 123])).toBe(false);
    // })

    test('Should throw error when no elements are supplied', () => {
        expect(() => jackpot([])).toThrow('Please supply four elements')
    })

    test('Should throw error when no elements are supplied', () => {
        expect(() => jackpot(['a','a','a','a','a'])).toThrow('Please supply four elements.')
    })
})
