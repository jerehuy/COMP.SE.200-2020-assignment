import camelCase from "../src/camelCase";

test('Empty parameter', () => {
  expect(camelCase()).toBe("")
})
test('Parameter already in camelCase', () => {
  expect(camelCase("testOne")).toBe("testOne")
})
test('Single word, first letter upper case', () => {
  expect(camelCase("Test")).toBe("test")
})
test('Single word, first letter lower case', () => {
  expect(camelCase("test")).toBe("test")
})
test('Two words, both lower case', () => {
  expect(camelCase("test one")).toBe("testOne")
})
test('Two words, both upper case', () => {
  expect(camelCase("TEST ONE")).toBe("testOne")
})
test('Two words, the first word starts with lower case, the second one with upper case', () => {
  expect(camelCase("test One")).toBe("testOne")
})
test('Two words, the first word starts with upper case, the second one with lower case', () => {
  expect(camelCase("Test one")).toBe("testOne")
})
test('More than two words', () => {
  expect(camelCase("test one two")).toBe("testOneTwo")
})
test('Non-alphanumeric characters before and after words', () => {
  expect(camelCase("_test!!!one?two.-*¨^,;:<>()=|/+-#¤€%&@£$€{[]}")).toBe("testOneTwo")
})
test('Numeric characters only', () => {
  expect(camelCase("123 456 789")).toBe("123456789")
})
test('Numeric characters before and after words', () => {
  expect(camelCase("test2one3two4")).toBe("test2One3Two4")
})
test('Skandinavian alphabets', () => {
  expect(camelCase("test öne åne")).toBe("testÖneÅne")
})
test('White space before and after word', () => {
  expect(camelCase("  test One  ")).toBe("testOne")
})


