/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let curr = 0;
  let max = 0;

  let cnt = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(nums[i] + i, max)
    if (i === curr) {
      curr = max;
      cnt++
    }
  }
  return cnt
};
// @lc code=end

