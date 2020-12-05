import isArrayLike from "../src/isArrayLike";

test('Arguments is ArrayLike', () => {
  expect(isArrayLike(function(a,b,c) { return arguments }(1,2,3))).toBe(true)
})
test('Function is not ArrayLike', () => {
  expect(isArrayLike(function() { return "" })).toBe(false)
})
test('Number is not ArrayLike', () => {
  expect(isArrayLike(0.5)).toBe(false)
})
test('BigInt is not ArrayLike', () => {
  expect(isArrayLike(64n)).toBe(false)
})
test('String is ArrayLike', () => {
  expect(isArrayLike("Something")).toBe(true)
})
test('Bool is not ArrayLike', () => {
  expect(isArrayLike(true)).toBe(false)
})
test('Null is not ArrayLike', () => {
  expect(isArrayLike(null)).toBe(false)
})
test('Undefined is not ArrayLike', () => {
  expect(isArrayLike(undefined)).toBe(false)
})
test('NaN is not ArrayLike', () => {
  expect(isArrayLike(NaN)).toBe(false)
})
test('Symbol is not ArrayLike', () => {
  expect(isArrayLike(Symbol("Symbol"))).toBe(false)
})
test('Array is ArrayLike', () => {
  expect(isArrayLike([1,"Two",3])).toBe(true)
})
test('Object is not ArrayLike', () => {
  expect(isArrayLike({id: 7, name: "John Doe"})).toBe(false)
})
test('Buffer is ArrayLike', () => {
  expect(isArrayLike(Buffer.from("Buffer"))).toBe(true)
})
test('Set is not ArrayLike', () => {
  expect(isArrayLike(new Set([0,1,2]))).toBe(false)
})
test('Map is not ArrayLike', () => {
  expect(isArrayLike(new Map([[0,1], [1,2]]))).toBe(false)
})
test('Typed array is ArrayLike', () => {
  expect(isArrayLike(new Int8Array())).toBe(true)
})