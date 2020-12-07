import upperFirst from "../src/upperFirst";

test('First character upper case, others lower case', () => {
  expect(upperFirst("Word")).toBe("Word")
})
test('All characters upper case', () => {
  expect(upperFirst("WORD")).toBe("WORD")
})
test('All characters lower case', () => {
  expect(upperFirst("word")).toBe("Word")
})
test('Empty parameter', () => {
  expect(upperFirst()).toBe('')
})
test('Multiple words', () => {
  expect(upperFirst("word1 word2 word3333")).toBe("Word1 word2 word3333")
})
test('Only numeric characters', () => {
  expect(upperFirst("123456789")).toBe("123456789")
})
test('Only non-alphanumeric characters', () => {
  expect(upperFirst(",.-_!# ¤%&/()=?")).toBe(",.-_!# ¤%&/()=?")
})
test('Undefined', () => {
  expect(upperFirst(undefined)).toBe("")
})
