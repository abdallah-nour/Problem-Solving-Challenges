const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('sumIntervals', function () {

  it('should return the correct sum for non overlapping intervals', function () {
    let noOverlaps = [
      { intervals: [[1, 5]], sum: 4 },
      {
        intervals: [
          [1, 5],
          [6, 10]
        ], sum: 8
      },
      {
        intervals: [
          [11, 15],
          [6, 10],
          [1, 2]
        ], sum: 9
      }
    ];
    for (let i = 0; i < noOverlaps.length; i++) {
      assert.strictEqual(sumIntervals(noOverlaps[i].intervals), noOverlaps[i].sum);
    }
  });

  it('should return the correct sum for overlapping intervals', function () {
    let overlaps = [
      {
        intervals: [
          [1, 5],
          [1, 5]
        ], sum: 4
      },
      {
        intervals: [
          [1, 5],
          [5, 10]
        ], sum: 9
      },
      {
        intervals: [
          [1, 4],
          [3, 6],
          [5, 8],
          [7, 10],
          [9, 12]
        ], sum: 11
      },
      {
        intervals: [
          [1, 4],
          [7, 10],
          [3, 5]
        ], sum: 7
      },
      {
        intervals: [
          [1, 20],
          [2, 19],
          [5, 15],
          [8, 12]
        ], sum: 19
      },
      {
        intervals: [
          [1, 5],
          [10, 20],
          [1, 6],
          [16, 19],
          [5, 11]
        ], sum: 19
      },
      {
        intervals: [
          [2, 3],
          [2, 6],
          [2, 4],
          [2, 9],
          [2, 5]
        ], sum: 7
      }
    ];
    for (let i = 0; i < overlaps.length; i++) {
      assert.strictEqual(sumIntervals(overlaps[i].intervals), overlaps[i].sum);
    }
  });

});

describe("Random tests", function () {
  const randint = (a, b) => a + ~~(Math.random() * (b - a + 1));

  function solution(intervals) {
    intervals = intervals.slice().sort((a, b) => a[0] - b[0]);
    let s = 0, r = intervals[0][0];
    for (let i = 0; i < intervals.length; i++) {
      const interval = intervals[i];
      if (r <= interval[0]) {
        s += interval[1] - interval[0];
        r = interval[1];
      }
      else if (r <= interval[1]) {
        s += interval[1] - r;
        r = interval[1];
      }
    }
    return s;
  }

  function tests(nTests, min, max, minLen, maxLen) {
    for (let i = 0; i < nTests; i++) {
      const intervals = [];
      for (let j = randint(minLen, maxLen); j; j--) {
        const x = randint(min, max);
        const y = randint(min, max);
        if (y < x) {
          intervals.push([y, x]);
        }
        else if (y === x) {
          intervals.push([x, y + 1]);
        }
        else {
          intervals.push([x, y]);
        }
      }
      const expected = solution(intervals);
      assert.strictEqual(sumIntervals(intervals), expected);
    }
  }

  it("Small Random Tests", () => tests(100, -20, 20, 1, 10));
  it("Large Random Tests", () => tests(100, -1e9, 1e9, 20000, 50000));
});