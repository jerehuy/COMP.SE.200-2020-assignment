import get from '../src/get.js'

const object = { 'a': [{ 'b': { 'c': 3 } }] }


describe("documentation examples", () => {

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

describe("more complex structures", () => {
    const obj1 = { 'a': [ {'b': {'c': {'d': 2}}}]}
    const obj2 = { 'a': [ {'b' : {'c' : {'d': {'e' : [1,2,3,4,5]}}}}]}
    const obj3 = {'a': ['b', 'c', 'd', {'e' : [1,2,3]}, {'f' : [{'target': [1,2,3]}]}]}


    test("test on obj1",() => {
        expect((get(obj1, 'a[0].b.c.d'))).toBe(2)
    })

    test("test on obj2", () => {
        expect(get(obj2, 'a[0].b.c.d.e[4]')).toBe(5)
    })

    test("test on obj3", () => {
        expect(get(obj3, 'a[3].e[1')).toBe(2)
    })

})