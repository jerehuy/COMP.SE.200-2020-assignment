import compact from '../src/compact.js'


describe('documentation examples', () => {
  test("[0, 1, false, 2, '', 3] => [1,2,3]", () => {
    expect( compact([0, 1, false, 2, '', 3])).toBe([1,2,3])
  })
})

describe("testing arrays of only false values", () => {
  const cases = [false, null, 0, "", undefined, NaN];
  test.each(cases)(
    "value tested is %p",
    (arg) => {
      var tempArr = [];
      for (let i = 0; i < 5; i++) {
        tempArr.push(arg)
      }
      expect( compact(tempArr)).toMatchObject([])
    }
  )
})


describe("testing arrays of acceptable and removable values", () => {
  const cases = [false, null, 0, "", undefined, NaN];
  test.each(cases)(
    "value tested is %p",
    (arg) => {
      var tempArr = [];
      var expectedArr = [];
      for (let i = 1; i < 10; i++) {
        tempArr.push(i)
        tempArr.push(arg)
        expectedArr.push(i)
      }
      expect( compact(tempArr)).toMatchObject(expectedArr)

    }
  )
})


describe("expected use cases", () => {
  test("simple float array with one removable value in the middle", () => {
    expect(compact([125.42, 125.23, 0, 523.23])).toBe([125.42, 125.23, 523.23])
  })
  
  test("simple integer array, nothing to remove", () => {
    expect( compact([1, 2, 3, 4, 5]) ).toBe([1,2,3,4,5])
  })

  test("empty array", () => {
    expect( compact([])).toMatchObject([]);
  })
  
})