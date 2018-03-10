const chai = require("chai")

const Tower = require("../src/towers")

const expect = chai.expect

describe("Tower", () => {
  it("should return false for an empty array", () => {
    const input = [],
      expected = false

    expect(Tower.canEscape(input)).to.eql(expected)
  })

  it("should return false with array of length 1 with a value of 0", () => {
    const input = [0],
      expected = false

    expect(Tower.canEscape(input)).to.eql(expected)
  })

  it("should return true with an array of length 1 and a value of 1", () => {
    const input = [1],
      expected = true

    expect(Tower.canEscape(input)).to.eql(expected)
  })

  it("should return true for escapable array stemming from greedy first index", () => {
    const input = [3, 0, 0, 2, 0, 1],
      expected = true

    expect(Tower.canEscape(input)).to.eql(expected)
  })

  it("should return true for escapable array with non-greedy approach", () => {
    const input = [3, 5, 0, 0, 0, 1, 1],
      expected = true

    expect(Tower.canEscape(input)).to.eql(expected)
  })

  it("should be ok with values that extend well beyond array bounds", () => {
    const input = [3, 1, 0, 2, 7, 0],
      expected = true

    expect(Tower.canEscape(input)).to.eql(expected)
  })
})
