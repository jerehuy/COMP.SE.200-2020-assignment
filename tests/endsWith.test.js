import endsWith from "../src/endsWith";

describe("documentation examples", () => {
  test("endsWith('abc', 'c') => true", () => {
      expect(endsWith('abc', 'c')).toBe(true)
  })

  test("endsWith('abc', 'b') => false", () => {
      expect(endsWith('abc', 'b')).toBe(false)
  })

  test("endsWith('abc', 'b', 2 => true", () => {
      expect(endsWith('abc', 'b', 2)).toBe(true)
  })
})

test('Position parameter higher than length', () => {
  expect(endsWith("Word", "d", 100)).toBe(true)
})
test('Position parameter negative', () => {
  expect(endsWith("Word", "w", -100)).toBe(false)
})
test('Target parameter contains multiple characters', () => {
  expect(endsWith("Word test", "test")).toBe(true)
})
test('Target parameter equals the whole string', () => {
  expect(endsWith("Word test", "Word test")).toBe(true)
})
test('Target values is blank space', () => {
  expect(endsWith("Word test", " ", 5)).toBe(true)
})
test('Target value upper case, actual character is lower case', () => {
  expect(endsWith("test word", "T", 1)).toBe(false)
})
test('Target value lower case, actual character is upper case', () => {
  expect(endsWith("test woRd", "r", 8)).toBe(false)
})
test('Non-alphanumeric characters', () => {
  expect(endsWith("!\"#¤%&/()=?^*_:;><,.-'¨´+@£$€{[]}€", "!\"#¤%&/()=?^*_:;><,.-'¨´+@£$€{[]}€")).toBe(true)
})
test('Numeric values', () => {
  expect(endsWith("123456789", "9")).toBe(true)
})
test('Undefined', () => {
  expect(endsWith(undefined, "d")).toBe(true)
})
test('Empty target string', () => {
  expect(endsWith("test", "")).toBe(true)
})
test('Empty string and empty target string', () => {
  expect(endsWith("", "")).toBe(true)
})
