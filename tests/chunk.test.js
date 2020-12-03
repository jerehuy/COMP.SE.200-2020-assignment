import chunk from '../src/chunk'

const a = ['a', 'b', 'c', 'd']


test('Chunk documentation example 1', () => {
  expect( chunk(a, 2)).toBe([ ['a', 'b'], ['c', 'd'] ])
})


test('Chunk documentation example 2', () => {
  expect( chunk(a, 3)).toMatchObject([ ['a', 'b', 'c'], ['d'] ])
})


test('divide into 4 arrays within an array', () => {
  expect (chunk(a, 1)).toMatchObject( [ ['a'], ['b'], ['c'], ['d'] ])
})


describe('Sometimes this function adds undefined values to the to the arrays, these tests should reveal those defects', () => {
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




test('empty array test with arg 1', () => {
  expect( chunk([], 1)).toMatchObject([])
})

test('empty array test with arg 2', () => {
  expect( chunk([])).toMatchObject([])
})