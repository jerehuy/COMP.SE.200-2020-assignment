import every from '../src/every.js'

import isBoolean from '../src/isBoolean.js'

// I guess predicates used here are the type checking types (is)

describe('documentation examples', () => {
    const arr = [true, 1, null, 'yes'];
    test("[true, 1, null, 'yes'], Boolean) => false", () => {
        expect (every(arr, isBoolean)).toBe(false);
    })

    test("everything is true for empty sets", () => {
        expect(every([], isBoolean)).toBe(true);
    })
})


describe('boolean predicate examples', () => {
    const allTrue = [true, true, true, true];
    const allFalse = [false, false, false, false];
    const flipFlop = [true, false, true, false];
    const mixedTypes = [true, false, "", 123, 1]

    test("testing boolean arrays", () => {
        expect (every(allTrue, isBoolean)).toBe(true);
        expect (every(allFalse, isBoolean)).toBe(true);
        expect (every(flipFlop, isBoolean)).toBe(true);
    })

    test("testing arrays with boolean and other types", () => {
        expect (every(mixedTypes, isBoolean)).toBe(false);
    })
})

