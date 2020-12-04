import chunk from '../src/chunk'

const a = ['a', 'b', 'c', 'd']


describe('Documentation examples', () => {
  test('example 1', () => {
    expect( chunk(a, 2)).toMatchObject([ ['a', 'b'], ['c', 'd'] ])
  })


  test('example 2', () => {
  expect( chunk(a, 3)).toMatchObject([ ['a', 'b', 'c'], ['d'] ])
})

})







test('divide into 4 arrays within an array', () => {
  expect (chunk(a, 1)).toMatchObject( [ ['a'], ['b'], ['c'], ['d'] ])
})


describe('Testing the function does not leave undefined values in the arrays', () => {
    const a = ['a', 'b', 'c', 'd']
    const cases = [ [a, 1], [a, 2], [a, 3], [a, 4] ];

    test.each(cases)(
      "%p, %p",
      (firstArg, secondArg) => {
        const result = chunk(firstArg, secondArg);
        expect(result).not.toContain(undefined)
      }
    )
})


describe('corner cases: empty & null arrays', () => {

  test('empty array test with arg 1', () => {
    expect( chunk([], 1)).toMatchObject([])
  })

  test('empty array test with arg 2', () => {
    expect( chunk([])).toMatchObject([])
  })

  test('null as array', () => {
    expect (chunk ([null], 1)).toMatchObject([null])
  })

})

describe('Few expected use cases', () => {
  const arr = [100, 200, 300, 400, 500, 600, 700];
  test('large array into array of single arrays', () => {
    expect (chunk(arr, 1)).toBe([ [100], [200], [300], [400], [500], [600], [700]]);
  })

  test('large array into array of two and one array at the end', () => {
    expect(chunk(arr, 2)).toBe( [ [100, 200], [300, 400], [500, 600], [700]]);
  })

  test('large array into array of three', () => {
    expect(chunk( arr, 3)).toBe( [ [100, 200, 300], [400, 500, 600], [700] ]);
  })
})