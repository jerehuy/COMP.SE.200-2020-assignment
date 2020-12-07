import divide from "../src/divide";

test('Different positive numbers', () => {
  var a = 1;
  var b = 3;
  expect(divide(a, b)).toBeCloseTo(a / b)
})
test('Different negative numbers', () => {
  var a = -10;
  var b = -7;
  expect(divide(a, b)).toBeCloseTo(a / b)
})
test('Same positive numbers', () => {
  var a = 10;
  var b = 10;
  expect(divide(a, b)).toBe(a / b)
})
test('Same negative numbers', () => {
  var a = -5;
  var b = -5;
  expect(divide(a, b)).toBe(a / b)
})
test('Same floats', () => {
  var a = 17.25;
  var b = 17.25;
  expect(divide(a, b)).toBeCloseTo(a / b)
})
test('Different floats', () => {
  var a = 105.54646545;
  var b = 17.25;
  expect(divide(a, b)).toBeCloseTo(a / b)
})
test('Positive and negative numbers', () => {
  var a = -5;
  var b = 20;
  expect(divide(a, b)).toBeCloseTo(a / b)
})
test('Zero divided by zero', () => {
  var a = 0;
  var b = 0;
  expect(divide(a, b)).toBeOneOf([undefined, NaN]);
})
test('Number other than zero divided by zero', () => {
  var a = 10;
  var b = 0;
  expect(divide(a, b)).toBeOneOf([undefined, NaN]);
})
test('Null', () => {
  var a = null;
  var b = null;
  expect(divide(a, b)).toBe(a / b);
})
test('Infinity', () => {
  var a = Infinity;
  var b = Infinity;
  expect(divide(a, b)).toBe(a / b);
})
test('MAX / MIN', () => {
  var a = Number.MAX_VALUE;
  var b = Number.MIN_VALUE;
  expect(divide(a, b)).toBe(a / b);
})
test('NaN', () => {
  var a = Number.NaN;
  var b = Number.NaN;
  expect(divide(a, b)).toBe(a / b);
})