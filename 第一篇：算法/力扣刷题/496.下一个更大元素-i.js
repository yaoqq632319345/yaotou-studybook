/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let stack = []
  let res = new Map()
  for (let i = 0; i < nums2.length; i++) {
    while(stack.length && nums2[stack[stack.length - 1]] < nums2[i]) {
      res.set(nums2[stack.pop()], nums2[i])
    }
    stack.push(i)
  }
  let ans = []
  for (let i = 0; i < nums1.length; i++) {
    ans.push(res.get(nums1[i]) || -1)
  }
  return ans
};
// @lc code=end

