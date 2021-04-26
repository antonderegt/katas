export function countBoomerangs(boomerangs: Number[]): Number {
    if(boomerangs.length < 3) return 0

    let numOfBoomerangs = 0;

    for(let i = 2; i < boomerangs.length; i++) {
        const leftTip = boomerangs[i - 2]
        const center = boomerangs[i - 1]
        const rightTip = boomerangs[i]

        if(leftTip === rightTip && center !== rightTip) {
            numOfBoomerangs++;
        }
    }

    return numOfBoomerangs;
}