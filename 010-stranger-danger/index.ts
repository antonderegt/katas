export function noStrangers(words: string) {
    if(words === "") return [[''],['']]

    let strangers = {}
    let acquaintances = []
    let friends = []

    let dotsRemoved = words.split('.').join("");
    let lowerCaseWords = dotsRemoved.toLowerCase()

    const wordCounter = lowerCaseWords.split(' ').forEach(word => {
        if(word in strangers) {
            strangers[word] = strangers[word] + 1
            
            if(strangers[word] === 3) {
                acquaintances.push(word)
            } else if(strangers[word] === 5) {
                acquaintances.splice(acquaintances.indexOf(word), 1)
                friends.push(word)
            }
        } else {
            strangers[word] = 1
        }
    })

    return [acquaintances,friends]
}