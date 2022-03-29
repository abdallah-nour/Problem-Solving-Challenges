const { assert } = require('chai');
const validParentheses = require("./index");

describe("Valid Parentheses", () => {
  it(`values: "("`, () => assert.strictEqual(validParentheses("("), false));
  it(`values: ")"`, () => assert.strictEqual(validParentheses(")"), false));
  it(`values: ""`, () => assert.strictEqual(validParentheses(""), true));
  it(`values: "()"`, () => assert.strictEqual(validParentheses("()"), true));
  it(`values: "())"`, () => assert.strictEqual(validParentheses("())"), false));
  it(`values: "(()())"`, () => assert.strictEqual(validParentheses("(()())"), true));
  it(`values: ")(()))"`, () => assert.strictEqual(validParentheses(")(()))"), false));
  it(`values: "(())((()())())"`, () => assert.strictEqual(validParentheses("(())((()())())"), true));
});


