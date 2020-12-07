import memoize from "../src/memoize";

const object1 = { "id": 1, "name": "John Doe" }
const object2 = { "id": 2, "name": "Jane Doe" }
const values = memoize(Object.values)

test("Show values", () => {
  expect(values(object1)).toStrictEqual([1,"John Doe"])
  expect(values(object2)).toStrictEqual([2,"Jane Doe"])
})

test("Modify values", () => {
  values.cache.set(object1, [3, 'John Snow'])
  expect(values(object1)).toStrictEqual([3,"John Snow"])
})

test("Replace cache", () => {
  const object3  = { "id": 5, "name": "Nothing Here" }
  const newCache = new WeakMap()
  newCache.set(object3, "")
  memoize.Cache = newCache
  expect(values(object3)).toStrictEqual([5,"Nothing Here"])
})
