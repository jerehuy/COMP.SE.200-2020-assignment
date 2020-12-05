import reduce from '../src/reduce.js'

import add from '../src/add.js'

describe('documentation examples', () => {
    test("example 1", () => {
        expect( reduce([1,2], add)).toBe(3)
    })
})
