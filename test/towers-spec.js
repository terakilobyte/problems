import test from "ava"
import Tower from "../src/towers"

test("towers: should return false for an empty array", t => {
  const input = []

  t.false(Tower.canEscape(input))
})

test("towers: should return false with array of length 1 with a value of 0", t => {
  const input = [0]

  t.false(Tower.canEscape(input))
})

test("towers: should return true with an array of length 1 and a value of 1", t => {
  const input = [1]

  t.true(Tower.canEscape(input))
})

test("towers: should return true for escapable array stemming from greedy first index", t => {
  const input = [3, 0, 0, 2, 0, 1]

  t.true(Tower.canEscape(input))
})

test("towers: should return true for escapable array with non-greedy approach", t => {
  const input = [3, 5, 0, 0, 0, 1, 1]

  t.true(Tower.canEscape(input))
})

test("towers: should be ok with values that extend well beyond array bounds", t => {
  const input = [3, 1, 0, 2, 7, 0]

  t.true(Tower.canEscape(input))
})
