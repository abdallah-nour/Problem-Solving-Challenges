function validParentheses(parens = "") {
  const stack = parens.split("");
  const openParenthesesStack = [];
  for (let i = 0; i < stack.length; i++) {
    const value = stack[i];
    if (isOpenParentheses(value)) openParenthesesStack.push(value)
    else if (openParenthesesStack.length === 0) return false;
    else openParenthesesStack.pop();
  }
  return openParenthesesStack.length === 0
}

// 🚀 short code
function validParentheses2(parens = "") {
  const stack = parens.split("");
  const openParenthesesStack = [];
  let isValid = true;
  stack.map(value => {
    if (isOpenParentheses(value)) openParenthesesStack.push(value)
    else if (openParenthesesStack.length === 0) isValid = false;
    else openParenthesesStack.pop();
  })
  return isValid === true && openParenthesesStack.length === 0;
}

function isOpenParentheses(str = "") { return ["(", "[", "{"].includes(str) };

function isCloseParentheses(str = "") { return [")", "]", "}"].includes(str) };

function isValidCloseOpenParentheses(open, close) {
  return [["(", ")"], ["[", "]"], ["{", "}"]].some(parens => parens[0] === open && parens[1] === close);
};

module.exports = validParentheses;
