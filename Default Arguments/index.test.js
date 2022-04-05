const { assert } = require("chai");
const Test = { assertEquals: assert.equal, expect: assert.equal }
const defaultArguments = require("./index");

describe("Tests", () => {
  it("test", () => {
    console.log("function add(a,b) { return a+b; } ; add_ = defaultArguments(add,{b:9})");
    function add(a, b) { return a + b; }
    Test.assertEquals(add(10, 11), 21, "add(10,11)");
    var add_ = defaultArguments(add, { b: 9 });
    Test.assertEquals(add_(10), 19, "add_(10)");
    Test.assertEquals(add_(10, 5), 15, "add_(10,5)");
    Test.assertEquals(defaultArguments(add_, { b: 3, a: 2 })(10), 13, "defaultArguments(add_,{b:3,a:2})(10)");
    Test.assertEquals(defaultArguments(add_, { b: 3, a: 2 })(), 5, "defaultArguments(add_,{b:3,a:2})()");
    Test.assertEquals(defaultArguments(add_, { b: 3, a: 2 })(9, 9), 18, "defaultArguments(add_,{b:3,a:2})(9,9)");
    Test.assertEquals(add(5, 2), 7, "add(5,2)");

    console.log("function add2(x,y) { return x+y; } ; add2_ = defaultArguments(add2,{y:9})");
    function add2(x, y) { return x + y; }
    Test.assertEquals(add2(10, 11), 21, "add2(10,11)");
    var add2_ = defaultArguments(add2, { y: 9 });
    Test.assertEquals(add2_(10), 19, "add2_(10)");
    Test.assertEquals(add2_(10, 5), 15, "add2_(10,5)");
    Test.assertEquals(defaultArguments(add2_, { y: 3, x: 2 })(10), 13, "defaultArguments(add2_,{y:3,x:2})(10)");
    Test.assertEquals(defaultArguments(add2_, { y: 3, x: 2 })(), 5, "defaultArguments(add2_,{y:3,x:2})()");
    Test.assertEquals(defaultArguments(add2_, { y: 3, x: 2 })(9, 9), 18, "defaultArguments(add2_,{y:3,x:2})(9,9)");
    Test.assertEquals(add2(5, 2), 7, "add2(5,2)");

    console.log("function addMore (a,b,c,d,e) {return a + b + c + d + e;}");
    function addMore(a, b, c, d, e) { return a + b + c + d + e; }
    Test.assertEquals(defaultArguments(addMore, { a: 1, b: 2, c: 3, d: 4, e: 5 })(10), 24, "defaultArguments(addMore,{a:1,b:2,c:3,d:4,e:5})(10)");
    Test.assertEquals(defaultArguments(addMore, { a: 1, b: 2, c: 3, d: 4, e: 5 })(10, 10, 10), 39, "defaultArguments(addMore,{a:1,b:2,c:3,d:4,e:5})(10,10,10)");

  });
});
