import words from "../src/words";

test('Single word, no second param', () => {
  expect(words("one")).toStrictEqual(["one"])
})
test('Multiple words, no second param', () => {
  expect(words("one two three")).toStrictEqual(["one", "two", "three"])
})
test('No params given', () => {
  expect(words()).toStrictEqual([""])
})
test('Words with numeric characters, no second param', () => {
  expect(words("One1 two2 three3 45678")).toStrictEqual(["One1", "two2", "three3", "45678"])
})
test('Numeric characters inside words, no second param', () => {
  expect(words("O1ne tw2o th3ree")).toStrictEqual(["O1ne", "tw2o", "th3ree", "45678"])
})
test('Words with non-alphanumeric characters, no second param', () => {
  expect(words("One. two! three' #¤%&/()=?")).toStrictEqual(["One", "two", "three"])
})
test('Words with custom regex', () => {
  expect(words("One 6783246234", /[a-zA-Z]+/)).toStrictEqual(["One"])
})