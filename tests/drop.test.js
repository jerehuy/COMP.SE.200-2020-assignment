import drop from '../src/drop.js'

describe('documentation examples', () => {
    const a = [1,2,3];
    test('example 1: [1,2,3], no 2nd argument', () => {
        expect (drop(a)).toMatchObject([2,3]);
    })
    

    test('example 2 : [1,2,3], 2nd argument 2', () => {
        expect (drop(a, 2)).toMatchObject([3]);
    })
    

    test('example 3 : [1,2,3], 2nd argument 5', () => {
        expect(drop(a, 5)).toMatchObject([]);
    })

    test('example 4 : [1,2,3], 2nd argument 0', () => {
        expect(drop(a,0)).toMatchObject(a);
    })

})

describe('arrays within arrays', () => {
    const arr = [ [1, 2], [3, 4], [5, 6], [7, 8]];
    test('droping first element, no 2nd argument', () => {
        expect(drop(arr)).toMatchObject([ [3,4], [5,6], [7,8]]);
    })

    test('dropping first element, 2nd arg = 1', () => {
        expect(drop(arr, 1)).toMatchObject([ [3,4], [5,6], [7,8]]);
    })

    test ('dropping 3 elements', () => {
        expect(drop(arr, 3)).toMatchObject([[7,8]]);
    })

    test('dropping 4 elements, empty array left', () => {
        expect(drop(arr, 4)).toMatchObject([]);
    })

    test('dropping 10 elements, empty array left', () => {
        expect(drop(arr, 10)).toMatchObject([]);
    })
})

describe('testing with unusual types (null, undefined, etc)', () => {
    const arr = [NaN, "", null, undefined];
    test('dropping first element, no 2nd argument', () => {
        expect(drop(arr)).toMatchObject(["", null, undefined]);
    })

    test('dropping 3 elements', () => {
        expect(drop(arr, 3)).toMatchObject([undefined]);
    })

    test("dropping all elements", () => {
        expect(drop(arr, 4)).toMatchObject([]);
    })

    test("dropping all elements with 2nd arg = 10", () => {
        expect(drop(arr, 100)).toMatchObject([]);
    })
})


describe('testing dropping from empty arrays', () => {
    const arr = [];
    test('no 2nd arg', () => {
        expect(drop(arr)).toMatchObject([]);
    })

    test('2nd arg = 5', () => {
        expect(drop(arr, 5)).toMatchObject([]);
    })
})