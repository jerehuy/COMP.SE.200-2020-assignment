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

describe("more complex nested object ", () => {
    const obj = { 'a': [ {'b': {'c': {'d': 2}}}]}

    test("a[0].b.d.c => 2", () =>  {
        expect(at(obj, 'a[0].b.c.d')).toMatchObject([2]);
    })

    const obj2 = { 'a': [ {'b' : {'c' : {'d': {'e' : [1,2,3,4,5]}}}}]}

    test("heavily nested object", () => {
        expect(at(obj2, 'a[0].b.c.d.e[4]')).toMatchObject([5])
    })

    const obj3 = {'a': ['b', 'c', 'd', {'e' : [1,2,3]}, {'f' : [{'target': [1,2,3]}]}]}
    test("2nd heavily nested object with arrays", () => {
        expect(at(obj3, 'a[4].f[0].target[2]')).toMatchObject([3]);
        expect(at(obj3, 'a[3].e[1]')).toMatchObject([2])
    })

})