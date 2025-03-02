const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
      let current = arr[i];

      // Handle control sequences
      if (current === '--double-next' && i < arr.length - 1) {
          result.push(arr[i + 1]);
      } else if (current === '--discard-prev' && i > 0) {
          result.pop(); // Remove last added element
      } else if (current !== '--double-next' && current !== '--discard-prev' &&
                 current !== '--double-prev' && current !== '--discard-next') {
          result.push(current);
      }
  }

  return result;
}


module.exports = {
  transform
};
