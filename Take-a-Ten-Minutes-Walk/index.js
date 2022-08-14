function isValidWalk(walk) {
  const sum = { n: 0, s: 0, e: 0, w: 0 };
  walk.map((value) => sum[value]++);
  return walk.length === 10 && sum.n === sum.s && sum.e === sum.w
    ? true
    : false;
}

module.exports = isValidWalk;

// another ways to do it
// sol 1.1
function isValidWalk1(walk) {
  if (walk.length === 10 && isWalkReturnToStartPoint(walk)) return true;
  else return false;
}

function isWalkReturnToStartPoint(walk) {
  const sum = { n: 0, s: 0, e: 0, w: 0 };
  walk.map((value) => sum[value]++);
  return sum.n === sum.s && sum.e === sum.w;
}

// sol 2.0
function isWalkReturnToStartPoint2(walk) {
  const isReturnToVerticalStartPoint =
    walk.filter((v) => ['n'].includes(v)).length ===
    walk.filter((v) => ['s'].includes(v)).length;
  const isReturnToHorizontalStartPoint =
    walk.filter((v) => ['e'].includes(v)).length ===
    walk.filter((v) => ['w'].includes(v)).length;
  return isReturnToVerticalStartPoint && isReturnToHorizontalStartPoint;
}

// sol 3.0
const walkValuesMap = {
  n: 1,
  s: -1,
  e: 1,
  w: -1,
};

function isWalkReturnToStartPoint3(walk) {
  const isReturnToVerticalStartPoint =
    walk.reduce(
      (acc, value) =>
        ['n', 's'].includes(value) ? acc + walkValuesMap[value] : acc,
      0
    ) === 0;
  const isReturnToHorizontalStartPoint =
    walk.reduce(
      (acc, value) =>
        ['e', 'w'].includes(value) ? acc + walkValuesMap[value] : acc,
      0
    ) === 0;
  return isReturnToVerticalStartPoint && isReturnToHorizontalStartPoint;
}
