import isBuffer from "../src/isBuffer";

test('Arguments is not Buffer', () => {
  expect(isBuffer(function(a,b,c) { return arguments }(1,2,3))).toBe(false)
})
test('Function is not Buffer', () => {
  expect(isBuffer(function() { return "" })).toBe(false)
})
test('Number is not Buffer', () => {
  expect(isBuffer(0.5)).toBe(false)
})
test('BigInt is not Buffer', () => {
  expect(isBuffer(64n)).toBe(false)
})
test('String is not Buffer', () => {
  expect(isBuffer("Something")).toBe(false)
})
test('Bool True is not Buffer', () => {
  expect(isBuffer(true)).toBe(false)
})
test('Null is not Buffer', () => {
  expect(isBuffer(null)).toBe(false)
})
test('Undefined is not Buffer', () => {
  expect(isBuffer(undefined)).toBe(false)
})
test('NaN is not Buffer', () => {
  expect(isBuffer(NaN)).toBe(false)
})
test('Symbol is not Buffer', () => {
  expect(isBuffer(Symbol("Symbol"))).toBe(false)
})
test('Array is not Buffer', () => {
  expect(isBuffer([1,"Two",3])).toBe(false)
})
test('Object is not Buffer', () => {
  expect(isBuffer({id: 7, name: "John Doe"})).toBe(false)
})
test('Buffer is Buffer', () => {
  expect(isBuffer(Buffer.from("Buffer"))).toBe(true)
})
test('Empty Buffer is Buffer', () => {
  expect(isBuffer(Buffer.alloc(0))).toBe(true)
})
test('Typed array is not Buffer', () => {
  expect(isBuffer(new Int8Array())).toBe(false)
})