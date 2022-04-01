const { assert } = require("chai");
const curryPartial = require("./index");
const Test = { assertEquals: assert.equal, assertDeepEquals: assert.deepEqual };

describe("curryPartial tests", () => {

  it("Function with three random parameters", function () {

    function add(a, b, c) {
      return a + b + c;
    }

    var a = 1;
    var b = 2;
    var c = 3;
    var sum = a + b + c;

    Test.assertEquals(add(a, b, c), sum);
    Test.assertEquals(curryPartial(add)(a)(b)(c), sum);
    Test.assertEquals(curryPartial(add, a)(b)(c), sum);
    Test.assertEquals(curryPartial(add, a)(b, c), sum);
    Test.assertEquals(curryPartial(add, a, b, c), sum);
    Test.assertEquals(curryPartial(add, a, b, c, 20), sum);
    Test.assertEquals(curryPartial(add)(a, b, c), sum);
    Test.assertEquals(curryPartial(add)()(a, b, c), sum);
    Test.assertEquals(curryPartial(add)()(a)()()(b, c), sum);
    Test.assertEquals(curryPartial(add)()(a)()()(b, c, 5, 6, 7), sum);

    Test.assertEquals(curryPartial(curryPartial(curryPartial(add, a), b), c), sum);
    Test.assertEquals(curryPartial(curryPartial(add, a, b), c), sum);
    Test.assertEquals(curryPartial(curryPartial(add, a), b, c), sum);

    Test.assertEquals(curryPartial(curryPartial(add, a), b)(c), sum);
    Test.assertEquals(curryPartial(curryPartial(add, a)(b), c), sum);

    Test.assertEquals(curryPartial(curryPartial(curryPartial(add, a)), b, c), sum);
  });

  // it("Function with two random parameters", function () {

  //   function add(a, b) {
  //     return a + b;
  //   }

  //   var a = 1;
  //   var b = 2;
  //   var sum = a + b;

  //   Test.assertEquals(add(a, b), sum);
  //   Test.assertEquals(curryPartial(add)(a)(b), sum);
  //   Test.assertEquals(curryPartial(add, a, b), sum);
  //   Test.assertEquals(curryPartial(add, a, b, 20), sum);
  //   Test.assertEquals(curryPartial(add)(a, b), sum);
  //   Test.assertEquals(curryPartial(add)()(a, b), sum);
  //   Test.assertEquals(curryPartial(add)()(a)()()(b), sum);
  //   Test.assertEquals(curryPartial(add)()(a)()()(b, 5, 6, 7), sum);

  //   Test.assertEquals(curryPartial(curryPartial(add, a), b), sum);
  // });

  // it("Function with one random parameter", function () {

  //   function double(a) {
  //     return a * 2;
  //   }

  //   var a = 5;
  //   var result = a * 2;

  //   Test.assertEquals(double(a), result);
  //   Test.assertEquals(curryPartial(double)(a), result);
  //   Test.assertEquals(curryPartial(double, a), result);
  //   Test.assertEquals(curryPartial(double)()(a), result);

  // });


  // it("Function with no parameters", function () {

  //   var a = 5;

  //   function double() {
  //     return a * 2;
  //   }

  //   var result = a * 2;

  //   Test.assertEquals(double(), result);
  //   Test.assertEquals(curryPartial(double), result);

  // });


  // it("Function with four random parameters", function () {

  //   function add(a, b, c, d) {
  //     return 4 * a + 3 * b + 2 * c + d;
  //   }

  //   var a = 4;
  //   var b = 3;
  //   var c = 2;
  //   var d = 1;
  //   var sum = 4 * a + 3 * b + 2 * c + d;

  //   Test.assertEquals(add(a, b, c, d), sum);
  //   Test.assertEquals(curryPartial(add)(a)(b)(c)(d), sum);
  //   Test.assertEquals(curryPartial(add)(a, b)(c)(d), sum);
  //   Test.assertEquals(curryPartial(add, a, b)(c)(d), sum);
  //   Test.assertEquals(curryPartial(add, a, b)(c, d), sum);
  //   Test.assertEquals(curryPartial(curryPartial(add, a, b), c, d), sum);
  //   Test.assertEquals(curryPartial(curryPartial(add, a, b)(c), d), sum);
  //   Test.assertEquals(curryPartial(curryPartial(add, a)(b, c), d), sum);
  //   Test.assertEquals(curryPartial(curryPartial(curryPartial(add, a), b), c, d), sum);
  //   Test.assertEquals(curryPartial(curryPartial(curryPartial(add, a), b), c)(d), sum);
  //   Test.assertEquals(curryPartial(curryPartial(curryPartial(curryPartial(add, a), b), c), d), sum);
  // });

  // it("State isn't preserved", function () {

  //   function add(a, b, c) {
  //     return a + b + c;
  //   }

  //   var add1 = curryPartial(add, 1);
  //   Test.assertEquals(add1(2, 3), 6);
  //   Test.assertEquals(add1(4, 5), 10);

  //   var add2 = curryPartial(add)(2);
  //   Test.assertEquals(add2(3, 4), 9);
  //   Test.assertEquals(add2(5)(6), 13);

  //   var add_ = curryPartial(add);
  //   var it0 = [add_];
  //   var it1 = [].concat(...[0, 1].map(v => it0.map(f => f(v))));
  //   var it2 = [].concat(...[0, 2].map(v => it1.map(f => f(v))));
  //   var it3 = [].concat(...[0, 4].map(v => it2.map(f => f(v))));

  //   Test.assertDeepEquals(it3, [0, 1, 2, 3, 4, 5, 6, 7], 'tree of calls');
  // });
});