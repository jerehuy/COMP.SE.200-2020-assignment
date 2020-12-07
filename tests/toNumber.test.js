import toNumber from "../src/toNumber";

test('Int', () => {
  var a = 1000;
  expect(toNumber(a)).toBe(1000)
})
test('Float', () => {
  var a = 12.5;
  expect(toNumber(a)).toBe(12.5)
})
test('Valid string', () => {
  var a = "16";
  expect(toNumber(a)).toBe(16)
})
test('Invalid string', () => {
  var a = "ksajdasdasd";
  expect(toNumber(a)).toBe(NaN)
})
test('Bool true', () => {
  var a = true;
  expect(toNumber(a)).toBe(1)
})
test('Bool false', () => {
  var a = false;
  expect(toNumber(a)).toBe(0)
})
test('Array with one number to int', () => {
  var a = [1];
  expect(toNumber(a)).toBe(1)
})
test('Array with multiple numbers to int', () => {
  var a = [1, 2];
  expect(toNumber(a)).toBe(NaN)
})
test('Objects', () => {
  var a = {id: 135253};
  expect(toNumber(a)).toBe(NaN)
})
test('Undefined', () => {
  var a = undefined;
  expect(toNumber(a)).toBe(NaN)
})
test('Null', () => {
  var a = null;
  expect(toNumber(a)).toBe(0)
})
test('NaN', () => {
  var a = NaN;
  expect(toNumber(a)).toBe(NaN)
})
test('Infinity to Number', () => {
  var a = Infinity;
  expect(toNumber(a)).toBe(Infinity)
})
test('-Infinity to Finite', () => {
  var a = -Infinity;
  expect(toNumber(a)).toBe(-Infinity)
})
test('Number.MAX_VALUE to Number', () => {
  var a = Number.MAX_VALUE;
  expect(toNumber(a)).toBe(a)
})
test('Number.MIN_VALUE to Number', () => {
  var a = Number.MIN_VALUE;
  expect(toNumber(a)).toBe(a)
})