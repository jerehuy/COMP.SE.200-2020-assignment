import capitalize from "../src/capitalize";

test('First character upper case, others lower case', () => {
  expect(capitalize("Word")).toBe("Word")
})
test('All characters upper case', () => {
  expect(capitalize("WORD")).toBe("Word")
})
test('All characters lower case', () => {
  expect(capitalize("word")).toBe("Word")
})
test('Multiple words', () => {
  expect(capitalize("word1 word2 word3333")).toBe("Word1 word2 word3333")
})
test('Empty parameter', () => {
  expect(capitalize()).toBe('')
})
test('Only numeric characters', () => {
  expect(capitalize("123456789")).toBe("123456789")
})
test('Only non-alphanumeric characters', () => {
  expect(capitalize(",.-_!# ¤%&/()=?")).toBe(",.-_!# ¤%&/()=?")
})
test('Undefined', () => {
  expect(capitalize(undefined)).toBe("")
})
