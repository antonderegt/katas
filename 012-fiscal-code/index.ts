export interface personalData {
    name: string,
    surname: string,
    gender: string,
    dob: string
}

const vowels = ['a', 'e', 'i', 'o', 'u']
const months = ["-", "A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"]

export function fiscalCode(pd: personalData): string {
    let code: string = ''

    code += handleSurname(pd.surname)
    code += handleName(pd.name)
    code += handleGenderAndDate(pd.gender, pd.dob)

    return code
}

export const handleGenderAndDate = (gender: string, dob: string) => {
    let code = ''
    const [ day = '', month = '',  year = '' ] = dob.split('/')
    
    code += year.slice(2, 4)
    code += months[month]

    if (gender === 'M') {
        const paddedDay = `0${day}`.slice(-2)
        code += paddedDay
    } else {
        code += parseInt(day) + 40
    }

    return code.toUpperCase()
}

export function handleSurname(surname: string): string {
    let code = ''

    const consonants = calculateConsonants(surname)

    if (surname.length < 3) {
        code += surname + 'X'
    } else if (consonants >= 3) {
        code += getConsonants(surname, 0, 3)
    } else {
        code += getConsonants(surname, 0, 2)
        code += getVowels(surname, 0, 1)
    }

    return code.toUpperCase()
}

export const calculateConsonants = (name: string): number => {
    return name.split('').reduce((consonants: number, char: string) => {
        if (!vowels.includes(char)) {
            return consonants + 1
        }
        return consonants
    }, 0)
}

export const getConsonants = (name: string, start: number, num: number): string => {
    const consonants = name.match(/[^aeiou]/gi).join('')
    return consonants.slice(start, num).toUpperCase()
}

export const getVowels = (name: string, start: number, num: number): string => {
    const vowels = name.match(/[aeiou]/gi).join('')
    return vowels.slice(start, num).toUpperCase()
}

export function handleName(name: string): string {
    let code = ''

    const consonants = calculateConsonants(name)

    if (name.length < 3) {
        code += getConsonants(name, 0, 1)
        code += getVowels(name, 0, 1)
        code += 'X'
    } else if (consonants > 3) {
        code += getConsonants(name, 0, 1)
        code += getConsonants(name, 2, 4)
    } else if (consonants === 3) {
        code += getConsonants(name, 0, 3)
    } else if (consonants < 3) {
        code += getConsonants(name, 0, 2)
        code += getVowels(name, 0, 1)
    }

    return code.toUpperCase()
}