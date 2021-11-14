/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1, mid, res = nums.length

  while (left <= right) {
    mid = (left + right) >> 1
    if (nums[mid] === target) {
      return mid
    }
    if (target < nums[mid]) {
      res = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return res
};
// @lc code=end

