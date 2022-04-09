const intervalsCompare = (a, b) => a[0] - b[0];

const calculateDistance = (start, end) => Math.abs(start - end);

function sumIntervals(intervals) {
  const sortedIntervals = intervals.sort(intervalsCompare);
  let left = Number.MIN_SAFE_INTEGER;
  let right = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (const interval of sortedIntervals) {
    const [start, end] = interval;
    if (start > right) {
      sum += calculateDistance(right, left);
      left = start;
      right = end;
    }
    if (end > right) {
      right = end;
    }
  }

  return sum + calculateDistance(right, left);
}

// complexity: N * logN + N => O(N * logN)

module.exports = sumIntervals;