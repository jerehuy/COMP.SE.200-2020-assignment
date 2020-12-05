import at from '../src/at.js'

describe("documentation examples,", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

    test("example 1", () => {
        expect(at(object, ['a[0].b.c', 'a[1]'])).toMatchObject([3,4])
    })
})


describe("simple object testing", () => {
    const obj1 = { 'a': [1, 2, 3]}
    
    test("a[0] => 1", () => {
        expect(at(obj1, ['a[0]'])).toMatchObject([1])
    })

    test("a[2] => 3", () => {
        expect(at(obj1, ['a[2]'])).toMatchObject([3])
    })
})