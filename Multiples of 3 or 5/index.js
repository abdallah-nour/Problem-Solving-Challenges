function solution(number) {
  const arr = getMultiplesBelow(number, 3, 5);
  if (arr.length === 0) return 0;
  return arr.reduce((acc, current) => acc + current);
}

function getMultiplesBelow(top, ...arr) {
  let result = [];
  for (let index = 0; index < top; index++) {
    const isMultiple = arr.some(value => index % value === 0 ? true : false);
    if (isMultiple) result.push(index);
  }
  return result;
}

// minmum code solution 🚀

function solution_minCode(number) {
  return number <= 0 ? 0 : [...Array(number).keys()]
    .filter(value => value % 3 === 0 || value % 5 === 0)
    .reduce((acc, current) => acc + current);
}

module.exports = solution;