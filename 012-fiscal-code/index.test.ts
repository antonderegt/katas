import { 
    fiscalCode, 
    getVowels, 
    getConsonants, 
    calculateConsonants,
    handleSurname,
    handleName,
    handleGenderAndDate
} from './'

describe('012 Fiscal Code', () => {

    const matt = {
        name: "Matt",
        surname: "Edabit",
        gender: "M",
        dob: "1/1/1900"
    }

    const helen = { 
        name: "Helen", 
        surname: "Yu", 
        gender: "F", 
        dob: "1/12/1950" 
    }

    const mickey = { 
        name: "Mickey", 
        surname: "Mouse", 
        gender: "M", 
        dob: "16/1/1928" 
    }

    test('Newman returns 4 consonants', () => {
        expect(calculateConsonants('Newman')).toBe(4)
    })

    test('Matt return 3 consonants', () => {
        expect(calculateConsonants('Matt')).toBe(3)
    })

    test('Newman returns consonants: NWM', () => {
        expect(getConsonants('Newman', 0, 3)).toBe('NWM')
    })

    test('Fox returns vowels: O', () => {
        expect(getVowels('Fox', 0, 1)).toBe('O')
    })

    test('Newman returns surname code: NWM', () => {
        expect(handleSurname('Newman')).toBe('NWM')
    })

    test('Fox returns surname code: FXO', () => {
        expect(handleSurname('Fox')).toBe('FXO')
    })

    test('Yu returns surname code: YUX', () => {
        expect(handleSurname('Yu')).toBe('YUX')
    })

    test('Matt returns name code: MTT', () => {
        expect(handleName('Matt')).toBe('MTT')
    })

    test('Samantha returns name code: SNT', () => {
        expect(handleName('Samantha')).toBe('SNT')
    })

    test('Thomas returns name code: TMS', () => {
        expect(handleName('Thomas')).toBe('TMS')
    })

    test('Bob returns name code: BBO', () => {
        expect(handleName('Bob')).toBe('BBO')
    })

    test('Paula returns name code: PLA', () => {
        expect(handleName('Paula')).toBe('PLA')
    })

    test('Al returns name code: LAX', () => {
        expect(handleName('Al')).toBe('LAX')
    })


    test('Matt returns DBTMTT00A01', () => {
        expect(fiscalCode(matt)).toBe('DBTMTT00A01')
    })

    test('Helen returns YUXHLN50T41', () => {
        expect(fiscalCode(helen)).toBe('YUXHLN50T41')
    })

    test('Mickey returns MSOMKY28A16', () => {
        expect(fiscalCode(mickey)).toBe('MSOMKY28A16')
    })

    test('Male from 1/1/1900 returns 00A01', () => {
        expect(handleGenderAndDate("M", "1/1/1900")).toBe('00A01')
    })

    test('Female from 1/1/1900 returns 00A01', () => {
        expect(handleGenderAndDate("F", "1/1/1900")).toBe('00A41')
    })

    test('Helen\'s gender and dob returns 50T41', () => {
        expect(handleGenderAndDate(helen.gender, helen.dob)).toBe('50T41')
    })
})