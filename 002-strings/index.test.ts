import { buildString } from './index'

// Function - builds strings
// take undefined number of arguments
// return the args as a concatinated string

// Argument 1 - describe result
// Argument 2 - anon function with the test
// test('Function should return Hello World', () => {
    // The test
    // expect(???).toBe(???); for strings, numbers, booleans
    // .toEqual for comparing arrays and objects
//     expect(buildString('Hello', 'world')).toBe('Hello world')
// })

describe('buildString', () => {
    test('Function should return Hello World', () => {
        expect(buildString('Hello', 'world')).toBe('Hello world')
    })
    
    test('Function should return JS is weird', () => {
        expect(buildString('JS', 'is', 'weird')).toBe('JS is weird')
    })
    
    test('Function should return JS is NOT weird', () => {
        expect(buildString('JS', 'is', 'not', 'weird')).not.toBe('JS is NOT weird')
    })
    
    test('should throw - No words given', () => {
        expect(() => buildString()).toThrow('No words given')
    })
    
    // test('should throw - No numbers allowed', () => {
    //     expect(() => buildString(1, 2)).toThrow('No numbers allowed')
    // })
})
