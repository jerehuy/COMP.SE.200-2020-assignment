import isLength from "../src/isLength";

test('Positive number is length', () => {
  expect(isLength(5)).toBe(true)
})
test('Negative number is not length', () => {
  expect(isLength(-5)).toBe(false)
})
test('Float is not length', () => {
  expect(isLength(1.5)).toBe(false)
})
test('Zero is length', () => {
  expect(isLength(0)).toBe(true)
})
test('Null is not length', () => {
  expect(isLength(null)).toBe(false)
})
test('NaN is not length', () => {
  expect(isLength(NaN)).toBe(false)
})
test('undefined is not length', () => {
  expect(isLength(undefined)).toBe(false)
})
test('Infinity is not length', () => {
  expect(isLength(Infinity)).toBe(false)
})
test('Number MAX is not length', () => {
  expect(isLength(Number.MAX)).toBe(false)
})
test('MAX SAFE INT is length', () => {
  expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(true)
})
test('MAX SAFE INT + 1 is not length', () => {
  expect(isLength(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
})
test('String is not length', () => {
  expect(isLength("1")).toBe(false)
})