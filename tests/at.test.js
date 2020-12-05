import at from '../src/at.js'

describe("documentation examples,", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

    test("example 1", () => {
        expect(at(object, ['a[0].b.c', 'a[1]'])).toMatchObject([3,4])
    })
})