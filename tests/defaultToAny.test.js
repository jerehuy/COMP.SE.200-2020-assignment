import defaultTo from '../src/defaultTo.js'
import defaultToAny from '../src/defaultToAny.js'

describe("documentation examples", () => {
    test("defaultToAny(1, 10, 20) => 1", () => {
        expect(defaultToAny(1, 10, 20)).toBe(1)
    })

    test("defaultToAny(undefined, 10, 20) => 10", () => {
        expect(defaultToAny(undefined, 10, 20)).toBe(10)
    })

    test("defaultToAny(undefined, null, 20) => 20", () => {
        expect(defaultToAny(undefined, null, 20)).toBe(20)
    })

    test("defaultToAny(undefined, null, NaN) => NaN", () => {
        expect(defaultToAny(undefined, null, NaN)).toBe(NaN)
    })
})