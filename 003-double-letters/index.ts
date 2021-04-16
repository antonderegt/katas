export function splitOnDoubleLetter(word:string) {
    const splitOnEveryLetter = word.toLowerCase().split('');
    let tempWord = splitOnEveryLetter[0];
    let result = [];
    let foundDoubleLetter = false;
    
    for(let i = 1; i < splitOnEveryLetter.length; i++) {
        const currLetter = splitOnEveryLetter[i];
        const prevLetter = splitOnEveryLetter[i - 1]

        if(currLetter === prevLetter) {
            result.push(tempWord);
            tempWord = currLetter;
            foundDoubleLetter = true;
        } else {
            tempWord += currLetter;
        }
    }

    if(!foundDoubleLetter) return [];

    result.push(tempWord);

    return result;
}

// Improve by using a slice from last found double letter. 
// No need for splitting the word