import isObject from "../src/isObject";

test('Argument is object', () => {
  expect(isObject(function(a,b,c) { return arguments }(1,2,3))).toBe(true)
})
test('Function is object', () => {
  expect(isObject(function() { return "arguments" })).toBe(true)
})
test('Number is not object', () => {
  expect(isObject(1.4356345)).toBe(false)
})
test('BigInt is not object', () => {
  expect(isObject(64n)).toBe(false)
})
test('String is not object', () => {
  expect(isObject("Something")).toBe(false)
})
test('Bool is not object', () => {
  expect(isObject(true)).toBe(false)
})
test('Null is not object', () => {
  expect(isObject(null)).toBe(false)
})
test('Undefined is not object', () => {
  expect(isObject(undefined)).toBe(false)
})
test('NaN is not object', () => {
  expect(isObject(NaN)).toBe(false)
})
test('Symbol is not object', () => {
  expect(isObject(Symbol("Symbol"))).toBe(false)
})
test('Array is object', () => {
  expect(isObject([1,"Two",3])).toBe(true)
})
test('Object is object', () => {
  expect(isObject({id: 7, name: "John Doe"})).toBe(true)
})
test('Empty object is object', () => {
  expect(isObject({})).toBe(true)
})
test('Empty Int8Array is object', () => {
  expect(isObject(new Int8Array())).toBe(true)
})
