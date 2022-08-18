const { isArray } = Array;

function uniqueInOrder(iterable = []) {
  return [...iterable].filter((value, index) => value !== iterable[index + 1]);
}

function uniqueInOrder2(iterable = []) {
  const iterableArray = isArray(iterable) ? iterable : iterable.split('');
  return iterableArray.filter((value, index) => value !== iterable[index + 1]);
}

module.exports = uniqueInOrder;
