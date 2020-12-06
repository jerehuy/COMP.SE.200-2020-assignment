import isArrayLikeObject from "../src/isArrayLikeObject";

test('Arguments is ArrayLikeObject', () => {
  expect(isArrayLikeObject(function(a,b,c) { return arguments }(1,2,3))).toBe(true)
})
test('Function is not ArrayLikeObject', () => {
  expect(isArrayLikeObject(function() { return "" })).toBe(false)
})
test('Number is not ArrayLikeObject', () => {
  expect(isArrayLikeObject(0.5)).toBe(false)
})
test('BigInt is not ArrayLikeObject', () => {
  expect(isArrayLikeObject(64n)).toBe(false)
})
test('String is not ArrayLikeObject', () => {
  expect(isArrayLikeObject("Something")).toBe(false)
})
test('Bool is not ArrayLikeObject', () => {
  expect(isArrayLikeObject(true)).toBe(false)
})
test('Null is not ArrayLikeObject', () => {
  expect(isArrayLikeObject(null)).toBe(false)
})
test('Undefined is not ArrayLikeObject', () => {
  expect(isArrayLikeObject(undefined)).toBe(false)
})
test('NaN is not ArrayLikeObject', () => {
  expect(isArrayLikeObject(NaN)).toBe(false)
})
test('Symbol is not ArrayLikeObject', () => {
  expect(isArrayLikeObject(Symbol("Symbol"))).toBe(false)
})
test('Array is ArrayLikeObject', () => {
  expect(isArrayLikeObject([1,"Two",3])).toBe(true)
})
test('Object is not ArrayLikeObject', () => {
  expect(isArrayLikeObject({id: 7, name: "John Doe"})).toBe(false)
})
test('Buffer is ArrayLikeObject', () => {
  expect(isArrayLikeObject(Buffer.from("Buffer"))).toBe(true)
})
test('Set is not ArrayLikeObject', () => {
  expect(isArrayLikeObject(new Set([0,1,2]))).toBe(false)
})
test('Map is not ArrayLikeObject', () => {
  expect(isArrayLikeObject(new Map([[0,1], [1,2]]))).toBe(false)
})
test('Typed array is ArrayLikeObject', () => {
  expect(isArrayLikeObject(new Int8Array())).toBe(true)
})