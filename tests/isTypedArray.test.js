import isTypedArray from "../src/isTypedArray";

test('Arguments is not TypedArray', () => {
  expect(isTypedArray(function(a,b,c) { return arguments }(1,2,3))).toBe(false)
})
test('Function is not TypedArray', () => {
  expect(isTypedArray(function() { return "" })).toBe(false)
})
test('Number is not TypedArray', () => {
  expect(isTypedArray(0.5)).toBe(false)
})
test('BigInt is not TypedArray', () => {
  expect(isTypedArray(64n)).toBe(false)
})
test('String is not TypedArray', () => {
  expect(isTypedArray("Something")).toBe(false)
})
test('Bool is not TypedArray', () => {
  expect(isTypedArray(true)).toBe(false)
})
test('Null is not TypedArray', () => {
  expect(isTypedArray(null)).toBe(false)
})
test('Undefined is not TypedArray', () => {
  expect(isTypedArray(undefined)).toBe(false)
})
test('NaN is not TypedArray', () => {
  expect(isTypedArray(NaN)).toBe(false)
})
test('Symbol is not TypedArray', () => {
  expect(isTypedArray(Symbol("Symbol"))).toBe(false)
})
test('Array is not TypedArray', () => {
  expect(isTypedArray([1,"Two",3])).toBe(false)
})
test('Object is not TypedArray', () => {
  expect(isTypedArray({id: 7, name: "John Doe"})).toBe(false)
})
test('Buffer is TypedArray', () => {
  expect(isTypedArray(Buffer.from("Buffer"))).toBe(true)
})
test('Set is not TypedArray', () => {
  expect(isTypedArray(new Set([0,1,2]))).toBe(false)
})
test('Map is not TypedArray', () => {
  expect(isTypedArray(new Map([[0,1], [1,2]]))).toBe(false)
})
test('Int8Array is TypedArray', () => {
  expect(isTypedArray(new Int8Array())).toBe(true)
})
test('Uint8Array is TypedArray', () => {
  expect(isTypedArray(new Uint8Array())).toBe(true)
})
test('Uint8ClampedArray is TypedArray', () => {
  expect(isTypedArray(new Uint8ClampedArray())).toBe(true)
})
test('Int16Array is TypedArray', () => {
  expect(isTypedArray(new Int16Array())).toBe(true)
})
test('Uint16Array is TypedArray', () => {
  expect(isTypedArray(new Uint16Array())).toBe(true)
})
test('Int32Array is TypedArray', () => {
  expect(isTypedArray(new Int32Array())).toBe(true)
})
test('Uint32Array is TypedArray', () => {
  expect(isTypedArray(new Uint32Array())).toBe(true)
})
test('Float32Array is TypedArray', () => {
  expect(isTypedArray(new Float32Array())).toBe(true)
})
test('Float64Array is TypedArray', () => {
  expect(isTypedArray(new Float64Array())).toBe(true)
})
test('BigInt64Array is TypedArray', () => {
  expect(isTypedArray(new BigInt64Array())).toBe(true)
})
test('BigUint64Array is TypedArray', () => {
  expect(isTypedArray(new BigUint64Array())).toBe(true)
})