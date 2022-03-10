// a = [1, 2, 3]
//            ^
// b = [1, 2, 3]
//              ^
// result = [1, 1, 2, 2, 3, 3]

function mergesorted(a = [], b = []) {
  let result = [];
  while (a.length && b.length) {
    if (a[0] < b[0]) result.push(a.shift());
    else result.push(b.shift());
  }
  if (a.length) {
    result = [...result, ...a];
  } else if (b.length) {
    result = [...result, ...b];
  }
  console.log(result);
  return result;
}

function mergesorted(a = [], b = []) {
  let result = [];
  while (a.length && b.length) {
    if (a[0] < b[0]) result.push(a.shift());
    else result.push(b.shift());
  }
  return [...result, ...a, ...b];
}

console.log(mergesorted([1, 2, 3], [1, 2, 3])) //should: [1,1,2,2,3,3]

console.log(mergesorted([1], [1])) //should: [1,1]

console.log(mergesorted([1, 2], [3, 4])) //should: [1,2,3,4]

console.log(mergesorted([1, 2], [3])) //should: [1,2,3]

console.log(mergesorted([1], [2, 3])) //should: [1,2,3]