import clamp from "../src/clamp";

test('Clamped number smaller than lower boundary', () => {
  var a = 1;
  var b = 2;
  var c = 3;
  expect(clamp(a, b, c)).toBe(b)
})
test('Clamped number higher than upper boundary', () => {
  var a = 4;
  var b = 2;
  var c = 3;
  expect(clamp(a, b, c)).toBe(c)
})
test('Clamped number inside boundaries', () => {
  var a = 5;
  var b = -1000
  var c = 6;
  expect(clamp(a, b, c)).toBe(a)
})
test('Clamped number same as lower boundary', () => {
  var a = 5;
  var b = 5
  var c = 6;
  expect(clamp(a, b, c)).toBe(a)
})
test('Clamped number same as upper boundary', () => {
  var a = 6;
  var b = 5
  var c = 6;
  expect(clamp(a, b, c)).toBe(a)
})
test('Upper boundary lower than lower boundary', () => {
  var a = 50;
  var b = 200
  var c = 100;
  expect(clamp(a, b, c)).toThrow();
})
test('Floats', () => {
  var a = 222.211;
  var b = 222.222
  var c = 222.333;
  expect(clamp(a, b, c)).toBeCloseTo(b)
})
test('Infinity', () => {
  var a = Infinity;
  var b = Number.MIN_VALUE;
  var c = Number.MAX_VALUE;
  expect(clamp(a, b, c)).toBe(c)
})
test('-Infinity', () => {
  var a = -Infinity;
  var b = Number.MIN_VALUE;
  var c = Number.MAX_VALUE;
  expect(clamp(a, b, c)).toBe(b)
})