import isEmpty from "../src/isEmpty";

test('Number is empty', () => {
  expect(isEmpty(1)).toBe(true)
})
test('String is not empty', () => {
  expect(isEmpty("Something")).toBe(false)
})
test('Empty String is empty', () => {
  expect(isEmpty("")).toBe(true)
})
test('Bool is empty', () => {
  expect(isEmpty(true)).toBe(true)
})
test('Null is empty', () => {
  expect(isEmpty(null)).toBe(true)
})
test('Undefined is empty', () => {
  expect(isEmpty(undefined)).toBe(true)
})
test('NaN is empty', () => {
  expect(isEmpty(NaN)).toBe(true)
})
test('Symbol is empty', () => {
  expect(isEmpty(Symbol("Symbol"))).toBe(true)
})
test('Array with values is not empty', () => {
  expect(isEmpty([1,"Two",3])).toBe(false)
})
test('Empty Array is empty', () => {
  expect(isEmpty([])).toBe(true)
})
test('Object with values is not empty', () => {
  expect(isEmpty({id: 7, name: "John Doe"})).toBe(false)
})
test('Empty Object is empty', () => {
  expect(isEmpty({})).toBe(true)
})
test('Buffer is not empty', () => {
  expect(isEmpty(Buffer.from("Buffer"))).toBe(false)
})
test('Empty Buffer is empty', () => {
  expect(isEmpty(Buffer.alloc(0))).toBe(true)
})
test('Arguments is not empty', () => {
  expect(isEmpty(function(a,b,c) { return arguments }(1,2,3))).toBe(false)
})
test('Empty Arguments is empty', () => {
  expect(isEmpty(function() { return arguments }())).toBe(true)
})
test('Function is empty', () => {
  expect(isEmpty(function() { return "" })).toBe(true)
})
test('Empty Set is empty', () => {
  expect(isEmpty(new Set())).toBe(true)
})
test('Set with values is not empty', () => {
  expect(isEmpty(new Set([0,1]))).toBe(false)
})
test('Empty Map is empty', () => {
  expect(isEmpty(new Map())).toBe(true)
})
test('Map with values is not empty', () => {
  expect(isEmpty(new Map([[0,1], [1,2]]))).toBe(false)
})
test('Empty Int8Array is empty', () => {
  expect(isEmpty(new Int8Array())).toBe(true)
})

