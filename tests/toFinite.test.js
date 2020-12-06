import toFinite from "../src/toFinite";

test('Int to Finite', () => {
  var a = 1000;
  expect(toFinite(a)).toBe(1000)
})
test('Float to Finite', () => {
  var a = 12.5;
  expect(toFinite(a)).toBeOneOf([12, 13])
})
test('Valid string to Finite', () => {
  var a = "16";
  expect(toFinite(a)).toBe(16)
})
test('Invalid string to Finite', () => {
  var a = "ksajdasdasd";
  expect(toFinite(a)).toBe(0)
})
test('Bool true to Finite', () => {
  var a = true;
  expect(toFinite(a)).toBe(1)
})
test('Bool false to Finite', () => {
  var a = false;
  expect(toFinite(a)).toBe(0)
})
test('Array with one value to Finite', () => {
  var a = [1];
  expect(toFinite(a)).toBe(1)
})
test('Array with multiple values to Finite', () => {
  var a = [1, 2];
  expect(toFinite(a)).toBe(0)
})
test('Objects to Finite', () => {
  var a = {id: 135253};
  expect(toFinite(a)).toBe(0)
})
test('Undefined to Finite', () => {
  var a = undefined;
  expect(toFinite(a)).toBe(0)
})
test('Null to Finite', () => {
  var a = null;
  expect(toFinite(a)).toBe(0)
})
test('NaN to Finite', () => {
  var a = NaN;
  expect(toFinite(a)).toBe(0)
})