function add(x, y, z) {
  return x + y + z;
}

function yack(fn, ...args) {
  if (args.length >= fn.length) return fn(...args);
  return (...params) => { return yack(fn, ...args, ...params); }
}

var curriedAdd = yack(add);
console.log(curriedAdd(1)(2)(3));

module.exports = yack;