function snail(array = []) {
  const result = [];
  while (array.length) {
    // add first row
    const firstRow = array.shift();
    result.push(...firstRow);
    // add last element in rows
    if (!array.length) break;
    array.map(subArray => {
      result.push(subArray.pop());
    });

    // add last row
    const lastRow = array.pop();
    result.push(...lastRow.reverse());
    // add first element in rows
    [...array].reverse().map(subArray => {
      result.push(subArray.shift());
    })
  }
  return result;
}

// 🚀 codewars highest rank solution
snail = function (array = [], result = []) {
  while (array.length) {
    result.push(...array.shift());
    if (!array.length) break;

    array.map(subArray => result.push(subArray.pop()));

    result.push(...array.pop().reverse());

    [...array].reverse().map(subArray => result.push(subArray.shift()));
  }
  return result;
}

module.exports = snail