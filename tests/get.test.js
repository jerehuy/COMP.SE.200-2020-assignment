import get from '../src/get.js'


describe("documentation examples", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }

    test("example 1", () => {
        expect(get(object, 'a[0].b.c')).toBe(3)
    })

    test("example 2", () => {
        expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
    })

    test("example 3", () => {
        expect(get(object, 'a.b.c', 'default')).toBe('default')
    })

})

