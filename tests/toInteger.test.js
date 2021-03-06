import toInteger from "../src/toInteger";

test('Int to int', () => {
  var a = 1000;
  expect(toInteger(a)).toBe(1000)
})
test('Float to int', () => {
  var a = 12.5;
  expect(toInteger(a)).toBe(Math.floor(Math.abs(a)))
})
test('Valid string to int', () => {
  var a = "16";
  expect(toInteger(a)).toBe(16)
})
test('Invalid string to int', () => {
  var a = "abcde3823u";
  expect(toInteger(a)).toBe(0)
})
test('Bool true to int', () => {
  var a = true;
  expect(toInteger(a)).toBe(1)
})
test('Bool false to int', () => {
  var a = false;
  expect(toInteger(a)).toBe(0)
})
test('Array with one value to int', () => {
  var a = [1];
  expect(toInteger(a)).toBe(1)
})
test('Array with multiple values to int', () => {
  var a = [1, 2];
  expect(toInteger(a)).toBe(0)
})
test('Objects to int', () => {
  var a = {id: 135253};
  expect(toInteger(a)).toBe(0)
})
test('Undefined to int', () => {
  var a = undefined;
  expect(toInteger(a)).toBe(0)
})
test('Null to int', () => {
  var a = null;
  expect(toInteger(a)).toBe(0)
})
test('NaN to int', () => {
  var a = NaN;
  expect(toInteger(a)).toBe(0)
})
test('Infinity to int', () => {
  var a = Infinity;
  expect(toInteger(a)).toBe(1.7976931348623157e+308)
})
test('Number.MAX_VALUE to int', () => {
  var a = Number.MAX_VALUE;
  expect(toInteger(a)).toBe(Math.floor(Math.abs(a)))
})
test('Number.MIN_VALUE to int', () => {
  var a = Number.MIN_VALUE;
  expect(toInteger(a)).toBe(Math.floor(Math.abs(a)))
})