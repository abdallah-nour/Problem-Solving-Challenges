const { expect } = require("chai");
const isValidWalk = require("./index");

describe("Take a Ten Minutes Walk Tests", () => {
  it("simple tests", () => {
    expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
    expect(!isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
    expect(!isValidWalk(['w']), 'should return false');
    expect(!isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');
  });
});
