import add from "../src/add";

test('Positive numbers', () => {
  var a = 1;
  var b = 2;
  expect(add(a, b)).toBe(a + b)
})
test('Negative numbers', () => {
  var a = -1;
  var b = -10;
  expect(add(a, b)).toBe(a + b)
})
test('Positive and negative numbers', () => {
  var a = 10;
  var b = -10;
  expect(add(a, b)).toBe(a + b)
})
test('Floats', () => {
  var a = 1.55555;
  var b = 18.2342345;
  expect(add(a, b)).toBeCloseTo(a + b)
})
test('Zeroes', () => {
  var a = 0;
  var b = 0;
  expect(add(a, b)).toBe(a + b)
})
test('Null', () => {
  var a = null;
  var b = null;
  expect(add(a, b)).toBe(a + b)
})
test('Infinity', () => {
  var a = Infinity;
  var b = -Infinity;
  expect(add(a, b)).toBe(a + b)
})
test('MAX + MIN', () => {
  var a = Number.MAX_VALUE;
  var b = Number.MIN_VALUE;
  expect(add(a, b)).toBe(a + b)
})
test('MAX + MAX', () => {
  var a = Number.MAX_VALUE;
  var b = Number.MAX_VALUE;
  expect(add(a, b)).toBe(a + b)
})
test('NaN', () => {
  var a = Number.NaN;
  var b = 1;
  expect(add(a, b)).toBe(a + b)
})


