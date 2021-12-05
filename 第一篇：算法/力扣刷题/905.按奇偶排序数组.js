/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  if (nums.length === 0) return nums
  let l = 0, r = nums.length - 1

  while (l < r) {
    while (l < nums.length && nums[l] % 2 == 0) l++
    while (r >= 0 && nums[r] % 2) r--
    if (l < r) {
      let temp = nums[l]
      nums[l] = nums[r]
      nums[r] = temp
    }
  }
  return nums
};
// @lc code=end

