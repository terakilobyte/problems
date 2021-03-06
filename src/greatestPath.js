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
  static greatestPath(matrix) {}
}

module.exports = GreatestPath
