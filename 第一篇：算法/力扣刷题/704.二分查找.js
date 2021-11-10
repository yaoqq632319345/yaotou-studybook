/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let i = 0, j = nums.length - 1
  while (i <= j) {
    let middle = Math.floor((j - i) / 2) + i
    if (nums[middle] === target) {
      return middle
    }

    if (nums[middle] < target) {
      i = middle + 1
    } else {
      j = middle - 1
    }
  }
  return -1
};
// @lc code=end
