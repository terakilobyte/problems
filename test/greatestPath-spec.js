import test from "ava"
import GreatestPath from "../src/greatestPath"
import bigPath from "../support/bigPath"

test("Greatest Path: should find the greatest path in a simple matrix", t => {
  const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    expected = { sum: 29, path: [1, 4, 7, 8, 9] }
  t.deepEqual(GreatestPath.greatestPath(input), expected)
})

test("Greatest Path: should find the great path through a more complex matrix", t => {
  const input = [[9, 2, 13], [1, 9, 7], [7, 12, 6]],
    expected = { path: [9, 2, 9, 12, 6], sum: 38 }
  t.deepEqual(GreatestPath.greatestPath(input), expected)
})

test("Greatest Path: should be able to find the path through a gigantic array before the universe dies of heat death", t => {
  const input = bigPath.input,
    expected = bigPath.expected
  t.deepEqual(GreatestPath.greatestPath(input), expected)
})
