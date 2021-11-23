/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0], sumMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (sumMax < 0) { // 如果之前的和是负数，直接舍弃
      sumMax = nums[i]
    } else {
      sumMax += nums[i]
    }
    max = Math.max(sumMax, max)
  }
  return max
};
// @lc code=end

