import { noStrangers } from './'

describe('010 Stranger Danger', () => {
    test('Empty returns [[],[]]', () => {
        expect(noStrangers("")).toEqual([[''],['']])
    })

    test('String returns [[spot, see],[]]', () => {
        expect(noStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly.")).toEqual([["spot", "see"], []])
    })
})