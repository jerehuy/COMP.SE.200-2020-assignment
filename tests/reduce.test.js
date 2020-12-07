import reduce from '../src/reduce.js'

describe('documentation examples ', () => {
    test("example 1", () => {
        expect( reduce([1,2], (sum, n) => sum + n, 0)).toBe(3)
    })

    test("example 2", () => {
        expect(
        reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
            return result
        }, {})
        ).toMatchObject({'1': ['a', 'c'], '2':['b'] })
    })
})


describe("testing argument functionality", () => {
    test("accumulator at 10", () => {
        expect( reduce([1,2,3,4], (sum, n) => sum + n, 10)).toBe(20)
    })

    test("accumulator is negative", () => {
        expect( reduce([1,2,3,4], (sum, n) => sum + n, -10)).toBe(0)
    })

    test("array values are negative", () => {
        expect( reduce([-1,-2,-3,-4], (sum, n) => sum + n, 0)).toBe(-10)
    })

    test("product", () => {
        expect( reduce([1,2,3,4], (product, n) => product * n, 1)).toBe(24)
    })
})

describe("concat strings", () => {
    const arr = ['abc', 'qwe', 'hjkl']

    test("concat ex 1", () => {
        expect( reduce(arr, (tmp, n) => tmp.concat(n), "")).toBe('abcqwehjkl')
    })
})