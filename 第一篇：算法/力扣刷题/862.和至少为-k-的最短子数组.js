/*
 * @lc app=leetcode.cn id=862 lang=javascript
 *
 * [862] 和至少为 K 的最短子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  let sum = [0]
  for (let i = 0; i < nums.length; i++) {
      sum[i + 1] = sum[i] + nums[i]
      // while (dq.length && sum[dq[dq.length - 1]] > sum[i + 1]) {
      //     dq.pop()
      // }
      // dq.push(i + 1)
  }
  // console.log(dq, sum)
  let dq = [0]
  let res = -1, pos = -1
  for (let i = 1; i < sum.length; i++) {
      while (dq.length && sum[i] - sum[dq[0]] >= k) {
          pos = dq[0]
          dq.shift()
      }
      if (pos != -1) res = res === -1 ? i - pos : Math.min(i - pos, res)
      while (dq.length && sum[dq[dq.length - 1]] > sum[i]) {
          dq.pop()
      }
      dq.push(i)
  }
  // console.log(res)
  return res
};
// @lc code=end

