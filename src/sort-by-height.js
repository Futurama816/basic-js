const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Extract all elements other than -1
  let heights = arr.filter(x => x !== -1);
  
  // Sort the remaining elements
  heights.sort((a, b) => a - b);
  
  // Replace the original array with sorted heights, skipping -1s
  let result = [];
  let heightIndex = 0;
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) {
          result.push(-1);
      } else {
          result.push(heights[heightIndex]);
          heightIndex++;
      }
  }
  
  return result;
}

module.exports = {
  sortByHeight
};
