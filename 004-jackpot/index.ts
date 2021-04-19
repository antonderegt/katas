export function jackpot(elements:Array<string>) {
    if(elements === undefined || elements.length != 4) throw new Error('Please supply four elements.');

    for(let i = 1; i < elements.length; i++) {
        const prevString = elements[i - 1];
        const currString = elements[i];

        if(prevString !== currString) return false;
    }

    return true;
}