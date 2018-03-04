/**
 * Towers
 *
 * The goal of this exercise is to determine whether you can escape from a
 * passed array.
 *
 * Each index in the array is considered a "tower", with each value corresponding
 * to how far you may "jump" forward form that tower.
 *
 * Example: Given the array [3, 0, 1, 2, 0, 1], your canEscape function should
 * return true. The value at index 0 is a 3, meaning you may jump from 1 to 3 indexes
 * forward. Jumping 1 index would land you on 0, jumping 2 would land you on the value
 * 1, and jumping 3 would land you on the value 2. So, you could do from index 0 to index
 * 2 to index 3 to index 5, and then out of the array!
 *
 * You could also go from index 0 to index 3 to index 5 and then out.
 *
 * Another example: [3, 5, 0, 0, 1, 0, 1] is also escapable.
 * You can jump from index 0 to index 1, then from index 1 all the way to index 6.
 * Since index 6 holds a value of 1, the array can be escaped.
 */
class Tower {
  /**
   * canEscape
   *
   * Function to determine whether the passed array is can be escaped according
   * to the rules of Tower.
   *
   * @param {[Number]} arr An array of Numbers
   * @returns {Boolean} True if the passed array is escapable, otherwise false
   */
  static canEscape(arr) {}
}

module.exports = Tower
