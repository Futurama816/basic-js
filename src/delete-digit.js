const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numStr = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < numStr.length; i++) {
      // Create a new number by removing the i-th digit
      let newNumber = parseInt(numStr.slice(0, i) + numStr.slice(i + 1), 10);
      
      // Update maxNumber if the newNumber is greater
      maxNumber = Math.max(maxNumber, newNumber);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
