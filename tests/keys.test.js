import keys from '../src/keys.js'

describe("documentation examples", () => {
    function Foo() {
        this.a = 1
        this.b = 2
    }

    Foo.prototype.c = 3

    test("example 1", () => {
        expect(keys(new Foo)).toMatchObject(['a', 'b'])
    })

    test("example 2", () => {
        expect(keys('hi')).toMatchObject(['0', '1'])
    })
})


describe("random arrays", () => {
    const arr = [0,1,2,3,4,5]

    test("random array test", () => {
    expect(keys(arr)).toMatchObject(['0', '1', '2', '3', '4', '5']);
    })
})