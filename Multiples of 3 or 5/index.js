function getMultiplesBelow(top, ...arr) {
  let result = [];
  for (let index = 0; index < top; index++) {
    const isMultiple = arr.some(value => index % value === 0 ? true : false);
    if (isMultiple) result.push(index);
  }
  return result;
}