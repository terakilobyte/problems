/**
 * Great path.
 * The goal of this challenge is to create a function that accepts an m*n matrix
 * and returns the greatest sum and path from top left to bottom right.
 *
 * Constraints: You can only move right or down. You must start at the top left.
 * You must end at the bottom right.
 *
 *
 * Example:
 * [
 *   [1, 2, 3],
 *   [4, 5, 6]
 *   [7, 8, 9]
 * ]
 * The greatest path is [1, 4, 7, 8, 9], summing 29
 *
 * [
 *   [9, 2, 13],
 *   [1, 9, 7],
 *   [7, 12, 6]
 * ]
 * The greatest path is [9, 2, 9, 12, 6], summing 38
 */

/**
 * @typedef {Object} Result
 * @property {[number]} path The path of the greatest sum
 * @property {number} sum The sum of the greatest path
 */

class GreatestPath {
  /**
   * Returns an object with the path of the greatest sum and the sum
   * of the greatest path through the provided matrix, moving only right and
   * down.
   *
   * @param {[[number]]} matrix
   * @returns {Result}
   * An object with the sum and path
   */
  static greatestPath(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let dynamic = [];
    for (let i = 0; i < m; i++) {
      dynamic[i] = new Array(m);
    }

    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (i === m - 1) {
          // don't look down if we're in the bottom row
          if (j === n - 1) {
            // don't look right if we're in the far right row
            dynamic[i][j] = matrix[i][j];
          } else {
            dynamic[i][j] = matrix[i][j] + dynamic[i][j + 1];
          }
        } else if (j === n - 1) {
          // don't look right if we're in the far right row
          dynamic[i][j] = matrix[i][j] + dynamic[i + 1][j];
        } else {
          // we now look at the cell down and the cell to the right
          const down = dynamic[i + 1][j];
          const right = dynamic[i][j + 1];
          dynamic[i][j] = matrix[i][j] + Math.max(down, right);
        }
      }
    }
    let res = {};
    res.sum = dynamic[0][0];
    res.path = [];
    let posM = 0,
      posN = 0;
    while (posM < m && posN < n) {
      res.path.push(matrix[posM][posN]);
      let right = posN < n - 1 ? dynamic[posM][posN + 1] : 0;
      let down = posM < m - 1 ? dynamic[posM + 1][posN] : 0;
      if (right >= down) {
        posN++;
      } else {
        posM++;
      }
    }
    return res;
  }
}

module.exports = GreatestPath;
