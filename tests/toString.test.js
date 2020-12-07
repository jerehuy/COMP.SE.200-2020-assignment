import toStr from "../src/toString";

test('Number to string', () => {
  var a = 15.25235;
  expect(toStr(a)).toBe("15.25235")
})
test('String to string', () => {
  var a = "Something";
  expect(toStr(a)).toBe("Something")
})
test('Bool to string', () => {
  var a = true;
  expect(toStr(a)).toBe("true")
})

test('Array to string', () => {
  var a = [1,2,3,4,5];
  expect(toStr(a)).toBe("1,2,3,4,5")
})
test('Objects to string', () => {
  var a = {id: 1, name: "John Doe"};
  expect(toStr(a)).toBe("[object Object]")
})
test('Object values to string', () => {
  var a = {id: 1, name: "John Doe"};
  expect(toStr(a.id)).toBe("1")
})
test('Undefined to string', () => {
  var a = undefined;
  expect(toStr(a)).toBe("undefined")
})
test('Null to string', () => {
  var a = null;
  expect(toStr(a)).toBe("null")
})
test('NaN to string', () => {
  var a = NaN;
  expect(toStr(a)).toBe("NaN")
})
test('Symbol to string', () => {
  var a = Symbol("Symbol");
  expect(toStr(a)).toBe("Symbol(Symbol)")
})