/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let len = nums.length - 1;
  let max = 0
  for (let i = 0; i<= len; i++) {
    if (max < i) return false
    max = Math.max(i+nums[i], max)
    if (max >= len) return true
  }
};
// @lc code=end

