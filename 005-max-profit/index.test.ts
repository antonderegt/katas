import { maximumProfit } from './index'

describe('Kata 005 Maximum Profit', () => {
    test('Should return 0 when no profit can be made', () => {
        expect(maximumProfit([])).toBe(0)
    })

    test('Should return 0 when no profit can be made', () => {
        expect(maximumProfit([21, 12, 11, 9, 6, 3])).toBe(0)
    })

    test('Should return 14 when price goes from 5 to 19', () => {
        expect(maximumProfit([8, 5, 12, 9, 19, 1])).toBe(14)
    })

    test('Should return 7 when price goes from 2 to 9', () => {
        expect(maximumProfit([2, 4, 9, 3, 8])).toBe(7)
    })
})