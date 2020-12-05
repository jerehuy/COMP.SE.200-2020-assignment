import isObjectLike from "../src/isObjectLike";

test('Arguments is ObjectLike', () => {
  expect(isObjectLike(function(a,b,c) { return arguments }(1,2,3))).toBe(true)
})
test('Function is not ObjectLike', () => {
  expect(isObjectLike(function() { return "arguments" })).toBe(false)
})
test('Number is not ObjectLike', () => {
  expect(isObjectLike(1.4356345)).toBe(false)
})
test('BigInt is not ObjectLike', () => {
  expect(isObjectLike(64n)).toBe(false)
})
test('String is not ObjectLike', () => {
  expect(isObjectLike("Something")).toBe(false)
})
test('Bool is not ObjectLike', () => {
  expect(isObjectLike(true)).toBe(false)
})
test('Null is not ObjectLike', () => {
  expect(isObjectLike(null)).toBe(false)
})
test('Undefined is not ObjectLike', () => {
  expect(isObjectLike(undefined)).toBe(false)
})
test('NaN is not ObjectLike', () => {
  expect(isObjectLike(NaN)).toBe(false)
})
test('Symbol is not ObjectLike', () => {
  expect(isObjectLike(Symbol("Symbol"))).toBe(false)
})
test('Array is ObjectLike', () => {
  expect(isObjectLike([1,"Two",3])).toBe(true)
})
test('Object is ObjectLike', () => {
  expect(isObjectLike({id: 7, name: "John Doe"})).toBe(true)
})
test('Empty object is ObjectLike', () => {
  expect(isObjectLike({})).toBe(true)
})
test('Empty Int8Array is ObjectLike', () => {
  expect(isObjectLike(new Int8Array())).toBe(true)
})