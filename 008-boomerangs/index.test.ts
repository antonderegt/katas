import { countBoomerangs } from './'

describe('008 Boomerangs', () => {
    test('Should return 0 on empty array', () => {
        expect(countBoomerangs([])).toBe(0)
    })

    test('Should return 1 on boomerang at start of array', () => {
        expect(countBoomerangs([1,2,1,0])).toBe(1)
    })

    test('Should return 1 on boomerang at end of array', () => {
        expect(countBoomerangs([0,1,2,1])).toBe(1)
    })

    test('Should return 1 on one boomerang in array', () => {
        expect(countBoomerangs([1,2,1])).toBe(1)
    })

    test('Should return 2', () => {
        expect(countBoomerangs([9, 5, 9, 5, 1, 1, 1])).toBe(2)
    })

    test('Should return 1', () => {
        expect(countBoomerangs([5, 6, 6, 7, 6, 3, 9])).toBe(1)
    })

    test('Should return 0', () => {
        expect(countBoomerangs([4, 4, 4, 9, 9, 9, 9])).toBe(0)
    })

    test('Should return 5', () => {
        expect(countBoomerangs([1, 7, 1, 7, 1, 7, 1])).toBe(5)
    })
})