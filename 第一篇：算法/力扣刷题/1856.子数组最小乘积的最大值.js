/*
 * @lc app=leetcode.cn id=1856 lang=javascript
 *
 * [1856] 子数组最小乘积的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function(nums) {
  let s = []
  let n = nums.length
  let rs = new Array(n).fill(n), ls = new Array(n).fill(-1)
  let ans = BigInt(0)
  for (let i = 0; i < n; i++) {
    while (s.length && nums[s[s.length - 1]] > nums[i]) {
      rs[s.pop()] = i
    }
    if (s.length) ls[i] = s[s.length - 1]
    s.push(i)
  }
  let sumArr = [0]
  for (let i = 0; i < n; i++) sumArr[i + 1] = sumArr[i] + nums[i]
  for (let i = 0; i < n; i++) {
    let rm = rs[i] - 1 + 1
      , lm = ls[i] + 1
      , sum = BigInt(sumArr[rm] - sumArr[lm])
    // console.log(lm, rm)
    // for (let j = lm; j <= rm; j++) {
    //   sum += BigInt(nums[j])
    // }
    let total = BigInt(nums[i]) * sum
    if (total > ans) ans = total
    // ans = Math.max(nums[i] * sum, ans)
  }
  return ans % BigInt(1000000007)
};
// @lc code=end

