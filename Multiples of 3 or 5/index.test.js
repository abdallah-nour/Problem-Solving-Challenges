const { assert } = require("chai")
const solution = require("./index");

describe("Multiples of 3 or 5", function () {
  {
    let actual = solution(10)
    it.only(`Expected ${23}, got ${actual}`, () => {
      assert.strictEqual(actual, 23)
    })
  }
  {
    let actual = solution(2)
    it.only(`Expected ${23}, got ${actual}`, () => {
      assert.strictEqual(actual, 0)
    })
  }
})
