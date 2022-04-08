function validSolution(board = []) {
  // 1) Each row contains unique values from 1-9.
  if (!board.every(row => isUnique(row))) return false;

  // 2) Each column contains unique values from 1-9.
  const resultLoopOnColumns = loopOnColumns(board, isUnique);
  if (resultLoopOnColumns.some(value => value === false)) return false;

  // 3) Each of the 9 sub-squares, of size 3x3, ​contains a unique value from 1-9.
  const resultLoopOnSubArrays = loopOnSubArrays(board, isUnique);
  if (resultLoopOnSubArrays.some(value => value === false)) return false
  return true;
}

function isUnique(arr = []) {
  return !arr.some((value, index) => arr.lastIndexOf(value) !== index);
}

function loopOnSubArrays(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    const row1 = arr[i];
    const row2 = arr[i + 1];
    const row3 = arr[i + 2];
    for (let j = 0; j < row1.length; j += 3) {
      const subRow1 = row1.slice(j, j + 3);
      const subRow2 = row2.slice(j, j + 3);
      const subRow3 = row3.slice(j, j + 3);
      const subArr = [...subRow1, ...subRow2, ...subRow3];
      result.push(cb(subArr));
    }
  }
  return result;
}

function loopOnColumns(arr, cb) {
  return arr.map((row, index) => {
    const col = arr.map((row, i) => row[index])
    return cb(col);
  })
}


// 🚀 short code solution

const loopOnColumns2 = (arr, cb) => arr.map((_, index) => cb(arr.map(row => row[index])));

const isUnique2 = (arr) => !arr.some((value, index) => arr.lastIndexOf(value) !== index);

const validSolution2 = (board = []) =>
  (!board.every(row => isUnique2(row))
    || loopOnColumns2(board, isUnique2).some(value => value === false)
    || getSubArrays2(board).some(subArray => !isUnique2(subArray))
  )
    ? false
    : true;

function getSubArrays2(arr) {
  const subArrays = [];
  for (let i = 0; i < arr.length; i += 3) {
    const [row1, row2, row3] = [arr[i], arr[i + 1], arr[i + 2]];
    for (let j = 0; j < row1.length; j += 3) {
      const [subRow1, subRow2, subRow3] = [row1.slice(j, j + 3), row2.slice(j, j + 3), row3.slice(j, j + 3)];
      subArrays.push([...subRow1, ...subRow2, ...subRow3]);
    }
  }
  return subArrays;
}


const twoDimArray = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

module.exports = validSolution;
