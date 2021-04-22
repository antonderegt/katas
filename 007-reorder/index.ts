export function reorder(word): string {
    let capIndex = 0;
    let numIndex = word.length - 1;
    let regIndex = 0;
    const result = []

    for(const char of word.split('')) {
        if(isNaN(parseInt(char))) {
            if(char === char.toUpperCase()) {
                result.splice(capIndex, 0, char)
                capIndex++
                regIndex++
            } else if(char == Number(char)) {
                console.log('num');
                
                result.splice(numIndex, 0, char)
                numIndex--
            } else {
                result.splice(regIndex, 0, char)
                regIndex++
            }
        } 
        else {
            result.splice(numIndex, 0, char)
            numIndex--
        }
    }

    return result.join('')
}