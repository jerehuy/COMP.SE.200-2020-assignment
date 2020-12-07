import defaultTo from '../src/defaultTo.js'

describe("documentation examples", () => {
    test("defaultTo(1, 10) => 1", () => {
        expect(defaultTo(1, 10)).toBe(1);
    })

    test("defaultTo(undefined, 10) => 10", () => {
        expect(defaultTo(undefined, 10)).toBe(10)
    })
})

describe("corner cases", () => {
    test("0 shoudln't default", () => {
        expect(defaultTo(0, 1)).toBe(0)
    })

    test("NaN should default", () => {
        expect(defaultTo(NaN, 1)).toBe(1)
    })

    test("undefined should default", () => {
        expect(defaultTo(undefined, 1)).toBe(1)
    })

    test("undefined should default", () => {
        expect(defaultTo(null, 1)).toBe(1)
    })

    test("string '0' should defaultTo to default value", () => {
        expect(defaultTo("0", 1)).toBe("0")
    })

    test("string '10' should default to default value", () => {
        expect(defaultTo("10", 1)).toBe("10")
    })

    test("all parameters null", () => {
        expect(defaultTo(null, null)).toBe(null)
    })

    test("parameters null, default to NaN", () => {
        expect(defaultTo(null, NaN)).toBe(NaN)
    })
})
