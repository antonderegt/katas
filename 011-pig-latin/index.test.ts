import { pigLatinSentence } from '.'

describe('011 Pig Latin', () => {
    test('Empty input returns emtpy string', () => {
        expect(pigLatinSentence('')).toBe('')
    })

    test('is returns isway', () => {
        expect(pigLatinSentence('is')).toBe('isway')
    })

    test('this returns isthay', () => {
        expect(pigLatinSentence('this')).toBe('isthay')
    })

    test('this is pig latin returns isthay isway igpay atinlay', () => {
        expect(pigLatinSentence('this is pig latin')).toBe('isthay isway igpay atinlay')
    })

    test('wall street journal returns allway eetstray ournaljay', () => {
        expect(pigLatinSentence('wall street journal')).toBe('allway eetstray ournaljay')
    })
})