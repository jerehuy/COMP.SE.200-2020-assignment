import filter from '../src/filter.js'



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
        expect( filter(users, ({active}) => !active )).toMatchObject([ {'user': 'fred', 'active': false}])
    })
})



describe("more complex data", () => {
    const data = [
        { 'color': 'blue', 'status': true, 'value': NaN},
        { 'color': 'red', 'status': true, 'value': 2 }
    ]

    test("look for value 2", () => {
        expect( filter(data, ({value}) => value==2)).toMatchObject([ {'color': 'red', 'status': true, 'value': 2}])
    })
})


describe("even more complex data", () => {
    const data = [
        {'name': 'john', 'role': 'employee', 'salary': 5000},
        {'name': 'adam', 'role': 'manager', 'salary': 6000}
    ]

    test("look for adam", () => {
        expect(
            filter(data, ({name}) => name=='adam')).toMatchObject([ {'name': 'adam', 'role': 'manager', 'salary': 6000}])
        
    })


    test("look for salary > 4000", () => {
        expect(
            filter(data, ({salary}) => salary > 4000 )).toMatchObject(data)
        
    })

    test("look for somebody who is not there", () => {
        expect(
            filter(data, ({name}) => name=='notHere' )).toMatchObject({})
    })
        

    
})