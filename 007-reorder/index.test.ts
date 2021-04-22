import { reorder } from './'

describe('007 Reorder', () => {
    test('aA => Aa', () => {
        expect(reorder('aA')).toBe('Aa')
    })

    test('aAB => ABa', () => {
        expect(reorder('aAB')).toBe('ABa')
    })

    test('1aAB => ABa1', () => {
        expect(reorder('1aAB')).toBe('ABa1')
    })

    test('hA2p4Py => APhpy24', () => {
        expect(reorder('hA2p4Py')).toBe('APhpy24')
    })

    test('m11oveMENT => MENTmove11', () => {
        expect(reorder('m11oveMENT')).toBe('MENTmove11')
    })

    test('s9hOrt4CAKE => OCAKEshrt94', () => {
        expect(reorder('s9hOrt4CAKE')).toBe('OCAKEshrt94')
    })
})