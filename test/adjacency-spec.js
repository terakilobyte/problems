import test from "ava"
import Adjacency from "../src/adjacency"
import util from "util"

test("adjacency: it should return a simple adjacency map", t => {
  const source = [
      {
        id: 0,
        parent: 3
      },
      {
        id: 1,
        parent: 2
      },
      {
        id: 2,
        parent: 0
      },
      {
        id: 3,
        parent: null
      },
      {
        id: 4,
        parent: 3
      }
    ],
    expected = {
      id: 3,
      parent: null,
      children: [
        {
          id: 0,
          parent: 3,
          children: [
            {
              id: 2,
              parent: 0,
              children: [
                {
                  id: 1,
                  parent: 2,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 4,
          parent: 3,
          children: []
        }
      ]
    }

  const input = util.inspect(Adjacency.fillGraph(source).head, false, null)
  t.deepEqual(input, util.inspect(expected, false, null))
})
