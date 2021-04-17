export function splitOnDoubleLetter(word:string) {
    const result = word.split('').reduce((splitWords, currLetter) => {
        const prevLetter = splitWords[splitWords.length - 1].slice(-1);
        if(currLetter === prevLetter) {
            splitWords.push(currLetter);
        } else {
            splitWords[splitWords.length - 1] = splitWords[splitWords.length - 1] + currLetter;
        }
        return splitWords;
    }, [""])

    if(result.length === 1) return [];

    return result;
}