export function splitOnDoubleLetter(word:string) {
    const result = word.split('').reduce((splitWords, currLetter) => {
        const lastIndex = splitWords.length - 1;
        const prevLetter = splitWords[lastIndex].slice(-1);

        if(currLetter === prevLetter) {
            splitWords.push(currLetter);
        } else {
            splitWords[lastIndex] = splitWords[lastIndex] + currLetter;
        }
        
        return splitWords;
    }, [""])

    if(result.length === 1) return [];

    return result;
}