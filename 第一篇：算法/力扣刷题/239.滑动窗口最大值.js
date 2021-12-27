/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
  let dq = []
  let res = []
  for (let i = 0; i < nums.length; i++) {
      while (dq.length && nums[dq[dq.length - 1]] < nums[i]) {
          dq.pop()
      }
      dq.push(i)
      if (i - dq[0] === k) dq.shift()
      if (i + 1 >= k) res.push(nums[dq[0]])
  }
  return res
};
// @lc code=end

