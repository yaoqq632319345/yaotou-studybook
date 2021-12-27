/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let stack = []
  let res = new Array(nums.length).fill(-1)
  for (let i = 0; i < nums.length; i++) {
    while(stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      res[stack.pop()] = nums[i]
    }
    stack.push(i)
  }
  for (let i = 0; i < nums.length; i++) {
    while(stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      res[stack.pop()] = nums[i]
    }
    stack.push(i)
  }
  return res
};
// @lc code=end

