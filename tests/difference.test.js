import difference from '../src/difference.js'

describe('documentation examples', () => {
    test("difference([2, 1], [2,3]) => [1]", () => {
        expect(difference([2,1], [2,3])).toMatchObject([1]);
    })
})

describe('simple integer tests', () => {
    const arr = [1,2,3,4,5,6];
    test('remove odd numbers', () => {
        expect(difference(arr, [1,3,5])).toMatchObject([2,4,6]);
    })

    test('remove even numbers', () => {
        expect(difference(arr, [2,4,6])).toMatchObject([1,3,5]);
    })

    test('remove everything', () => {
        expect(difference(arr, arr)).toMatchObject([]);
    })

    test('trying to remove more than there actually is', () => {
        expect(difference(arr, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).toMatchObject([])
    })

    test('trying to remove with NaN, undefined, and null', () => {
        expect(difference(arr, [undefined, NaN, null])).toMatchObject(arr);
    })
})

describe('string tests', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];

    test('remove b', () => {
        expect(difference(arr, ['b'])).toMatchObject(['a', 'c', 'd', 'e']);
    })

    test('remove a, c, e', () => {
        expect(difference(arr, ['a', 'c', 'e'])).toMatchObject(['b', 'd']);
    })

    test('difference testing with undefined types', () => {
        expect(difference(arr, [undefined, NaN, null])).toMatchObject(arr);
    })

})

describe("difference of empty arrays", () => {
    const arr = [];
    test('remove empty from empty', () => {
        expect(difference(arr, [])).toMatchObject([]);
    })

    test('remove int from empty', () => {
        expect(difference(arr, [1,2,3])).toMatchObject([]);
    })

    test('remove string from empty', () => {
        expect(difference(arr, ['a', 'b', 'random'])).toMatchObject([]);
    })

    test('difference of odd (NaN, null, undefined) types', () => {
        expect(difference(arr, [NaN, null, "", '', undefined])).toMatchObject([]);
    })
})

describe("simple multiarray differences", () => {
    const arr = [ [1,2], [3,4], [5,6] ];

    test('remove [1,2]', () => {
        expect(difference(arr, [1,2])).toMatchObject[ [3,4], [5,6]];
    })

    test('remove multiple elements', () => {
        expect(difference(arr, [[1,2], [5,6]])).toMatchObject([[3,4]])
    })

    test('remove undefined types from multiarrays', () => {
        expect(difference(arr, [NaN, null, undefined])).toMatchObject(arr);
    })

    test('remove undefined multiarray from target', () => {
        expect(difference(arr, [ [undefined, undefined]])).toMatchObject(arr);
    })
})

describe("test undefined types and", () => {
    const arr = [undefined, null, NaN, ""];
    test('remove undefined types from array', () => {
        expect(difference(arr, [undefined])).toMatchObject([null, NaN, ""]);
    })

    test('difference of same array', () => {
        expect(difference(arr, arr)).toMatchObject([]);
    })
})