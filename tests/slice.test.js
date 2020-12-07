import slice from '../src/slice.js'

describe("documentation examples", () => {
    var array = [1, 2, 3, 4]

    test("slice(array, 2) => [3,4]", () => {
        expect(slice(array, 2)).toMatchObject([3,4])
    })
})


describe("slicing array (length 6) at different indexes", () => {
    var array = [10.0, 20.0, 30.0, 40.0, 50.0, 60.0]

    test("slice 1st element", () => {
        expect(slice(array, 1)).toMatchObject([20.0, 30.0, 40.0, 50.0, 60.0])
    })

    test("slice 2 first elements,", () => {
        expect(slice(array, 2)).toMatchObject([30.0, 40.0, 50.0, 60.0])
    })

    test("slice 5 first elements", () => {
        expect(slice(array, 5)).toMatchObject([60.0]);
    })


describe("test multiple arguments", () => {
    var array = [10.0, 20.0, 30.0, 40.0, 50.0, 60.0]

    test("array remove 1st and last elements", () => {
        expect( (slice(array, 1, 5))).toMatchObject([20.0, 30.0, 40.0, 50.0])
    })

    test("array remove two last elements", () => {
        expect (slice(array, 0, 4)).toMatchObject([10, 20, 30, 40]);
    })

    test("remove first and last two elements", () => {
        expect( slice(array, 1, 4)).toMatchObject([20, 30, 40])
    })
})


describe("test negative indexes", () => {
    var array = [10.0, 20.0, 30.0, 40.0, 50.0, 60.0]
    test("one negative argument", () => {
        expect(slice(array, -2)).toMatchObject([50, 60])
    })

    test("large negative argument", () => {
        expect(slice(array, -5)).toMatchObject([20,30,40,50,60])
    })

    test("two negative arguments", () => {
        expect(slice(array, -3, -2)).toMatchObject([40])
    })

    test("two negative arguments which should create an empty array", () => {
        expect(slice(array, -3, -3)).toMatchObject([])
    })
})

})