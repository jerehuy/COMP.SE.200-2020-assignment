import chunk from '../src/chunk'

const abcd = ['a', 'b', 'c', 'd']


test('Chunk documentation example 1', () => {
  expect( chunk(abcd, 2)).toBe([ ['a', 'b'], ['c', 'd'] ])
})


test('Chunk documentation example 2', () => {
  expect( chunk(abcd, 3)).toBe([ ['a', 'b', 'c'], ['d'] ])
})

