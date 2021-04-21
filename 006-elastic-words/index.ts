export function elasticize(word: string): string {
    const wordLen = word.length
    if(wordLen < 3) return word;

    // Length of left side and right side
    const partLen = Math.floor(wordLen / 2)

    const lenIsEven = wordLen % 2 === 0 ? true : false

    const leftPart = word.slice(0, partLen)
    const centerLetter = lenIsEven ? '' : word.slice(partLen, partLen + 1)
    const rightPart = word.slice(wordLen - partLen, wordLen)

    let elasticized = ''

    for(let i = 0; i < partLen; i++) {
        elasticized += leftPart[i].repeat(i + 1)
    }

    elasticized += centerLetter.repeat(partLen + 1)

    for(let i = 0; i < partLen; i++) {
        elasticized += rightPart[i].repeat(partLen - i)
    }

    return elasticized;
}

// Optimize with a map function