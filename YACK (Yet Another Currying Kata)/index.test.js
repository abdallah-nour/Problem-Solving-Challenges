const { assert } = require("chai");
const yack = require("./index");
const Test = { assertEquals: assert.equal };

describe("YACK (Yet Another Currying Kata)", () => {
  it("test", () => {
    function add(a, b, c) {
      return a + b + c;
    }

    Test.assertEquals(yack(add)(1)(2)(3), 6);
    Test.assertEquals(yack(add, 1, 2)(3), 6);
    Test.assertEquals(yack(add)(1, 2)(3), 6);
    Test.assertEquals(yack(add)(1)()()()(2)(3), 6);
    Test.assertEquals(yack(yack(add))(1)(2)(3), 6);
    Test.assertEquals(yack(yack(yack(add)(1)))(2)(3), 6);
    Test.assertEquals(yack(add)(1)(2)(3, 4, 5), 6);

    var curriedAdd1 = yack(add)(1);
    Test.assertEquals(curriedAdd1(2)(3), 6);
    Test.assertEquals(curriedAdd1(2)(4), 7);

    var curriedAdd2 = yack(add);
    var curriedAdd3 = curriedAdd2(1);
    Test.assertEquals(curriedAdd3(2)(3), 6);
    Test.assertEquals(curriedAdd3(2)(4), 7);
    Test.assertEquals(curriedAdd2(5)(2)(3), 10);
  });
});
