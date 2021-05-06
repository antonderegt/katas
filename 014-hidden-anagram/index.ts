export const hiddenAnagram = (sentence: string, result: string): string => {
    const filteredSentence = filterSentence(sentence)
    const filteredResult = filterSentence(result)

    for (let i = 0; i < filteredSentence.length; i++) {
        for (let j = 1; j <= filteredSentence.length; j++) {
            if (lookForAnagram(filteredSentence.slice(i, j), filteredResult)) {
                return filteredSentence.slice(i, j)
            }
        }
    }

    return 'noutfond'
}

export const filterSentence = (sentence: string): string => {
    const filtered = sentence.replace(/[^\w]|[\d]/gi, '')
    return filtered.toLowerCase()
}

export const sortWord = (word: string): string => {
    return word.split('').sort().join('')
}

export const lookForAnagram = (wordA: string, wordB: string): boolean => {
    if (wordA.length !== wordB.length) return false

    if (sortWord(wordA) === sortWord(wordB)) return true

    return false
}