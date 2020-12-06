import eq from "../src/eq";

test('Same ints are equal', () => {
  var a = 1;
  var b = 1;
  expect(eq(a, b)).toBe(true)
})
test('Different ints are not equal', () => {
  var a = 1;
  var b = 2;
  expect(eq(a, b)).toBe(false)
})

test('Same floats are equal', () => {
  var a = 1.5;
  var b = 1.5;
  expect(eq(a, b)).toBe(true)
})
test('Different floats are not equal', () => {
  var a = 1.5;
  var b = 1.6;
  expect(eq(a, b)).toBe(false)
})

test('Same string are equal', () => {
  var a = "Something";
  var b = "Something";
  expect(eq(a, b)).toBe(true)
})
test('Different strings are not equal', () => {
  var a = "Something";
  var b = "Something else";
  expect(eq(a, b)).toBe(false)
})
test('Same string and int are equal', () => {
  var a = 1;
  var b = "1";
  expect(eq(a, b)).toBe(true)
})
test('Different string and int are not equal', () => {
  var a = 1;
  var b = "qwerrt";
  expect(eq(a, b)).toBe(false)
})
test('Objects with same values are not equal', () => {
  var a = {id: 1, name: "John Doe"};
  var b = {id: 1, name: "John Doe"};
  expect(eq(a, b)).toBe(false)
})
test('Objects with same reference are equal', () => {
  var a = {id: 1, name: "John Doe"};
  var b = a;
  expect(eq(a, b)).toBe(true)
})
test('Undefined and null are equal', () => {
  var a = undefined;
  var b = null;
  expect(eq(a, b)).toBe(true)
})
test('Undefined and NaN are not equal', () => {
  var a = undefined;
  var b = NaN;
  expect(eq(a, b)).toBe(false)
})
test('null and NaN are not equal', () => {
  var a = null;
  var b = NaN;
  expect(eq(a, b)).toBe(false)
})

