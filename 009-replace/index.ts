export function replaceVowel(word: string): string {
    return word.toLowerCase().split('').map(char => {
        switch(char) {
            case 'a':
                return 1
            case 'e':
                return 2
            case 'i':
                return 3
            case 'o':
                return 4
            case 'u':
                return 5
            default:
                return char
        }
    }).join('')
}