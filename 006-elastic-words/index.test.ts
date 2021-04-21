import { elasticize } from './'

describe('006', () => {
    test('Should return the same word when length is < 3', () => {
        expect(elasticize('X')).toBe('X')
    })

    test('Should return even number of center letters when word is of even length', () => {
        expect(elasticize('ANNA')).toBe('ANNNNA')
    })

    test('Should return uneven number of center letters when word is of uneven length', () => {
        expect(elasticize('KAYAK')).toBe('KAAYYYAAK')
    })

    test('Should return uneven number of center letters when word is of uneven length', () => {
        expect(elasticize('AntondeRegt')).toBe('AnntttoooonnnnnddddddeeeeeRRRReeeggt')
    })
})