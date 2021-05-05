export const shuffleCount = (num: number): number => {
    if (num < 2 || num % 2 !== 0) return 0

    const originalDeck = createDeck(num)
    let shuffledDeck = faroShuffle(originalDeck)
    let numOfShuffles = 1

    while (!decksAreEqual(originalDeck, shuffledDeck)) {
        shuffledDeck = faroShuffle(shuffledDeck)
        numOfShuffles++
    }

    return numOfShuffles;
}

export const createDeck = (num: number) => {
    let deck = []
    // deck = Array.from(Array(num).keys())
    // deck = deck.slice(1) || deck = [, ...deck]

    for (let i = 1; i <= num; i++) {
        deck.push(i)
    }

    return deck
}

export const faroShuffle = (deck: number[]): number[] => {
    if (deck.length < 2 || deck.length % 2 !== 0) return []

    const pivot = deck.length / 2
    const shuffledDeck = []

    for (let i = 0; i < pivot; i++) {
        shuffledDeck.push(deck[i])
        shuffledDeck.push(deck[i + pivot])
    }

    return shuffledDeck
}

export const decksAreEqual = (deckA: number[], deckB: number[]): boolean => {
    if (deckA.length !== deckB.length) return false
    return deckA.every((element, index) => element === deckB[index]);
}