import isBoolean from "../src/isBoolean";

test('Arguments is not Bool', () => {
  expect(isBoolean(function(a,b,c) { return arguments }(1,2,3))).toBe(false)
})
test('Function  is not Bool', () => {
  expect(isBoolean(function() { return "" })).toBe(false)
})
test('Number 0 is not Bool', () => {
  expect(isBoolean(0)).toBe(false)
})
test('Number 1 is not Bool', () => {
  expect(isBoolean(1)).toBe(false)
})
test('BigInt is not Bool', () => {
  expect(isBoolean(64n)).toBe(false)
})
test('String is not Bool', () => {
  expect(isBoolean("Something")).toBe(false)
})
test('Bool True is Bool', () => {
  expect(isBoolean(true)).toBe(true)
})
test('Bool False is Bool', () => {
  expect(isBoolean(false)).toBe(true)
})
test('Null is not Bool', () => {
  expect(isBoolean(null)).toBe(false)
})
test('Undefined is not Bool', () => {
  expect(isBoolean(undefined)).toBe(false)
})
test('NaN is not Bool', () => {
  expect(isBoolean(NaN)).toBe(false)
})
test('Symbol is not Bool', () => {
  expect(isBoolean(Symbol("Symbol"))).toBe(false)
})
test('Array is not Bool', () => {
  expect(isBoolean([1,"Two",3])).toBe(false)
})
test('Object is not Bool', () => {
  expect(isBoolean({id: 7, name: "John Doe"})).toBe(false)
})