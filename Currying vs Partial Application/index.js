function curryPartial(fn, ...args) {
  if (args.length >= fn.length) return fn(...args);
  return function subCurryPartial(...param) {
    return curryPartial(fn, ...args, ...param)
  };
}

module.exports = curryPartial;
