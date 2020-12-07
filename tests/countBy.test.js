import countBy from '../src/countBy.js'
import reduce from '../src/reduce.js'

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
 ]


describe("documentation examples", () => {
    test("ex 1", () => {
        expect(countBy(users, value => value.active)).toMatchObject({'true': 2, 'false':1})
    })
        
})



describe("simple cases", () => {
    test("get users", () => {
        expect(countBy(users, value => value.user)).toMatchObject({'barney' : 1, 'betty': 1, 'fred': 1})
    })
})

describe("more complicated cases", () => {
    const data = [
        { 'user': 'asd', 'status': true, 'color': 'red' },
        { 'user': 'tmp', 'status': true, 'color': 'red' },
        { 'user': 'kek', 'status': true, 'color': 'red' },
        { 'user': 'random', 'status': false, 'color': 'blue'}
    ]

    test("get status", () => {
        expect(countBy(data, value => value.status)).toMatchObject({'true' : 3, 'false' : 0})
    })

    test("get colors", () => {
        expect(countBy(data, value => value.color)).toMatchObject({'red' : 3, 'blue': 1})
    })

    test("get users", () => {
        expect(countBy(data, value => value.user)).toMatchObject({'asd': 1, 'tmp': 1, 'kek': 1, 'random' : 1})
    })
})


/*

countBy(users, value => value.active);
 * // => { 'true': 2, 'false': 1 }
 */