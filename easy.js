/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1. Two Sum
// iterate thru array, setting i as a "target", then test the sum with the rest of the array elements on this target
var twoSum = function (nums, target) {
  let currentNum;
  let indices;
  for (let i = 0; i <= nums.length; i++) {
    if (indices) break;
    currentNum = nums[i];
    nums.forEach((n, index) => {
      if (i === index) return;
      if (currentNum + n === target) {
        indices = [i, index]; // god please don't forget that indexOf returns the index of the first repeating element
      }
    });
  }
  //if (indices) indices.sort((a,b) => a - b);
  return indices;
};
