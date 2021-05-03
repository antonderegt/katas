export function pigLatinSentence(sentence: string): string {
    if(sentence === '') return ''

    return sentence.split(' ').map((word: string) => {
        if(startsWithVowel(word)) {
            return latinizeStartsWithVowel(word)
        }
        
        return latinizeStartsWithNonVowel(word)
    }).join(' ');
}

const vowels = ['a', 'e', 'i', 'o', 'u']

const startsWithVowel = (word: string): boolean => {
    if(vowels.includes(word.charAt(0))) return true
    return false
}

const latinizeStartsWithVowel = (word: string): string => {
    return word + 'way'
}

const latinizeStartsWithNonVowel = (word: string): string => {
    const indexOfFirstVowel: number = word.search(/[a,e,i,o,u]/)
    return word.slice(indexOfFirstVowel, word.length) + word.slice(0, indexOfFirstVowel) + 'ay'
}