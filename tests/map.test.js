import map from '../src/map.js'


// few functions to use in mapping (also adding bit of testing I guess)
import camelCase from '../src/camelCase.js'
import capitalize from '../src/capitalize.js'

function square(n) {
    return n * n
}

describe("documentation examples", () => {

    test("square testing", () => {
        expect(map([4, 8], square)).toMatchObject([16, 64])
    })
})


describe("camelCase mapping", () => {
    test("documentation strings", () => {
        const arr = ['Foo Bar', '--foo-bar--', '__FOO_BAR__']
        expect(map(arr, camelCase)).toMatchObject(['fooBar', 'fooBar', 'fooBar'])
    })
})

describe("capitalize mapping", () => {
    test("random names", () => {
        const arr = ['FRED', 'capitalizing', 'TUNI', 'tuni', 'test']

        expect(map(arr, capitalize)).toMatchObject(['Fred', 'Capitalizing', 'Tuni', 'Tuni', 'Test'])
    })
})