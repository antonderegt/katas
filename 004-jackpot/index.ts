export function jackpot(elements:Array<string>) {
    if(elements === undefined || elements.length != 4) throw new Error('Please supply four elements.');

    let elementsAreIdentical = true;

    elements.reduce((prevString, currString) => {
        if(prevString != currString) elementsAreIdentical = false;
        return currString;
    }, elements[0])

    return elementsAreIdentical;
}