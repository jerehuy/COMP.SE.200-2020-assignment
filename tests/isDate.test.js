import isDate from "../src/isDate";

test('Number is not Date', () => {
  expect(isDate(1000)).toBe(false)
})
test('String is not Date', () => {
  expect(isDate("8.12.2020")).toBe(false)
})
test('Bool is not Date', () => {
  expect(isDate(true)).toBe(false)
})
test('Null is not Date', () => {
  expect(isDate(null)).toBe(false)
})
test('Undefined is not Date', () => {
  expect(isDate(undefined)).toBe(false)
})
test('NaN is not Date', () => {
  expect(isDate(NaN)).toBe(false)
})
test('Object is not Date', () => {
  expect(isDate({day: 8, month: 12, year: 2020})).toBe(false)
})
test('Empty Date is Date', () => {
  expect(isDate(new Date())).toBe(true)
})
test('Valid Date is Date', () => {
  expect(isDate(new Date('December 31, 2020 11:11:11'))).toBe(true)
})
test('Invalid Date is Date', () => {
  expect(isDate(new Date('December 32, 2020 11:11:11'))).toBe(true)
})