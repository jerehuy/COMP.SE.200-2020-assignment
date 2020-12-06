import castArray from "../src/castArray";


test('Int', () => {
  var a = 1000;
  expect(castArray(a)).toStrictEqual([1000])
})
test('Float', () => {
  var a = 12.5;
  expect(castArray(a)).toStrictEqual([12.5])
})
test('String', () => {
  var a = "fdgffdf";
  expect(castArray(a)).toStrictEqual(["fdgffdf"])
})
test('Bool', () => {
  var a = true;
  expect(castArray(a)).toStrictEqual([true])
})
test('Array of integers', () => {
  var a = [1,2,3,4,5];
  expect(castArray(a)).toStrictEqual([1,2,3,4,5])
})
test('Object', () => {
  var a = {id: 135253, name: "John Doe"};
  expect(castArray(a)).toStrictEqual([{id: 135253, name: "John Doe"}])
})
test('Undefined', () => {
  var a = undefined;
  expect(castArray(a)).toStrictEqual([undefined])
})
test('Null', () => {
  var a = null;
  expect(castArray(a)).toStrictEqual([null])
})
test('NaN to int', () => {
  var a = NaN;
  expect(castArray(a)).toStrictEqual([NaN])
})