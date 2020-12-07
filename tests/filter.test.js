import filter from '../src/filter.js'


// how is this even supposed to work?
/*
describe('documentation examples', () => {
    const users = [
        { 'user': 'barney', 'active': true},
        { 'user': 'fred', 'active': false}
    ]

    test('documentation example 1', () => {
        expect( filter(users, ( active))).toMatchObject(users['barney']);
    })
})

*/

const users = [
    { 'user': 'barney', 'active': true},
    { 'user': 'fred', 'active': false}
]

describe("documentation examples", () => {


    test("documentation example 1", () => {
        expect( filter(users, ({active}) => active)).toMatchObject([ {'user': 'barney', 'active': true} ])
    })
})

describe("simple tests", () => {
    test("look for fred", () => {
        expect( filter(users, ({active}) => false )).toMatchObject([ {'user': 'fred', 'active': false}])
    })
})



describe("more complex data", () => {
    const data = [
        { 'color': 'blue', 'status': true, 'value': NaN},
        { 'color': 'red', 'status': true, 'value': 2 }
    ]

    test("look for value 2", () => {
        expect( filter(data, ({value}) => 2)).toMatchObject([ {'color': 'red', 'status': true, 'value': 2}])
    })
})


describe("even more complex data", () => {
    const data = [
        {'name': 'john', 'role': 'employee', 'salary': 5000},
        {'name': 'adam', 'role': 'manager', 'salary': 6000}
    ]

    test("look for adam", () => {
        expect(
            filter(data, ({name}) => 'adam')).toMatchObject([ {'name': 'adam', 'role': 'manager', 'salary': 6000}])
        
    })
})