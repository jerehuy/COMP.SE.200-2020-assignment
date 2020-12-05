import isSymbol from "../src/isSymbol";

test('Argument is not Symbol', () => {
  expect(isSymbol(function(a,b,c) { return arguments }(1,2,3))).toBe(false)
})
test('Function is not Symbol', () => {
  expect(isSymbol(function() { return "" })).toBe(false)
})
test('Number is not Symbol', () => {
  expect(isSymbol(1.4356345)).toBe(false)
})
test('BigInt is not Symbol', () => {
  expect(isSymbol(64n)).toBe(false)
})
test('String is not Symbol', () => {
  expect(isSymbol("Something")).toBe(false)
})
test('Bool is not Symbol', () => {
  expect(isSymbol(false)).toBe(false)
})
test('Null is not Symbol', () => {
  expect(isSymbol(null)).toBe(false)
})
test('Undefined is not Symbol', () => {
  expect(isSymbol(undefined)).toBe(false)
})
test('NaN is not Symbol', () => {
  expect(isSymbol(NaN)).toBe(false)
})
test('Symbol is Symbol', () => {
  expect(isSymbol(Symbol("Symbol"))).toBe(true)
})
test('Array is not Symbol', () => {
  expect(isSymbol([1,"Two",3])).toBe(false)
})
test('Object is not Symbol', () => {
  expect(isSymbol({id: 7, name: "John Doe"})).toBe(false)
})