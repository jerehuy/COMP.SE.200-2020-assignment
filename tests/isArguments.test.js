import isArguments from "../src/isArguments";

test('Arguments is Arguments object', () => {
  expect(isArguments(function(a,b,c) { return arguments }(1,2,3))).toBe(true)
})
test('Function is not Arguments object', () => {
  expect(isArguments(function() { return "" })).toBe(false)
})
test('Number is not Arguments object', () => {
  expect(isArguments(1.4356345)).toBe(false)
})
test('BigInt is not Arguments object', () => {
  expect(isArguments(64n)).toBe(false)
})
test('String is not Arguments object', () => {
  expect(isArguments("Something")).toBe(false)
})
test('Bool is not Arguments object', () => {
  expect(isArguments(true)).toBe(false)
})
test('Null is not Arguments object', () => {
  expect(isArguments(null)).toBe(false)
})
test('Undefined is not Arguments object', () => {
  expect(isArguments(undefined)).toBe(false)
})
test('NaN is not Arguments object', () => {
  expect(isArguments(NaN)).toBe(false)
})
test('Symbol is not Arguments object', () => {
  expect(isArguments(Symbol("Symbol"))).toBe(false)
})
test('Array is not Arguments object', () => {
  expect(isArguments([1,"Two",3])).toBe(false)
})
test('Object is not Arguments object', () => {
  expect(isArguments({id: 7, name: "John Doe"})).toBe(false)
})