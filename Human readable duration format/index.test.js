const { assert } = require("chai");
const { formatDuration, beautifyStringSorting, secondsToDurations } = require("./index");

describe("Human readable duration format", () => {
  it("Beautify String Sorting", () => {
    assert.strictEqual(beautifyStringSorting("second", "minute", "year"), "second, minute and year");
  });
  it("Get Durations", () => {
    assert.deepEqual(secondsToDurations(62), ['1 minute', '2 seconds']);
  });
  it("Format Duration", () => {
    assert.strictEqual(formatDuration(1), "1 second");
    assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    assert.strictEqual(formatDuration(120), "2 minutes");
    assert.strictEqual(formatDuration(3600), "1 hour");
    assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

  });
});
