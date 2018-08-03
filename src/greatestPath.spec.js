const GreatestPath = require("./greatestPath");

describe("Greatest Path", () => {
  it("should find the greatest path in a simple matrix", () => {
    const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      expected = { sum: 29, path: [1, 4, 7, 8, 9] };
    expect(GreatestPath.greatestPath(input)).toEqual(expected);
  });

  it("should find the great path through a more complex matrix", () => {
    const input = [[9, 2, 13], [1, 9, 7], [7, 12, 6]],
      expected = { path: [9, 2, 9, 12, 6], sum: 38 };
    expect(GreatestPath.greatestPath(input)).toEqual(expected);
  });

  it("should be able to find the path through a gigantic array before the universe dies of heat death", () => {
    const bigPath = require("./bigPath");
    const input = bigPath.input,
      expected = bigPath.expected;
    expect(GreatestPath.greatestPath(input)).toEqual(expected);
  });
});
