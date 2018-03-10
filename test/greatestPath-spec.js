const chai = require("chai")

const greatestPath = require("../src/towers").greatestPath

const expect = chai.expect

describe("Greatest Path", () => {
  it("should find the greatest path in a simple matrix", () => {
    const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      expected = { sum: 29, path: [1, 4, 7, 8, 9] }
    expect(greatestPath(input)).to.eq(expected)
  })

  it("should find the great path through a more complex matrix", () => {
    const input = [[9, 2, 13], [1, 9, 7], [7, 12, 6]],
      expected = {path: [9, 2, 9, 12, 6], sum: 38}
    expect(greatestPath(input)).to.eq(expected)
  })
})
