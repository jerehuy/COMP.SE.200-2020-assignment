import ceil from "../src/ceil";

test('Positive numbers', () => {
  var a = 6.014354345;
  var b = 5;
  expect(ceil(a, b)).toBeCloseTo(6.01436)
})
test('Negative numbers', () => {
  var a = -6.014354345;
  var b = 5;
  expect(ceil(a, b)).toBeCloseTo(-6.01435)
})
test('Precision zero', () => {
  var a = 6.324324234234;
  var b = 0;
  expect(ceil(a, b)).toBe(7)
})
test('Given precision is higher than the precision of the given number', () => {
  var a = 1.5;
  var b = 10;
  expect(ceil(a, b)).toBeCloseTo(1.5)
})
test('Negative precision', () => {
  var a = 6;
  var b = -5;
  expect(ceil(a, b)).toBe(100000)
})
test('Zeroes', () => {
  var a = 0;
  var b = 0;
  expect(ceil(a, b)).toBe(0)
})
test('Undefined', () => {
  var a = undefined;
  var b = undefined;
  expect(ceil(a, b)).toBeNaN()
})

